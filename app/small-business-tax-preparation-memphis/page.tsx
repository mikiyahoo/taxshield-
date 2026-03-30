import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Small Business Tax Preparation Memphis TN | TaxShield",
  description:
    "Professional small business tax preparation in Memphis TN. LLC, sole proprietor, and S-Corp filings with maximum deduction strategies. Call (844) 503-0401 today.",
  keywords: [
    "small business tax preparation memphis",
    "business tax filing memphis tn",
    "llc tax preparation memphis",
    "sole proprietor tax memphis",
  ],
  alternates: {
    canonical: "https://taxshieldservice.com/small-business-tax-preparation-memphis",
  },
};

export default function SmallBusinessTaxPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header currentPath="/small-business-tax-preparation-memphis" />

      <section className="bg-gradient-to-br from-green-50 to-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Small Business Tax Preparation in <span className="text-green-500">Memphis, TN</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            LLCs, sole proprietors, and S-Corps — we handle your business tax filing so you can focus on running your business.
          </p>
          <a href="tel:+18445030401" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 transform inline-flex items-center shadow-lg">
            Call (844) 503-0401
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Full Page Coming Soon</h2>
          <p className="text-lg text-gray-600 mb-8">
            This page is under construction. In the meantime, call us or visit our{" "}
            <Link href="/memphis-tax-prep" className="text-green-600 font-semibold hover:underline">Tax Preparation</Link>{" "}
            page for details.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
