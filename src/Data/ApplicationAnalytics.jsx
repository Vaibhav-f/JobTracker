import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const analytics = [
  { month: "Jan", applications: 8 },
  { month: "Feb", applications: 12 },
  { month: "Mar", applications: 18 },
  { month: "Apr", applications: 14 },
  { month: "May", applications: 26 },
  { month: "Jun", applications: 32 },
  { month: "Jul", applications: 40 },
];



const weeklyData = [
  { day: "Mon", jobs: 4 },
  { day: "Tue", jobs: 7 },
  { day: "Wed", jobs: 5 },
  { day: "Thu", jobs: 8 },
  { day: "Fri", jobs: 6 },
  { day: "Sat", jobs: 3 },
  { day: "Sun", jobs: 2 },
];

const statusData = [
  { name: "Applied", value: 58 },
  { name: "Interview", value: 18 },
  { name: "Offer", value: 8 },
  { name: "Rejected", value: 16 },
];

const COLORS = [
  "#6366F1",
  "#10B981",
  "#F59E0B",
  "#EF4444",
];

export default function ApplicationAnalytics() {
  return (
    <section className="mx-auto mt-20 max-w-7xl px-6">

      {/* Heading */}

      <div className="mb-10 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">

        <div>
          <p className="text-indigo-400 font-semibold tracking-[0.3em] uppercase">
            Analytics
          </p>

          <h2 className="mt-2 text-4xl font-bold text-white">
            Application Analytics
          </h2>

          <p className="mt-3 text-slate-400">
            Monitor your application growth and job search performance.
          </p>
        </div>

        <button className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white hover:border-indigo-500 transition">
          Last 6 Months
        </button>

      </div>

      {/* Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h4 className="text-slate-400">Total Applications</h4>

          <h2 className="mt-3 text-5xl font-bold text-white">
            128
          </h2>

          <p className="mt-3 text-emerald-400">
            +18% this month
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h4 className="text-slate-400">
            Interviews
          </h4>

          <h2 className="mt-3 text-5xl font-bold text-white">
            24
          </h2>

          <p className="mt-3 text-sky-400">
            +6 this month
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h4 className="text-slate-400">
            Offers
          </h4>

          <h2 className="mt-3 text-5xl font-bold text-white">
            6
          </h2>

          <p className="mt-3 text-orange-400">
            +2 this month
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h4 className="text-slate-400">
            Success Rate
          </h4>

          <h2 className="mt-3 text-5xl font-bold text-white">
            68%
          </h2>

          <p className="mt-3 text-violet-400">
            Excellent Progress
          </p>
        </div>

      </div>

      {/* Area Chart */}

      <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">

      

        <div className="mb-6">

          <h3 className="text-2xl font-bold text-white">
            Applications Overview
          </h3>

          <p className="text-slate-400">
            Monthly application growth.
          </p>

        </div>

        <div className="h-[380px]">

          <ResponsiveContainer width="100%" height="100%">

            <AreaChart data={analytics}>

              <defs>

                <linearGradient
                  id="colorApp"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#6366F1"
                    stopOpacity={0.8}
                  />

                  <stop
                    offset="100%"
                    stopColor="#6366F1"
                    stopOpacity={0}
                  />

                </linearGradient>

              </defs>

              <CartesianGrid
                stroke="#334155"
                strokeDasharray="5 5"
              />

              <XAxis
                dataKey="month"
                stroke="#94A3B8"
              />

              <YAxis
                stroke="#94A3B8"
              />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="applications"
                stroke="#6366F1"
                strokeWidth={4}
                fill="url(#colorApp)"
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

      </div>

      
<div className="mt-8 grid gap-6 lg:grid-cols-2">

  {/* Weekly Applications */}

  <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">

    <h3 className="text-2xl font-bold text-white">
      Weekly Applications
    </h3>

    <p className="mb-6 text-slate-400">
      Jobs applied this week.
    </p>

    <div className="h-[350px]">

      <ResponsiveContainer>

        <BarChart data={weeklyData}>

          <CartesianGrid
            strokeDasharray="5 5"
            stroke="#334155"
          />

          <XAxis
            dataKey="day"
            stroke="#94A3B8"
          />

          <YAxis
            stroke="#94A3B8"
          />

          <Tooltip />

          <Bar
            dataKey="jobs"
            radius={[8, 8, 0, 0]}
            fill="#6366F1"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  </div>

  {/* Status Distribution */}

  <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">

    <h3 className="text-2xl font-bold text-white">
      Status Distribution
    </h3>

    <p className="mb-6 text-slate-400">
      Overall application status.
    </p>

    <div className="h-[350px]">

      <ResponsiveContainer>

        <PieChart>

          <Pie
            data={statusData}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
          >
            {statusData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>

  </div>

</div>
    </section>
  );
}