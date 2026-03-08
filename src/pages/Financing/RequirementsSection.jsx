import { CheckCircle } from "lucide-react";

/**
 * Requirements Section Component
 * Design: Modern Professional - Two column layout with requirement cards and checklist
 * Features: Bordered left accent cards and quick checklist
 */

const requirements = [
  {
    title: "Credit Requirements",
    description: "For most lines of credit or long-term loans, you will provide two years of federal tax returns. These are typically up to 25% of your company monthly revenue.",
    borderColor: "border-green-600"
  },
  {
    title: "Eligibility Criteria",
    description: "If the above do not apply to your business, you will have the ability to use a credit card or explore several other finance options that meet your business needs once you have been approved.",
    borderColor: "border-blue-600"
  },
  {
    title: "Limited Scenarios",
    description: "There are only a few scenarios where you won't be able to get financing for your needs.",
    borderColor: "border-amber-600"
  }
];

const checklistItems = [
  "Valid business registration",
  "2 years of business history",
  "Federal tax returns",
  "Bank statements (3-6 months)",
  "Business license",
  "Personal identification"
];

export default function RequirementsSection() {
  return (
    <section id="requirements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Title */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Requirements
              </h2>
              <p className="text-xl text-slate-600">
                What you need to know about financing eligibility
              </p>
            </div>

            {/* Requirements Cards */}
            <div className="space-y-6">
              {requirements.map((req, idx) => (
                <div 
                  key={idx} 
                  className={`border-l-4 ${req.borderColor} pl-6 py-4 hover:bg-slate-50 transition-colors rounded-r-lg`}
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {req.title}
                  </h3>
                  <p className="text-slate-700">
                    {req.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Checklist and Pro Tip */}
          <div className="space-y-6">
            {/* Quick Checklist Card */}
            <div className="border border-slate-200 bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Quick Checklist
              </h3>
              <div className="space-y-4">
                {checklistItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Tip Card */}
            <div className="border border-slate-200 bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                💡 Pro Tip
              </h3>
              <p className="text-slate-700">
                Having your documentation organized and ready can speed up the approval process significantly. Contact our team for a pre-qualification assessment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
