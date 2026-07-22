import React, { useState } from "react";
import {
  Search,
  Filter,
  Building2,
  Eye,
  Calendar,
  MapPin,
  ArrowUpRight,
  MoreHorizontal,
} from "lucide-react";

const jobs = [
  {
    id: 1,
    company: "Google",
    role: "Frontend Developer",
    location: "Bangalore",
    date: "20 Jul 2026",
    status: "Applied",
    priority: "High",
  },
  {
    id: 2,
    company: "Microsoft",
    role: "React Developer",
    location: "Hyderabad",
    date: "18 Jul 2026",
    status: "Interview",
    priority: "Medium",
  },
  {
    id: 3,
    company: "Amazon",
    role: "UI Engineer",
    location: "Noida",
    date: "15 Jul 2026",
    status: "Review",
    priority: "High",
  },
  {
    id: 4,
    company: "Meta",
    role: "Frontend Engineer",
    location: "Remote",
    date: "10 Jul 2026",
    status: "Rejected",
    priority: "Low",
  },
];

export default function RecentApplications() {
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter(
    (job) =>
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.role.toLowerCase().includes(search.toLowerCase())
  );

  const badgeColor = (status) => {
    switch (status) {
      case "Applied":
        return "bg-emerald-500/20 text-emerald-400";
      case "Interview":
        return "bg-sky-500/20 text-sky-400";
      case "Review":
        return "bg-amber-500/20 text-amber-400";
      case "Rejected":
        return "bg-red-500/20 text-red-400";
      default:
        return "bg-slate-700 text-white";
    }
  };

  return (
    <section className="mx-auto mt-20 max-w-7xl px-6">
      {/* Header */}

      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h2 className="text-3xl font-bold text-white">
            Recent Applications
          </h2>

          <p className="mt-2 text-slate-400">
            Track every application from one dashboard.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">

          <div className="relative">

            <Search
              className="absolute left-3 top-3 text-slate-500"
              size={18}
            />

            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-10 pr-4 text-white outline-none focus:border-indigo-500 sm:w-72"
            />
          </div>

          <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 text-white transition hover:border-indigo-500">
            <Filter size={18} />
            Filter
          </button>

        </div>

      </div>

      {/* Desktop Table */}

      <div className="hidden overflow-hidden rounded-2xl border border-slate-800 lg:block">

        <table className="w-full">

          <thead className="bg-slate-900">

            <tr className="text-left text-slate-400">

              <th className="px-6 py-5">Company</th>

              <th>Role</th>

              <th>Status</th>

              <th>Date</th>

              <th>Priority</th>

              <th></th>

            </tr>

          </thead>

          <tbody>
            {filteredJobs.map((job) => (
              <tr
                key={job.id}
                className="border-t border-slate-800 transition hover:bg-slate-900/60"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-indigo-600 p-3">
                      <Building2 size={20} className="text-white" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-white">
                        {job.company}
                      </h4>

                      <p className="text-sm text-slate-500">
                        {job.location}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="font-medium text-white">
                  {job.role}
                </td>

                <td>
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${badgeColor(
                      job.status
                    )}`}
                  >
                    {job.status}
                  </span>
                </td>

                <td className="text-slate-300">
                  {job.date}
                </td>

                <td className="text-white">
                  {job.priority}
                </td>

                <td>
                  <button className="rounded-lg p-2 transition hover:bg-slate-800">
                    <Eye className="text-slate-400" size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

        

      </div>
            {/* ================= MOBILE CARDS ================= */}

      <div className="space-y-5 lg:hidden">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10"
          >
            {/* Top */}

            <div className="flex items-start justify-between">
              <div className="flex gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-600">
                  <Building2 className="text-white" size={24} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-white">
                    {job.company}
                  </h3>

                  <p className="text-slate-400 text-sm">
                    {job.role}
                  </p>
                </div>

              </div>

              <button className="rounded-lg p-2 transition hover:bg-slate-800">
                <MoreHorizontal className="text-slate-400" size={18} />
              </button>
            </div>

            {/* Details */}

            <div className="mt-5 space-y-3">

              <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={17} />
                <span>{job.location}</span>
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <Calendar size={17} />
                <span>{job.date}</span>
              </div>

            </div>

            {/* Status */}

            <div className="mt-5 flex items-center justify-between">

              <span
                className={`rounded-full px-3 py-1 text-sm font-medium ${badgeColor(
                  job.status
                )}`}
              >
                {job.status}
              </span>

              <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-white">
                {job.priority}
              </span>

            </div>

            {/* Button */}

            <button
              className="
              mt-6
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-linear-to-r
              from-violet-600
              to-indigo-600
              py-3
              font-semibold
              text-white
              transition
              hover:scale-[1.02]
              "
            >
              View Details
              <ArrowUpRight size={18} />
            </button>
          </div>
        ))}
      </div>

      {/* Empty State */}

      {filteredJobs.length === 0 && (
        <div className="mt-10 rounded-2xl border border-dashed border-slate-700 p-12 text-center">
          <Search
            size={45}
            className="mx-auto mb-4 text-slate-500"
          />

          <h3 className="text-2xl font-bold text-white">
            No Application Found
          </h3>

          <p className="mt-2 text-slate-400">
            Try another company or role.
          </p>
        </div>
      )}
    </section>
  );
}

