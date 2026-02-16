import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, Facebook, Instagram, Linkedin } from "lucide-react";

const quickLinks = [
  { name: "Ana Səhifə", href: "/" },
  { name: "Haqqımızda", href: "/about" },
  { name: "Məhsullar", href: "/products" },
  { name: "Xidmətlər", href: "/services" },
  { name: "Sertifikatlar", href: "/certificates" },
  { name: "Əlaqə", href: "/contact" },
];

const services = [
  "Lift Satışı",
  "Layihələndirmə",
  "Quraşdırma",
  "Modernləşdirmə",
  "Texniki Xidmət",
  "Təcili Təmir",
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block mb-8">
              <div className="relative w-48 h-48 bg-white rounded-2xl flex items-center justify-center overflow-hidden">
                 <img
                  src="/images/KLL.png"
                  alt="KasperLift"
                  className="object-contain w-full h-full p-2"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              16+ illik təcrübə ilə Azərbaycanın aparıcı lift və eskalator şirkəti.
              Keyfiyyətli məhsullar və professional xidmət.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/kasper.lift/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/kasper_lift_llc/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/kasper-lift/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Sürətli Keçidlər</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowUpRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Xidmətlərimiz</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Əlaqə</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent-light mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Ələskər Qayıbov Küçəsi 10, Bakı, AZ
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent-light flex-shrink-0" />
                <div className="text-sm">
                  <div className="text-gray-300">Satış: +994 50 209 64 40</div>
                  <div className="text-gray-300">Texniki: +994 77 272 50 50</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent-light flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  B.e - Cümə: 09:00 - 18:00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} KasperLift MMC. Bütün hüquqlar qorunur.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">Məxfilik Siyasəti</Link>
              <Link href="#" className="hover:text-white transition-colors">İstifadə Şərtləri</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
