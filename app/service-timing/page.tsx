import { SERVICE_TIMES, SITE } from "../data/content";
import type { Metadata } from "next";

// 1. Define Types
type ServiceDetail = {
  title: string;
  location?: string;
  schedules: {
    day: string;
    time: string;
  }[];
};

// 2. Optimized Metadata Generator
export async function generateMetadata(): Promise<Metadata> {
  // SEO STRATEGY: Place high-value keywords in the title logic
  // Target: "Tamil Church", "Pentecostal", "Kuwait", "AG"
  const title = `Service Timings | Tamil Pentecostal AG Church in Kuwait — ${SITE.name}`;

  // SEO STRATEGY: Natural language description containing keywords
  const description = `Join ${SITE.name} for worship in Kuwait. We are a vibrant Tamil Pentecostal AG church meeting at the NECK Compound. View schedules for Friday Worship, Sunday School, and prayer meetings.`;

  const pageUrl = `${SITE.domain}/service-timing`;

  return {
    title,
    description,
    // Explicit keywords help smaller search engines and reinforce context
    keywords: [
      "Tamil Church in Kuwait",
      "Pentecostal Church Kuwait",
      "AG Church Kuwait",
      "New Life Tamil AG",
      "Church in NECK Compound",
      "Tamil Christian Worship",
      "Sunday School Kuwait",
    ],
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: SITE.name,
      locale: "en_US",
      type: "website",
      // Ideally add an image property here if you have a generic banner
      // images: [{ url: `${SITE.domain}/og-image.jpg` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: pageUrl,
    },
    // Geo-tags for Local SEO (Kuwait City)
    other: {
      "geo.region": "KW-KU", // ISO code for Kuwait City
      "geo.placename": "Kuwait City",
      "geo.position": "29.3759;47.9774", // Approx Lat/Long for Kuwait City/NECK
      ICBM: "29.3759, 47.9774",
    },
  };
}
export default function ServiceTimingPage() {
  const services: ServiceDetail[] = [
    {
      title: SERVICE_TIMES[0]?.name || "Worship",
      location: "NECK Compound, Kuwait City",
      schedules: [
        { day: "Friday", time: "7:30 AM - 9:30 AM" },
        { day: "Saturday", time: "7:00 PM - 9:00 PM" },
      ],
    },
    {
      title: SERVICE_TIMES[1]?.name || "Cottage meeting",
      schedules: [{ day: "Tuesday", time: "7:00 PM - 8:30 PM" }],
    },
    {
      title: SERVICE_TIMES[2]?.name || "Ladies meeting",
      schedules: [{ day: "Thursday", time: "7:30 PM - 9:00 PM" }],
    },
    {
      title: SERVICE_TIMES[3]?.name || "Sunday school",
      location: "NECK Compound, Kuwait City",
      schedules: [{ day: "Friday", time: "9:30 AM - 10:30 AM" }],
    },
  ];

  // 3. JSON-LD Structured Data (Crucial for Google Maps/Events)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: SITE.name,
    description: "Tamil Pentecostal AG Church in Kuwait",
    url: `${SITE.domain}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "NECK Compound", // Update this if you have a more specific street
      addressLocality: "Kuwait City",
      addressCountry: "KW",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "29.3759",
      longitude: "47.9774",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "7:30 AM",
        closes: "9:30 AM",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "7:00 PM",
        closes: "9:00 PM",
      },
    ],
  };

  return (
    <>
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <section className="py-10 md:py-24">
          <div className="text-left">
            <h1 className="large-title">Service timing</h1>
            <p className="mt-4 callout">
              A snapshot of all our weekly gatherings, worship services,
              fellowship groups, and special ministries.
            </p>
          </div>
        </section>

        {/* Content Grid Section */}
        <section className="pb-24">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-start">
                <dt className="headline mb-4 border-b pb-2 w-full">
                  {service.title}
                </dt>
                <dd className="subheading space-y-4">
                  {service.location && (
                    <p className="subheading">{service.location}</p>
                  )}

                  {service.schedules.map((schedule, idx) => (
                    <div key={idx}>
                      <p className="subheading">{schedule.day}</p>
                      <p className="subheading">{schedule.time}</p>
                    </div>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </>
  );
}
