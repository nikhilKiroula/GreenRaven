import { ArrowRight, CheckCircle, Shield, TrendingUp, DollarSign, Clock } from "lucide-react";
import HeroImg from "../../assets/images/financing.jpg";

function MsgBubble({ mobile = false }) {
  const bubbleBg = "rgba(255,255,255,0.14)";
  const bubbleBorder = "rgba(255,255,255,0.22)";
  return (
    <div style={{ position: "relative", display: "inline-block", width: mobile ? "100%" : "clamp(200px, 22vw, 300px)", maxWidth: mobile ? "360px" : "300px", marginLeft: "18px" }}>
      <svg style={{ position: "absolute", left: "-17px", top: "70%", overflow: "visible", width: "36px", height: "48px", transform: "scaleX(-1)" }} viewBox="0 0 20 28" fill="none">
        <path d="M2 14 L1 4 L1 24 Z" fill={bubbleBg} stroke={bubbleBorder} strokeWidth="1" strokeLinejoin="round" />
        <path d="M20 14 L3 5.5 L3 22.5 Z" fill={bubbleBg} />
      </svg>
      <div style={{ background: bubbleBg, backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)", border: `1px solid ${bubbleBorder}`, borderRadius: mobile ? "20px" : "clamp(12px, 1.5vw, 20px)", padding: mobile ? "1rem 1.2rem" : "clamp(0.6rem, 1vw, 1.1rem) clamp(0.7rem, 1.1vw, 1.3rem)", boxShadow: "0 12px 40px rgba(0,0,0,0.25)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: mobile ? "10px" : "clamp(6px, 0.8vw, 10px)", marginBottom: mobile ? "0.8rem" : "clamp(0.5rem, 0.8vw, 0.85rem)" }}>
          <div style={{ width: mobile ? "34px" : "clamp(26px, 2.8vw, 36px)", height: mobile ? "34px" : "clamp(26px, 2.8vw, 36px)", borderRadius: mobile ? "10px" : "clamp(6px, 0.8vw, 10px)", background: "linear-gradient(135deg, #16a34a, #059669)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 12px rgba(22,163,74,0.4)" }}>
            <TrendingUp style={{ width: mobile ? "17px" : "clamp(12px, 1.4vw, 18px)", height: mobile ? "17px" : "clamp(12px, 1.4vw, 18px)", color: "#fff" }} />
          </div>
          <div>
            <p style={{ fontWeight: "700", color: "#ffffff", fontSize: mobile ? "0.9rem" : "clamp(0.65rem, 0.8vw, 0.92rem)", lineHeight: 1.2 }}>Growth Focused</p>
            <p style={{ fontSize: mobile ? "0.68rem" : "clamp(0.5rem, 0.55vw, 0.7rem)", color: "#4ade80", fontWeight: "600", letterSpacing: "0.04em" }}>FINANCING BUILT TO SCALE</p>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", marginBottom: mobile ? "0.8rem" : "clamp(0.5rem, 0.8vw, 0.85rem)" }} />
        <div style={{ display: "flex", gap: mobile ? "0.5rem" : "clamp(0.25rem, 0.4vw, 0.5rem)" }}>
          {[
            { icon: DollarSign,  label: "Credit Line", value: "$1M+",   color: "#4ade80", bg: "rgba(74,222,128,0.15)",  border: "rgba(74,222,128,0.25)" },
            { icon: Clock,       label: "Approval",    value: "24 hrs", color: "#60a5fa", bg: "rgba(96,165,250,0.15)",  border: "rgba(96,165,250,0.25)" },
            { icon: CheckCircle, label: "No Liens",    value: "Ever",   color: "#fbbf24", bg: "rgba(251,191,36,0.15)",  border: "rgba(251,191,36,0.25)" },
          ].map(({ icon: Icon, label, value, color, bg, border }, i) => (
            <div key={i} style={{ flex: 1, background: bg, border: `1px solid ${border}`, borderRadius: mobile ? "10px" : "clamp(6px, 0.8vw, 10px)", padding: mobile ? "0.5rem 0.4rem" : "clamp(0.3rem, 0.5vw, 0.55rem) clamp(0.2rem, 0.35vw, 0.4rem)", textAlign: "center" }}>
              <Icon style={{ width: mobile ? "12px" : "clamp(9px, 1vw, 13px)", height: mobile ? "12px" : "clamp(9px, 1vw, 13px)", color, margin: "0 auto 3px", display: "block" }} />
              <p style={{ fontSize: mobile ? "0.88rem" : "clamp(0.65rem, 0.75vw, 0.92rem)", fontWeight: "800", color, lineHeight: 1 }}>{value}</p>
              <p style={{ fontSize: mobile ? "0.6rem" : "clamp(0.45rem, 0.5vw, 0.62rem)", color: "rgba(255,255,255,0.55)", fontWeight: "500", marginTop: "2px" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HeroImg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.62) 50%, rgba(0,0,0,0.28) 100%)" }} />

      <div className="relative z-10 container mx-auto px-6 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div>
              <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: "800", color: "#ffffff", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.1rem" }}>
                Line of Credit &<br />
                <span style={{ background: "linear-gradient(90deg, #4ade80, #22c55e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Hardware Financing
                </span>
              </h1>
              <p style={{ fontSize: "1.15rem", color: "#cbd5e1", lineHeight: 1.75, maxWidth: "480px" }}>
                Green Raven offers a line of credit and other business finance options to ease your cash flow and fuel your growth.
              </p>
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {/* ✅ onClick se seedha window.location.replace — history mein entry nahi jayegi */}
              <button
                onClick={() => window.location.href = ("https://www.fundwell.com/green-raven?utm_campaign=green-raven&utm_source=sled_referral&utm_medium=channel")}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg, #16a34a, #15803d)", color: "#fff", fontWeight: "700", fontSize: "1rem", padding: "0.9rem 2rem", borderRadius: "10px", border: "none", cursor: "pointer", boxShadow: "0 8px 28px rgba(22,163,74,0.4)", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(22,163,74,0.55)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(22,163,74,0.4)"; }}
              >
                Get Line of Credit <ArrowRight style={{ width: "18px", height: "18px" }} />
              </button>

              <button
                onClick={() => document.getElementById("financing-options")?.scrollIntoView({ behavior: "smooth" })}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,255,255,0.3)", color: "#fff", fontWeight: "600", fontSize: "1rem", padding: "0.9rem 2rem", borderRadius: "10px", cursor: "pointer", backdropFilter: "blur(8px)", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
              >
                Learn More
              </button>
            </div>

            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", paddingTop: "0.5rem" }}>
              {[
                { icon: CheckCircle, label: "Fast Approval", sub: "Quick quote in minutes" },
                { icon: Shield, label: "Flexible Terms", sub: "Customized solutions" },
              ].map(({ icon: Icon, label, sub }, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(22,163,74,0.2)", border: "1px solid rgba(22,163,74,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon style={{ width: "18px", height: "18px", color: "#4ade80" }} />
                  </div>
                  <div>
                    <p style={{ fontWeight: "600", color: "#f1f5f9", fontSize: "0.95rem" }}>{label}</p>
                    <p style={{ fontSize: "0.8rem", color: "#94a3b8" }}>{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:hidden" style={{ paddingTop: "0.5rem", paddingBottom: "1rem" }}>
              <MsgBubble mobile={true} />
            </div>
          </div>

          <div className="hidden lg:flex" style={{ justifyContent: "flex-start", alignItems: "center", paddingLeft: "6.5rem", paddingTop: "19.5rem" }}>
            <MsgBubble mobile={false} />
          </div>
        </div>
      </div>
    </section>
  );
}