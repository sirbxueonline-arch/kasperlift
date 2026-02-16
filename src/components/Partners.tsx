import React from "react";

const partners = [
  { name: "Fuji Global", logo: "/images/fuji-global.png" },
  { name: "United Fuji", logo: "/images/united-fuji.png" },
  { name: "Agustin Electric", logo: "/images/agustin.png" },
  { name: "Yuspa Asansor", logo: "/images/yuspa.png" },
  { name: "Pasa Asansor", logo: "/images/pasa.png" },
];

export default function Partners() {
  return (
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300 group min-h-[180px]"
            >
              <div className="relative w-full h-24 mb-3">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain transition-all duration-300"
                />
              </div>
              <h3 className="text-center font-medium text-primary text-sm group-hover:text-accent transition-colors leading-tight">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
