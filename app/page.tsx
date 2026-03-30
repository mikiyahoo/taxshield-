"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
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

function QualifierQuiz() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const totalSteps = 3;

  const questions = [
    {
      question: "Are you filing a tax return this year?",
      options: ["Yes", "Not Sure Yet"],
    },
    {
      question: "Are you expecting a refund?",
      options: ["Yes", "No", "Not Sure"],
    },
    {
      question: "Would you like to get your refund faster?",
      options: ["Yes, Absolutely", "Tell Me More"],
    },
  ];

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({ ...prev, [step]: answer }));
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const isComplete = step === totalSteps && answers[totalSteps];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 max-w-xl mx-auto border border-gray-100">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-3 mb-8">
        {[1, 2, 3].map((s, i) => (
          <div key={s} className="flex items-center gap-3">
            <div
              className={`progress-step ${s <= step ? "active" : "inactive"}`}
            >
              {s <= step ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                s
              )}
            </div>
            {i < 2 && (
              <div
                className={`progress-line ${s < step ? "active" : "inactive"}`}
              />
            )}
          </div>
        ))}
      </div>

      {!isComplete ? (
        <>
          <p className="text-sm font-semibold text-primary mb-2 text-center">
            Step {step} of {totalSteps}
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-text-primary text-center mb-6">
            {questions[step - 1].question}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {questions[step - 1].options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                className={`quiz-option ${
                  answers[step] === opt ? "selected" : ""
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-text-primary mb-2">
            You May Qualify!
          </h3>
          <p className="text-text-secondary mb-6">
            Based on your answers, you could be eligible for up to{" "}
            <span className="font-bold text-primary">$7,000</span> in refund
            advance.
          </p>
          <a
            href="tel:+18445030401"
            className="btn-primary ripple inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call (844) 503-0401 Now
          </a>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const containerRef = useReveal();

  return (
    <div ref={containerRef} className="min-h-screen bg-bg-light">
      {/* ===== HEADER ===== */}
      <Header currentPath="/" />

      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-gradient-brand text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-[1140px] mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="animate-fade-in-up">
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="trust-badge !bg-white/15 !border-white/20 !text-white">
                  <span className="stars">&#9733;</span> 148+ Reviews
                </span>
                <span className="trust-badge !bg-white/15 !border-white/20 !text-white">
                  &#128205; 2 Memphis Locations
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-[56px] font-extrabold hero-headline mb-6">
                Get Up To{" "}
                <span className="text-yellow-300">$7,000</span>{" "}
                Refund Advance
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg leading-relaxed">
                Fast, accurate tax filing with maximum refund strategies. Trusted
                by Memphis families for over 15 years.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:+18445030401"
                  className="btn-accent ripple inline-flex items-center justify-center gap-2 !text-lg !py-4 !px-8"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call (844) 503-0401
                </a>
                <a
                  href="#qualifier"
                  className="btn-outline inline-flex items-center justify-center gap-2"
                >
                  Check If You Qualify
                </a>
              </div>

              {/* Quick Trust Signals */}
              <div className="flex flex-wrap gap-6 text-sm text-white/80">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  No Credit Check Options
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Same-Day Funding
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  15+ Years Experience
                </span>
              </div>
            </div>

            {/* Right: Image / Visual */}
            <div className="relative animate-slide-right hidden lg:block">
              <div className="relative w-full max-w-md ml-auto">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/office.webp"
                    alt="Tax Shield Memphis Office"
                    width={500}
                    height={500}
                    className="w-full h-80 object-cover"
                    priority
                  />
                </div>
                {/* Floating Badge */}
                <div className="floating-badge -bottom-6 -left-6 flex items-center gap-2">
                  <span className="text-2xl">&#128176;</span>
                  <div>
                    <p className="text-sm font-extrabold text-primary">
                      Up to $7,000
                    </p>
                    <p className="text-xs text-text-secondary">
                      Advance Available
                    </p>
                  </div>
                </div>
                {/* Floating Rating */}
                <div className="floating-badge -top-4 -right-4 !bg-primary !text-white !border-0">
                  <span className="stars !text-yellow-300">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                  <span className="text-sm font-bold ml-1">4.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUALIFIER SECTION ===== */}
      <section id="qualifier" className="section-padding bg-white">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 reveal">
            <h2 className="section-title mb-4">
              Check If You Qualify in{" "}
              <span className="text-primary">60 Seconds</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-xl mx-auto">
              Answer 3 quick questions to see if you are eligible for up to
              $7,000 in refund advance.
            </p>
            <div className="section-divider" />
          </div>
          <div className="reveal delay-200">
            <QualifierQuiz />
          </div>
        </div>
      </section>

      {/* ===== BENEFITS / OFFER CARDS ===== */}
      <section className="section-padding bg-bg-light">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 reveal">
            <h2 className="section-title mb-4">
              Why Memphis Chooses{" "}
              <span className="text-primary">Tax Shield</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-xl mx-auto">
              We have helped thousands of families get the maximum refund they
              deserve.
            </p>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="card reveal delay-100 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                Up to $7,000 Advance
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Walk out with money the same day. No waiting weeks for your
                refund to arrive.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card reveal delay-200 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                No Credit Check Options
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Past credit issues? No problem. We have flexible options to help
                you qualify.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card reveal delay-300 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                Real Local Experts
              </h3>
              <p className="text-text-secondary leading-relaxed">
                15+ years serving Memphis. Real people who treat you like family,
                not a number.
              </p>
            </div>

            {/* Card 4 */}
            <div className="card reveal delay-100 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                Fast Turnaround
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Most returns completed in one visit. Get in, get it done, get
                your money.
              </p>
            </div>

            {/* Card 5 */}
            <div className="card reveal delay-200 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                Maximum Refund Guarantee
              </h3>
              <p className="text-text-secondary leading-relaxed">
                We find every deduction and credit to get you the biggest refund
                possible.
              </p>
            </div>

            {/* Card 6 */}
            <div className="card reveal delay-300 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                2 Convenient Locations
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Austin Peay and Winchester. Walk-ins welcome, no appointment
                needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section className="section-padding bg-white">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 reveal">
            <h2 className="section-title mb-4">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-xl mx-auto">
              Getting your taxes done and your advance is simple.
            </p>
            <div className="section-divider" />
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-4">
            {/* Step 1 */}
            <div className="process-step reveal delay-100">
              <div className="process-number">1</div>
              <div className="process-connector" />
              <h3 className="text-lg font-bold text-text-primary mb-2">
                Walk In or Call
              </h3>
              <p className="text-sm text-text-secondary max-w-[200px] mx-auto">
                Visit one of our 2 Memphis locations or call to get started.
              </p>
            </div>

            {/* Step 2 */}
            <div className="process-step reveal delay-200">
              <div className="process-number">2</div>
              <div className="process-connector" />
              <h3 className="text-lg font-bold text-text-primary mb-2">
                We File Your Taxes
              </h3>
              <p className="text-sm text-text-secondary max-w-[200px] mx-auto">
                Our experts prepare your return and find every deduction.
              </p>
            </div>

            {/* Step 3 */}
            <div className="process-step reveal delay-300">
              <div className="process-number">3</div>
              <div className="process-connector" />
              <h3 className="text-lg font-bold text-text-primary mb-2">
                Get Your Advance
              </h3>
              <p className="text-sm text-text-secondary max-w-[200px] mx-auto">
                Qualify for up to $7,000 and walk out with money same day.
              </p>
            </div>

            {/* Step 4 */}
            <div className="process-step reveal delay-400">
              <div className="process-number">4</div>
              <h3 className="text-lg font-bold text-text-primary mb-2">
                Relax & Enjoy
              </h3>
              <p className="text-sm text-text-secondary max-w-[200px] mx-auto">
                Your refund arrives when the IRS processes your return.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST / REVIEWS SECTION ===== */}
      <section className="section-padding bg-bg-light">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 reveal">
            <h2 className="section-title mb-4">
              What Memphis <span className="text-primary">Says</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="stars text-2xl">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span className="text-lg font-bold text-text-primary">4.9/5</span>
            </div>
            <p className="text-text-secondary">
              Based on 148+ verified Google reviews
            </p>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Review 1 */}
            <div className="card reveal delay-100">
              <div className="stars mb-3">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="text-text-primary leading-relaxed mb-5">
                &ldquo;Amber is phenomenal. She always takes care of me and gets
                me the maximum refund. I have been coming here for years and
                would not go anywhere else.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">RM</span>
                </div>
                <div>
                  <p className="font-bold text-sm text-text-primary">
                    Rachel M.
                  </p>
                  <p className="text-xs text-text-muted">Memphis, TN</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="card reveal delay-200">
              <div className="stars mb-3">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="text-text-primary leading-relaxed mb-5">
                &ldquo;They treat customers like family. Fast, professional, and
                honest. I walked in worried and left with a big smile and money
                in my pocket.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">JT</span>
                </div>
                <div>
                  <p className="font-bold text-sm text-text-primary">
                    James T.
                  </p>
                  <p className="text-xs text-text-muted">Memphis, TN</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="card reveal delay-300">
              <div className="stars mb-3">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="text-text-primary leading-relaxed mb-5">
                &ldquo;I got approved for the $7,000 advance when other places
                said no. These people really care about helping Memphis families.
                Highly recommend!&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">DW</span>
                </div>
                <div>
                  <p className="font-bold text-sm text-text-primary">
                    Denise W.
                  </p>
                  <p className="text-xs text-text-muted">Memphis, TN</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges Row */}
          <div className="flex flex-wrap justify-center gap-4 reveal delay-300">
            <div className="trust-badge">
              <svg
                className="w-5 h-5 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              IRS Authorized e-File Provider
            </div>
            <div className="trust-badge">
              <svg
                className="w-5 h-5 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              148+ 5-Star Reviews
            </div>
            <div className="trust-badge">
              <svg
                className="w-5 h-5 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              15+ Years Serving Memphis
            </div>
            <div className="trust-badge">
              <svg
                className="w-5 h-5 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              2 Memphis Locations
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA SECTION ===== */}
      <section className="relative bg-gradient-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative section-padding">
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 text-center">
            <div className="reveal">
              <span className="inline-block bg-white/15 text-white text-sm font-bold px-4 py-2 rounded-full mb-6 border border-white/20">
                &#9888; Limited-Time Advance Availability
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
                Do not Wait for Your Refund
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                Your bills do not wait. Your emergencies do not wait. Get up to
                $7,000 today with Memphis expertise you can trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="tel:+18445030401"
                  className="btn-accent ripple inline-flex items-center justify-center gap-2 !text-lg !py-4 !px-10 animate-pulse-glow"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call (844) 503-0401 Now
                </a>
                <a
                  href="https://maps.google.com/?q=3264+Austin+Peay+Hwy+Memphis+TN+38128"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Walk In Today
                </a>
              </div>
              <p className="text-sm text-white/60">
                No appointment needed. Walk-ins welcome at both locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />

      {/* ===== STICKY MOBILE CTA BAR ===== */}
      <div className="sticky-cta-bar">
        <a
          href="tel:+18445030401"
          className="flex-1 bg-primary text-white font-bold py-3 px-4 rounded-xl text-center text-sm flex items-center justify-center gap-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          Call Now
        </a>
        <a
          href="#qualifier"
          className="flex-1 bg-accent text-text-primary font-bold py-3 px-4 rounded-xl text-center text-sm"
        >
          Check Qualify
        </a>
      </div>
    </div>
  );
}
