import CTA from "@/components/home/CTA";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import PopularServices from "@/components/home/PopularServices";
import Reviews from "@/components/home/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularServices />
      <HowItWorks />
      <Features />
      <Reviews />
      <CTA />
    </>
  );
}
