import React from "react";
import {
  BriefcaseBusiness,
  CalendarClock,
  CircleCheckBig,
  CircleX,
} from "lucide-react";

const stats = [
  {
    title: "Total Applications",
    value: 28,
    icon: BriefcaseBusiness,
    color: "bg-indigo-500/20 text-indigo-400",
    border: "hover:border-indigo-500",
  },
  {
    title: "Interviews",
    value: 8,
    icon: CalendarClock,
    color: "bg-yellow-500/20 text-yellow-400",
    border: "hover:border-yellow-500",
  },
  {
    title: "Offers",
    value: 3,
    icon: CircleCheckBig,
    color: "bg-green-500/20 text-green-400",
    border: "hover:border-green-500",
  },
  {
    title: "Rejected",
    value: 5,
    icon: CircleX,
    color: "bg-red-500/20 text-red-400",
    border: "hover:border-red-500",
  },
];

const Stats = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-14 py-14 bg-slate-950">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Dashboard Overview
          </h2>

          <p className="text-slate-400 mt-2">
            Track your job search progress at a glance.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`group border border-slate-800 rounded-2xl p-6 bg-slate-900 transition-all duration-300 hover:-translate-y-2 ${item.border}`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.color}`}
                >
                  <Icon size={28} />
                </div>

                <h3 className="text-slate-400 mt-6">
                  {item.title}
                </h3>

                <h1 className="text-4xl font-bold text-white mt-2">
                  {item.value}
                </h1>

                <div className="mt-6 h-1 w-full rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      index === 0
                        ? "bg-indigo-500 w-full"
                        : index === 1
                        ? "bg-yellow-500 w-2/3"
                        : index === 2
                        ? "bg-green-500 w-1/3"
                        : "bg-red-500 w-1/2"
                    }`}
                  ></div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Stats;