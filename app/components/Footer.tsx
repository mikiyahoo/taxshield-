import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-12">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-extrabold text-sm">TS</span>
              </div>
              <span className="text-xl font-bold">Tax Shield</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted Memphis tax preparation experts. Serving the community
              with honesty, professionalism, and maximum refund strategies for
              over 15 years.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/memphis-tax-prep" className="hover:text-white transition-colors">
                  Tax Preparation
                </Link>
              </li>
              <li>
                <Link href="/7000-refund-advance" className="hover:text-white transition-colors">
                  $7,000 Tax Advance
                </Link>
              </li>
              <li>
                <Link href="/irs-tax-help-memphis" className="hover:text-white transition-colors">
                  IRS Help
                </Link>
              </li>
              <li>
                <Link href="/1099-tax-filing-memphis" className="hover:text-white transition-colors">
                  1099 Tax Filing
                </Link>
              </li>
              <li>
                <Link href="/small-business-tax-preparation-memphis" className="hover:text-white transition-colors">
                  Small Business Tax
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <a href="tel:+18445030401" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (844) 503-0401
              </a>
              <a href="mailto:support@taxshieldservice.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@taxshieldservice.com
              </a>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p>3264 Austin Peay Hwy, Memphis, TN 38128</p>
                  <p>4226 Winchester Rd, Memphis, TN 38118</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Tax Shield. All rights reserved. |
            Memphis, TN
          </p>
        </div>
      </div>
    </footer>
  );
}
