import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductsPreview from "@/components/ProductsPreview";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";
import Map from "@/components/Map";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Features />
      <ProductsPreview />
      <ServicesOverview />
      <WhyChooseUs />
      <Partners />
      <CTASection />
      <Map />
    </div>
  );
}
