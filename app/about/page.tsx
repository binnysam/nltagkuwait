// /app/about/page.tsx

import { SITE } from "../data/content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = `About — ${SITE.name}`;
  const description = `Learn about the mission, vision, and story of ${SITE.name} since 2005.`;
  const pageUrl = `${SITE.domain}/about`;

  return {
    title: title,
    description: description,

    // This is used by Facebook & WhatsApp
    openGraph: {
      title: title,
      description: description,
      url: pageUrl,
    },

    alternates: {
      canonical: pageUrl,
    },
  };
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <section className="py-10 md:py-24">
        <div className="text-left">
          <h1 className="large-title">About {SITE.identity}</h1>
          <p className="mt-4 callout">
            In 2005, God placed a vision in our heart, to build a church that
            reaches those who hesitate to approach Him or have never truly known
            His love. Thus, {SITE.name} was born not just as a place of worship,
            but as a home where every soul can experience the transforming grace
            of Jesus Christ.
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
  );
}
