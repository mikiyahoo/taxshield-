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

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center animate-fade-in-up">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-text-primary mb-2">You Qualify!</h3>
          <p className="text-text-secondary mb-6">
            A tax specialist will contact you shortly to confirm your eligibility.
          </p>
          <a href="tel:+18445030401" className="btn-primary ripple inline-flex items-center justify-center gap-2 w-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call (844) 503-0401 Now
          </a>
          <button onClick={onClose} className="mt-4 text-text-muted text-sm hover:text-text-secondary">
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl animate-fade-in-up flex flex-col md:flex-row max-h-[85vh]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 text-gray-400 hover:text-gray-600 bg-white/80 rounded-full p-1.5 backdrop-blur-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* LEFT PANEL: Trust + Context */}
        <div className="bg-gradient-brand text-white p-8 md:p-10 md:w-[40%] flex-shrink-0 flex flex-col justify-between overflow-y-auto">
          <div>
            <h3 className="text-xl font-bold mb-1">Before You Apply</h3>
            <p className="text-white/70 text-sm mb-6">What you can expect</p>

            <div className="space-y-4 mb-8">
              {[
                "Up to $7,000 refund advance",
                "$0 upfront filing (simple returns)",
                "No credit check required",
                "Instant advance options available",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-white/40 leading-relaxed mb-8">
              Advance amounts vary based on eligibility. Fees and terms may apply. Approval depends on expected refund and verification.
            </p>
          </div>

          {/* Contact Block */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-white/60">Call Us Anytime</p>
                <a href="tel:+18445030401" className="text-sm font-bold hover:text-yellow-300 transition-colors">(844) 503-0401</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-white/60">Email Support</p>
                <a href="mailto:support@taxshieldservice.com" className="text-sm font-bold hover:text-yellow-300 transition-colors">support@taxshieldservice.com</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-white/60">Memphis, TN</p>
                <p className="text-sm font-bold">Two Locations</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Form */}
        <div className="p-6 md:p-8 md:w-[60%] overflow-y-auto flex-1">
          {/* Form Header */}
          <div className="mb-5">
            <h3 className="text-xl font-bold text-text-primary mb-1">
              Check If You Qualify in 60 Seconds
            </h3>
            <p className="text-sm text-text-secondary">Simple, fast, and secure.</p>
          </div>

          {/* Progress */}
          <div className="flex items-center gap-2 mb-6">
            <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? "bg-primary" : "bg-gray-200"}`} />
            <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? "bg-primary" : "bg-gray-200"}`} />
            <span className="text-xs font-bold text-text-muted ml-2">Step {step} of 2</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {step === 1 ? (
              <>
                {/* Step 1: Quick Qualifiers */}
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Do you have W-2 income this year?
                  </label>
                  <div className="flex gap-3">
                    {["Yes", "No"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setW2(opt)}
                        className={`quiz-option flex-1 !py-3 ${w2 === opt ? "selected" : ""}`}
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
                  <div className="flex gap-3">
                    {["Yes", "No", "Not Sure"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setRefund(opt)}
                        className={`quiz-option flex-1 !py-3 ${refund === opt ? "selected" : ""}`}
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
                  className="btn-primary ripple w-full text-center !py-4 text-lg disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </>
            ) : (
              <>
                {/* Step 2: Full Form */}
                {/* Personal Info */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-text-primary mb-1.5">First Name</label>
                    <input type="text" required placeholder="John" className="w-full px-3 py-3 border border-gray-200 rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-primary mb-1.5">Last Name</label>
                    <input type="text" required placeholder="Smith" className="w-full px-3 py-3 border border-gray-200 rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-text-primary mb-1.5">Phone</label>
                    <input type="tel" required placeholder="(901) 555-0123" className="w-full px-3 py-3 border border-gray-200 rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-primary mb-1.5">Email</label>
                    <input type="email" placeholder="john@email.com" className="w-full px-3 py-3 border border-gray-200 rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-xs font-semibold text-text-primary mb-1.5">Address</label>
                  <input type="text" placeholder="123 Main St" className="w-full px-3 py-3 border border-gray-200 rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-text-primary mb-1.5">City</label>
                    <input type="text" placeholder="Memphis" className="w-full px-3 py-3 border border-gray-200 rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-primary mb-1.5">State</label>
                    <input type="text" placeholder="TN" className="w-full px-3 py-3 border border-gray-200 rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-primary mb-1.5">Zip</label>
                    <input type="text" placeholder="38118" className="w-full px-3 py-3 border border-gray-200 rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                  </div>
                </div>

                {/* Verification */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-text-primary mb-1.5">Last 4 SSN</label>
                    <input type="text" maxLength={4} placeholder="1234" className="w-full px-3 py-3 border border-gray-200 rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                    <p className="text-[10px] text-text-muted mt-1">Used only for verification</p>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-primary mb-1.5">Date of Birth</label>
                    <input type="date" className="w-full px-3 py-3 border border-gray-200 rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                  </div>
                </div>

                {/* Tax Info */}
                <div>
                  <label className="block text-xs font-semibold text-text-primary mb-1.5">Expected Refund Amount</label>
                  <input type="text" placeholder="$3,000" className="w-full px-3 py-3 border border-gray-200 rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                </div>

                {/* Submit */}
                <button type="submit" className="btn-primary ripple w-full text-center !py-4 text-lg">
                  Check My Eligibility
                </button>

                <div className="flex items-center justify-center gap-1 text-xs text-text-muted">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Your information is secure
                </div>

                {/* Form Footer Trust */}
                <div className="flex flex-wrap justify-center gap-4 pt-2 border-t border-gray-100">
                  {["No credit check", "No obligation", "Takes < 1 min"].map((item) => (
                    <span key={item} className="flex items-center gap-1 text-xs text-text-muted">
                      <svg className="w-3.5 h-3.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      {item}
                    </span>
                  ))}
                </div>
              </>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-end min-h-[500px] lg:min-h-[800px]">
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
            <div className="hidden lg:flex relative justify-center items-end overflow-visible">
              <div className="relative w-full">
                <img
                  src="/images/refund%20guy.png"
                  alt="Tax refund specialist"
                  className="w-full object-contain object-bottom"
                  style={{ height: "1360px", marginTop: "-200px" }}
                />

                {/* Floating Badge 1: $0 Filing */}
                <div className="floating-badge top-[15%] -left-4 flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-text-primary">$0 Filing</p>
                    <p className="text-xs text-text-muted">Simple returns</p>
                  </div>
                </div>

                {/* Floating Badge 2: $7,000 Advance */}
                <div className="floating-badge top-[8%] -right-4 flex items-center gap-2" style={{ animationDelay: "0.5s" }}>
                  <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-text-primary">Up to $7,000</p>
                    <p className="text-xs text-text-muted">Refund advance</p>
                  </div>
                </div>

                {/* Floating Badge 3: No Fees */}
                <div className="floating-badge bottom-[18%] -right-4 flex items-center gap-2" style={{ animationDelay: "1s" }}>
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-text-primary">No Fees</p>
                    <p className="text-xs text-text-muted">Pay nothing upfront</p>
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

      {/* ===== SECTION 4: OFFER ===== */}
      <section className="py-12 md:py-16 text-white" style={{ background: "#3d2770" }}>
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Get Up to $500 — Fast
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
              {[
                "No credit check",
                "$0 upfront cost",
                "Direct deposit available",
                "Fast approval",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-3"
                >
                  <svg className="w-5 h-5 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  <span className="font-semibold text-sm">{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="btn-accent ripple text-lg !py-4 !px-10 animate-pulse-glow"
            >
              Pre-Qualify Now
            </button>

            <p className="text-sm text-white/60 mt-4">
              Advance amounts based on eligibility. Offered through partner banks.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: WHO THIS IS FOR ===== */}
      <section className="py-12 md:py-16 text-white" style={{ background: "#3d2770" }}>
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
              This Is Perfect For You If...
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                "You worked a W-2 job",
                "You expect a tax refund",
                "You want your money faster",
                "You live in Memphis or nearby",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white/10 rounded-xl px-5 py-4"
                >
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-sm text-white/60">
              Simple returns qualify for $0 filing.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: TRUST ===== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 reveal">
            <h2 className="section-title mb-3">
              Why Memphis Chooses TaxShield
            </h2>
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="stars text-xl">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span className="font-bold text-text-primary">4.9/5</span>
            </div>
            <p className="text-sm text-text-secondary">
              148+ verified Google reviews
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: "&#128197;", label: "15+ Years", sub: "Serving Memphis" },
              { icon: "&#128101;", label: "Thousands", sub: "Happy clients" },
              { icon: "&#127970;", label: "2 Offices", sub: "You can visit" },
              { icon: "&#9989;", label: "Honest", sub: "Transparent service" },
            ].map((badge) => (
              <div
                key={badge.label}
                className="bg-bg-light rounded-xl p-5 text-center reveal"
              >
                <div className="text-2xl mb-2" dangerouslySetInnerHTML={{ __html: badge.icon }} />
                <p className="font-bold text-text-primary text-sm">
                  {badge.label}
                </p>
                <p className="text-xs text-text-muted">{badge.sub}</p>
              </div>
            ))}
          </div>

          {/* Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              {
                text: "They got me my refund faster than I expected. Super friendly and professional.",
                name: "Marcus J.",
                location: "Memphis, TN",
              },
              {
                text: "I got the $7,000 advance when other places said no. These people really care.",
                name: "Denise W.",
                location: "Memphis, TN",
              },
              {
                text: "Amber took care of everything. Walked in stressed, walked out smiling.",
                name: "Rachel M.",
                location: "Memphis, TN",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-bg-light rounded-xl p-5 reveal"
              >
                <div className="stars text-sm mb-3">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <p className="text-sm text-text-primary leading-relaxed mb-3">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-xs">
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-primary">
                      {review.name}
                    </p>
                    <p className="text-xs text-text-muted">
                      {review.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
