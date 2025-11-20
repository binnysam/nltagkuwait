import { SERVICE_TIMES, SITE } from "../data/content";
import type { Metadata } from "next";

type ServiceDetail = {
  title: string;
  location?: string;
  schedules: {
    day: string;
    time: string;
  }[];
};

export async function generateMetadata(): Promise<Metadata> {
  const title = `Service Timings — ${SITE.name}`;
  const description = `Find weekly service timings for Worship, Sunday School, and meetings at ${SITE.name} in Kuwait.`;
  const pageUrl = `${SITE.domain}/service-timing`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: pageUrl,
    },
    alternates: {
      canonical: pageUrl,
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

  return (
    <>
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
