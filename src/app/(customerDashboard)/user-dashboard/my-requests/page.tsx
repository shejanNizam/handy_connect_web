import { MdOutlineWaterDrop } from "react-icons/md";

const recentRequests = [
  {
    id: 1,
    title: "Kitchen Sink Leak",
    date: "Oct 24",
    status: "Complete",
  },
  {
    id: 2,
    title: "Living Room Rewiring",
    date: "Oct 22",
    status: "In Process",
  },
  {
    id: 3,
    title: "Bedroom Wall Painting",
    date: "Oct 20",
    status: "Complete",
  },
  {
    id: 4,
    title: "AC Filter Cleaning",
    date: "Oct 18",
    status: "Complete",
  },
  {
    id: 5,
    title: "Wooden Door Repair",
    date: "Oct 15",
    status: "Complete",
  },
  {
    id: 6,
    title: "Deep Home Cleaning",
    date: "Oct 12",
    status: "Complete",
  },
  {
    id: 7,
    title: "Main Switchboard Fix",
    date: "Oct 10",
    status: "Complete",
  },
];

export default function MyRequest() {
  return (
    <div>
      <div className="space-y-3">
        {recentRequests.map((request) => (
          <div
            key={request.id}
            className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <MdOutlineWaterDrop className="text-blue-500 text-xl" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                  {request.title}
                </h4>
                <p className="text-xs text-blue-400 font-medium">
                  {request.date} - {request.status}
                </p>
              </div>
            </div>
            <span className="px-3 py-1 bg-cyan-50 dark:bg-cyan-900/20 text-[#64748B] text-[10px] font-bold rounded-lg uppercase tracking-wider">
              IN Process
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
