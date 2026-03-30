"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const servicesLinks = [
  { href: "/memphis-tax-prep", label: "Tax Preparation" },
  { href: "/memphis-tax-refund", label: "Tax Refund Advance" },
  { href: "/1099-tax-filing-memphis", label: "1099 Tax Filing" },
  { href: "/small-business-tax-preparation-memphis", label: "Small Business Tax" },
  { href: "/irs-tax-help-memphis", label: "IRS Help" },
];

const locationsLinks = [
  { href: "/austin-peay", label: "Austin Peay", address: "3264 Austin Peay Hwy" },
  { href: "/winchester", label: "Winchester", address: "4226 Winchester Rd" },
];

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function Dropdown({
  label,
  children,
  isActive,
}: {
  label: string;
  children: React.ReactNode;
  isActive?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 text-sm font-semibold transition-colors py-2 ${
          isActive
            ? "text-primary"
            : "text-text-secondary hover:text-primary"
        }`}
      >
        {label}
        <ChevronDown
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[220px] z-50 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}

export default function Header({ currentPath }: { currentPath?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  const isServicesActive = servicesLinks.some((l) => currentPath === l.href);
  const isLocationsActive = locationsLinks.some((l) => currentPath === l.href);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-extrabold text-sm">TS</span>
            </div>
            <span className="text-xl font-bold text-text-primary">Tax Shield</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-semibold transition-colors ${
                currentPath === "/" ? "text-primary" : "text-text-secondary hover:text-primary"
              }`}
            >
              Home
            </Link>

            <Dropdown label="Services" isActive={isServicesActive}>
              {servicesLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {}}
                  className={`block px-4 py-2.5 text-sm transition-colors ${
                    currentPath === link.href
                      ? "text-primary font-semibold bg-primary/5"
                      : "text-text-secondary hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </Dropdown>

            <Dropdown label="Locations" isActive={isLocationsActive}>
              {locationsLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {}}
                  className={`block px-4 py-2.5 transition-colors ${
                    currentPath === link.href
                      ? "bg-primary/5"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <p className={`text-sm font-semibold ${
                    currentPath === link.href ? "text-primary" : "text-text-primary"
                  }`}>
                    {link.label}
                  </p>
                  <p className="text-xs text-text-muted">{link.address}</p>
                </Link>
              ))}
            </Dropdown>

            <Link
              href="/7000-refund-advance"
              className={`text-sm font-semibold transition-colors ${
                currentPath === "/7000-refund-advance"
                  ? "text-primary"
                  : "text-text-secondary hover:text-primary"
              }`}
            >
              Tax Advance
            </Link>


          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+18445030401"
              className="hidden md:flex items-center gap-2 text-sm font-bold text-text-primary"
            >
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (844) 503-0401
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-text-secondary hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 animate-fade-in">
            <div className="space-y-1">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                  currentPath === "/" ? "text-primary bg-primary/5" : "text-text-secondary hover:bg-gray-50"
                }`}
              >
                Home
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                    isServicesActive ? "text-primary bg-primary/5" : "text-text-secondary hover:bg-gray-50"
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="ml-4 space-y-1 mt-1">
                    {servicesLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                          currentPath === link.href
                            ? "text-primary font-semibold bg-primary/5"
                            : "text-text-secondary hover:bg-gray-50"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Locations Dropdown */}
              <div>
                <button
                  onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                    isLocationsActive ? "text-primary bg-primary/5" : "text-text-secondary hover:bg-gray-50"
                  }`}
                >
                  Locations
                  <ChevronDown
                    className={`transition-transform duration-200 ${mobileLocationsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileLocationsOpen && (
                  <div className="ml-4 space-y-1 mt-1">
                    {locationsLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-4 py-2.5 rounded-lg transition-colors ${
                          currentPath === link.href
                            ? "bg-primary/5"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <p className={`text-sm font-semibold ${
                          currentPath === link.href ? "text-primary" : "text-text-primary"
                        }`}>
                          {link.label}
                        </p>
                        <p className="text-xs text-text-muted">{link.address}</p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/7000-refund-advance"
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                  currentPath === "/7000-refund-advance" ? "text-primary bg-primary/5" : "text-text-secondary hover:bg-gray-50"
                }`}
              >
                Tax Advance
              </Link>



              <div className="pt-3 border-t border-gray-100 mt-3">
                <a
                  href="tel:+18445030401"
                  className="flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-4 rounded-xl text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call (844) 503-0401
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
