import { FaStar } from "react-icons/fa";

const reviews = [
  {
    stars: 5,
    text: "Found a plumber within 10 minutes. He arrived the next day and fixed the leak perfectly. The AI estimate was spot on!",
    name: "Sarah Jenkins",
    service: "Plumbing Repair",
    initial: "S",
    avatarBg: "#DBEAFE",
    avatarColor: "#3B82F6",
  },
  {
    stars: 5,
    text: "Needed some rewiring done. The platform made it so easy to compare quotes and find a licensed electrician I could trust.",
    name: "Michael Chen",
    service: "Electrical Work",
    initial: "M",
    avatarBg: "#FEF3C7",
    avatarColor: "#D97706",
  },
  {
    stars: 5,
    text: "Moving is usually stressful, but Handy Connect connected me with a fantastic crew. They were careful, fast, and professional.",
    name: "Emma Davis",
    service: "Moving Services",
    initial: "E",
    avatarBg: "#FCE7F3",
    avatarColor: "#EC4899",
  },
];

export default function Reviews() {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
            Trusted by Homeowners
          </h2>
          <p className="text-[#6B7280] mt-3">
            {"Don't just take our word for it. See what our users have to say."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 flex flex-col justify-between border border-gray-100"
            >
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <FaStar
                      key={idx}
                      className={
                        idx < review.stars ? "text-amber-500" : "text-gray-300"
                      }
                      size={18}
                    />
                  ))}
                </div>
                <p className="text-[15px] leading-relaxed text-[#374151]">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 mt-6 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-semibold"
                  style={{
                    backgroundColor: review.avatarBg,
                    color: review.avatarColor,
                  }}
                >
                  {review.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111827]">
                    {review.name}
                  </p>
                  <p className="text-xs text-[#9CA3AF]">{review.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
