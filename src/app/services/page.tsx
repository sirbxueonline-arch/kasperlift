import Link from "next/link";
import { ChevronRight, ShoppingCart, Pencil, Settings, RefreshCw, Wrench, Phone, Clock, Shield, CheckCircle } from "lucide-react";

const services = [
  {
    id: "sales",
    icon: ShoppingCart,
    title: "Satış",
    subtitle: "Keyfiyyətli Lift və Eskalator Satışı",
    description: "Dünyanın aparıcı lift istehsalçılarından müxtəlif növ lift və eskalator sistemlərinin satışını həyata keçiririk. Hər bir məhsul beynəlxalq standartlara uyğun və keyfiyyət sertifikatları ilə təchiz edilib.",
    features: [
      "Geniş məhsul çeşidi - sərnişin, yük, mətbəx liftləri",
      "Dünya brendlərindən məhsullar",
      "Rəqabətli qişmətlər",
      "Zəmanət və servis dəstəyi",
      "Fərdi layihələndirmə imkanı",
      "Çatdırılma və quraşdırma xidməti",
    ],
    benefits: [
      "Beynəlxalq standartlara uyğun məhsullar",
      "Peşəkar məsləhət və konsultasiya",
      "Güzəştli ödəniş şərtləri",
      "24 ay zəmanət",
    ],
    image: "sales",
  },
  {
    id: "design",
    icon: Pencil,
    title: "Layihələndirmə",
    subtitle: "Professional Layihə və Konsultasiya",
    description: "Hər bir binanın özünəməxsus tələbləri var. Peşəkar mühəndislərimiz binanızın texniki parametrlərini nəzərə alaraq ən optimal lift həllərini layihələndirir.",
    features: [
      "Shaft (lift quyusu) dizaynı",
      "Yükləmə hesablamaları",
      "Elektrik xəttlərinin planlanması",
      "Təhlükəsizlik sistemlərinin inteqrasiyası",
      "3D vizualizasiya",
      "Texniki sənədləşmə",
    ],
    benefits: [
      "Fərdi yanaşma hər bir layihəyə",
      "Optimal məhsul seçimi",
      "Enerji effektivliyi hesablamaları",
      "Qanunvericilik tələblərinə uyğunluq",
    ],
    image: "design",
  },
  {
    id: "installation",
    icon: Settings,
    title: "Quraşdırma",
    subtitle: "Sertifikatlaşdırılmış Quraşdırma Xidməti",
    description: "Lift və eskalator sistemlərinin quraşdırılması tələb olunan mühərrik və mexaniki biliklər tələb edir. Sertifikatlaşdırılmış mütəxəssislərimiz peşəkar quraşdırma xidməti göstərir.",
    features: [
      "Profesional montaj komandası",
      "Mərtəbəli quraşdırma nəzarəti",
      "Elektrik və mexanika qoşulması",
      "Test və yoxlama prosesləri",
      "Təhlükəsizlik yoxlamaları",
      "İstifadəçi təlimi",
    ],
    benefits: [
      "Sürətli və keyfiyyətli quraşdırma",
      "Texniki təhlükəsizlik zəmanəti",
      "Quraşdırma sonrası dəstək",
      "Rəsmi təhvil-təslim sənədləri",
    ],
    image: "installation",
  },
  {
    id: "modernization",
    icon: RefreshCw,
    title: "Modernləşdirmə",
    subtitle: "Köhnə Liftlərin Yenilənməsi",
    description: "Köhnə lift sistemlərinizin modernləşdirilməsi onların ömrünü uzadır, təhlükəsizliyini artırır və enerji sərfiyyatını azaldır. Mövcud liftinizi müasir standartlara yüksəldirik.",
    features: [
      "Kabin yenilənməsi",
      "Sürücü sisteminə yeniləmə",
      "Qapı sistemlərinin dəyişdirilməsi",
      "İdarəetmə panellərinin yenilənməsi",
      "Təhlükəsizlik sistemlərinin artırılması",
      "Enerji qənaətli komponentlər",
    ],
    benefits: [
      "Yeni lift almaqdan 60% qənaət",
      "Enerji sərfiyyatının 40% azalması",
      "Təhlükəsizlik standartlarının yüksəldilməsi",
      "Bina dəyərinin artması",
    ],
    image: "modernization",
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Texniki Xidmət",
    subtitle: "Müntəzəm Qulluq və Profilaktika",
    description: "Lift və eskalatorların düzgün işləməsi üçün müntəzəm texniki xidmət vacibdir. Planlı profilaktik baxışlar və ehtiyat hissələri ilə liftinizin həmişə işlək vəziyyətdə qalmasını təmin edirik.",
    features: [
      "Aylıq baxış xidməti",
      "Fəsilələrarası profilaktika",
      "Ehtiyat hissələrinin dəyişdirilməsi",
      "Yağ və məhlul təminatı",
      "Texniki hesabatlar",
      "Zəmanətli təmir",
    ],
    benefits: [
      "Lift ömrünün uzadılması",
      "Təcili nasazlıqların azaldılması",
      "Qanuni tələblərə uyğunluq",
      "Prioritet servis dəstəyi",
    ],
    image: "maintenance",
  },
  {
    id: "emergency",
    icon: Phone,
    title: "Təcili Dəstək",
    subtitle: "24/7 Təcili Təmir Xidməti",
    description: "Liftinizdə qəza və ya nasazlıq baş verdikdə, peşəkar texniki komandamız 24 saat ərzində yanınızda olacaq. Sürətli və effektiv təmir xidməti təklif edirik.",
    features: [
      "24/7 çağırış mərkəzi",
      "30 dəqiqə ərzində çatma",
      "Peşəkar texniki heyət",
      "Ehtiyat hissə anbarı",
      "Müqaviləli xidmət paketləri",
      "Telefon dəstəyi",
    ],
    benefits: [
      "Fasiləsiz iş rejimi",
      "Sürətli problem həlli",
      "Müqaviləli müştərilərə prioritet",
      "Sərfəli servis paketləri",
    ],
    image: "emergency",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-accent to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center text-sm text-accent-light/90 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Ana Səhifə</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-white">Xidmətlər</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Xidmətlərimiz</h1>
            <p className="text-xl text-accent-light/90 leading-relaxed">
              Lift və eskalator sistemləri ilə bağlı satışdan quraşdırmaya,
              texniki xidmətdən modernləşdirməyə qədər tam xidmət spektri.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">Hərtərəfli Xidmət</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Professional Lift Xidmətləri
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Satışdan quraşdırmaya, texniki xidmətdən təcili dəstəyə qədər
              bütün proseslərdə professional komandamız yanınızdadır.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Service Content */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-accent font-semibold">0{index + 1}</span>
                  </div>

                  <h2 className="text-3xl font-bold text-primary mb-2">{service.title}</h2>
                  <p className="text-accent font-medium mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-8">{service.description}</p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-primary mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 text-accent mr-2" />
                        Xidmətlərimiz
                      </h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-gray-600 text-sm flex items-start">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-1.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                      <h3 className="font-semibold text-primary mb-3">Avantajlar</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-gray-600 text-sm flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Service Image */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-gradient-to-br from-accent-light/20 to-accent-light/5 rounded-3xl p-8">
                    <div className="aspect-[4/3] bg-white rounded-2xl shadow-lg flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center shadow-xl mb-6">
                          <service.icon className="w-16 h-16 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
