import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Package, Utensils, DoorOpen, ArrowUp, ArrowUpDown } from "lucide-react";

const products = [
  {
    icon: Users,
    title: "Sərnişin Liftləri",
    description: "Müasir dizaynlı, rahat və təhlükəsiz sərnişin liftləri yaşayış və kommersiya binaları üçün.",
    image: "/images/2.jpeg",
    features: ["4-21 nəfər tutumu", "1-3 m/s sürət", "Enerji effektivliyi"],
  },
  {
    icon: Package,
    title: "Yük Liftləri",
    description: "Ağır yük daşınması üçün nəzərdə tutulmuş güclü və dayanıqlı yük liftləri.",
    image: "/images/7.png",
    features: ["5000 kg-a qədər", "Geniş kabin", "Sənaye üçün"],
  },
  {
    icon: Utensils,
    title: "Mətbəx Liftləri",
    description: "Restoran və otellər üçün xüsusi olaraq dizayn edilmiş qida daşınma liftləri.",
    image: "/images/1.jpeg",
    features: ["Qida təhlükəsizliyi", "Sürətli çatdırılma", "Kompakt dizayn"],
  },
  {
    icon: DoorOpen,
    title: "Avtomatik Qapılar",
    description: "Həm estetik, həm də funksional avtomatik qapı sistemləri bütün növ binalar üçün.",
    image: "/images/3.jpeg",
    features: ["Hərəkət sensoru", "Təhlükəsizlik kilidləri", "Müasir dizayn"],
  },
  {
    icon: ArrowUp,
    title: "Eskalatorlar",
    description: "Alış-veriş mərkəzləri və ictimai binalar üçün səmərəli və etibarlı eskalator həlləri.",
    image: "/images/5.jpeg",
    features: ["Yüksək sərnişin axını", "Enerji qənaəti", "Uzunömürlü"],
  },
  {
    icon: ArrowUpDown,
    title: "Travolatorlar",
    description: "Hava limanları və böyük ticarət mərkəzləri üçün səviyyəli səyahət həlləri.",
    image: "/images/6.png",
    features: ["Uzun məsafələr", "Səssiz işləmə", "Rahat platforma"],
  },
];

export default function ProductsPreview() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div className="mb-8 lg:mb-0">
            <span className="inline-block text-blue-600 font-semibold text-sm tracking-wider uppercase mb-4">Məhsullarımız</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
              Lift və Eskalator
              <br />
              <span className="text-blue-600">Sistemləri</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-xl">
              Bütün ehtiyaclara uyğun geniş məhsul çeşidi - sərnişin liftlərindən
              eskalatorlara qədər.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors self-start lg:self-auto"
          >
            Bütün Məhsullar
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link
              key={index}
              href="/products"
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden group-hover:shadow-lg transition-all">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="p-2 bg-blue-600 rounded-lg w-fit mb-2">
                    <product.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-blue-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
