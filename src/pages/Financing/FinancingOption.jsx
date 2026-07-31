import { ArrowRight, Star, Zap, TrendingUp, BarChart2 } from "lucide-react";
import { useState } from "react";

const financingOptions = [
  {
    Icon: Zap,
    title: "Line of Credit",
    description: "Finance your Green Raven invoices (and more) to scale your operations",
    features: ["Working capital", "Up to $1M line of credit", "No liens on your customer's property"],
    featured: true,
    accentColor: "#16a34a",
    cardBg: "linear-gradient(160deg, #f0fdf4 0%, #dcfce7 100%)",
    iconBg: "rgba(22,163,74,0.12)",
    borderColor: "#86efac",
    glowColor: "rgba(22,163,74,0.2)",
  },
  {
    Icon: BarChart2,
    title: "Invoice Financing",
    description: "Get paid in advance on your outstanding accounts receivables for quick cash flow",
    features: ["Fast funding", "Flexible terms", "No hidden fees"],
    featured: false,
    accentColor: "#2563eb",
    cardBg: "linear-gradient(160deg, #eff6ff 0%, #dbeafe 100%)",
    iconBg: "rgba(59,130,246,0.12)",
    borderColor: "#93c5fd",
    glowColor: "rgba(59,130,246,0.15)",
  },
  {
    Icon: TrendingUp,
    title: "Business Loans",
    description: "Tailored business loans to fuel your growth and expansion",
    features: ["Competitive rates", "Quick approval", "Expert support"],
    featured: false,
    accentColor: "#d97706",
    cardBg: "linear-gradient(160deg, #fffbeb 0%, #fde68a 100%)",
    iconBg: "rgba(217,119,6,0.10)",
    borderColor: "#fcd34d",
    glowColor: "rgba(217,119,6,0.15)",
  },
];

export default function FinancingOptions() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="financing-options" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Financing Options</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose from our range of flexible financing solutions designed for businesses of all sizes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {financingOptions.map((option, idx) => {
            const { Icon } = option;
            const isHovered = hovered === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: option.cardBg, borderRadius: "16px",
                  border: `1.5px solid ${isHovered ? option.accentColor : option.borderColor}`,
                  boxShadow: isHovered ? `0 16px 40px ${option.glowColor}` : `0 4px 16px ${option.glowColor}`,
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                  transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                  cursor: "pointer", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: option.accentColor, pointerEvents: "none" }} />
                <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "120px", height: "120px", borderRadius: "50%", background: `radial-gradient(circle, ${option.accentColor}20, transparent 70%)`, pointerEvents: "none" }} />
                <div style={{ padding: "2rem", paddingTop: "2.25rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ minHeight: "28px", marginBottom: "1.25rem" }}>
                    {option.featured && (
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", background: "#16a34a", color: "#fff", fontSize: "0.7rem", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 12px", borderRadius: "999px" }}>
                        <Star style={{ width: "10px", height: "10px", fill: "#fff" }} /> Most Popular
                      </span>
                    )}
                  </div>
                  <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: option.iconBg, border: `1px solid ${option.accentColor}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                    <Icon style={{ width: "24px", height: "24px", color: option.accentColor, strokeWidth: 2 }} />
                  </div>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#0f172a", marginBottom: "0.5rem", lineHeight: 1.2 }}>{option.title}</h3>
                  <p style={{ fontSize: "0.92rem", color: "#475569", lineHeight: 1.65, marginBottom: "1.5rem" }}>{option.description}</p>
                  <div style={{ borderTop: `1px solid ${option.accentColor}25`, marginBottom: "1.25rem" }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem", flex: 1 }}>
                    {option.features.map((feature, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: option.accentColor, flexShrink: 0 }} />
                        <span style={{ fontSize: "0.9rem", color: "#334155", fontWeight: "500" }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ✅ onClick se seedha window.location.replace — history mein entry nahi jayegi */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => window.location.href = ("https://www.fundwell.com")}
            style={{ background: "linear-gradient(135deg, #16a34a, #15803d)", color: "#fff", fontWeight: "600", fontSize: "1rem", padding: "0.85rem 2.5rem", borderRadius: "10px", display: "inline-flex", alignItems: "center", gap: "8px", border: "none", cursor: "pointer", boxShadow: "0 8px 24px rgba(22,163,74,0.3)", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 32px rgba(22,163,74,0.45)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 8px 24px rgba(22,163,74,0.3)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Learn More <ArrowRight style={{ width: "16px", height: "16px" }} />
          </button>
        </div>
      </div>
    </section>
  );
}