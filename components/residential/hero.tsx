"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ResidentialHero() {
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
    console.log("Form submitted:", formData)
  }

  return (
    <section className="relative min-h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/modern-house-with-solar-panels-at-dusk--dark-moody.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/70 to-transparent backdrop-blur-sm" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-4">
              <p className="text-lg font-medium text-white/90">Find Out Your Solar Savings in 15 Seconds</p>
            </div>
            <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Powering Canadian Homes with <span className="text-white">Sustainable Energy</span>
            </h1>
            <p className="mt-8 max-w-lg text-xl text-gray-300">
              Discover Sustainable Savings Through Reliable Solar and Battery Solutions
            </p>
            <div className="mt-10">
              <Button size="lg" className="rounded-full bg-primary px-10 py-7 text-xl font-semibold text-white hover:bg-[#4a90e2] hover:scale-110 hover:shadow-[0_0_30px_rgba(74,144,226,0.8),0_0_60px_rgba(74,144,226,0.5),0_0_90px_rgba(74,144,226,0.3)] transition-all duration-300">
                Request Consultation
              </Button>
            </div>
          </div>

          {/* Right Form */}
          <div className="rounded-xl bg-white/10 backdrop-blur-2xl p-6 sm:p-8 border border-white/20 shadow-2xl relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:pointer-events-none">
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Adam"
                    className="border-white/20 bg-white/5 backdrop-blur-md text-white placeholder:text-white/50 focus:border-white/40 focus:bg-white/10 transition-all"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Smith"
                    className="border-white/20 bg-white/5 backdrop-blur-md text-white placeholder:text-white/50 focus:border-white/40 focus:bg-white/10 transition-all"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@com"
                    className="border-white/20 bg-white/5 backdrop-blur-md text-white placeholder:text-white/50 focus:border-white/40 focus:bg-white/10 transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 XXX-XXX-XXXX"
                    className="border-white/20 bg-white/5 backdrop-blur-md text-white placeholder:text-white/50 focus:border-white/40 focus:bg-white/10 transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-white">Province</Label>
                  <Select
                    value={formData.province}
                    onValueChange={(value) => setFormData({ ...formData, province: value })}
                  >
                    <SelectTrigger className="border-white/20 bg-white/5 backdrop-blur-md text-white focus:border-white/40 focus:bg-white/10 transition-all">
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
                  <Label className="text-white">Energy Solution Type</Label>
                  <Select
                    value={formData.solution}
                    onValueChange={(value) => setFormData({ ...formData, solution: value })}
                  >
                    <SelectTrigger className="border-white/20 bg-white/5 backdrop-blur-md text-white focus:border-white/40 focus:bg-white/10 transition-all">
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

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Message (Optional)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Write something here..."
                  className="min-h-[100px] border-white/20 bg-white/5 backdrop-blur-md text-white placeholder:text-white/50 focus:border-white/40 focus:bg-white/10 transition-all"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="subscribe"
                  checked={formData.subscribe}
                  onCheckedChange={(checked) => setFormData({ ...formData, subscribe: checked as boolean })}
                  className="border-white/50 data-[state=checked]:bg-primary"
                />
                <Label htmlFor="subscribe" className="text-sm leading-relaxed text-white/90">
                  I would like to join the SolarX SMS and mailing list to receive newsletters, updates, and event
                  invitations from SolarX.
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-white py-6 text-lg font-semibold text-[#0a1628] hover:bg-gray-100"
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
