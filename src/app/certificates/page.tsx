import Link from "next/link";
import { ChevronRight, Award, Shield, CheckCircle, FileCheck, Globe, Star, ArrowUpRight } from "lucide-react";

const pdfCertificates = [
  {
    id: "limb-0156",
    title: "LIMB.0156 CERTIFICATE",
    file: "/LIMB.0156 CERTIFICATE.pdf",
    description: "Uyğunluq Sertifikatı",
  },
  {
    id: "limb-0157",
    title: "LIMB.0157 CERTIFICATE",
    file: "/LIMB.0157 CERTIFICATE.pdf",
    description: "Uyğunluq Sertifikatı",
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
      <section className="py-16 bg-gradient-to-br from-accent to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center text-sm text-accent-light/90 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Ana Səhifə</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-white">Sertifikatlar</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Sertifikatlar</h1>
            <p className="text-xl text-accent-light/90 leading-relaxed">
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
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">Rəsmi Sənədlər</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Sertifikatlarımız
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Şirkətimizin fəaliyyətini və məhsullarının keyfiyyətini təsdiq edən rəsmi sənədlər.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pdfCertificates.map((cert) => (
              <a
                key={cert.id}
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-accent group-hover:text-white">
                  <FileCheck className="w-10 h-10" />
                </div>

                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>

                <p className="text-gray-600 mb-6">{cert.description}</p>

                <div className="mt-auto flex items-center text-accent font-medium group-hover:underline">
                  Sertifikata Bax
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">Tərəfdaşlarımız</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
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
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent-light/20 to-accent-light/5 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-accent">{partner.name[0]}</span>
                </div>
                <h3 className="font-semibold text-primary mb-1">{partner.name}</h3>
                <p className="text-sm text-gray-500">{partner.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Award className="w-16 h-16 text-accent-light mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Keyfiyyət Zəmanətimiz
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              KasperLift MMC olaraq, hər bir layihəmizdə ən yüksək keyfiyyət standartlarını
              təmin etmək üçün çalışırıq. Beynəlxalq sertifikatlarımız və 16+ illik təcrübəmiz
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
