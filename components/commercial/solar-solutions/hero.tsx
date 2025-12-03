"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CommercialSolarHero() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    province: "",
    solution: "",
    message: "",
    subscribe: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Commercial form submitted:", formData)
  }

  return (
    <section className="relative min-h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/commercial-solar-panels-on-warehouse-building.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-4">
              <p className="text-lg font-medium text-white/90">Find Out Your Commercial Solar Savings in 15 Seconds</p>
            </div>
            <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Commercial Solar Installation
            </h1>
            <p className="mt-8 max-w-lg text-xl text-gray-300">
              Cut costs, increase profits, and take advantage of instant rebates with a long-term solar investment.
            </p>
            <div className="mt-10 flex gap-4 flex-wrap">
              <Button size="lg" className="bg-primary px-10 py-7 text-xl font-semibold text-white hover:bg-primary/90">
                Request Consultation
              </Button>
            </div>
          </div>

          {/* Right Form */}
          <div className="rounded-lg bg-primary/80 p-6 backdrop-blur-sm sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="commercialFirstName" className="text-primary-foreground">
                    First Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="commercialFirstName"
                    placeholder="John"
                    required
                    className="border-input bg-input text-primary-foreground placeholder:text-muted-foreground"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="commercialLastName" className="text-primary-foreground">
                    Last Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="commercialLastName"
                    placeholder="Doe"
                    required
                    className="border-input bg-input text-primary-foreground placeholder:text-muted-foreground"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="commercialCompany" className="text-primary-foreground">
                  Company Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="commercialCompany"
                  placeholder="Your Company Name"
                  required
                  className="border-gray-600 bg-[#1a2b4a] text-white placeholder:text-gray-400"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="commercialEmail" className="text-primary-foreground">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="commercialEmail"
                    type="email"
                    placeholder="example@company.com"
                    required
                    className="border-input bg-input text-primary-foreground placeholder:text-muted-foreground"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="commercialPhone" className="text-primary-foreground">
                    Phone Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="commercialPhone"
                    type="tel"
                    placeholder="+1 XXX-XXX-XXXX"
                    required
                    className="border-input bg-input text-primary-foreground placeholder:text-muted-foreground"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
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
                      <SelectItem value="new-brunswick">New Brunswick</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-primary-foreground">
                    Energy Solution Type <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.solution}
                    onValueChange={(value) => setFormData({ ...formData, solution: value })}
                    required
                  >
                    <SelectTrigger className="border-input bg-input text-primary-foreground">
                      <SelectValue placeholder="Select your solution" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="solar">Solar Solution</SelectItem>
                      <SelectItem value="battery">Battery Solution</SelectItem>
                      <SelectItem value="solar-battery">Solar + Battery Solution</SelectItem>
                      <SelectItem value="ev-charging">EV Charging Solution</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="commercialMessage" className="text-primary-foreground">
                  Tell us about your need (Optional)
                </Label>
                <Textarea
                  id="commercialMessage"
                  placeholder="Tell us about your commercial solar needs..."
                  className="min-h-[100px] border-input bg-input text-primary-foreground placeholder:text-muted-foreground"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="commercialSubscribe"
                  checked={formData.subscribe}
                  onCheckedChange={(checked) => setFormData({ ...formData, subscribe: checked as boolean })}
                  className="border-gray-500 data-[state=checked]:bg-primary"
                />
                <Label htmlFor="commercialSubscribe" className="text-sm leading-relaxed text-primary-foreground/80">
                  I would like to join the Solar X Canada SMS and mailing list to receive newsletters, updates, and event
                  invitations from Solar X Canada.
                </Label>
              </div>

              <Button
                type="submit"
                variant="secondary"
                className="w-full py-6 text-lg font-semibold"
              >
                Request a Quote
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

