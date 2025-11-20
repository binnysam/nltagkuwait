import { Button } from "@/components/ui/button";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";

export function CommunitySection() {
  return (
    // 1. Moved padding (py-16 md:py-24) here to clean up the HTML structure
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 2. Removed the extra wrapper div that was here */}

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="title">Join our community</h2>
          <p className="mt-4 callout">
            Join our New Life Tamil AG Church channel
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-8 flex items-center justify-center flex-wrap">
            <Button
              variant="default"
              size="lg"
              className="rounded-full px-10"
              asChild
            >
              <a
                href="https://www.youtube.com/@newlifetamilagchurchkuwait1651"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandYoutubeFilled className="mr-2 w-5 h-5" />
                Explore Channel
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
