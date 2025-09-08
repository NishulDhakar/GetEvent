"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import {
  Calendar,
  Users,
  Shield,
  QrCode,
  BarChart3,
  Bell,
  Lock,
  CheckCircle,
} from "lucide-react"

const Features = () => {
  return (
      <section id="features" className="py-10 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Built for Every Role</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're attending, organizing, or managing events, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">For Attendees</CardTitle>
                <CardDescription>Discover and join amazing events with ease</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Browse & search events</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Instant QR ticket generation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Downloadable PDF tickets</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Real-time event updates</span>
                </div>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow border-primary/20">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">For Organizers</CardTitle>
                <CardDescription>Create and manage events like a pro</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Easy event creation & editing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Automated ticket generation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Analytics dashboard</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Payment processing</span>
                </div>
              </CardContent>
            </Card>

            {/* Admin Features */}
            <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">For Admins</CardTitle>
                <CardDescription>Complete platform oversight and control</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">User & event management</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Advanced analytics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Platform monitoring</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Security controls</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <QrCode className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">QR Ticketing</h3>
              <p className="text-sm text-muted-foreground">Instant, secure ticket generation</p>
            </Card>
            <Card className="text-center p-6">
              <BarChart3 className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Analytics</h3>
              <p className="text-sm text-muted-foreground">Detailed event insights</p>
            </Card>
            <Card className="text-center p-6">
              <Bell className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Real-time Updates</h3>
              <p className="text-sm text-muted-foreground">WebSocket notifications</p>
            </Card>
            <Card className="text-center p-6">
              <Lock className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Secure Auth</h3>
              <p className="text-sm text-muted-foreground">JWT-based authentication</p>
            </Card>
          </div> */}

        </div>
      </section>
  )
}

export default Features
