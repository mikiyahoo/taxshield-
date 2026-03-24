import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="text-xl font-bold text-green-600">Tax Shield</Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Choose Your Location</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/austin-peay" className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow block">
            <h2 className="text-2xl font-bold mb-2">Austin Peay</h2>
            <p className="text-gray-600">3264 Austin Peay Hwy, Memphis, TN 38128</p>
          </Link>
          
          <Link href="/winchester" className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow block">
            <h2 className="text-2xl font-bold mb-2">Winchester</h2>
            <p className="text-gray-600">4226 Winchester Rd, Memphis, TN 38118</p>
          </Link>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-6">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/memphis-tax-prep" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow block text-center">
              <h3 className="font-bold text-lg">Tax Preparation</h3>
            </Link>
            <Link href="/7000-refund-advance" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow block text-center">
              <h3 className="font-bold text-lg">Tax Advance</h3>
            </Link>
            <Link href="/irs-tax-help-memphis" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow block text-center">
              <h3 className="font-bold text-lg">IRS Help</h3>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}