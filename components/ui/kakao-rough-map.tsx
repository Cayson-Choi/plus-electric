"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, MapPin } from "lucide-react";

declare global {
  interface Window {
    daum: any;
  }
}

const LOADER_SRC = "https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js";
const LANDER_DATA_ATTR = "data-roughmap-lander";

// Manually load loader → fetch cdn version from window.daum.roughmap → load Lander script.
// (The original loader uses document.write which fails after page load.)
async function ensureRoughMapLoaded(): Promise<boolean> {
  if (typeof window === "undefined") return false;
  if (window.daum?.roughmap?.Lander) return true;

  // Step 1: load roughmapLoader.js to populate daum.roughmap.cdn / phase
  await new Promise<void>((resolve, reject) => {
    if (window.daum?.roughmap?.cdn) {
      resolve();
      return;
    }
    const existing = document.querySelector(
      'script[data-roughmap-loader="true"]',
    ) as HTMLScriptElement | null;
    if (existing) {
      if (window.daum?.roughmap?.cdn) {
        resolve();
      } else {
        existing.addEventListener("load", () => resolve(), { once: true });
        existing.addEventListener("error", () => reject(new Error("loader")), { once: true });
      }
      return;
    }
    const script = document.createElement("script");
    script.src = LOADER_SRC;
    script.charset = "UTF-8";
    script.dataset.roughmapLoader = "true";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("loader"));
    document.head.appendChild(script);
  });

  if (!window.daum?.roughmap?.cdn) return false;

  // Step 2: load the actual Lander script using cdn version from loader
  const { phase, cdn } = window.daum.roughmap;
  const landerSrc = `https://t1.kakaocdn.net/kakaomapweb/roughmap/place/${phase}/${cdn}/roughmapLander.js`;

  await new Promise<void>((resolve, reject) => {
    if (window.daum?.roughmap?.Lander) {
      resolve();
      return;
    }
    const existing = document.querySelector(
      `script[${LANDER_DATA_ATTR}]`,
    ) as HTMLScriptElement | null;
    if (existing) {
      if (window.daum?.roughmap?.Lander) {
        resolve();
      } else {
        existing.addEventListener("load", () => resolve(), { once: true });
        existing.addEventListener("error", () => reject(new Error("lander")), { once: true });
      }
      return;
    }
    const script = document.createElement("script");
    script.src = landerSrc;
    script.charset = "UTF-8";
    script.setAttribute(LANDER_DATA_ATTR, "true");
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("lander"));
    document.head.appendChild(script);
  });

  return !!window.daum?.roughmap?.Lander;
}

interface KakaoRoughMapProps {
  timestamp: string;
  mapKey: string;
  name: string;
  address: string;
  region?: string;
  externalUrl?: string;
  className?: string;
}

export function KakaoRoughMap({
  timestamp,
  mapKey,
  name,
  address,
  region,
  externalUrl,
  className,
}: KakaoRoughMapProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const renderedRef = useRef(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (renderedRef.current) return;
    const container = wrapperRef.current;
    if (!container) return;

    let cancelled = false;

    (async () => {
      const ok = await ensureRoughMapLoaded().catch(() => false);
      if (cancelled) return;
      if (!ok) {
        setError(true);
        return;
      }
      const rect = container.getBoundingClientRect();
      const mapWidth = String(Math.max(320, Math.round(rect.width)) || 720);
      const mapHeight = String(Math.max(240, Math.round(rect.height)) || 420);
      try {
        new window.daum.roughmap.Lander({
          timestamp,
          key: mapKey,
          mapWidth,
          mapHeight,
        }).render();
        renderedRef.current = true;
      } catch (e) {
        console.warn("[KakaoRoughMap] render failed", e);
        setError(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [timestamp, mapKey]);

  return (
    <div
      ref={wrapperRef}
      className={className ?? "absolute inset-0 h-full w-full"}
    >
      <div
        id={`daumRoughmapContainer${timestamp}`}
        className="root_daum_roughmap root_daum_roughmap_landing"
      />
      {error && (
        <KakaoMapErrorFallback
          name={name}
          address={address}
          region={region}
          externalUrl={
            externalUrl ??
            `https://map.kakao.com/?q=${encodeURIComponent(`${name} ${address}`)}`
          }
        />
      )}
    </div>
  );
}

function KakaoMapErrorFallback({
  name,
  address,
  region,
  externalUrl,
}: {
  name: string;
  address: string;
  region?: string;
  externalUrl: string;
}) {
  return (
    <a
      href={externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute inset-0 grid place-items-center bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 text-white"
    >
      <div className="text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent-400 text-brand-900 shadow-lift">
          <MapPin className="h-8 w-8" />
        </span>
        {region && (
          <p className="mt-5 text-[11px] font-bold tracking-[0.2em] text-accent-300 uppercase">
            {region}
          </p>
        )}
        <h3 className="mt-1 text-xl font-extrabold">{name}</h3>
        <p className="mt-1 text-sm text-white/80">{address}</p>
        <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-brand-800">
          카카오맵에서 보기 <ExternalLink className="h-3.5 w-3.5" />
        </span>
      </div>
    </a>
  );
}
