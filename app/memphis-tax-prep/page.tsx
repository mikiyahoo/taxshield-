import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Tax Preparation Memphis TN | Fast Refunds & $7,000 Advance | TaxShield",
  description:
    "Professional tax preparation in Memphis TN. File your taxes with TaxShield and get up to a $7,000 refund advance with no credit check and no upfront fees. Call (844) 503-0401 today.",
  keywords: [
    "tax preparation memphis",
    "tax preparation memphis tn",
    "memphis tax preparer",
    "income tax filing memphis",
    "tax services memphis tn",
  ],
  alternates: {
    canonical: "https://taxshieldservice.com/memphis-tax-prep",
  },
  openGraph: {
    title: "Tax Preparation Memphis TN | Fast Refunds & $7,000 Advance | TaxShield",
    description:
      "Professional tax preparation in Memphis TN. File your taxes with TaxShield and get up to a $7,000 refund advance with no credit check and no upfront fees.",
    url: "https://taxshieldservice.com/memphis-tax-prep",
    siteName: "TaxShield Service",
    locale: "en_US",
    type: "website",
  },
};

export default function MemphisTaxPrepPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header currentPath="/memphis-tax-prep" />

      {/* Section 1 — Hero (Conversion Section) */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Professional Tax Preparation in <span className="text-green-500">Memphis, TN</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Fast, Accurate Tax Filing for Memphis Residents
            </h2>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
              At TaxShield Service, we make tax filing simple, fast, and stress-free. For over 15 years, we have helped residents across Memphis maximize their tax refunds and access money faster.
            </p>

            <div className="bg-green-500 text-white rounded-2xl p-6 md:p-8 mb-8 shadow-lg">
              <p className="text-xl md:text-2xl font-bold mb-2">
                File your taxes today and you may qualify for a refund advance up to <span className="text-yellow-300">$7,000</span> with 0% APR
              </p>
              <p className="text-green-100 text-lg">Available within minutes after filing.</p>
            </div>

            <p className="text-lg text-gray-600 mb-8">
              Whether you have a W-2 job, 1099 income, or self-employment earnings, our experienced tax professionals ensure your return is accurate and your refund is maximized.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:+18445030401"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 transform flex items-center justify-center shadow-lg"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (844) 503-0401
              </a>
              <Link
                href="/7000-refund-advance"
                className="bg-white border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center justify-center"
              >
                Check Refund Advance
              </Link>
            </div>

            {/* Trust Bar */}
            <div className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">15+</div>
                  <div className="text-sm text-gray-600">Years Serving Memphis</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">$7,000</div>
                  <div className="text-sm text-gray-600">Max Refund Advance</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">0%</div>
                  <div className="text-sm text-gray-600">APR Advance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Our Tax Preparation Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Tax Preparation Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide full-service tax preparation for individuals and families throughout Memphis and the Mid-South region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Individual Tax Filing */}
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Individual Tax Filing (Form 1040)</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Professional preparation of federal and state income tax returns with maximum refund optimization.
              </p>
            </div>

            {/* W-2 & 1099 Tax Filing */}
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">W-2 & 1099 Tax Filing</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We handle traditional employment income as well as gig economy and self-employment income.
              </p>
            </div>

            {/* Remote & Virtual Tax Filing */}
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Remote & Virtual Tax Filing</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Upload your documents securely and file your taxes without visiting an office.
              </p>
            </div>

            {/* Same-Day Tax Filing */}
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Same-Day Tax Filing</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our experienced tax professionals process your return quickly so you can receive your refund as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Get Up to $7,000 Refund Advance */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get Up to $7,000 Refund Advance
              </h2>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                One of the biggest advantages of filing with TaxShield Service is access to one of the largest tax refund advances available in the Memphis market.
              </p>
              <p className="text-lg text-green-100 mb-8">
                Instead of waiting the standard 21 days for the IRS refund, you can access your money right away.
              </p>
            </div>

            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Refund Advance Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-lg font-semibold">Up to $7,000 advance</span>
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-lg font-semibold">0% APR</span>
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-lg font-semibold">No credit check required</span>
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-lg font-semibold">Funds wired directly to your bank account</span>
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-lg font-semibold">Approval in minutes after filing</span>
                </li>
              </ul>

              <div className="mt-8 text-center">
                <Link
                  href="/7000-refund-advance"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors transform hover:scale-105 inline-block shadow-lg"
                >
                  Check Refund Advance
                </Link>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Advance amounts based on eligibility. Offered through partner banks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — No Out-of-Pocket Tax Filing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            No Out-of-Pocket Tax Filing
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Many clients worry about paying upfront tax preparation fees.
          </p>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">File Today. Pay Nothing Upfront.</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              With TaxShield, you can file your taxes with zero upfront cost.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Your preparation fee is simply deducted from your refund when the IRS processes your return. This allows you to file today without paying anything out of pocket.
            </p>
            <a
              href="tel:+18445030401"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors transform hover:scale-105 inline-block shadow-lg"
            >
              Call (844) 503-0401
            </a>
          </div>
        </div>
      </section>

      {/* Section 5 — Why Memphis Chooses TaxShield */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Memphis Chooses TaxShield
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Residents across Memphis and surrounding communities choose TaxShield for three reasons:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-md">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">15+ Years Serving Memphis</h3>
              <p className="text-gray-600 leading-relaxed">
                We are a trusted part of the Memphis community with deep local knowledge.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-md">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Industry-Leading Refund Advances</h3>
              <p className="text-gray-600 leading-relaxed">
                Our $7,000 advance at 0% APR is one of the highest available in the tax industry.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-md">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Honest, Transparent Service</h3>
              <p className="text-gray-600 leading-relaxed">
                No hidden fees, no surprises — just professional tax preparation with integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Areas We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Areas We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide tax preparation services across the Mid-South region.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {["Memphis", "Bartlett", "Germantown", "Collierville", "Millington", "Southaven", "West Memphis"].map((city) => (
              <div key={city} className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <svg className="w-6 h-6 text-green-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="font-semibold text-gray-900">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — Visit Our Memphis Office */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visit Our Memphis Office</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our tax professionals are ready to help you file quickly and securely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Location Details</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">4226 Winchester Rd<br />Memphis, TN 38118</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">(844) 503-0401</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Hours</p>
                    <p className="text-gray-600">
                      Monday - Friday: 9AM - 6PM<br />
                      Saturday: 9AM - 2PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg overflow-hidden">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Map</h3>
              <div className="bg-gray-200 rounded-xl h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.5!2d-89.8694!3d35.0694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDA0JzEwLjAiTiA4OcKwNTInMTAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don&apos;t Wait Weeks for Your Refund
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            File today and get access to your money faster.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:+18445030401"
              className="bg-white text-green-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors transform hover:scale-105 flex items-center justify-center shadow-lg"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (844) 503-0401
            </a>
            <a
              href="https://maps.google.com/?q=4226+Winchester+Rd+Memphis+TN+38118"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-green-600 transition-colors flex items-center justify-center"
            >
              Visit Our Office
            </a>
          </div>

          <p className="text-green-100 text-lg">
            Or start your return online with TaxShield today.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
