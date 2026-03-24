import Link from "next/link";

export default function MemphisTaxPrepPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Main Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-xl font-bold">Tax Shield</span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-500 transition-colors font-semibold">Home</Link>
              <Link href="/memphis-tax-prep" className="text-gray-700 hover:text-green-500 transition-colors font-semibold">Tax Services</Link>
              <Link href="/7000-refund-advance" className="text-gray-700 hover:text-green-500 transition-colors">Tax Advance</Link>
              <Link href="/irs-tax-help-memphis" className="text-gray-700 hover:text-green-500 transition-colors">IRS Help</Link>
            </nav>

            {/* Utility Section */}
            <div className="flex items-center space-x-4">
              <div className="text-lg font-semibold">(844) 503-0401</div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Memphis Tax Experts You Can Trust –{' '}
              <span className="text-green-500">15+ Years Experience</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mt-4">
              Professional Tax Preparation &bull; Maximum Refund &bull; Local Experts You Can Meet Today
            </p>
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
                Your trusted Memphis tax preparation experts. Serving the community with honesty, 
                professionalism, and maximum refund strategies for over 15 years.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/memphis-tax-prep" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/7000-refund-advance" className="hover:text-white transition-colors">Tax Advance</Link></li>
                <li><Link href="/irs-tax-help-memphis" className="hover:text-white transition-colors">IRS Help</Link></li>
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
  );
}
