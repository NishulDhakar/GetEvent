import React from 'react'
import { Card } from './ui/card'
import { Star } from 'lucide-react'
import { Avatar, AvatarFallback } from './ui/avatar'

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Loved by Event Professionals</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">See what our users say about EventSmart</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Seamless ticketing for our college fest! The QR code system made entry so smooth."
              </p>
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">Sarah Martinez</p>
                  <p className="text-sm text-muted-foreground">Event Coordinator</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Managing events has never been this easy. The analytics dashboard is incredible!"
              </p>
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarFallback>DJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">David Johnson</p>
                  <p className="text-sm text-muted-foreground">Event Organizer</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "The real-time notifications keep our team perfectly synchronized during events."
              </p>
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarFallback>AL</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">Alex Liu</p>
                  <p className="text-sm text-muted-foreground">Platform Admin</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
  )
}

export default Testimonials
