import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Partner = () => {
  const [userApplicationData, setUserApplication] = useState({
    businessTypes: [],
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const US_STATES = [
    { code: "AL", name: "Alabama" },
    { code: "AK", name: "Alaska" },
    { code: "AZ", name: "Arizona" },
    { code: "AR", name: "Arkansas" },
    { code: "CA", name: "California" },
    { code: "CO", name: "Colorado" },
    { code: "CT", name: "Connecticut" },
    { code: "DE", name: "Delaware" },
    { code: "FL", name: "Florida" },
    { code: "GA", name: "Georgia" },
    { code: "HI", name: "Hawaii" },
    { code: "ID", name: "Idaho" },
    { code: "IL", name: "Illinois" },
    { code: "IN", name: "Indiana" },
    { code: "IA", name: "Iowa" },
    { code: "KS", name: "Kansas" },
    { code: "KY", name: "Kentucky" },
    { code: "LA", name: "Louisiana" },
    { code: "ME", name: "Maine" },
    { code: "MD", name: "Maryland" },
    { code: "MA", name: "Massachusetts" },
    { code: "MI", name: "Michigan" },
    { code: "MN", name: "Minnesota" },
    { code: "MS", name: "Mississippi" },
    { code: "MO", name: "Missouri" },
    { code: "MT", name: "Montana" },
    { code: "NE", name: "Nebraska" },
    { code: "NV", name: "Nevada" },
    { code: "NH", name: "New Hampshire" },
    { code: "NJ", name: "New Jersey" },
    { code: "NM", name: "New Mexico" },
    { code: "NY", name: "New York" },
    { code: "NC", name: "North Carolina" },
    { code: "ND", name: "North Dakota" },
    { code: "OH", name: "Ohio" },
    { code: "OK", name: "Oklahoma" },
    { code: "OR", name: "Oregon" },
    { code: "PA", name: "Pennsylvania" },
    { code: "RI", name: "Rhode Island" },
    { code: "SC", name: "South Carolina" },
    { code: "SD", name: "South Dakota" },
    { code: "TN", name: "Tennessee" },
    { code: "TX", name: "Texas" },
    { code: "UT", name: "Utah" },
    { code: "VT", name: "Vermont" },
    { code: "VA", name: "Virginia" },
    { code: "WA", name: "Washington" },
    { code: "WV", name: "West Virginia" },
    { code: "WI", name: "Wisconsin" },
    { code: "WY", name: "Wyoming" },
  ];

  const resetForm = () => {
    setUserApplication({
      businessTypes: [],
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      companyName: "",
      streetAddress: "",
      city: "",
      state: "",
      postalCode: "",
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "29b9f208-ddb8-4b75-afe3-7676e0c13aeb");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      resetForm();
      toast.success("ho gya");
    } catch (error) {
      toast.error("Applicaition not ");
    }
  };
  return (
    <div className="container mx-auto px-4 py-8 lg:py-16 mt-15">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Left Column */}
        <div className="lg:w-1/2 flex flex-col relative">
          <div className="z-10 bg-white">
            <h1 className="text-4xl lg:text-5xl font-light text-slate-800 mb-2">
              Green Raven
            </h1>
            <h1 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6">
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
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto bg-[#0a1128] text-white p-8 shadow-xl">
            <h2 className="text-2xl font-light mb-8">
              Become a Partner Installer
            </h2>

            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label className="block text-sm mb-3">
                  Business Type <span className="text-green-500">*</span>
                </label>

                {[
                  "Solar Installation Services",
                  "Commercial Generators",
                  "Geothermal Solutions",
                  "Sales Org / Project Financing",
                ].map((type) => (
                  <label
                    key={type}
                    className="flex items-start gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={type}
                      className="mt-1 w-4 h-4 accent-green-600"
                    />
                    <span className="text-sm font-light">{type}</span>
                  </label>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  className="w-full bg-slate-300/80 h-10 px-3 text-black"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full bg-slate-300/80 h-10 px-3 text-black"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email *"
                className="w-full bg-slate-300/80 h-10 px-3 text-black"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="w-full bg-slate-300/80 h-10 px-3 text-black"
              />

              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                className="w-full bg-slate-300/80 h-10 px-3 text-black"
              />

              <input
                type="text"
                name="streetAddress"
                placeholder="Street Address"
                className="w-full bg-slate-300/80 h-10 px-3 text-black"
              />

              <input
                type="text"
                name="city"
                placeholder="City"
                className="w-full bg-slate-300/80 h-10 px-3 text-black"
              />

              <div>
                <input
                  type="text"
                  name="state"
                  list="us-states"
                  placeholder="State"
                  className="w-full bg-slate-300/80 h-10 px-3 text-black"
                />

                <datalist id="us-states">
                  {US_STATES.map((state) => (
                    <option key={state.code} value={state.name} />
                  ))}
                </datalist>
              </div>

              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                className="w-full bg-slate-300/80 h-10 px-3 text-black"
              />

              <button
                type="submit"
                className="bg-green-600 text-white px-8 py-3 w-full"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
