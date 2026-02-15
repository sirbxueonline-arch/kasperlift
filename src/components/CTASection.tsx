import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Layihəniz üçün Pulsuz Konsultasiya
          </h2>

          <p className="text-blue-100 text-lg mb-10 leading-relaxed">
            Lift və ya eskalator sistemləri ilə bağlı suallarınız var? Peşəkar komandamız
            sizə optimal həllər təklif etmək üçün hazırdır. Bizimlə əlaqə saxlayın.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group bg-white text-blue-700 px-8 py-4 rounded-full font-bold transition-all hover:shadow-xl flex items-center"
            >
              Qiymət Sorğusu Göndər
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="tel:+994502096440"
              className="group bg-blue-700/50 hover:bg-blue-700/70 text-white border border-white/30 px-8 py-4 rounded-full font-bold transition-all flex items-center backdrop-blur-sm"
            >
              <Phone className="w-5 h-5 mr-2" />
              +994 50 209 64 40
            </a>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-100">
            <div>Mon-Fri: 09:00 - 18:00</div>
          </div>
        </div>
      </div>
    </section>
  );
}
