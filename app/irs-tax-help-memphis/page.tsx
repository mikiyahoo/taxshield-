import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function IrsHelpPage() {
  return (
    <>
      <Head>
        <title>IRS Help Memphis | Tax Problem Resolution | Tax Shield</title>
        <meta name="description" content="Memphis's trusted IRS problem resolution experts. Fast help with IRS letters, audits, liens, levies, and tax debt. Local Memphis experts with 15+ years experience." />
        <meta name="keywords" content="irs help memphis, tax problem resolution memphis, irs audit help memphis, tax debt relief memphis, tax shield memphis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://taxshieldservice.com/irs-tax-help-memphis" />
      </Head>
      <div className="min-h-screen bg-white text-black">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-gray-600 text-center">
            support@taxshieldservice.com
          </div>
        </div>
      </div>

      {/* Main Navigation - IRS Help Focused */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full mr-3">
                <Image
                  src="/images/taxshield-logo.webp"
                  alt="Tax Shield Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold">Tax Shield</span>
            </div>

            {/* Navigation Links - IRS Help Focused */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-500 transition-colors font-semibold">Home</Link>
              <Link href="/memphis-tax-prep" className="text-gray-700 hover:text-green-500 transition-colors">Tax Services</Link>
              <Link href="/7000-refund-advance" className="text-gray-700 hover:text-green-500 transition-colors">Tax Advance</Link>
              <Link href="/irs-tax-help-memphis" className="text-gray-700 hover:text-green-500 transition-colors font-semibold">IRS Help</Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button className="text-gray-700 hover:text-green-500" aria-label="Toggle menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Utility Section */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Have Any Questions?</span>
              </div>
              <div className="text-lg font-semibold">(844) 503-0401</div>
              <button className="bg-transparent border border-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors">
                FIND AN OFFICE
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Above the Fold - Hero Section */}
      <section className="bg-gradient-to-br from-red-50 via-white to-red-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                  Got a Letter from the IRS?'{' '}
                  <span className="text-red-600">We Can Help.</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professional Tax Experts Helping Memphis Clients{' '}
                  <span className="font-semibold">Resolve IRS Issues Fast</span>
                </p>
              </div>

              {/* High-Impact CTA - Mobile Optimized */}
              <div className="bg-white border-4 border-red-500 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-center space-x-4">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-2xl font-bold text-gray-900">📞 Speak To A Tax Expert Now</span>
                </div>
                <div className="mt-4 text-center">
                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors transform hover:scale-105 inline-flex items-center shadow-lg">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-xl">Call (844) 503-0401</span>
                  </button>
                </div>
              </div>

              {/* Urgency & Trust Elements */}
              <div className="flex flex-wrap gap-6 pt-6">
                <div className="flex items-center space-x-3 bg-red-100 px-4 py-2 rounded-full">
                  <span className="text-2xl">⚡</span>
                  <span className="font-semibold text-red-800">Fast Response</span>
                </div>
                <div className="flex items-center space-x-3 bg-red-100 px-4 py-2 rounded-full">
                  <span className="text-2xl">🛡️</span>
                  <span className="font-semibold text-red-800">IRS Expertise</span>
                </div>
                <div className="flex items-center space-x-3 bg-red-100 px-4 py-2 rounded-full">
                  <span className="text-2xl">🤝</span>
                  <span className="font-semibold text-red-800">Stress Relief</span>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-96 bg-gray-300 rounded-2xl overflow-hidden shadow-2xl border-4 border-red-200">
                <Image
                  src="/images/IMAGE-2025-06-11-14_07_39-reax3ascihfmubbf2nwa04jw2wwn4ggl7m5xexpg74.webp"
                  alt="IRS Tax Help Service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">🚨 We Know How Stressful IRS Issues Can Be</h2>
            <p className="text-xl text-gray-600">You're not alone. We've helped hundreds of Memphis clients just like you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">IRS Letters & Notices</h3>
                  <p className="text-gray-700">
                  Confused by confusing IRS letters? We'll help you understand what they mean 
                  and take the right action to resolve the issue quickly.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Back Taxes</h3>
                  <p className="text-gray-700">
                  Owe back taxes? We'll analyze your situation and create a payment plan 
                  that works for your budget while minimizing penalties and interest.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Audit Fears</h3>
                  <p className="text-gray-700">
                  Facing an audit? Don't panic. We'll represent you every step of the way, 
                  handling all communication with the IRS so you don't have to.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Payment Issues</h3>
                  <p className="text-gray-700">
                  Can't pay your tax bill? We'll negotiate with the IRS on your behalf to 
                  find payment solutions that fit your financial situation.
                </p>
              </div>
            </div>
          </div>

          {/* Pain CTA */}
          <div className="mt-16 text-center">
              <p className="text-lg text-gray-600 mb-8">
              <strong>Don't wait until penalties grow.</strong> The sooner you act, the better your options.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors transform hover:scale-105">
              Get Help Today
            </button>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">🧠 We Don't Just File Taxes — We Solve Tax Problems</h2>
            <p className="text-xl text-gray-600">Comprehensive IRS resolution services from Memphis tax experts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">IRS Communication Support</h3>
                    <p className="text-gray-600 mt-2">
                    We handle all IRS correspondence, ensuring proper responses and documentation 
                      to protect your rights and resolve issues efficiently.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Audit Assistance</h3>
                    <p className="text-gray-600 mt-2">
                    Complete audit representation including preparation, documentation, 
                      and direct communication with IRS auditors on your behalf.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Payment Plan Guidance</h3>
                    <p className="text-gray-600 mt-2">
                      We'll analyze your financial situation and negotiate the best payment 
                      arrangement with the IRS, whether it's an installment agreement or offer in compromise.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Business Tax Help</h3>
                    <p className="text-gray-600 mt-2">
                      Specialized assistance for business tax issues including payroll taxes, 
                      quarterly payments, and business audit representation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">⭐ Why Memphis Trusts Our Tax Problem Solutions</h2>
            <p className="text-xl text-gray-600">Real expertise, real results, real peace of mind</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">15+ Years Experience</h3>
            <p className="text-gray-600">
                Decades of experience resolving complex tax issues for Memphis individuals and businesses.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted Memphis Office</h3>
            <p className="text-gray-600">
                Local experts you can meet face-to-face. We're your neighbors, not a faceless call center.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Real Experts (Not Software)</h3>
            <p className="text-gray-600">
                Personalized attention from certified tax professionals who understand Memphis tax issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* High-Value CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Wait Until Penalties Grow
          </h2>
            <p className="text-xl text-red-100 mb-12 leading-relaxed">
            Every day you wait makes your situation worse. Interest and penalties continue to accumulate. 
            Let our Memphis tax experts stop the damage and create a solution that works for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors transform hover:scale-105">
              <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Get Help Today
            </button>
            <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-red-600 transition-colors">
              <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </button>
          </div>
          
          <div className="mt-8 text-red-100 text-lg">
            <p>📞 (844) 503-0401</p>
              <p className="text-red-200 mt-2">Available 9 AM - 6 PM, Monday - Friday</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Tax Shield</h3>
              <p className="text-gray-400">
                Your trusted Memphis tax problem resolution experts. We specialize in helping 
                individuals and businesses resolve IRS issues with personalized, professional service.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/memphis-tax-prep" className="hover:text-white transition-colors">IRS Audit Representation</Link></li>
                <li><Link href="/7000-refund-advance" className="hover:text-white transition-colors">Back Tax Resolution</Link></li>
                <li><Link href="/irs-tax-help-memphis" className="hover:text-white transition-colors">Payment Plan Negotiation</Link></li>
                <li><Link href="/irs-tax-help-memphis" className="hover:text-white transition-colors">IRS Letter Response</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>📞 (844) 503-0401</p>
                <p>📧 support@taxshieldservice.com</p>
                <p>📍 Two locations serving Memphis</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Tax Shield. All rights reserved. | Memphis, TN</p>
          </div>
        </div>
      </footer>
    </>
  );
}