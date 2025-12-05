"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Clock } from "lucide-react"

export function ContactUsSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    province: "",
    solution: "",
    preferredContact: "",
    preferredTime: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/aerial-view-of-house-with-solar-panels-on-roof--dr.jpg')`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Overlay - Contact Us Info */}
          <div className="rounded-xl bg-[#1a2b6b]/80 backdrop-blur-2xl p-6 sm:p-8 border border-white/20 shadow-2xl relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#1a2b6b]/20 before:via-transparent before:to-transparent before:pointer-events-none flex flex-col transition-all duration-300 hover:border-[#ff4a4a]/30">
            {/* Logo at center top with white container */}
            <div className="flex justify-center mb-1 relative z-10">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-2xl border border-white/30">
                <Image
                  src="/images/solarxlogo-20cropped.png"
                  alt="SolarX - Modern Solar Solutions"
                  width={180}
                  height={52}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="relative z-10 flex flex-col justify-center flex-1">
              <h2 className="text-4xl font-bold text-white sm:text-5xl drop-shadow-lg">
                Contact <span className="text-[#ff4a4a]">Us</span>
              </h2>
              <p className="mt-6 text-lg text-white/90 leading-relaxed drop-shadow-md">
                We're here to help! Whether you have questions about solar and battery solutions, rebates, or installation, our
                team is ready to assist. Send us a message, and we'll get back to you soon!
              </p>

              {/* Preferred Contact Methods & Hours */}
              <div className="mt-8 space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white drop-shadow-md">Preferred Contact Method</h3>
                  
                  <Link
                    href="mailto:info@solar-x.ca"
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ff4a4a] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-white/70">Email</p>
                      <p className="text-white font-medium">info@solar-x.ca</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Overlay - Contact Form */}
          <div className="rounded-xl bg-[#1a2b6b]/80 backdrop-blur-2xl p-6 sm:p-8 border border-white/20 shadow-2xl relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#1a2b6b]/20 before:via-transparent before:to-transparent before:pointer-events-none transition-all duration-300 hover:border-[#ff4a4a]/30">
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="contactFirstName" className="text-white">
                    First Name <span className="text-[#ff4a4a]">*</span>
                  </Label>
                  <Input
                    id="contactFirstName"
                    placeholder="Adam"
                    required
                    className="border-white/20 bg-white/10 backdrop-blur-md text-white placeholder:text-white/60 focus:border-[#ff4a4a] focus:ring-[#ff4a4a] focus:bg-white/15 transition-all"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactLastName" className="text-white">
                    Last Name <span className="text-[#ff4a4a]">*</span>
                  </Label>
                  <Input
                    id="contactLastName"
                    placeholder="Smith"
                    required
                    className="border-white/20 bg-white/10 backdrop-blur-md text-white placeholder:text-white/60 focus:border-[#ff4a4a] focus:ring-[#ff4a4a] focus:bg-white/15 transition-all"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="contactEmail" className="text-white">
                    Email <span className="text-[#ff4a4a]">*</span>
                  </Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    placeholder="example@com"
                    required
                    className="border-white/20 bg-white/10 backdrop-blur-md text-white placeholder:text-white/60 focus:border-[#ff4a4a] focus:ring-[#ff4a4a] focus:bg-white/15 transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                    className="border-white/20 bg-white/10 backdrop-blur-md text-white placeholder:text-white/60 focus:border-[#ff4a4a] focus:ring-[#ff4a4a] focus:bg-white/15 transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-white">
                    Province <span className="text-[#ff4a4a]">*</span>
                  </Label>
                  <Select
                    value={formData.province}
                    onValueChange={(value) => setFormData({ ...formData, province: value })}
                    required
                  >
                    <SelectTrigger className="border-white/20 bg-white/10 backdrop-blur-md text-white focus:border-[#ff4a4a] focus:ring-[#ff4a4a] focus:bg-white/15 transition-all">
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
                    <SelectTrigger className="border-white/20 bg-white/10 backdrop-blur-md text-white focus:border-[#ff4a4a] focus:ring-[#ff4a4a] focus:bg-white/15 transition-all">
                      <SelectValue placeholder="Select your solution" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="solar">Solar Solution</SelectItem>
                      <SelectItem value="battery">Battery Solution</SelectItem>
                      <SelectItem value="solar-battery">Solar + Battery Solution</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-white">
                    Preferred Contact Method <span className="text-[#ff4a4a]">*</span>
                  </Label>
                  <Select
                    value={formData.preferredContact}
                    onValueChange={(value) => setFormData({ ...formData, preferredContact: value })}
                    required
                  >
                    <SelectTrigger className="border-white/20 bg-white/10 backdrop-blur-md text-white focus:border-[#ff4a4a] focus:ring-[#ff4a4a] focus:bg-white/15 transition-all">
                      <SelectValue placeholder="Select method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="phone">Phone</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-white">
                    Preferred Contact Time <span className="text-[#ff4a4a]">*</span>
                  </Label>
                  <Select
                    value={formData.preferredTime}
                    onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}
                    required
                  >
                    <SelectTrigger className="border-white/20 bg-white/10 backdrop-blur-md text-white focus:border-[#ff4a4a] focus:ring-[#ff4a4a] focus:bg-white/15 transition-all">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9:00 AM - 12:00 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12:00 PM - 3:00 PM)</SelectItem>
                      <SelectItem value="late-afternoon">Late Afternoon (3:00 PM - 6:00 PM)</SelectItem>
                      <SelectItem value="saturday">Saturday (10:00 AM - 4:00 PM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactMessage" className="text-white">Message (Optional)</Label>
                <Textarea
                  id="contactMessage"
                  placeholder="Write something here..."
                  className="min-h-[100px] border-white/20 bg-white/10 backdrop-blur-md text-white placeholder:text-white/60 focus:border-[#ff4a4a] focus:ring-[#ff4a4a] focus:bg-white/15 transition-all"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#ff4a4a] hover:bg-[#e22f2f] py-6 text-lg font-semibold text-white transition-colors"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

