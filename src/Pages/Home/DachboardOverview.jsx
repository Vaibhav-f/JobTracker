import {
  BriefcaseBusiness,
  CalendarDays,
  BadgeCheck,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const overview = [
  {
    icon: BriefcaseBusiness,
    title: "Applied Jobs",
    value: "24",
    growth: "+12%",
    color: "bg-violet-600",
  },
  {
    icon: CalendarDays,
    title: "Interviews",
    value: "08",
    growth: "+5%",
    color: "bg-emerald-600",
  },
  {
    icon: BadgeCheck,
    title: "Offers",
    value: "03",
    growth: "+2",
    color: "bg-orange-500",
  },
  {
    icon: TrendingUp,
    title: "Success Rate",
    value: "68%",
    growth: "+8%",
    color: "bg-sky-600",
  },
];

export default function DashboardOverview() {
  return (
    <section className="mx-auto mt-16 max-w-7xl px-6 lg:px-10">
      {/* Heading */}
      <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-indigo-400">
            Dashboard
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white md:text-5xl">
            Overview
          </h2>

          <p className="mt-3 max-w-xl text-slate-400">
            Track your applications, interviews and offers from one place.
          </p>
        </div>

        <button className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white transition hover:border-indigo-500 hover:bg-slate-800">
          This Week
        </button>
      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {overview.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/20"
            >
              {/* Glow */}
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-indigo-500/10 blur-3xl transition group-hover:bg-indigo-500/20" />

              {/* Top */}
              <div className="relative flex items-start justify-between">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon className="text-white" size={28} />
                </div>

                <div className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-semibold text-emerald-400">
                  <ArrowUpRight size={16} />
                  {item.growth}
                </div>
              </div>

              {/* Value */}

              <h3 className="relative mt-8 text-5xl font-bold text-white">
                {item.value}
              </h3>

              <p className="mt-2 text-lg font-medium text-slate-300">
                {item.title}
              </p>

              <div className="mt-6 h-px bg-slate-800" />

              <p className="mt-4 text-sm text-slate-500">
                Updated 5 minutes ago
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}