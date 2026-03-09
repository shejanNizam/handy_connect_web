import { LuLock, LuShieldCheck, LuSparkles, LuStar } from "react-icons/lu";

const features = [
  {
    icon: LuShieldCheck,
    title: "Verified Professionals",
    description: "Background checked and vetted",
  },
  {
    icon: LuSparkles,
    title: "AI Diagnosis",
    description: "Smart problem identification",
  },
  {
    icon: LuLock,
    title: "Secure Platform",
    description: "Safe payments and data protection",
  },
  {
    icon: LuStar,
    title: "Customer Reviews",
    description: "Real ratings from real users",
  },
];

export default function Features() {
  return (
    <section className="bg-[#0F172A] w-full px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {features.map((feature, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-500/15 border border-teal-500/35">
              <feature.icon size={26} className="text-[#2DD4BF]" />
            </div>
            <div>
              <p className="text-white font-semibold text-[15.6px]">
                {feature.title}
              </p>
              <p className="text-[#94A3B8] text-sm mt-1">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
