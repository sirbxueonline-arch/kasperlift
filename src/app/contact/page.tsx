"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const services = [
  "Sərnişin Lifti",
  "Yük Lifti",
  "Mətbəx Lifti",
  "Avtomatik Qapı",
  "Eskalator",
  "Travolator",
  "Texniki Xidmət",
  "Modernləşdirmə",
  "Təcili Təmir",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",

    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-accent to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center text-sm text-accent-light/90 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Ana Səhifə</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-white">Əlaqə</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Bizimlə Əlaqə</h1>
            <p className="text-xl text-accent-light/90 leading-relaxed">
              Layihəniz haqqında danışmaq və ya suallarınız üçün bizimlə əlaqə saxlayın.
              Peşəkar komandamız 24 saat ərzində sizə dəstək verməyə hazırdır.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <Phone className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Telefon</h3>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-gray-500">Satış</p>
                  <a href="tel:+994502096440" className="text-accent font-semibold hover:underline">
                    +994 50 209 64 40
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Texniki</p>
                  <a href="tel:+994772725050" className="text-accent font-semibold hover:underline">
                    +994 77 272 50 50
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}


            {/* Address */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Ünvan</h3>
              <p className="text-gray-600">
                STN Business Center<br />
                10Q Ələsgər Qayıbov küç.<br />
                AZ 1029, Bakı, Azərbaycan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-2">Bizə Yazın</h2>
              <p className="text-gray-600 mb-8">
                Aşağıdakı formu doldurun, əks zamanda sizinlə əlaqə saxlayacağıq.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Təşəkkürlər!</h3>
                  <p className="text-green-600">
                    Mesajınız qəbul edildi. Tezliklə sizinlə əlaqə saxlayacağıq.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Adınız *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        placeholder="Adınız və Soyadınız"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        placeholder="+994 XX XXX XX XX"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Xidmət Növü
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white"
                      >
                        <option value="">Seçin</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesajınız *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                      placeholder="Layihəniz haqqında ətraflı məlumat..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center"
                  >
                    Göndər
                    <Send className="w-5 h-5 ml-2" />
                  </button>
                </form>
              )}
            </div>

            {/* Map & Hours */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-accent-light/20 to-accent-light/5 flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-primary mb-2">Xəritədə Göstər</h3>
                    <p className="text-gray-600 mb-4">
                      STN Business Center<br />
                      10Q Ələsgər Qayıbov küçəsi
                    </p>
                    <a
                      href="https://maps.google.com/?q=STN+Business+Center+Baku"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent font-semibold hover:underline"
                    >
                      Google Maps-də Aç
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">İş Saatları</h3>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Bazar ertəsi - Cümə</span>
                    <span className="font-semibold text-primary">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Şənbə</span>
                    <span className="font-semibold text-primary">Bağlı</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Bazar</span>
                    <span className="font-semibold text-primary">Bağlı</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-accent/5 rounded-xl">
                  <p className="text-sm text-primary">
                    <strong>Təcili xidmət:</strong> 24/7 texniki dəstək xidmətimiz fəaliyyət göstərir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
