"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Header from "../components/Header";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

function QualifierQuiz({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    { question: "Did you work a W-2 job this year?", options: ["Yes", "No"] },
    { question: "Do you expect a tax refund?", options: ["Yes", "No", "Not Sure"] },
    { question: "Are you in Memphis or nearby?", options: ["Yes", "No"] },
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = { ...answers, [step]: answer };
    setAnswers(newAnswers);
    if (step < 2) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      if (newAnswers[0] === "Yes" && newAnswers[1] !== "No" && newAnswers[2] === "Yes") {
        setTimeout(() => onComplete(), 300);
      }
    }
  };

  const disqualified = step === 2 && answers[2] === "No";

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-lg mx-auto border border-gray-100">
      {/* Progress */}
      <div className="flex items-center justify-center gap-2 mb-6">
        {questions.map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${i <= step ? "bg-primary text-white" : "bg-gray-200 text-gray-400"}`}>
              {i < step ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              ) : (i + 1)}
            </div>
            {i < 2 && <div className={`w-8 h-0.5 ${i < step ? "bg-primary" : "bg-gray-200"}`} />}
          </div>
        ))}
      </div>

      {!disqualified ? (
        <>
          <p className="text-xs font-bold text-primary uppercase tracking-wider text-center mb-2">
            Step {step + 1} of 3
          </p>
          <h3 className="text-lg md:text-xl font-bold text-text-primary text-center mb-5">
            {questions[step].question}
          </h3>
          <div className="flex justify-center gap-3">
            {questions[step].options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                className={`quiz-option flex-1 ${answers[step] === opt ? "selected" : ""}`}
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-4">
          <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-text-primary mb-2">We are sorry</h3>
          <p className="text-text-secondary text-sm mb-4">
            This offer is currently available for Memphis area residents only.
          </p>
          <a href="tel:+18445030401" className="text-primary font-bold text-sm hover:underline">
            Still have questions? Call us
          </a>
        </div>
      )}
    </div>
  );
}

function LeadForm({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [w2, setW2] = useState("");
  const [refund, setRefund] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // ESC key handler
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="bg-white rounded-2xl p-12 max-w-md w-full text-center animate-scale-in relative" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-all hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-5">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-extrabold text-text-primary mb-2">You Qualify!</h3>
          <p className="text-text-secondary mb-6">
            A tax specialist will contact you shortly to confirm your eligibility.
          </p>
          <a href="tel:+18445030401" className="btn-primary btn-glow ripple inline-flex items-center justify-center gap-2 w-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call (844) 503-0401 Now
          </a>
          <button onClick={onClose} className="mt-5 text-text-muted text-sm hover:text-text-secondary transition-colors">
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full overflow-hidden shadow-2xl animate-scale-in flex flex-col md:flex-row relative" style={{ maxWidth: "1100px", maxHeight: "620px" }} onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-gray-500 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full p-2 shadow-sm transition-all hover:scale-110"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* LEFT PANEL: Trust + Context */}
        <div className="text-white p-10 md:p-12 md:w-[35%] flex-shrink-0 flex flex-col justify-between" style={{ background: "#3d2770" }}>
          <div>
            <h3 className="text-lg font-bold mb-1">Before You Apply</h3>
            <p className="text-white/60 text-xs mb-4">What you can expect</p>

            <div className="space-y-3 mb-5">
              {[
                "Up to $7,000 refund advance",
                "$0 upfront filing (simple returns)",
                "No credit check required",
                "Instant advance options available",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[10px] text-white/40 leading-relaxed mb-5">
              Advance amounts vary based on eligibility. Fees and terms may apply.
            </p>
          </div>

          {/* Contact Block */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-white/50">Call Us Anytime</p>
                <a href="tel:+18445030401" className="text-xs font-bold hover:text-yellow-300 transition-colors">(844) 503-0401</a>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-white/50">Email Support</p>
                <a href="mailto:support@taxshieldservice.com" className="text-xs font-bold hover:text-yellow-300 transition-colors">support@taxshieldservice.com</a>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-white/50">Memphis, TN</p>
                <p className="text-xs font-bold">Two Locations</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Form */}
        <div className="p-8 md:p-10 md:w-[65%] overflow-y-auto flex-1">
          {/* Form Header */}
          <div className="mb-4">
            <h3 className="text-lg font-extrabold text-text-primary mb-0.5">
              Check If You Qualify in 60 Seconds
            </h3>
            <p className="text-xs text-text-secondary">Simple, fast, and secure.</p>
          </div>

          {/* Progress */}
          <div className="flex items-center gap-2 mb-4">
            <div className={`h-1.5 flex-1 rounded-full transition-all ${step >= 1 ? "bg-primary" : "bg-gray-200"}`} />
            <div className={`h-1.5 flex-1 rounded-full transition-all ${step >= 2 ? "bg-primary" : "bg-gray-200"}`} />
            <span className="text-[10px] font-bold text-text-muted ml-2">Step {step} of 2</span>
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 ? (
              <div className="space-y-4">
                {/* Step 1: Quick Qualifiers - Stacked vertically */}
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Do you have W-2 income this year?
                  </label>
                  <div className="flex gap-2">
                    {["Yes", "No"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setW2(opt)}
                        className={`quiz-option flex-1 !py-3 !px-4 !text-sm ${w2 === opt ? "selected" : ""}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Are you expecting a tax refund?
                  </label>
                  <div className="flex gap-2">
                    {["Yes", "No", "Not Sure"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setRefund(opt)}
                        className={`quiz-option flex-1 !py-3 !px-4 !text-sm ${refund === opt ? "selected" : ""}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (w2 && refund) setStep(2);
                  }}
                  disabled={!w2 || !refund}
                  className="btn-primary btn-glow ripple w-full text-center !py-3.5 text-base disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {/* Step 2: Full Form - Compact horizontal layout */}
                {/* Row 1: Personal + Contact */}
                <div className="grid grid-cols-4 gap-3">
                  <div>
                    <label className="block text-[10px] font-semibold text-text-primary mb-1">First Name</label>
                    <input type="text" required placeholder="John" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-text-primary mb-1">Last Name</label>
                    <input type="text" required placeholder="Smith" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-text-primary mb-1">Phone</label>
                    <input type="tel" required placeholder="(901) 555-0123" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-text-primary mb-1">Email</label>
                    <input type="email" placeholder="john@email.com" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
                  </div>
                </div>

                {/* Row 2: Address */}
                <div className="grid grid-cols-4 gap-3">
                  <div className="col-span-2">
                    <label className="block text-[10px] font-semibold text-text-primary mb-1">Address</label>
                    <input type="text" placeholder="123 Main St" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-text-primary mb-1">City</label>
                    <input type="text" placeholder="Memphis" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-text-primary mb-1">Zip</label>
                    <input type="text" placeholder="38118" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
                  </div>
                </div>

                {/* Row 3: Verification + Tax */}
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[10px] font-semibold text-text-primary mb-1">Last 4 SSN</label>
                    <input type="text" maxLength={4} placeholder="1234" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
                    <p className="text-[9px] text-text-muted mt-0.5">Verification only</p>
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-text-primary mb-1">Date of Birth</label>
                    <input type="date" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-text-primary mb-1">Expected Refund</label>
                    <input type="text" placeholder="$3,000" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
                  </div>
                </div>

                {/* Submit */}
                <button type="submit" className="btn-primary btn-glow ripple w-full text-center !py-3.5 text-base mt-2">
                  Check My Eligibility
                </button>

                {/* Trust footer */}
                <div className="flex items-center justify-center gap-4 mt-1">
                  <div className="flex items-center gap-1 text-[10px] text-text-muted">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Secure
                  </div>
                  <span className="text-gray-300">|</span>
                  {["No credit check", "No obligation", "< 1 min"].map((item) => (
                    <span key={item} className="flex items-center gap-0.5 text-[10px] text-text-muted">
                      <svg className="w-2.5 h-2.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default function MetaAdsLandingPage() {
  const containerRef = useReveal();
  const [showForm, setShowForm] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const scrollToQuiz = () => {
    document.getElementById("qualifier")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      <Header currentPath="/memphis-tax-refund" />

      {/* ===== SECTION 1: HERO ===== */}
      <section className="relative bg-gradient-brand text-white" style={{ overflow: "visible" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-end min-h-[500px] lg:min-h-[700px]">
            {/* Left: Text + CTAs */}
            <div className="animate-fade-in-up py-14 md:py-20 lg:py-24 relative z-20">
              <span className="inline-flex items-center gap-2 bg-white/15 text-white text-sm font-bold px-4 py-2 rounded-full mb-5 border border-white/20">
                &#128205; Memphis, Tennessee
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-[52px] font-extrabold hero-headline mb-4">
                Memphis — Expecting a Tax Refund?
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-3 leading-relaxed max-w-md">
                If you worked a W-2 job, you may qualify for:
              </p>

              <p className="text-sm text-white/60 font-semibold mb-8 italic">
                Not everyone qualifies. Check your eligibility below.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <button
                  onClick={scrollToQuiz}
                  className="btn-accent ripple text-lg !py-4 !px-8"
                >
                  Check If You Qualify
                </button>
                <a
                  href="tel:+18445030401"
                  className="btn-outline text-lg !py-4 !px-8"
                >
                  Call (844) 503-0401
                </a>
              </div>
            </div>

            {/* Right: Full-height image with floating badges */}
            <div className="hidden lg:block relative" style={{ overflow: "visible" }}>
              <div className="relative" style={{ overflow: "visible", height: "700px" }}>
                <img
                  src="/images/refund%20guy.png"
                  alt="Tax refund specialist"
                  className="absolute bottom-0 right-0 object-contain object-bottom"
                  style={{ height: "700px", width: "auto", maxWidth: "none" }}
                />

                {/* Floating Badge 1: $0 Filing - left side, below face */}
                <div className="floating-badge flex items-center gap-2" style={{ top: "490px", left: "-50px" }}>
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-text-primary">$0 Filing</p>
                    <p className="text-xs text-gray-800">Simple returns</p>
                  </div>
                </div>

                {/* Floating Badge 2: $7,000 Advance - right side, shoulder level */}
                <div className="floating-badge flex items-center gap-2" style={{ top: "210px", right: "100px", animationDelay: "0.5s" }}>
                  <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-text-primary">Up to $7,000</p>
                    <p className="text-xs text-gray-800">Refund advance</p>
                  </div>
                </div>

                {/* Floating Badge 3: No Fees - right side, lower */}
                <div className="floating-badge flex items-center gap-2" style={{ bottom: "250px", right: "10px", animationDelay: "1s" }}>
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-text-primary">No Fees</p>
                    <p className="text-xs text-gray-800">Pay nothing upfront</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: QUICK QUALIFIER ===== */}
      <section id="qualifier" className="py-12 md:py-16 bg-bg-light">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 reveal">
            <h2 className="section-title mb-3">
              See If You Qualify{" "}
              <span className="text-primary">(30 Seconds)</span>
            </h2>
            <p className="text-text-secondary">
              Answer 3 quick questions. No commitment required.
            </p>
          </div>

          {!quizComplete ? (
            <div className="reveal delay-100">
              <QualifierQuiz onComplete={() => setQuizComplete(true)} />
            </div>
          ) : (
            <div className="reveal delay-100">
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg mx-auto border border-gray-100 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  You May Qualify!
                </h3>
                <p className="text-text-secondary mb-6">
                  Based on your answers, you could be eligible for up to{" "}
                  <span className="font-bold text-primary">$7,000</span> in
                  refund advance with $0 filing.
                </p>
                <button
                  onClick={() => setShowForm(true)}
                  className="btn-primary ripple w-full text-center !py-4 text-lg"
                >
                  Pre-Qualify Now
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ===== SECTION 3: PAIN + SOLUTION ===== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center reveal">
            <h2 className="section-title mb-4">
              Don&apos;t Wait 21 Days for Your Refund
            </h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Most people file taxes and wait weeks for the IRS to process
              their return.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            <div className="card reveal delay-100 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-text-primary mb-1">File Today</h3>
              <p className="text-sm text-text-secondary">
                Walk in and file in one visit
              </p>
            </div>

            <div className="card reveal delay-200 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-text-primary mb-1">
                Approved in Minutes
              </h3>
              <p className="text-sm text-text-secondary">
                Fast approval process
              </p>
            </div>

            <div className="card reveal delay-300 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-text-primary mb-1">
                Get Money Faster
              </h3>
              <p className="text-sm text-text-secondary">
                Access your refund sooner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4 + 5: OFFER & PERFECT FOR YOU ===== */}
      <section className="relative py-20 md:py-28 text-white overflow-hidden">
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/office2.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(61,39,112,0.92) 0%, rgba(61,39,112,0.85) 50%, rgba(132,189,0,0.7) 100%)" }} />
        </div>

        <div className="relative max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Offer */}
            <div className="reveal">
              <span className="inline-block bg-white/15 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 border border-white/20">
                Limited Time Offer
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
                Get Up to $500 — Fast
              </h2>
              <p className="text-white/70 text-base mb-6 max-w-md">
                No waiting weeks. Get approved and access your money the same day.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: "&#10003;", text: "No credit check" },
                  { icon: "&#10003;", text: "$0 upfront cost" },
                  { icon: "&#10003;", text: "Direct deposit" },
                  { icon: "&#10003;", text: "Fast approval" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10"
                  >
                    <span className="w-6 h-6 bg-yellow-400/20 rounded-full flex items-center justify-center text-yellow-300 text-sm font-bold flex-shrink-0">&#10003;</span>
                    <span className="font-semibold text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowForm(true)}
                className="btn-accent btn-glow ripple text-lg !py-4 !px-10"
              >
                Pre-Qualify Now
              </button>

              <p className="text-xs text-white/50 mt-3">
                Advance amounts based on eligibility. Offered through partner banks.
              </p>
            </div>

            {/* Right: Perfect For You */}
            <div className="reveal delay-200">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/15">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-6">
                  This Is Perfect For You If...
                </h3>

                <div className="space-y-4">
                  {[
                    "You worked a W-2 job",
                    "You expect a tax refund",
                    "You want your money faster",
                    "You live in Memphis or nearby",
                  ].map((item, i) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 bg-white/10 rounded-xl px-5 py-4 border border-white/10 hover:bg-white/15 transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-base">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-white/50 mt-5 text-center">
                  Simple returns qualify for $0 filing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: TRUST ===== */}
      <section className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12 reveal">
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-4">
              Trusted by Memphis
            </span>
            <h2 className="section-title mb-4">
              Why Memphis Chooses TaxShield
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-lg font-extrabold text-text-primary">4.9/5</span>
            </div>
            <p className="text-sm text-text-secondary">
              Based on 148+ verified Google reviews
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              ), label: "15+ Years", sub: "Serving Memphis" },
              { icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ), label: "10,000+", sub: "Happy clients" },
              { icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ), label: "2 Offices", sub: "You can visit" },
              { icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ), label: "Honest", sub: "Transparent service" },
            ].map((badge) => (
              <div
                key={badge.label}
                className="card-enhanced reveal text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3 text-primary">
                  {badge.icon}
                </div>
                <p className="font-extrabold text-text-primary text-base">
                  {badge.label}
                </p>
                <p className="text-xs text-text-muted">{badge.sub}</p>
              </div>
            ))}
          </div>

          {/* Google Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {[
              {
                text: "Best tax service in Memphis! I walked in with my W-2 and left with my $7,000 advance approved the same day. Amber was amazing — explained everything clearly and made the process so easy.",
                name: "Tameka R.",
                time: "2 weeks ago",
                rating: 5,
              },
              {
                text: "I've been filing with TaxShield for 3 years now. They always get me the maximum refund and the advance options are a lifesaver during the holidays. Highly recommend to anyone in Memphis!",
                name: "James T.",
                time: "1 month ago",
                rating: 5,
              },
              {
                text: "Super friendly staff and fast service. I was nervous about my taxes but they walked me through everything. Got my advance in 30 minutes. Will definitely be coming back next year!",
                name: "Crystal M.",
                time: "3 weeks ago",
                rating: 5,
              },
            ].map((review) => (
              <div
                key={review.name}
                className="card-enhanced reveal group"
              >
                {/* Google icon + rating */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white rounded-full border border-gray-200 flex items-center justify-center">
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <span className="text-xs text-text-muted">{review.time}</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Review text */}
                <p className="text-sm text-text-primary leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-2.5 pt-3 border-t border-gray-100">
                  <div className="w-9 h-9 bg-primary/15 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-xs">
                      {review.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-primary">{review.name}</p>
                    <p className="text-[10px] text-text-muted flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      Memphis, TN
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Review Link */}
          <div className="text-center reveal">
            <a
              href="https://www.google.com/maps/place/TaxShield+Service"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-6 py-3 text-sm font-semibold text-text-primary hover:border-primary hover:shadow-md transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              View All Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: HOW IT WORKS ===== */}
      <section className="py-12 md:py-16 bg-bg-light">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 reveal">
            <h2 className="section-title mb-3">
              Simple 3-Step Process
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 max-w-3xl mx-auto">
            {[
              {
                step: "1",
                title: "Submit Your Info",
                desc: "Fill out the quick form or call us directly.",
              },
              {
                step: "2",
                title: "We Prepare Your Taxes",
                desc: "Our experts handle everything — fast and accurate.",
              },
              {
                step: "3",
                title: "Get Your Advance",
                desc: "Walk out with up to $7,000 the same day.",
              },
            ].map((item, i) => (
              <div
                key={item.step}
                className="process-step reveal"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="process-number">{item.step}</div>
                {i < 2 && <div className="process-connector" />}
                <h3 className="text-lg font-bold text-text-primary mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary max-w-[200px] mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: FINAL CTA ===== */}
      <section className="relative bg-gradient-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative py-14 md:py-20">
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 text-center reveal">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Don&apos;t Wait Weeks
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-lg mx-auto">
              Check if you qualify in seconds. No commitment.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <button
                onClick={() => setShowForm(true)}
                className="btn-accent ripple text-lg !py-4 !px-10 animate-pulse-glow"
              >
                Check If You Qualify
              </button>
              <a
                href="tel:+18445030401"
                className="btn-outline text-lg !py-4 !px-8"
              >
                Call (844) 503-0401
              </a>
            </div>

            <p className="text-sm text-white/50">
              No appointment needed. Walk-ins welcome.
            </p>
          </div>
        </div>
      </section>

      {/* ===== STICKY MOBILE CTA BAR ===== */}
      <div className="sticky-cta-bar">
        <button
          onClick={() => setShowForm(true)}
          className="flex-[2] bg-primary text-white font-bold py-3 px-4 rounded-xl text-center text-sm flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Check Qualify
        </button>
        <a
          href="tel:+18445030401"
          className="flex-1 bg-accent text-text-primary font-bold py-3 px-4 rounded-xl text-center text-sm"
        >
          Call Now
        </a>
      </div>

      {/* ===== LEAD FORM MODAL ===== */}
      {showForm && <LeadForm onClose={() => setShowForm(false)} />}
    </div>
  );
}
