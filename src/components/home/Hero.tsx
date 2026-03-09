import Image from "next/image";
import heroImage from "../../assets/banner_image.svg";

export default function Hero() {
  return (
    <section className="w-full bg-white px-6 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="font-inter font-bold text-[#111827] text-[clamp(32px,4.5vw,51px)] leading-[clamp(42px,5.5vw,60px)]">
            Find Trusted Home Service <br /> Professionals Near <br />
            You
          </h1>
          <p className="font-inter font-normal text-[17px] text-[#475569] leading-7 max-w-130">
            Book verified plumbers, electricians, movers, and more in minutes.
            Get AI-powered estimates and hire with confidence.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <button className="font-inter px-6 py-3 rounded-lg bg-[#F59E0B] text-white font-medium text-sm hover:opacity-90 transition-opacity shadow-sm">
              Find a Professional
            </button>
            <button className="font-inter px-6 py-3 rounded-lg border border-[#F59E0B] text-[#334155] text-sm font-medium hover:bg-gray-50 transition-colors">
              Become a Provider
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center w-full">
          <Image
            src={heroImage}
            alt="Hero visual"
            className="w-full max-w-lg object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
