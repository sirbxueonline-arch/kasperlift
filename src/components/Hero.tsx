"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-accent/5 to-white">
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23095E7C' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-accent-light/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-accent-light/10 border border-accent-light/20 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-accent text-sm font-medium">16+ İllik Təcrübə</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Təhlükəsizlik və{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                Keyfiyyət
              </span>{" "}
              Hər Hərəkətdə
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
              KasperLift MMC olaraq, Azərbaycanın aparıcı lift və eskalator şirkəti kimi
              müasir həllər təqdim edirik. Professional quraşdırma və 24/7 texniki dəstək.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-xl hover:shadow-accent/25 flex items-center justify-center"
              >
                Pulsuz Qiymət Al
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/products"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center"
              >
                Məhsullarımız
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Təhlükəsizlik Standartları</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Sertifikatlı Məhsullar</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">24/7 Dəstək</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Image/Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-accent-light/20 to-accent-light/5 rounded-3xl p-2 shadow-2xl">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-inner">
                  <img 
                    src="/images/99.png" 
                    alt="Modern Elevator" 
                    className="object-cover w-full h-full"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
              </div>

              {/* Floating Card - Experience */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -left-8 top-1/4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent-light/20 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">16+</div>
                    <div className="text-xs text-gray-500">İllik Təcrübə</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card - Support */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -right-4 bottom-1/4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-primary">24/7</div>
                    <div className="text-xs text-gray-500">Dəstək Xidməti</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
