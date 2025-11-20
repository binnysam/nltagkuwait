import { CommunitySection } from "./(components)/CommunitySection";
import { GreetingSection } from "./(components)/GreetingSection";
import Hero from "./(components)/Hero";
import TestimoneySection from "./(components)/TestimoneySection";

export default function Home() {
  return (
    <div>
      <Hero />
      <GreetingSection />
      <TestimoneySection />
      <CommunitySection />
    </div>
  );
}
