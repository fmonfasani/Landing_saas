
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import DemoSection from "@/components/DemoSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import FAQSection from "@/components/FAQSection";
import ROICalculator from "@/components/ROICalculator";
import Chatbot from "@/components/Chatbot";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="w-full">
        <HeroSection />
        <DemoSection />
        <PricingSection />
        <TestimonialsSection />
        <IntegrationsSection />
        <ROICalculator />
        <FAQSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
