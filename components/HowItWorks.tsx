import React from 'react'

const HowItWorks = () => {
  return (
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Get started in three simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Sign Up</h3>
              <p className="text-muted-foreground">
                Choose your role: Attendee, Organizer, or Admin. Create your account in seconds.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Create or Browse</h3>
              <p className="text-muted-foreground">
                Organizers create events, attendees browse and register. Simple and intuitive.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Get Tickets</h3>
              <p className="text-muted-foreground">
                Receive instant QR tickets via email. Download PDF copies for offline access.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HowItWorks
