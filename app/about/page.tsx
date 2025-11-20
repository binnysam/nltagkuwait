import { SITE } from "../data/content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  // SEO STRATEGY: Include 'Tamil', 'Pentecostal', and 'Kuwait' in the title
  // This ranks you for "About Tamil Church Kuwait" rather than just "About"
  const title = `About Us | Tamil Pentecostal Church in Kuwait — ${SITE.name}`;

  // SEO STRATEGY: A description that acts as a mini-pitch
  const description = `Established in 2005, ${SITE.name} is a vibrant Tamil Pentecostal AG church in Kuwait. Our mission is to share the love of Jesus Christ and build a home for every soul.`;

  const pageUrl = `${SITE.domain}/about`;

  return {
    title: title,
    description: description,

    // Targeted keywords for this specific page
    keywords: [
      "About New Life Tamil AG",
      "Church History Kuwait",
      "Tamil Christian Community",
      "Pentecostal Mission Kuwait",
      "AG Church since 2005",
      "Spirit-filled church Kuwait",
    ],

    openGraph: {
      title: title,
      description: description,
      url: pageUrl,
      siteName: SITE.name,
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
    },

    alternates: {
      canonical: pageUrl,
    },
  };
}

export default function AboutPage() {
  // JSON-LD: 'Organization' schema helps Google understand your entity's history
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: SITE.name,
    foundingDate: "2005",
    description:
      "A growing Tamil Pentecostal community in Kuwait dedicated to sharing the love and light of Christ.",
    url: `${SITE.domain}/about`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kuwait City",
      addressCountry: "KW",
    },
    areaServed: "Kuwait",
  };
  return (
    <>
      {/* Inject Schema for this specific page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <section className="py-10 md:py-24">
          <div className="text-left">
            <h1 className="large-title">About {SITE.identity}</h1>
            <p className="mt-4 callout">
              In 2005, God placed a vision in our heart, to build a church that
              reaches those who hesitate to approach Him or have never truly
              known His love. Thus, {SITE.name} was born not just as a place of
              worship, but as a home where every soul can experience the
              transforming grace of Jesus Christ.
            </p>
            <p className="mt-4 callout">
              Our mission has always been simple, to honor God by helping people
              encounter the Savior who changed our lives. Through every prayer,
              every song, and every act of service, our goal is to draw hearts
              closer to Jesus, so their lives may shine with His glory.
            </p>
            <p className="mt-4 callout">
              A growing community that lives to share the love and light of
              Christ.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
