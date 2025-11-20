import { CommunitySection } from "./(components)/CommunitySection";
import { GreetingSection } from "./(components)/GreetingSection";
import Hero from "./(components)/Hero";
import TestimoneySection from "./(components)/TestimoneySection";
import { SITE } from "./data/content"; // Ensure this import path is correct
import type { Metadata } from "next";

// --- 1. THE PERFECT METADATA ---
export async function generateMetadata(): Promise<Metadata> {
  // SEO Logic: Put the most specific keywords FIRST in the title.
  // "New Life Tamil AG" is your brand, but "Tamil Pentecostal Church Kuwait" is what people search for.
  const title = `New Life Tamil AG | Pentecostal Church in Kuwait`;

  const description = `Welcome to ${SITE.name}, a Spirit-filled Tamil Pentecostal church in Kuwait. Join us this Friday at NECK Compound for heartfelt worship, powerful testimonies, and uplifting fellowship.`;

  const pageUrl = SITE.domain;

  return {
    title,
    description,
    // High-volume keywords for the homepage
    keywords: [
      "Church in Kuwait",
      "Tamil Church Kuwait",
      "Pentecostal Church Kuwait",
      "AG Church Kuwait",
      "Christian Worship Kuwait",
      "Friday Church Service Kuwait", // Very specific to the region
      "Tamil Christian Sermons",
    ],
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: SITE.name,
      locale: "en_US",
      type: "website",
      // Tip: Add a generic 'banner.jpg' to your public folder for a nice preview image
      // images: [{ url: `${SITE.domain}/banner.jpg`, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: pageUrl,
    },
    // Geo-tagging helps Google Maps ranking
    other: {
      "geo.region": "KW-KU",
      "geo.placename": "Kuwait City",
      "geo.position": "29.3759;47.9774",
      ICBM: "29.3759, 47.9774",
    },
  };
}

export default function Home() {
  // --- 2. STRUCTURED DATA (JSON-LD) ---
  // This connects your website to your physical location and YouTube channel
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: SITE.name,
    url: SITE.domain,
    logo: `${SITE.domain}/logo.png`, // Update with your actual logo path
    image: `${SITE.domain}/hero-image.jpg`, // Update with a real image path
    description: "A Spirit-filled Tamil Pentecostal Church in Kuwait.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "NECK Compound",
      addressLocality: "Kuwait City",
      addressCountry: "KW",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "29.3759",
      longitude: "47.9774",
    },
    // This links your social media profiles to your Google Result
    sameAs: [
      "https://www.youtube.com/@NewLifeTamilAG", // Update with your actual YouTube handle
      "https://www.facebook.com/YourPage", // Add your FB if you have one
      "https://www.instagram.com/YourPage",
    ],
    // Highlighting your main service event (Friday Worship)
    event: {
      "@type": "Event",
      name: "Friday Worship Service",
      description: "Weekly Spirit-filled worship and word.",
      eventSchedule: {
        "@type": "Schedule",
        byDay: "https://schema.org/Friday",
        startTime: "07:30",
        endTime: "09:30",
        scheduleTimezone: "Asia/Kuwait",
      },
    },
  };

  return (
    <>
      {/* Inject Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Main Content */}
      <main>
        {/* SEO TIP: Ensure your <Hero /> component has an <H1> tag 
           that includes "Tamil AG Church" or "Worship in Kuwait".
        */}
        <Hero />

        <GreetingSection />

        {/* The Testimony section is great for SEO because "Testimony" 
           is a keyword people search for in religious contexts.
        */}
        <TestimoneySection />

        <CommunitySection />
      </main>
    </>
  );
}
