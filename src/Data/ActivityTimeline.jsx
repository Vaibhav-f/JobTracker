import React from "react";
import {
  Send,
  CalendarCheck2,
  FileText,
  CircleCheckBig,
  XCircle,
} from "lucide-react";

const activities = [
  {
    icon: Send,
    title: "Applied to Google",
    subtitle: "Frontend Developer",
    time: "2 hours ago",
    color: "bg-indigo-600",
  },
  {
    icon: CalendarCheck2,
    title: "Interview Scheduled",
    subtitle: "Microsoft • React Developer",
    time: "Yesterday",
    color: "bg-emerald-600",
  },
  {
    icon: FileText,
    title: "Resume Updated",
    subtitle: "Frontend Resume.pdf",
    time: "2 days ago",
    color: "bg-orange-500",
  },
  {
    icon: CircleCheckBig,
    title: "Offer Received",
    subtitle: "Startup XYZ",
    time: "Last Week",
    color: "bg-violet-600",
  },
  {
    icon: XCircle,
    title: "Application Rejected",
    subtitle: "Meta • UI Engineer",
    time: "Last Week",
    color: "bg-red-600",
  },
];

export default function ActivityTimeline() {
  return (
    <section className="mx-auto mt-20 max-w-7xl px-6 ">

      {/* Heading */}

      <div className="mb-10">
        <p className="font-semibold uppercase tracking-[0.3em] text-indigo-400">
          Activity
        </p>

        <h2 className="mt-2 text-4xl font-bold text-white">
          Recent Activity
        </h2>

        <p className="mt-3 text-slate-400">
          Keep track of everything happening in your job search.
        </p>
      </div>

      {/* Timeline */}

      <div className="relative ml-4 border-l border-slate-700">

        {activities.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group relative mb-10 pl-10"
            >
              {/* Timeline Dot */}

              <div
                className={`absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full ${item.color} shadow-lg transition group-hover:scale-110`}
              >
                <Icon size={18} className="text-white" />
              </div>

              {/* Card */}

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20">

                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="text-slate-400">
                      {item.subtitle}
                    </p>
                  </div>

                  <span className="text-sm text-slate-500">
                    {item.time}
                  </span>

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}