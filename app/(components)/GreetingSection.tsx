import { Button } from "@/components/ui/button";

export function GreetingSection() {
  return (
    // 1. Moved padding (py-16 md:py-24) here to clean up the HTML structure
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 2. Removed the extra wrapper div that was here */}

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="title">
            Join Us This Friday for a Spirit-Filled Worship Experience
          </h2>
          <p className="mt-4 callout">
            Experience heartfelt worship, uplifting word, and a time of
            fellowship that renews your soul.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            <Button variant="default" className="rounded-full" asChild>
              <a href="/service-timing">Join This Friday</a>
            </Button>
            <Button variant="outline" className="rounded-full" asChild>
              <a
                href="https://maps.app.goo.gl/b63BdAXV2MyTGgsf8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
