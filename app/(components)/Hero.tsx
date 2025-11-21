import DailyVerse from "./dailyverse";

export default function Hero() {
  return (
    <section>
      <div className="min-h-[38vh] md:min-h-[56vh] mt-4 flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <div className="title">
              <DailyVerse />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
