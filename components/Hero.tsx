import React from "react"
import { useTheme } from "next-themes"
import { ArrowRight, Globe } from "lucide-react"
import { Button } from "./ui/button"



const Hero = () => {
  const { theme } = useTheme()

  return (
   <section
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${theme === "dark" ? "/night.jpeg" : "/day.jpeg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",

      }}>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Plan, Manage & Attend Events –
            <span className="text-primary"> Smarter than Ever</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            All-in-one event management with ticketing, payments, and analytics. Perfect for organizers, attendees,
            and administrators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent hover:text-white">
              Browse Events
              <Globe className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
