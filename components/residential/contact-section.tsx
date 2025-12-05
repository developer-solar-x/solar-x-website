"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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
  }

  return (
    <section id="contact" className="relative min-h-screen w-full flex items-center justify-center py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/aerial-view-of-house-with-solar-panels-on-roof--dr.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2b6b]/90 via-[#1a2b6b]/80 to-[#1a2b6b]/70" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#1a2b6b]/80 backdrop-blur-sm rounded-xl p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Contact Us</h2>
            <p className="mt-4 text-lg text-white/90">
              We're here to help! Whether you have questions about solar and battery solutions, rebates, or installation, our
              team is ready to assist. Send us a message, and we'll get back to you soon!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-12 space-y-6" suppressHydrationWarning>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="contactFirstName" className="text-white">
                First Name <span className="text-[#ff4a4a]">*</span>
              </Label>
              <Input
                id="contactFirstName"
                placeholder="First Name"
                required
                className="border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:border-[#ff4a4a] focus:ring-[#ff4a4a]"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                suppressHydrationWarning
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactLastName" className="text-white">
                Last Name <span className="text-[#ff4a4a]">*</span>
              </Label>
              <Input
                id="contactLastName"
                placeholder="Last Name"
                required
                className="border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:border-[#ff4a4a] focus:ring-[#ff4a4a]"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                suppressHydrationWarning
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="contactEmail" className="text-white">
                Email <span className="text-[#ff4a4a]">*</span>
              </Label>
              <Input
                id="contactEmail"
                type="email"
                placeholder="Email"
                required
                className="border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:border-[#ff4a4a] focus:ring-[#ff4a4a]"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                suppressHydrationWarning
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactPhone" className="text-white">
                Phone Number <span className="text-[#ff4a4a]">*</span>
              </Label>
              <Input
                id="contactPhone"
                type="tel"
                placeholder="+1 XXX-XXX-XXXX"
                required
                className="border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:border-[#ff4a4a] focus:ring-[#ff4a4a]"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                suppressHydrationWarning
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label className="text-white">
                Province <span className="text-[#ff4a4a]">*</span>
              </Label>
              <Select
                value={formData.province}
                onValueChange={(value) => setFormData({ ...formData, province: value })}
                required
              >
                <SelectTrigger className="border-white/20 bg-white/10 text-white focus:border-[#ff4a4a] focus:ring-[#ff4a4a]" suppressHydrationWarning>
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
              <Label className="text-white">
                Energy Solution Type <span className="text-[#ff4a4a]">*</span>
              </Label>
              <Select
                value={formData.solution}
                onValueChange={(value) => setFormData({ ...formData, solution: value })}
                required
              >
                <SelectTrigger className="border-white/20 bg-white/10 text-white focus:border-[#ff4a4a] focus:ring-[#ff4a4a]" suppressHydrationWarning>
                  <SelectValue placeholder="Select energy solution" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="solar">Solar Solution</SelectItem>
                  <SelectItem value="battery">Battery Solution</SelectItem>
                  <SelectItem value="solar-battery">Solar + Battery Solution</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactMessage" className="text-white">Message (Optional)</Label>
            <Textarea
              id="contactMessage"
              placeholder="Write something here..."
              className="min-h-[120px] border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:border-[#ff4a4a] focus:ring-[#ff4a4a]"
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
            <Label htmlFor="contactSubscribe" className="text-sm leading-relaxed text-white/90">
              I would like to join the Solar X Canada SMS and mailing list to receive newsletters, updates, and event
              invitations from Solar X Canada.
            </Label>
          </div>

          <Button type="submit" className="w-full py-6 text-lg font-semibold bg-white text-[#1a2b6b] hover:bg-white/90" suppressHydrationWarning>
            Submit
          </Button>
        </form>
        </div>
      </div>
    </section>
  )
}

