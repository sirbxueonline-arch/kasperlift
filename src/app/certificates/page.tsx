import Link from "next/link";
import { ChevronRight, Award, Shield, CheckCircle, FileCheck, Globe, Star } from "lucide-react";

const certificates = [
  {
    id: "iso",
    icon: FileCheck,
    title: "ISO 9001:2015",
    category: "Keyfiyyət İdarəetmə",
    description: "Beynəlxalq standartlara uyğun keyfiyyət idarəetmə sistemi sertifikatı. Bütün proseslərimiz ISO 9001:2015 tələblərinə cavab verir.",
    details: [
      "Müştəri mərkəzli yanaşma",
      "Proses əsaslı idarəetmə",
      "Davamlı təkmilləşdirmə",
      "Maddi və insan resurslarının idarə edilməsi",
    ],
  },
  {
    id: "ce",
    icon: Shield,
    title: "CE Marking",
    category: "Avropa Standartları",
    description: "Avropa İttifaqının təhlükəsizlik, sağlamlıq və ətraf mühitin qorunması tələblərinə uyğunluq sertifikatı.",
    details: [
      "Məhsul təhlükəsizliyi",
      "Sənaye standartlarına uyğunluq",
      "Texniki sənədləşmə",
      "Risk qiymətləndirməsi",
    ],
  },
  {
    id: "en81",
    icon: CheckCircle,
    title: "EN 81 Standartları",
    category: "Lift Təhlükəsizliyi",
    description: "Liftlərin konstruksiyası və quraşdırılması üçün Avropa standartları. EN 81-1 və EN 81-2 standartlarına tam uyğunluq.",
    details: [
      "Konstruksiya təhlükəsizliyi",
      "Elektrik təhlükəsizliyi",
      "Fəaliyyət qaydaları",
      "Yoxlama və test prosedurları",
    ],
  },
  {
    id: "tuv",
    icon: Award,
    title: "TÜV Sertifikatı",
    category: "Texniki Nəzarət",
    description: "Alman TÜV şirkətindən keyfiyyət və təhlükəsizlik sertifikatı. Avropanın ən nüfuzlu sertifikasiya orqanlarından biri.",
    details: [
      "Texniki yoxlama",
      "Keyfiyyətə nəzarət",
      "Təhlükəsizlik qiymətləndirməsi",
      "Məhsul testləri",
    ],
  },
  {
    id: "gost",
    icon: Globe,
    title: "GOST-R",
    category: "Rusiya Standartları",
    description: "Rusiya və MDB ölkələri üçün dövlət standartlarına uyğunluq sertifikatı. Texniki tənzimləmə sənədləri.",
    details: [
      "Məhsul keyfiyyəti",
      "Texniki sənədlər",
      "İstehsalat nəzarəti",
      "Standartlaşdırma",
    ],
  },
  {
    id: "uz",
    icon: Star,
    title: "UZ Standart",
    category: "Özbəkistan Standartları",
    description: "Özbəkistan Respublikasının standartlaşdırma və sertifikatlaşdırma orqanının təsdiqlədiyi sertifikat.",
    details: [
      "Milli standartlara uyğunluq",
      "Texniki tənzimləmə",
      "Məhsul sertifikatlaşdırma",
      "Keyfiyyətə nəzarət",
    ],
  },
];

const partners = [
  { name: "Otis", country: "ABŞ" },
  { name: "Kone", country: "Finlandiya" },
  { name: "Schindler", country: "İsveçrə" },
  { name: "Mitsubishi", country: "Yaponiya" },
  { name: "ThyssenKrupp", country: "Almaniya" },
  { name: "Hyundai", country: "Koreya" },
];

export default function CertificatesPage() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center text-sm text-blue-100 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Ana Səhifə</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-white">Sertifikatlar</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Sertifikatlar</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Beynəlxalq standartlara uyğun keyfiyyət və təhlükəsizlik sertifikatları.
              Hər bir məhsul və xidmətimiz sertifikatlaşdırılmışdır.
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-600 font-semibold text-sm tracking-wider uppercase mb-4">Beynəlxalq Standartlar</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
              Keyfiyyət Sertifikatlarımız
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Bütün məhsul və xidmətlərimiz beynəlxalq standartlara uyğunluq
              sertifikatları ilə təchiz edilib.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <cert.icon className="w-8 h-8" />
                </div>

                <div className="text-sm text-blue-600 font-semibold mb-2">{cert.category}</div>

                <h3 className="text-xl font-bold text-[#0f172a] mb-3">{cert.title}</h3>

                <p className="text-gray-600 mb-6">{cert.description}</p>

                <ul className="space-y-2">
                  {cert.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-600 font-semibold text-sm tracking-wider uppercase mb-4">Tərəfdaşlarımız</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
              Beynəlxalq Tərəfdaşlar
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Dünyanın aparıcı lift istehsalçıları ilə əməkdaşlıq edirik.
              Keyfiyyətli məhsullar dünya brendlərindən.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">{partner.name[0]}</span>
                </div>
                <h3 className="font-semibold text-[#0f172a] mb-1">{partner.name}</h3>
                <p className="text-sm text-gray-500">{partner.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-24 bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Award className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Keyfiyyət Zəmanətimiz
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              KasperLift MMC olaraq, hər bir layihəmizdə ən yüksək keyfiyyət standartlarını
              təmin etmək üçün çalışırıq. Beynəlxalq sertifikatlarımız və 13+ illik təcrübəmiz
              ilə müştərilərimizə etibarlılıq zəmanəti veririk.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/10 px-6 py-3 rounded-full">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>ISO 9001:2015</span>
              </div>
              <div className="flex items-center bg-white/10 px-6 py-3 rounded-full">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>CE Marking</span>
              </div>
              <div className="flex items-center bg-white/10 px-6 py-3 rounded-full">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>EN 81 Standartları</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
