const steps = [
  {
    id: 1,
    title: "Describe Your Issue",
    desc: "Tell us what needs fixing or improving.",
    bg: "bg-[#2563EB]",
  },
  {
    id: 2,
    title: "AI Diagnoses",
    desc: "Our AI helps identify the issue and costs.",
    bg: "bg-[#9333EA]",
  },
  {
    id: 3,
    title: "Pros Receive Request",
    desc: "Verified experts review your job details.",
    bg: "bg-[#16A34A]",
  },
  {
    id: 4,
    title: "Get Quotes & Hire",
    desc: "Compare quotes and hire the best.",
    bg: "bg-[#16A34A]",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-[26px] font-bold text-[#0F172A]">How It Works</h2>
          <p className="text-[#475569] text-sm mt-1">
            Four simple steps to get your home projects done.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={i} className="p-6 text-center">
              <div
                className={`w-14 h-14 text-white flex justify-center items-center font-bold text-xl rounded-lg mb-4 mx-auto ${step.bg}`}
              >
                {step.id}
              </div>
              <h3 className="font-semibold text-[#0F172A] mb-2">
                {step.title}
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
