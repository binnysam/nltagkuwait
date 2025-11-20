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

export default function Testimony() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <section className="py-10 md:py-24">
        <div className="text-left">
          <h1 className="large-title">Testimony by Sis. Chellachy </h1>
          <p className="mt-4 callout">
            Praise be to God! Three times, while lying on the edge of death, the
            Lord compelled me to rise and share my testimony with the world. I
            prayed and asked God, “How can I share it, Lord?”
          </p>
          <p className="mt-4 callout">
            Where there is unity and love, there will be no lack, for God
            Himself moves in that place. His wonders unfold when His people
            stand together in faith. With the prayerful support of my children
            and our church family, I began sharing my living testimony a story
            of God’s power, healing, and faithfulness.
          </p>
          <p className="mt-4 callout">
            My heart’s desire is that everyone who listens to these testimonies
            will be strengthened to live boldly for the name of Christ, never
            ashamed of the Gospel. The purpose of this series is not only to
            tell my story but to lead many to salvation, for the coming of our
            Lord is near.
          </p>
          <p className="mt-4 callout">
            As Scripture says: “Do not be ashamed of the testimony about our
            Lord.” 2 Timothy 1:8
          </p>
          <p className="mt-4 callout">
            ✨ Watch the Founder’s Testimony Series, be inspired to walk in
            unity, love, and unwavering faith.
          </p>
        </div>
      </section>
    </div>
  );
}
