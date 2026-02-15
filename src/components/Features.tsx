import { ArrowRight, Shield, Wrench, Headphones, Sparkles } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Shield,
    title: "Təhlükəsizlik Zəmanəti",
    description: "Bütün məhsullarımız beynəlxalq təhlükəsizlik standartlarına uyğundur və çoxsaylı təhlükəsizlik sistemləri ilə təchiz edilib.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Wrench,
    title: "Professional Quraşdırma",
    description: "Sertifikatlaşdırılmış mütəxəssislərimiz tərəfindən peşəkar quraşdırma və montaj xidmətləri.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Headphones,
    title: "24/7 Texniki Dəstək",
    description: "Gündüldən asılı olmayaraq, ilin 365 günü fasiləsiz texniki dəstək və təcili təmir xidməti.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Sparkles,
    title: "Modernləşdirmə",
    description: "Köhnə lift sistemlərinin müasir texnologiyalarla yenilənməsi və enerji effektivliyinin artırılması.",
    color: "bg-orange-100 text-orange-600",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-wider uppercase mb-4">Niyə Biz?</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
            Professional Lift Həlləri
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            KasperLift olaraq, keyfiyyətli məhsullar və mükəmməl xidmət ilə müştərilərimizin
            etimadını qazanırıq.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            Bütün Xidmətlərimiz
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
