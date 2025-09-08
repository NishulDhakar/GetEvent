import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const CTASection = () => {
  return (
       <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Join or organize Your Next Events?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of event professionals who trust EventSpark for their ticketing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => window.location.href = "/Register"} size="lg" variant="secondary" className="text-lg px-8">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
  )
}

export default CTASection