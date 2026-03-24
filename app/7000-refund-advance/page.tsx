import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function TaxAdvancePage() {
  return (
    <>
      <Head>
        <title>Tax Advance Memphis | Up to $7,000 Same Day | Tax Shield</title>
        <meta name="description" content="Get up to $7,000 tax advance with 0% APR options in Memphis. No credit check required. Same day funding available. Trusted Memphis tax advance experts since 2009." />
        <meta name="keywords" content="tax advance memphis, tax refund advance memphis, same day tax advance, no credit check tax advance, tax shield memphis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://taxshieldservice.com/7000-refund-advance" />
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

      {/* Main Navigation - Advance Focused */}
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

            {/* Navigation Links - Advance Focused */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-500 transition-colors font-semibold">Home</Link>
              <Link href="/memphis-tax-prep" className="text-gray-700 hover:text-green-500 transition-colors">Tax Services</Link>
              <Link href="/7000-refund-advance" className="text-gray-700 hover:text-green-500 transition-colors font-semibold">Tax Advance</Link>
              <Link href="/irs-tax-help-memphis" className="text-gray-700 hover:text-green-500 transition-colors">IRS Help</Link>
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

      {/* HERO SECTION - ABOVE THE FOLD */}
      <section className="bg-gradient-to-br from-green-500 via-green-600 to-green-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Hero Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight hero-headline">
                  Get Up To <span className="text-yellow-300">$7,000</span> Tax Advance Today
                </h1>
                <div className="space-y-4">
                  <p className="text-xl md:text-2xl text-green-50 font-semibold">
                    0% APR • No Credit Check Options • Walk Out With Money Same Day
                  </p>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <p className="text-sm text-green-100 italic">
                      ⚠️ Advance amounts based on eligibility. Funds timing may vary. Offered through partner banks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Primary CTA - Mobile Optimized */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-400 hover:bg-yellow-300 text-green-800 font-bold py-4 px-8 rounded-full text-lg transition-colors transform hover:scale-105 flex items-center justify-center shadow-lg">
                  <span className="mr-3">💰</span>
                  <span className="text-xl">Get My Advance Now</span>
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-4 px-8 rounded-full text-lg transition-colors">
                  <span className="mr-3">📞</span>
                  <span className="text-xl">Call (844) 503-0401</span>
                </button>
              </div>

              {/* Urgency & Trust Elements */}
              <div className="flex flex-wrap gap-6 pt-6">
                <div className="flex items-center space-x-3 bg-white bg-opacity-20 p-3 rounded-lg">
                  <span className="text-2xl">⚡</span>
                  <span className="text-sm font-semibold">Same Day Funding</span>
                </div>
                <div className="flex items-center space-x-3 bg-white bg-opacity-20 p-3 rounded-lg">
                  <span className="text-2xl">🛡️</span>
                  <span className="text-sm font-semibold">No Credit Check Options</span>
                </div>
                <div className="flex items-center space-x-3 bg-white bg-opacity-20 p-3 rounded-lg">
                  <span className="text-2xl">💸</span>
                  <span className="text-sm font-semibold">Up to $7,000</span>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md h-96 bg-white rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/IMAGE-2025-06-11-14_07_39-reax3ascihfmubbf2nwa04jw2wwn4ggl7m5xexpg74.webp"
                  alt="Tax Advance Service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN + SOLUTION SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Problem Side */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Need Money Before Your Refund Arrives?</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">❌ Got Denied Somewhere Else?</h3>
                  <p className="text-gray-600">Many places turn you away. We specialize in helping clients who've been denied elsewhere.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">❌ Tired of Waiting Weeks?</h3>
                  <p className="text-gray-600">Your bills don't wait. Why should you? Get your money when you need it.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">❌ Credit Issues Holding You Back?</h3>
                  <p className="text-gray-600">No credit check options available. Your past doesn't have to define your financial future.</p>
                </div>
              </div>
            </div>

            {/* Solution Side */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-8">We Help Memphis Clients Get Their Money FAST</h2>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">✅ Even When Others Can't</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  We understand Memphis. We know the challenges our community faces. And we have solutions that work when others fail.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500 text-xl">⚡</span>
                    <span className="font-semibold">Same Day Funding</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500 text-xl">🛡️</span>
                    <span className="font-semibold">Flexible Options</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500 text-xl">💸</span>
                    <span className="font-semibold">Up to $7,000</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500 text-xl">🤝</span>
                    <span className="font-semibold">Local Experts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY YOU WIN VS COMPETITORS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why You Win vs. Competitors</h2>
            <p className="text-xl text-gray-600">See the difference that Memphis expertise makes</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-4 px-6 text-lg font-semibold text-gray-900">Feature</th>
                    <th className="text-center py-4 px-6 text-lg font-semibold text-gray-900">You</th>
                    <th className="text-center py-4 px-6 text-lg font-semibold text-gray-900">Big Chains</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 text-left font-semibold text-gray-900">Max Advance</td>
                    <td className="py-4 px-6">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">$7,000</span>
                    </td>
                    <td className="py-4 px-6 text-gray-600">$3,500–$4,000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 text-left font-semibold text-gray-900">Credit Check</td>
                    <td className="py-4 px-6">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">No Options</span>
                    </td>
                    <td className="py-4 px-6 text-gray-600">Often Required</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 text-left font-semibold text-gray-900">Speed</td>
                    <td className="py-4 px-6">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">Same Day</span>
                    </td>
                    <td className="py-4 px-6 text-gray-600">Slower</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-left font-semibold text-gray-900">Service</td>
                    <td className="py-4 px-6">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">Real Experts</span>
                    </td>
                    <td className="py-4 px-6 text-gray-600">Software</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real reviews from Memphis clients who got their advance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-2">⭐⭐⭐⭐⭐</span>
                <span className="text-sm text-gray-600">Same day funding!</span>
              </div>
              <p className="text-gray-700 leading-relaxed italic mb-6">
                &ldquo;I came in and left with money same day. I couldn't believe how fast it was. They really saved me this month.&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">Sarah M.</div>
                  <div className="text-sm text-gray-500">Memphis, TN</div>
                </div>
                <div className="text-3xl">💸</div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-2">⭐⭐⭐⭐⭐</span>
                <span className="text-sm text-gray-600">Fast, easy, professional</span>
              </div>
              <p className="text-gray-700 leading-relaxed italic mb-6">
                &ldquo;Fast, easy, and professional. No pressure, no hidden fees. Just honest people helping me when I needed it most.&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">James T.</div>
                  <div className="text-sm text-gray-500">Memphis, TN</div>
                </div>
                <div className="text-3xl">🤝</div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-2">⭐⭐⭐⭐⭐</span>
                <span className="text-sm text-gray-600">They always get me the most</span>
              </div>
              <p className="text-gray-700 leading-relaxed italic mb-6">
                &ldquo;They always get me the most back. Even when other places said I wouldn't qualify, they found a way. Memphis people helping Memphis people.&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">Maria G.</div>
                  <div className="text-sm text-gray-500">Memphis, TN</div>
                </div>
                <div className="text-3xl">🏆</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* URGENCY SECTION */}
      <section className="py-20 bg-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="bg-white bg-opacity-20 p-8 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">⏰ Tax Season is Limited</h2>
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Advance approvals depend on timing. The sooner you apply, the better your chances of getting approved for the maximum amount.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="bg-yellow-400 hover:bg-yellow-300 text-red-800 font-bold py-4 px-8 rounded-full text-lg transition-colors transform hover:scale-105 shadow-lg">
                  Apply Now
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-800 font-bold py-4 px-8 rounded-full text-lg transition-colors">
                  Call (844) 503-0401
                </button>
              </div>
            </div>
            
            <div className="text-sm text-red-200">
              ⚠️ Advance amounts based on eligibility. Funds timing may vary. Offered through partner banks.
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Wait for Your Refund
          </h2>
          <p className="text-xl text-green-100 mb-12 leading-relaxed">
            Your bills don't wait. Your emergencies don't wait. Why should you? 
            Get the money you need today with Memphis expertise you can trust.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-green-800 font-bold py-4 px-8 rounded-full text-lg transition-colors transform hover:scale-105 shadow-lg">
              <span className="mr-3">💰</span>
              <span className="text-xl">Get My $7,000 Advance Now</span>
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-green-800 transition-colors">
              <span className="mr-3">📞</span>
              <span className="text-xl">Call (844) 503-0401</span>
            </button>
          </div>
          
          <div className="mt-8 text-green-200 text-sm">
            ⚠️ Advance amounts based on eligibility. Funds timing may vary. Offered through partner banks.
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
                Your trusted Memphis tax preparation and advance experts. 
                Serving the community with honesty, professionalism, and maximum solutions for over 15 years.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/memphis-tax-prep" className="hover:text-white transition-colors">Tax Services</Link></li>
                <li><Link href="/7000-refund-advance" className="hover:text-white transition-colors">Tax Advances</Link></li>
                <li><Link href="/irs-tax-help-memphis" className="hover:text-white transition-colors">Locations</Link></li>
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
    </div>
    </>
  );
}