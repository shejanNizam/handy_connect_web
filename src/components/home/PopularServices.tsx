import {
  IoColorPaletteOutline,
  IoFlashOutline,
  IoWaterOutline,
} from "react-icons/io5";
import { MdOutlineLocalShipping, MdOutlineSevereCold } from "react-icons/md";
import { PiParkBold } from "react-icons/pi";

const services = [
  {
    icon: IoWaterOutline,
    title: "Plumbing",
    description: "Leaks, pipes, installations",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  {
    icon: IoFlashOutline,
    title: "Electrical",
    description: "Wiring, fixtures, panels",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-500",
  },
  {
    icon: MdOutlineSevereCold,
    title: "HVAC",
    description: "Heating, cooling, ventilation",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-500",
  },
  {
    icon: IoColorPaletteOutline,
    title: "Painting",
    description: "Interior, exterior, touch-ups",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
  },
  {
    icon: MdOutlineLocalShipping,
    title: "Moving",
    description: "Local, long-distance, packing",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    icon: PiParkBold,
    title: "Gardening",
    description: "Landscaping, lawn care",
    iconBg: "bg-green-100",
    iconColor: "text-green-500",
  },
];

export default function PopularServices() {
  return (
    <section className="w-full bg-gray-50 px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-inter text-[#0F172A] font-bold text-[clamp(26px,3.5vw,36px)]">
            Popular Services
          </h2>
          <p className="text-[#475569] mt-4">
            From minor repairs to major renovations, find the right expert for
            any job.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 flex items-center gap-4 border border-gray-100"
            >
              <div
                className={`${service.iconBg} w-13 h-13 rounded-xl flex items-center justify-center shrink-0`}
              >
                <service.icon className={service.iconColor} size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-[#111827]">
                  {service.title}
                </h3>
                <p className="text-sm text-[#9CA3AF]">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
