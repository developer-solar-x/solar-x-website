"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    province: "",
    solution: "",
    message: "",
    subscribe: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    // Add your form submission logic here
  }

  return (
    <section id="contact" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
            Contact <span className="text-[#ff4a4a]">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help! Whether you have questions about solar and battery solutions, rebates, or installation, our team is ready to assist.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information - Left */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                Reach out to us through any of the following methods. Our team is available to answer your questions and help you get started with your solar energy journey.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#ff4a4a]/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#ff4a4a]" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <a href="tel:+18883181988" className="text-muted-foreground hover:text-[#ff4a4a] transition-colors">
                    +1 (888) 318-1988
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#ff4a4a]/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#ff4a4a]" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a href="mailto:info@solar-x.ca" className="text-muted-foreground hover:text-[#ff4a4a] transition-colors">
                    info@solar-x.ca
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#ff4a4a]/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#ff4a4a]" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Head Office</h4>
                  <p className="text-muted-foreground">
                    Toronto, Ontario<br />
                    Canada
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#ff4a4a]/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#ff4a4a]" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right */}
          <div className="bg-secondary rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="contactFirstName">
                    First Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="contactFirstName"
                    placeholder="First Name"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactLastName">
                    Last Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="contactLastName"
                    placeholder="Last Name"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactPhone">
                    Phone Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="contactPhone"
                    type="tel"
                    placeholder="+1 XXX-XXX-XXXX"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>
                    Province <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.province}
                    onValueChange={(value) => setFormData({ ...formData, province: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your province" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="alberta">Alberta</SelectItem>
                      <SelectItem value="bc">British Columbia</SelectItem>
                      <SelectItem value="nova-scotia">Nova Scotia</SelectItem>
                      <SelectItem value="ontario">Ontario</SelectItem>
                      <SelectItem value="new-brunswick">New Brunswick</SelectItem>
                      <SelectItem value="pei">Prince Edward Island</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>
                    What energy solution you are looking for? <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.solution}
                    onValueChange={(value) => setFormData({ ...formData, solution: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select energy solution" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="solar">Solar Solution</SelectItem>
                      <SelectItem value="battery">Battery Solution</SelectItem>
                      <SelectItem value="solar-battery">Solar + Battery Solution</SelectItem>
                      <SelectItem value="ev-charging">EV Charging</SelectItem>
                      <SelectItem value="hvac">HVAC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactMessage">Tell us about your need (Optional)</Label>
                <Textarea
                  id="contactMessage"
                  placeholder="Tell us about your need"
                  className="min-h-[120px]"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="contactSubscribe"
                  checked={formData.subscribe}
                  onCheckedChange={(checked) => setFormData({ ...formData, subscribe: checked as boolean })}
                />
                <Label htmlFor="contactSubscribe" className="text-sm leading-relaxed text-muted-foreground">
                  I would like to join the Solar X Canada SMS and mailing list to receive newsletters, updates, and event invitations from Solar X Canada.
                </Label>
              </div>

              <Button type="submit" className="w-full py-6 text-lg font-semibold bg-[#ff4a4a] hover:bg-[#e22f2f] text-white">
                Submit Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

