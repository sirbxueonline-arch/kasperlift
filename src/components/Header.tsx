"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Ana Səhifə", href: "/" },
  { name: "Haqqımızda", href: "/about" },
  { name: "Məhsullar", href: "/products" },
  { name: "Xidmətlər", href: "/services" },
  { name: "Sertifikatlar", href: "/certificates" },
  { name: "Əlaqə", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span>Mon-Fri: 09:00 - 18:00</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+994502096440" className="flex items-center hover:text-accent-light transition-colors">
              <Phone className="w-4 h-4 mr-1" />
              +994 50 209 64 40
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={`transition-all duration-300 ${
        isScrolled ? "py-3" : "py-4"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center -my-4">
              <div className="relative h-20 w-64">
                <img
                  src="/images/logo.png"
                  alt="KasperLift"
                  className="object-contain w-full h-full"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-primary hover:text-accent font-medium transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-accent/25 flex items-center"
              >
                Qiymət Al
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-lg font-medium text-primary hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block w-full text-center bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full font-medium transition-all mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Qiymət Al
            </Link>
            <div className="pt-4 border-t border-gray-100">
              <a href="tel:+994502096440" className="flex items-center text-primary py-2">
                <Phone className="w-5 h-5 mr-2 text-accent" />
                +994 50 209 64 40
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
