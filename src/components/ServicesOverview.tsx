import Link from "next/link";
import { ArrowRight, ShoppingCart, Pencil, Settings, RefreshCw, Wrench, Phone } from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "Satış",
    description: "Dünyanın aparıcı istehsalçılarından keyfiyyətli lift və eskalator sistemlərinin satışı.",
    features: ["Geniş məhsul çeşidi", "Rəqabətli qiymətlər", "Zəmanət"],
  },
  {
    icon: Pencil,
    title: "Layihələndirmə",
    description: "Hər bir binaya uyğun fərdi layihə hazırlanması və texniki konsultasiya.",
    features: ["Fərdi həllər", "Texniki dəstək", "Optimallaşdırma"],
  },
  {
    icon: Settings,
    title: "Quraşdırma",
    description: "Sertifikatlaşdırılmış mütəxəssislər tərəfindən peşəkar quraşdırma xidməti.",
    features: ["Peşəkar komanda", "Tez quraşdırma", "Test və yoxlama"],
  },
  {
    icon: RefreshCw,
    title: "Modernləşdirmə",
    description: "Köhnə lift sistemlərinin müasir texnologiyalarla yenilənməsi.",
    features: ["Enerji qənaəti", "Təhlükəsizlik artımı", "Dizayn yeniləmə"],
  },
  {
    icon: Wrench,
    title: "Texniki Xidmət",
    description: "Müntəzəm texniki xidmət və profilaktik təmir işləri.",
    features: ["Planlı xidmət", "Ehtiyat hissələri", "Profilaktika"],
  },
  {
    icon: Phone,
    title: "Təcili Dəstək",
    description: "24/7 fasiləsiz təcili təmir və texniki dəstək xidməti.",
    features: ["24/7 xidmət", "Sürətli cavab", "Təcrübəli texniki"],
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">Xidmətlərimiz</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Hərtərəfli Xidmət
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Satışdan quraşdırmaya, texniki xidmətdən modernləşdirməyə qədər
            bütün proseslərdə yanınızdayıq.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-accent/20">
                <service.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold text-primary mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full font-semibold transition-colors"
          >
            Xidmətlərimiz haqqında ətraflı
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
