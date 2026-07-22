import React from "react";

const JobForm = () => {
  return (
    <section className="px-4 md:px-8 lg:px-14 py-16 bg-slate-950">
      <div className="max-w-5xl mx-auto">

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">
            Add New Job
          </h2>

          <p className="text-slate-400 mt-2">
            Keep track of every application in one place.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

          <form className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Company Name"
              className="bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 outline-none text-white"
            />

            <input
              type="text"
              placeholder="Job Role"
              className="bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 outline-none text-white"
            />

            <input
              type="text"
              placeholder="Location"
              className="bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 outline-none text-white"
            />

            <input
              type="date"
              className="bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 outline-none text-white"
            />

            <select className="bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white">

              <option>Applied</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>

            </select>

            <textarea
              rows="4"
              placeholder="Notes..."
              className="md:col-span-2 bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 outline-none text-white"
            ></textarea>

            <button
              className="md:col-span-2 bg-indigo-600 hover:bg-indigo-700 transition rounded-lg py-3 font-semibold"
            >
              Add Job
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default JobForm;