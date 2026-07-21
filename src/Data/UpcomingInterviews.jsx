import React from "react";
import {
  CalendarDays,
  Clock3,
  Building2,
  Video,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

const interviews = [
  {
    company: "Google",
    role: "Frontend Developer",
    date: "22 Jul 2026",
    time: "10:30 AM",
    type: "Google Meet",
    location: "Remote",
    color: "bg-indigo-600",
  },
  {
    company: "Microsoft",
    role: "React Developer",
    date: "23 Jul 2026",
    time: "02:00 PM",
    type: "Microsoft Teams",
    location: "Hyderabad",
    color: "bg-emerald-600",
  },
  {
    company: "Amazon",
    role: "UI Engineer",
    date: "25 Jul 2026",
    time: "11:00 AM",
    type: "Zoom Meeting",
    location: "Bangalore",
    color: "bg-orange-500",
  },
];

export default function UpcomingInterviews() {
  return (
    <section className="mx-auto mt-20 max-w-7xl px-6">

      {/* Heading */}

      <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">

        <div>
          <p className="font-semibold uppercase tracking-[0.3em] text-indigo-400">
            Schedule
          </p>

          <h2 className="mt-2 text-4xl font-bold text-white">
            Upcoming Interviews
          </h2>

          <p className="mt-3 text-slate-400">
            Never miss your next interview.
          </p>
        </div>

        <button className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white transition hover:border-indigo-500">
          View Calendar
        </button>

      </div>

      {/* Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {interviews.map((item, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/20"
          >
            {/* Top */}

            <div className="flex items-start justify-between">

              <div className="flex items-center gap-4">

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${item.color}`}
                >
                  <Building2 className="text-white" size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {item.company}
                  </h3>

                  <p className="text-slate-400">
                    {item.role}
                  </p>
                </div>

              </div>

              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-medium text-emerald-400">
                Scheduled
              </span>

            </div>

            {/* Info */}

            <div className="mt-6 space-y-4">

              <div className="flex items-center gap-3 text-slate-300">
                <CalendarDays size={18} />
                {item.date}
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Clock3 size={18} />
                {item.time}
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Video size={18} />
                {item.type}
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <MapPin size={18} />
                {item.location}
              </div>

            </div>

            {/* Button */}

            <button
              className="
                mt-8
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-violet-600
                to-indigo-600
                py-3
                font-semibold
                text-white
                transition
                hover:scale-105
              "
            >
              Join Interview

              <ArrowUpRight size={18} />
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}