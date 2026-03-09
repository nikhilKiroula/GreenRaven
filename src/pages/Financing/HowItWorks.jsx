/**
 * How It Works Component
 * Updated: Removed "Flexible Options" section, hyperlinked "Fundwell" to www.fundwell.com
 */

const processSteps = [
  {
    step: 1,
    title: "Submit Request",
    description: "Provide your business details and financing needs"
  },
  {
    step: 2,
    title: "Get Quote",
    description: "Receive a customized quote within 24 hours"
  },
  {
    step: 3,
    title: "Approval",
    description: "Quick approval process with minimal documentation"
  },
  {
    step: 4,
    title: "Receive Funds",
    description: "Get funded and start growing your business"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Simple, transparent process from quote to funding
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {processSteps.map((item, idx) => (
            <div key={idx} className="relative">
              {/* Connector Line */}
              {idx < 3 && (
                <div className="hidden lg:block absolute top-12 left-[60%] right-[-50%] h-1 bg-gradient-to-r from-green-600 to-transparent"></div>
              )}

              <div className="relative z-10 bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-slate-200">
                {/* Step Circle */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg">
                  {item.step}
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Only Standard Process remains — Flexible Options section deleted */}
        {/* ✅ "Fundwell" hyperlinked to www.fundwell.com */}
        <div className="max-w-3xl ">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Standard Process
          </h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Once you have approved a purchase order based on our quote, you receive an invoice from Green Raven. On that invoice, you can submit it to Fundwell
            to create an account and get financing for your purchase order.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Alternatively, you may create an account with{" "}
            <a
              href="https://www.fundwell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 font-semibold underline"
            >
              Fundwell
            </a>{" "}
            directly to get financing for longer business terms
          </p>
          <p className="text-slate-700 leading-relaxed"> in advance of confirming a purchase order which you would then submit to us for ACH.</p>
        </div>

      </div>
    </section>
  );
}