export default function Footer() {
  const items = [
    "Direct Manufacturer Relationships",
    "Nationwide U.S. Shipping",
    "Commercial & Residential Installations Supported",
    "Installer-Only Distribution",
    "Geothermal Solutions",
    "Engineering",
    "Commercial Financing",
    "Solar-specific Compliance",
  ];

  return (
    <div className="w-full">
      {/* Infinite Scrolling Bar */}
      <div className="relative w-full overflow-hidden bg-white border-b border-slate-200">
        <div className="flex w-max animate-marquee gap-8 px-6 py-4 text-sm md:text-base font-medium text-slate-700">
          {[...items, ...items].map((item, index) => (
            <span
              key={index}
              className="shrink-0 rounded-full bg-slate-100 px-4 py-2"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-emerald-900 text-emerald-50">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4">
              Site Links
            </h4>
            <ul className="space-y-2 text-sm text-emerald-100">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Industry News</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4">
              Partners
            </h4>
            <div className="flex flex-wrap gap-4 text-sm font-semibold text-emerald-100">
              <span>IRONRIDGE</span>
              <span>HELIENE</span>
              <span>EG4</span>
              <span>GENERAC</span>
              <span>TRINA SOLAR</span>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4">
              Green Raven, Inc.
            </h4>
            <p className="text-sm text-emerald-100 leading-relaxed">
              123 Main Street, Suite 100<br />
              Madison, WI 12345<br />
              <span className="font-medium">888-555-1212</span>
            </p>
          </div>
        </div>

        <div className="border-t border-emerald-800 py-4 text-center text-xs text-emerald-200">
          © {new Date().getFullYear()} Green Raven. All rights reserved.
        </div>
      </footer>

      {/* Tailwind animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
