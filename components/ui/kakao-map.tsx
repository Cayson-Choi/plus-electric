"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, MapPin } from "lucide-react";

interface KakaoMapProps {
  lat: number;
  lng: number;
  name: string;
  address: string;
  region?: string;
  level?: number;
  className?: string;
  /** 클릭 시 외부 카카오맵 페이지로 보낼 검색어 */
  externalQuery?: string;
  /** 클릭 시 직접 이동할 외부 URL (kko.to 단축 링크 등) */
  externalUrl?: string;
}

declare global {
  interface Window {
    kakao: any;
  }
}

const SCRIPT_ID = "kakao-maps-sdk-script";

export function KakaoMap({
  lat,
  lng,
  name,
  address,
  region,
  level = 3,
  className,
  externalQuery,
  externalUrl,
}: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "fallback">(
    "loading",
  );
  const appKey = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY;

  useEffect(() => {
    if (!appKey) {
      setStatus("fallback");
      return;
    }
    if (!mapRef.current) return;

    let cancelled = false;

    function initMap() {
      if (cancelled || !mapRef.current || !window.kakao?.maps) return;
      const { kakao } = window;
      const center = new kakao.maps.LatLng(lat, lng);
      const map = new kakao.maps.Map(mapRef.current, {
        center,
        level,
      });
      // disable native zoom on scroll for better UX
      map.setZoomable(true);

      const marker = new kakao.maps.Marker({ position: center });
      marker.setMap(map);

      const iwContent = `
        <div style="padding:10px 14px;font-size:13px;font-weight:700;color:#0f172a;line-height:1.5;font-family:'Pretendard Variable',Pretendard,sans-serif;min-width:160px;">
          ${name}
          <div style="font-size:11px;font-weight:500;color:#64748b;margin-top:2px;">${address}</div>
        </div>`;
      const infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: false,
      });
      infowindow.open(map, marker);

      setStatus("ready");
    }

    if (window.kakao?.maps) {
      window.kakao.maps.load(initMap);
      return;
    }

    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      const onLoad = () => window.kakao?.maps.load(initMap);
      if (window.kakao?.maps) {
        onLoad();
      } else {
        existing.addEventListener("load", onLoad, { once: true });
      }
      return () => {
        cancelled = true;
        existing.removeEventListener("load", onLoad);
      };
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false`;
    script.async = true;
    script.onload = () => {
      window.kakao.maps.load(initMap);
    };
    script.onerror = () => {
      if (!cancelled) setStatus("fallback");
    };
    document.head.appendChild(script);

    return () => {
      cancelled = true;
    };
  }, [lat, lng, name, address, level, appKey]);

  return (
    <div className={className ?? "absolute inset-0 h-full w-full"}>
      {status !== "fallback" && (
        <div ref={mapRef} className="absolute inset-0 h-full w-full" />
      )}
      {status === "fallback" && (
        <KakaoMapFallback
          name={name}
          address={address}
          region={region}
          externalUrl={
            externalUrl ??
            `https://map.kakao.com/?q=${encodeURIComponent(externalQuery ?? `${name} ${address}`)}`
          }
        />
      )}
    </div>
  );
}

function KakaoMapFallback({
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
      className="group relative block h-full w-full"
      aria-label="카카오맵에서 학원 위치 보기"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-grid opacity-20"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 -right-24 h-80 w-80 rounded-full bg-accent-400/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-brand-400/30 blur-3xl"
        aria-hidden="true"
      />
      <svg
        className="absolute inset-0 h-full w-full opacity-25"
        viewBox="0 0 800 500"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,180 Q200,160 400,200 T800,180"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M0,320 Q250,360 500,320 T800,340"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M180,0 Q200,150 240,250 T280,500"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M520,0 Q540,180 580,280 T620,500"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
      </svg>
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <div className="relative">
          <span className="absolute inset-0 -z-0 animate-ping rounded-full bg-accent-400/40" />
          <span className="relative grid h-20 w-20 place-items-center rounded-full bg-accent-400 text-brand-900 shadow-lift ring-4 ring-white/20">
            <MapPin className="h-9 w-9" strokeWidth={2.4} />
          </span>
        </div>
        {region && (
          <p className="mt-7 text-[11px] font-bold tracking-[0.2em] text-accent-300 uppercase">
            {region}
          </p>
        )}
        <h3 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
          {name}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-white/85">
          {address}
        </p>
        <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-extrabold tracking-tight text-brand-800 shadow-lift transition-all duration-300 group-hover:bg-accent-300 group-hover:shadow-card">
          카카오맵에서 보기
          <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
        <p className="mt-4 max-w-md text-[11px] leading-relaxed text-white/55">
          지도 직접 표시를 위해서는{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 text-white/80">
            NEXT_PUBLIC_KAKAO_MAP_KEY
          </code>{" "}
          환경변수 설정 필요
        </p>
      </div>
    </a>
  );
}
