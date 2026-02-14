import React from "react";

const Partner = () => {
  return (
    <div className="container mx-auto px-10 py-8 lg:py-16 mt-15">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Left Column */}
        <div className="lg:w-1/2 flex flex-col relative">
          <div className="z-10 bg-white">
            <h1 className="text-4xl lg:text-5xl font-semibold text-slate-800 mb-2">
              <span className="text-green-600">Green </span>
              Raven
            </h1>
            <h1 className="text-4xl lg:text-5xl font-semibold text-slate-800 mb-6">
              Partner Program
            </h1>
            <div className="w-16 h-1 bg-green-600 mb-8"></div>

            <div className="my-6">
              <a
                href="https://calendar.app.google/9qsvNemHcAkYwesn9"
                target="_blank"
                className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
              >
                Become a Partner Installer
              </a>
            </div>

            <p className="text-slate-600 mb-6 leading-relaxed">
              The core philosophy underlying Green Raven's business is to form
              close relationships with installers to fully support their
              business needs in the long term. We view our customers as more
              than just an entity that places purchase orders; instead we seek
              to build personal bonds to support one another's initiatives and
              projects and a national network of connections that forms the
              backbone of the energy production industry in the U.S.
            </p>

            <p className="text-slate-600 mb-8 leading-relaxed">
              We solve problems, largely based on decades of relationships with
              our partners. Regardless of whether you are a small start-up or a
              large national provider, we are here to support you. Please reach
              out to our staff and let's{" "}
              <a
                href="https://calendar.app.google/9qsvNemHcAkYwesn9"
                className="text-green-700 underline decoration-green-300 hover:text-green-800 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                schedule a time
              </a>{" "}
              to review how we can support one another.
            </p>

            <h3 className="font-bold text-slate-700 mb-4">
              Program Highlights
            </h3>

            <div className="flex flex-col gap-2 mb-12">
              <div className="flex items-center gap-2 text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                <span>Direct Manufacturer Relationships</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                <span>Nationwide U.S. Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                <span>Commercial & Residential Installations Supported</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                <span>Installer-Only Distribution</span>
              </div>
            </div>
          </div>

          {/* Decorative Dots Pattern */}
          <div className="absolute -bottom-10 -left-10 grid grid-cols-6 gap-6 -z-10 opacity-30 mt-12">
            {[...Array(48)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-slate-400"
              ></div>
            ))}
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="lg:w-1/2 bg-[#0a1128] text-white p-8 lg:p-12 shadow-xl">
          <h2 className="text-2xl lg:text-3xl font-light mb-8">
            Become a Partner Installer
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-sm mb-3">
                Business Type <span className="text-green-500">*</span>
              </label>
              <div className="space-y-2">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 rounded border-gray-300 accent-green-600"
                  />
                  <span className="text-sm font-light">
                    Solar Installation Services
                  </span>
                </label>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 rounded border-gray-300 accent-green-600"
                  />
                  <span className="text-sm font-light">
                    Commercial Generators
                  </span>
                </label>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 rounded border-gray-300 accent-green-600"
                  />
                  <span className="text-sm font-light">
                    Geothermal Solutions
                  </span>
                </label>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 rounded border-gray-300 accent-green-600"
                  />
                  <span className="text-sm font-light">
                    Sales Org / Project Financing
                  </span>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-1">
                  First name <span className="text-green-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-300/80 h-10 px-3 text-slate-900 border-none outline-none focus:ring-1 focus:ring-slate-400"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">
                  Last name <span className="text-green-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-300/80 h-10 px-3 text-slate-900 border-none outline-none focus:ring-1 focus:ring-slate-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">
                Email <span className="text-green-500">*</span>
              </label>
              <input
                type="email"
                className="w-full bg-slate-300/80 h-10 px-3 text-slate-900 border-none outline-none focus:ring-1 focus:ring-slate-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Phone number <span className="text-green-500">*</span>
              </label>
              <input
                type="tel"
                className="w-full bg-slate-300/80 h-10 px-3 text-slate-900 border-none outline-none focus:ring-1 focus:ring-slate-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Company name <span className="text-green-500">*</span>
              </label>
              <input
                type="text"
                className="w-full bg-slate-300/80 h-10 px-3 text-slate-900 border-none outline-none focus:ring-1 focus:ring-slate-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Street address <span className="text-green-500">*</span>
              </label>
              <input
                type="text"
                className="w-full bg-slate-300/80 h-10 px-3 text-slate-900 border-none outline-none focus:ring-1 focus:ring-slate-400"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-1">
                  City <span className="text-green-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-300/80 h-10 px-3 text-slate-900 border-none outline-none focus:ring-1 focus:ring-slate-400"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">
                  State/Region <span className="text-green-500">*</span>
                </label>
                <div className="relative">
                  <select className="w-full bg-slate-300/80 h-10 px-3 text-slate-700 border-none outline-none focus:ring-1 focus:ring-slate-400 appearance-none">
                    <option value="">Please Select</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    {/* Add more states as needed */}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">
                Postal code <span className="text-green-500">*</span>
              </label>
              <input
                type="text"
                className="w-full bg-slate-300/80 h-10 px-3 text-slate-900 border-none outline-none focus:ring-1 focus:ring-slate-400"
              />
            </div>

            <div className="pt-4 flex flex-col gap-4">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 cursor-pointer text-white px-8 py-3 font-medium transition-colors w-full lg:w-auto text-center"
              >
                Submit Application
              </button>
              <a
                href="https://calendar.app.google/9qsvNemHcAkYwesn9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-center lg:text-left text-gray-300 hover:text-white underline"
              >
                Or schedule a time directly via Calendar
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Partner;
