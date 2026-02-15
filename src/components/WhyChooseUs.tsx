import Image from "next/image";
import { Check, Award, Users, Clock, Shield } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Keyfiyyət Zəmanəti",
    description: "Bütün məhsullarımız beynəlxalq standartlara uyğundur və keyfiyyət sertifikatlarına malikdir.",
  },
  {
    icon: Users,
    title: "Peşəkar Komanda",
    description: "50+ nəfərlik sertifikatlaşdırılmış mütəxəssis komandamız hər bir layihəyə peşəkar yanaşır.",
  },
  {
    icon: Clock,
    title: "Vaxtında Çatdırılma",
    description: "Layihələrinizi razılaşdırılmış vaxtda və keyfiyyət standartlarına uyğun tamamlayırıq.",
  },
  {
    icon: Award,
    title: "13+ İllik Təcrübə",
    description: "Sənayedə uzun illər qazandığımız təcrübə ilə ən mürəkkəb layihələri belə uğurla icra edirik.",
  },
];

const certificates = [
  "ISO 9001:2015",
  "CE Marking",
  "EN 81 Standartları",
  "TÜV Sertifikatı",
  "GOST-R",
  "UZ Standart",
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0f172a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block text-blue-400 font-semibold text-sm tracking-wider uppercase mb-4">Niyə KasperLift?</span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Azərbaycanın Aparıcı Lift
                <span className="text-blue-400"> Şirkəti</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                2011-ci ildən fəaliyyət göstərən KasperLift MMC, Azərbaycanın lift və eskalator
                bazarının lider şirkətlərindən biridir. Müştəri məmnuniyyəti və təhlükəsizlik
                bizim əsas prioritetimizdir.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{reason.title}</h3>
                    <p className="text-gray-400 text-sm">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certificates */}
            <div className="pt-6 border-t border-white/10">
              <h3 className="font-semibold mb-4">Sertifikatlarımız</h3>
              <div className="flex flex-wrap gap-3">
                {certificates.map((cert, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center bg-white/10 px-4 py-2 rounded-full text-sm"
                  >
                    <Check className="w-4 h-4 text-blue-400 mr-2" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-3xl p-2">
              <div className="aspect-[4/3] relative bg-white/5 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10">
                <img 
                  src="/images/why-choose-us.svg" 
                  alt="Quality and Safety" 
                  className="object-cover w-full h-full opacity-90"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <div className="text-center p-8">
                    <h3 className="text-3xl font-bold mb-2 text-white">Etibarlılıq</h3>
                    <p className="text-blue-200">13+ il keyfiyyət və təhlükəsizlik</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
