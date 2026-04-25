import { Hero } from "@/components/home/hero";
import { QuickLinks } from "@/components/home/quick-links";
import { CoursesSection } from "@/components/home/courses-section";
import { Features } from "@/components/home/features";
import { Certifications } from "@/components/home/certifications";
import { Faq } from "@/components/home/faq";
import { LocationPreview } from "@/components/home/location-preview";
import { ContactCta } from "@/components/home/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <CoursesSection />
      <Features />
      <Certifications />
      <Faq />
      <LocationPreview />
      <ContactCta />
      <div aria-hidden="true" className="h-16 md:h-0" />
    </>
  );
}
