import Image from "next/image";
import { Award, Users, Clock, Target, Shield, Heart } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Təhlükəsizlik",
    description: "Hər bir layihədə təhlükəsizlik birinci prioritetimizdir. Beynəlxalq standartlara uyğun işləyirik.",
  },
  {
    icon: Award,
    title: "Keyfiyyət",
    description: "Yalnız ən keyfiyyətli məhsul və xidmətləri təqdim edərək uzunmüddətli əməkdaşlıq qururuq.",
  },
  {
    icon: Users,
    title: "Müştəri Mərkəzli",
    description: "Müştərilərimizin ehtiyaclarını başa düşərək fərdi həllər təqdim edirik.",
  },
  {
    icon: Heart,
    title: "Etibarlılıq",
    description: "Verdiyimiz sözləri tutur və etibarlı tərəfdaş olmaq üçün çalışırıq.",
  },
];

const milestones = [
  { year: "2011", title: "KasperLift Yaranışı", description: "Şirkətin əsası qoyuldu" },
  { year: "2013", title: "İlk Böyük Layihə", description: "100+ lift quraşdırıldı" },
  { year: "2015", title: "Beynəlxalq Sertifikatlar", description: "ISO və CE sertifikatları alındı" },
  { year: "2018", title: "Komanda Genişləndi", description: "50+ işçi sayına çatdıq" },
  { year: "2021", title: "500+ Layihə", description: "500-dən çox layihə tamamlandı" },
  { year: "2024", title: "Liderlik", description: "Azərbaycanın aparıcı lift şirkəti" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Haqqımızda</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              2011-ci ildən fəaliyyət göstərən KasperLift MMC, Azərbaycanın lift və eskalator
              sektorunun aparıcı şirkətlərindən biridir. Keyfiyyət, təhlükəsizlik və müştəri
              məmnuniyyəti bizim əsas dəyərlərimizdir.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-blue-600 font-semibold text-sm tracking-wider uppercase mb-4">Bizim Hekayəmiz</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-6">
                13+ İllik Etibarlı
                <span className="text-blue-600"> Təcrübə</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  KasperLift MMC 2011-ci ildə təsis edilmiş və bu günədək Azərbaycanın lift
                  və eskalator sektorunda fəaliyyət göstərir. Şirkətimiz qısa müddət ərzində
                  keyfiyyətli xidmətləri və peşəkar yanaşması ilə tanınaraq, sektorun
                  lider şirkətlərindən birinə çevrilmişdir.
                </p>
                <p>
                  Biz yalnız lift satışı və quraşdırılması ilə deyil, həm də müntəzəm
                  texniki xidmət, modernləşdirmə və təcili təmir xidmətləri ilə fəaliyyət
                  göstəririk. 50-dən çox peşəkar mütəxəssisdən ibarət komandamız hər
                  gün müştərilərimizin ehtiyaclarını qarşılamaq üçün çalışır.
                </p>
                <p>
                  STN Business Center-də yerləşən baş ofisimizdən Bakı şəhəri və ətraf
                  rayonlarda xidmət göstəririk. Beynəlxalq standartlara uyğun işləyərək,
                  ISO 9001:2015, CE və digər sertifikatlarımızla keyfiyyət zəmanəti veririk.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-2">
                <div className="aspect-[4/3] relative bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img 
                    src="/images/about-office.svg" 
                    alt="KasperLift Head Office" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white mb-1">STN Business Center</h3>
                    <p className="text-gray-300">Baş Ofisimiz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-600 font-semibold text-sm tracking-wider uppercase mb-4">Dəyərlərimiz</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
              Bizi Fərqləndirən Dəyərlər
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-600 font-semibold text-sm tracking-wider uppercase mb-4">Tarixçəmiz</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
              İnkişaf Yolumuz
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="w-full md:w-1/2 md:pr-12 md:text-right">
                    <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8 md:text-left"
                    }`}>
                      <div className="text-3xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-[#0f172a] mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10 my-4 md:my-0">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg" />
                  </div>

                  <div className="w-full md:w-1/2 md:pl-12 hidden md:block">
                    {index % 2 === 0 ? null : (
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ml-8">
                        <div className="text-3xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-[#0f172a] mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
