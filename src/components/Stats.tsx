import { Building2, Users, Briefcase, Award } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "500+",
    label: "Tamamlanmış Layihə",
    description: "Uğurla başa çatdırılmış quraşdırmalar",
  },
  {
    icon: Users,
    value: "13+",
    label: "İllik Təcrübə",
    description: "Sənayedə professionallıq",
  },
  {
    icon: Briefcase,
    value: "50+",
    label: "Peşəkar Komanda",
    description: "Sertifikatlı mütəxəssislər",
  },
  {
    icon: Award,
    value: "15+",
    label: "Beynəlxalq Sertifikat",
    description: "Keyfiyyət standartları",
  },
];

export default function Stats() {
  return (
    <section className="py-16 bg-[#0f172a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600/20 rounded-2xl mb-4 group-hover:bg-blue-600/30 transition-colors">
                <stat.icon className="w-7 h-7 text-blue-400" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-blue-400 font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
