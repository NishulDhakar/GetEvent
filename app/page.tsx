"use client"

import Header from "@/components/Header"

import TicketMockup from "@/components/TicketMockup"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
import Features from "@/components/Features"
import Testimonials from "@/components/Testimonials"
import HowItWorks from "@/components/HowItWorks"
import Hero from "@/components/Hero"



export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <TicketMockup />
      <CTASection />
      <Footer />
    </div>
  )
}
