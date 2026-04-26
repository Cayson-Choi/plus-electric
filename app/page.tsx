import { Hero } from "@/components/home/hero";
import { QuickLinks } from "@/components/home/quick-links";
import { CoursesSection } from "@/components/home/courses-section";
import { Features } from "@/components/home/features";
import { Process } from "@/components/home/process";
import { Certifications } from "@/components/home/certifications";
import { Faq } from "@/components/home/faq";
import { LocationPreview } from "@/components/home/location-preview";
import { ContactCta } from "@/components/home/contact-cta";
import { MarqueeStrip } from "@/components/home/marquee-strip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <CoursesSection />
      <Features />
      <Process />
      <Certifications />
      <Faq />
      <LocationPreview />
      <ContactCta />
      <MarqueeStrip />
    </>
  );
}
