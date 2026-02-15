import { Users, Package, Utensils, DoorOpen, ArrowUp, ArrowUpDown, Check, ChevronRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: "passenger",
    icon: Users,
    title: "Sərnişin Liftləri",
    image: "/images/2.jpeg",
    shortDesc: "Yaşayış və kommersiya binaları üçün müasir dizaynlı liftlər",
    fullDesc: "Sərnişin liftlərimiz yaşayış kompleksləri, ofis binaları, otellər və digər kommersiya obyektləri üçün nəzərdə tutulub. Müasir texnologiyalar, enerji effektivliyi və yüksək təhlükəsizlik standartları ilə təchiz edilib.",
    specs: [
      { label: "Tutum", value: "4-21 nəfər" },
      { label: "Sürət", value: "1.0 - 3.0 m/s" },
      { label: "Yük qaldırma", value: "320 - 1600 kg" },
      { label: "Mərtəbə sayı", value: "2-40 mərtəbə" },
      { label: "Qaldırma hündürlüyü", value: "100 m qədər" },
    ],
    features: [
      "Enerji qənaətli sürücü sistemi",
      "Səssiz işləmə texnologiyası",
      "Təhlükəsizlik sensorları",
      "Fərdi kabin dizaynı",
      "Smart çağırış sistemi",
      "Generatörlə işləmə imkanı",
    ],
    applications: ["Yaşayış binaları", "Ofis mərkəzləri", "Otel və restoranlar", "Ticarət mərkəzləri"],
  },
  {
    id: "freight",
    icon: Package,
    title: "Yük Liftləri",
    image: "/images/7.png",
    shortDesc: "Ağır yük daşınması üçün güclü və dayanıqlı həllər",
    // ... (omitting bulky middle content if safely possible, but replace_file_content needs exact match. 
    // Wait, the tool definition says "TargetContent: This must be a unique substring". 
    // I can do them separately if I want to be safer or just do a big block. The big block is safer context-wise.)
    fullDesc: "Sənaye və kommersiya obyektləri üçün nəzərdə tutulmuş yük liftlərimiz, ağır yük daşınması tələblərini təmin edir. Yüksək davamlılıq və etibarlılıq ilə fərqlənir.",
    specs: [
      { label: "Yük qaldırma", value: "500 - 5000 kg" },
      { label: "Sürət", value: "0.25 - 1.0 m/s" },
      { label: "Kabin ölçüsü", value: "Fərdi dizayn" },
      { label: "Qapı tipi", value: "Vertikal/Horizontal" },
      { label: "İdarəetmə", value: "Düyməli/Avtomatik" },
    ],
    features: [
      "Güclü mühərrik sistemi",
      "Dəmir zəncir və ya kəmər sürücü",
      "Ağır iş yükünə dözümlülük",
      "Dəmir yuma qoruması",
      "Yüksəltmə tormoz sistemi",
      "Fərdi ölçü seçimləri",
    ],
    applications: ["Sənaye obyektləri", "Anbarlar", "Restoranlar", "Mağazalar", "Avtoparklar"],
  },
  {
    id: "kitchen",
    icon: Utensils,
    title: "Mətbəx Liftləri",
    image: "/images/1.jpeg",
    shortDesc: "Restoran və otellər üçün qida daşınma həlləri",
    fullDesc: "Restoran, otel və ictimai iaşə obyektləri üçün xüsusi dizayn edilmiş mətbəx liftləri. Qida təhlükəsizliyi standartlarına uyğun, sürətli və effektiv daşınma təmin edir.",
    specs: [
      { label: "Yük qaldırma", value: "50 - 300 kg" },
      { label: "Kabin ölçüsü", value: "Kompakt dizayn" },
      { label: "Sürət", value: "0.3 - 0.6 m/s" },
      { label: "Material", value:"Paslanmaz polad" },
      { label: "Təhlükəsizlik", value: "Antibakterial səth" },
    ],
    features: [
      "Paslanmaz polad kabin",
      "Asan təmizlənmə",
      "Sürətli çatdırılma",
      "Səssiz işləmə",
      "Mətbəx temperaturuna davamlı",
      "Antibakterial örtük",
    ],
    applications: ["Restoranlar", "Otellər", "Kafe və fast-food", "Xəstəxanalar"],
  },
  {
    id: "automatic-doors",
    icon: DoorOpen,
    title: "Avtomatik Qapılar",
    image: "/images/3.jpeg",
    shortDesc: "Hərəkət sensorlu müasir qapı sistemləri",
    fullDesc: "Bina girişləri və daxili məkanlar üçün avtomatik qapı sistemləri. Həm estetik, həm funksional dizayn ilə müxtəlif arxitektur tələblərinə uyğun həllər.",
    specs: [
      { label: "Qapı tipi", value: "Sürüşən/Fırlanan/Teleskopik" },
      { label: "Açma sürəti", value: "Tənzimlənən" },
      { label: "Sensor", value: "Radar/Hərəkət/Press" },
      { label: "Təhlükəsizlik", value: "Təhlükəsizlik sensoru" },
      { label: "Material", value: "Alüminium/Şüşə/Ayna" },
    ],
    features: [
      "Hərəkət sensoru ilə açılma",
      "Təhlükəsizlik kilidləri",
      "Enerji qənaətli motor",
      "Səssiz işləmə",
      "Fərdi dizayn seçimləri",
      "Uzaqdan idarəetmə",
    ],
    applications: ["Bina girişləri", "Ofis mərkəzləri", "Otel və restoranlar", "Ticarət mərkəzləri"],
  },
  {
    id: "escalator",
    icon: ArrowUp,
    title: "Eskalatorlar",
    image: "/images/5.jpeg",
    shortDesc: "Yüksək sərnişin axını üçün səmərəli həllər",
    fullDesc: "Alış-veriş mərkəzləri, hava limanları və böyük ictimai binalar üçün eskalator sistemləri. Yüksək sərnişin tutumu və dayanıqlıq ilə fərqlənir.",
    specs: [
      { label: "En", value: "600/800/1000 mm" },
      { label: "Sürət", value: "0.5 m/s" },
      { label: "Meyillilik", value: "30°/35°" },
      { label: "Sərnişin axını", value: "9000 nəfər/saat" },
      { label: "Motor gücü", value: "7.5-15 kW" },
    ],
    features: [
      "Yüksək sərnişin tutumu",
      "Enerji qənaətli sistem",
      "Avtomatik işləmə rejimi",
      "Təhlükəsizlik əyləcləri",
      "Paslanmaz polad qıraqlar",
      "Uzunömürlü zəncir",
    ],
    applications: ["Alış-veriş mərkəzləri", "Hava limanları", "Metro stansiyaları", "Böyük ofis binaları"],
  },
  {
    id: "travolator",
    icon: ArrowUpDown,
    title: "Travolatorlar",
    image: "/images/6.png",
    shortDesc: "Səviyyəli səyahət üçün horizontal nəqliyyat",
    fullDesc: "Hava limanları və böyük ticarət mərkəzləri üçün horizontallaşdırılmış hərəkət yolları. Uzun məsafələri rahat və sürətli qət etmək üçün ideal həll.",
    specs: [
      { label: "Sürət", value: "0.5 m/s" },
      { label: "En", value: "800/1000/1200 mm" },
      { label: "Meyillilik", value: "0°-6°" },
      { label: "Uzunluq", value: "Fərdi layihə" },
      { label: "Yük", value: "240 kg/m" },
    ],
    features: [
      "Səssiz və hamar işləmə",
      "Böyük ölçülü əşya daşıma",
      "Əlil arabalarına uyğun",
      "Yan qıraq təhlükəsizlikləri",
      "Avtomatik işləmə rejimi",
      "Uzunömürlü konstruksiya",
    ],
    applications: ["Hava limanları", "Böyük ticarət mərkəzləri", "Sərgi mərkəzləri", "Muzeylər"],
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center text-sm text-blue-100 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Ana Səhifə</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-white">Məhsullar</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Məhsullarımız</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Keyfiyyətli lift və eskalator sistemləri. Yaşayış binalarından sənaye
              obyektlərinə qədər bütün ehtiyaclara uyğun həllər.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16">
            {products.map((product, index) => (
              <div
                key={product.id}
                id={product.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Product Image */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-8">
                    <div className="aspect-[4/3] bg-white rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <product.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-blue-600 font-semibold">0{index + 1}</span>
                  </div>

                  <h2 className="text-3xl font-bold text-[#0f172a] mb-4">{product.title}</h2>
                  <p className="text-gray-600 text-lg mb-6">{product.fullDesc}</p>

                  {/* Specs */}
                  <div className="bg-slate-50 rounded-2xl p-6 mb-6">
                    <h3 className="font-semibold text-[#0f172a] mb-4">Texniki Xüsusiyyətlər</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {product.specs.map((spec, idx) => (
                        <div key={idx}>
                          <div className="text-sm text-gray-500">{spec.label}</div>
                          <div className="font-medium text-[#0f172a]">{spec.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-[#0f172a] mb-4">Əsas Xüsusiyyətlər</h3>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <Check className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applications */}
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {app}
                      </span>
                    ))}
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
