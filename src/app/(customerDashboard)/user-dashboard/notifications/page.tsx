"use client";

import { useState } from "react";
import {
  MdCheckCircle,
  MdOutlineHandyman,
  MdOutlineInfo,
  MdOutlineLocalOffer,
  MdOutlineNotifications,
  MdOutlineWaterDrop,
  MdStar,
} from "react-icons/md";

type NotificationType = "request" | "review" | "offer" | "system" | "update";

interface Notification {
  id: number;
  type: NotificationType;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const notifications: Notification[] = [
  {
    id: 1,
    type: "request",
    title: "Request Accepted",
    message:
      "John Mayer accepted your plumbing request. He will arrive between 2PM - 4PM.",
    time: "2 min ago",
    read: false,
  },
  {
    id: 2,
    type: "review",
    title: "New Review Received",
    message:
      'David Cohen left you a 5-star review: "Excellent work, very professional!"',
    time: "1 hour ago",
    read: false,
  },
  {
    id: 3,
    type: "offer",
    title: "Special Offer",
    message:
      "Get 20% off your next electrical service booking. Valid until Dec 31.",
    time: "3 hours ago",
    read: false,
  },
  {
    id: 4,
    type: "update",
    title: "Job Completed",
    message:
      "Your kitchen sink repair has been marked as completed. Please leave a review.",
    time: "Yesterday",
    read: true,
  },
  {
    id: 5,
    type: "request",
    title: "New Quote Received",
    message:
      "You received a new quote from Sarah's Cleaning Services for your cleaning request.",
    time: "Yesterday",
    read: true,
  },
  {
    id: 6,
    type: "system",
    title: "Account Verified",
    message:
      "Your account has been successfully verified. You can now access all features.",
    time: "2 days ago",
    read: true,
  },
  {
    id: 7,
    type: "update",
    title: "Professional En Route",
    message:
      "Mike (Electrician) is on his way. Estimated arrival in 15 minutes.",
    time: "2 days ago",
    read: true,
  },
  {
    id: 8,
    type: "offer",
    title: "Refer & Earn",
    message:
      "Invite a friend and earn $10 credit when they complete their first booking.",
    time: "3 days ago",
    read: true,
  },
];

const iconMap: Record<
  NotificationType,
  { icon: React.ReactNode; bg: string; color: string }
> = {
  request: {
    icon: <MdOutlineWaterDrop size={20} />,
    bg: "bg-blue-50 dark:bg-blue-900/20",
    color: "text-blue-500",
  },
  review: {
    icon: <MdStar size={20} />,
    bg: "bg-amber-50 dark:bg-amber-900/20",
    color: "text-amber-500",
  },
  offer: {
    icon: <MdOutlineLocalOffer size={20} />,
    bg: "bg-green-50 dark:bg-green-900/20",
    color: "text-green-500",
  },
  system: {
    icon: <MdOutlineInfo size={20} />,
    bg: "bg-purple-50 dark:bg-purple-900/20",
    color: "text-purple-500",
  },
  update: {
    icon: <MdOutlineHandyman size={20} />,
    bg: "bg-orange-50 dark:bg-orange-900/20",
    color: "text-orange-500",
  },
};

export default function Notifications() {
  const [items, setItems] = useState<Notification[]>(notifications);

  const unreadCount = items.filter((n) => !n.read).length;

  const markAllRead = () => {
    setItems((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const markRead = (id: number) => {
    setItems((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Notifications
          </h2>
          {unreadCount > 0 && (
            <span className="bg-amber-500 text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
              {unreadCount}
            </span>
          )}
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllRead}
            className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:opacity-75 transition-opacity"
          >
            <MdCheckCircle size={16} />
            Mark all as read
          </button>
        )}
      </div>

      {/* List */}
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
          <MdOutlineNotifications size={48} className="mb-3 opacity-40" />
          <p className="text-sm font-medium">No notifications yet</p>
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((notification) => {
            const { icon, bg, color } = iconMap[notification.type];
            return (
              <div
                key={notification.id}
                onClick={() => markRead(notification.id)}
                className={`relative flex items-start gap-4 p-4 rounded-2xl border transition-all cursor-pointer hover:shadow-md ${
                  notification.read
                    ? "bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700"
                    : "bg-blue-50/40 dark:bg-blue-900/10 border-blue-100 dark:border-blue-800"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${bg} ${color}`}
                >
                  {icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4
                      className={`text-sm font-bold leading-tight ${notification.read ? "text-gray-700 dark:text-gray-300" : "text-gray-900 dark:text-white"}`}
                    >
                      {notification.title}
                    </h4>
                    <span className="text-[11px] text-gray-400 whitespace-nowrap shrink-0">
                      {notification.time}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                    {notification.message}
                  </p>
                </div>

                {/* Unread dot */}
                {!notification.read && (
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
