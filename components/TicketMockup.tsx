import React from 'react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { QrCode } from 'lucide-react'

const TicketMockup = () => {
  return (
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Beautiful, Secure Tickets</h2>
            <p className="text-xl text-muted-foreground">Every ticket includes QR codes for instant verification</p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-accent p-6 text-primary-foreground">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Averoft coding event</h3>
                    <p className="opacity-90">Sep 15, 2025</p>
                  </div>
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    VIP
                  </Badge>
                </div>
                <div className="text-sm opacity-90">
                  <p>Vidhaya nagar</p>
                  <p>9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Ticket ID</p>
                    <p className="font-mono text-sm">#TC2025-001</p>
                  </div>
                  <div className="h-16 w-16 bg-muted rounded flex items-center justify-center">
                    <QrCode className="h-8 w-8 text-muted-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  )
}

export default TicketMockup
