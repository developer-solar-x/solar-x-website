"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function EVChargingContactSection() {
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
  }

  return (
    <section id="contact" className="relative min-h-screen w-full flex items-center justify-center py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/ev-charger-and-portable-power-stations-solar-equip.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-primary/80 backdrop-blur-sm rounded-xl p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">Get Free Consultation</h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              We're here to help! Whether you have questions about EV charging solutions, rebates, or installation, our
              team is ready to assist. Send us a message, and we'll get back to you soon!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="evContactFirstName" className="text-primary-foreground">
                First Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="evContactFirstName"
                placeholder="First Name"
                required
                className="border-input bg-input text-primary-foreground placeholder:text-muted-foreground"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="evContactLastName" className="text-primary-foreground">
                Last Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="evContactLastName"
                placeholder="Last Name"
                required
                className="border-input bg-input text-primary-foreground placeholder:text-muted-foreground"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="evContactEmail" className="text-primary-foreground">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="evContactEmail"
                type="email"
                placeholder="Email"
                required
                className="border-input bg-input text-primary-foreground placeholder:text-muted-foreground"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="evContactPhone" className="text-primary-foreground">
                Phone Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="evContactPhone"
                type="tel"
                placeholder="+1 XXX-XXX-XXXX"
                required
                className="border-input bg-input text-primary-foreground placeholder:text-muted-foreground"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label className="text-primary-foreground">
                Province <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.province}
                onValueChange={(value) => setFormData({ ...formData, province: value })}
                required
              >
                <SelectTrigger className="border-input bg-input text-primary-foreground">
                  <SelectValue placeholder="Select your province" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alberta">Alberta</SelectItem>
                  <SelectItem value="bc">British Columbia</SelectItem>
                  <SelectItem value="nova-scotia">Nova Scotia</SelectItem>
                  <SelectItem value="ontario">Ontario</SelectItem>
                  <SelectItem value="pei">Prince Edward Island</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-primary-foreground">
                What energy solution you are looking for? <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.solution}
                onValueChange={(value) => setFormData({ ...formData, solution: value })}
                required
              >
                <SelectTrigger className="border-input bg-input text-primary-foreground">
                  <SelectValue placeholder="Select energy solution" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ev-charging">EV Charging Solutions</SelectItem>
                  <SelectItem value="solar">Solar Solution</SelectItem>
                  <SelectItem value="battery">Battery Solution</SelectItem>
                  <SelectItem value="solar-battery">Solar + Battery Solution</SelectItem>
                  <SelectItem value="ev-solar">EV Charging + Solar</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="evContactMessage" className="text-primary-foreground">Tell us about your need (Optional)</Label>
            <Textarea
              id="evContactMessage"
              placeholder="Tell us about your EV charging needs"
              className="min-h-[120px] border-input bg-input text-primary-foreground placeholder:text-muted-foreground"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="evContactSubscribe"
              checked={formData.subscribe}
              onCheckedChange={(checked) => setFormData({ ...formData, subscribe: checked as boolean })}
              className="border-input data-[state=checked]:bg-primary"
            />
            <Label htmlFor="evContactSubscribe" className="text-sm leading-relaxed text-primary-foreground/90">
              I would like to join the Solar X Canada SMS and mailing list to receive newsletters, updates, and event
              invitations from Solar X Canada.
            </Label>
          </div>

          <Button type="submit" className="w-full py-6 text-lg font-semibold">
            Get Free Consultation
          </Button>
        </form>
        </div>
      </div>
    </section>
  )
}

