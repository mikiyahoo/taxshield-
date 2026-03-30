import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "1099 Tax Filing Memphis TN | Gig & Self-Employment | TaxShield",
  description:
    "Expert 1099 tax filing in Memphis TN. Gig workers, freelancers, and self-employed — maximize your deductions and get up to a $7,000 refund advance. Call (844) 503-0401.",
  keywords: [
    "1099 tax filing memphis",
    "self employment tax memphis",
    "gig worker tax filing memphis",
    "freelancer tax preparation memphis",
  ],
  alternates: {
    canonical: "https://taxshieldservice.com/1099-tax-filing-memphis",
  },
};

export default function TaxFilingMemphisPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header currentPath="/1099-tax-filing-memphis" />

      <section className="bg-gradient-to-br from-green-50 to-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            1099 Tax Filing in <span className="text-green-500">Memphis, TN</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Freelancers, gig workers, and self-employed professionals — we specialize in maximizing your deductions and getting you the biggest refund possible.
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
