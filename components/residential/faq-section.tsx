"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import type React from "react"

const faqCategories = [
  {
    title: "General",
    questions: [
      {
        question: "Are the solar panels expensive?",
        answer:
          "Not necessarily. The total cost of your solar system will vary depending on several factors, including electricity usage, home location, roof size, system size. However, we remove the biggest roadblock of having high upfront costs by offering our low-interest Sunline financing program—with rates as low as 0%! Pair that with government rebate programs, and installing solar is now more affordable than you think! Need more detail? Feel free to reach us by calling 1-888-318-1988, or by contacting the Solar X Canada team through our website.",
      },
      {
        question: "Will solar panels work in overcast climates?",
        answer:
          "Yes. Even in foggy, rainy, and snowy days, the solar panels will produce electricity. Solar X Canada uses high-efficiency monocrystalline panels with advanced cell technology that is famous for its higher efficiency and excellent low-light performance. We also incorporate microinverters to ensure the highest output of all panels with limited downtime due to obstructions compared to the traditional string inverter.\n\nFor customers in Alberta: A study from Northern Alberta Institute of Technology has shown that snow affects your production by only 2.2% over the entire year. Snow will melt almost three times faster off of a panel than it would on a regular asphalt shingle roof. You should be able to produce and bank enough energy during the summer months to cover your needs during the winter months.",
      },
      {
        question: "Why microinverters are better than traditional inverters?",
        answer:
          "Unlike traditional string inverters that have a central inverter for the entire system, microinverters convert direct current into alternating current at the module level to maximize energy conversion and to avoid fire hazards that can be caused by the high voltage on your rooftop. It is not only more efficient and safer but also much easier for maintenance. Our APSystem microinverter also works with a module-level monitoring system called EMA. You can log into the system by cell phone or computer to check the production in real-time.",
      },
      {
        question: "What warranties and insurance protect the system?",
        answer:
          "You get a 25-year performance warranty for your solar panels and a 10-year product warranty. During installation and post-installation on equipment, we carry a minimum limit of liability of $5,000,000. For the LONGI solar modules, there is third-party insurance provided by Munich RE. Additionally, Solar X Canada offers a 2-year labor warranty. Furthermore, the APSystems microinverter comes with a 10-year warranty that can be extended to 20 years. All of the mentioned warranties make your solar panel system a worry-free investment.",
      },
      {
        question: "How does net metering work?",
        answer:
          "With Net-Metering, the electricity generated from the solar energy system is first used to offset any household electrical consumption, and any excess electricity which is not used by the household is then sent to the electrical grid; the excess electricity sent to the electrical grid is returned to you in the form of a credit.",
      },
    ],
  },
  {
    title: "Product",
    questions: [
      {
        question: "Why should we support solar in Canada?",
        answer:
          "Solar photovoltaic energy is the fastest-growing source of electricity in Canada. There are different programs available across Canada that help minimize your carbon footprint and subsidize the cost of investing in your solar system. Climate change continues to be an essential topic in Canada, as this phenomenon affects us all. Save money and save the environment all in one shot.\n\nRequest a quote today and see how much energy consumption can be offset by going solar with Solar X Canada.",
      },
      {
        question: "What differentiates Solar X Canada from other solar companies?",
        answer:
          "a. Experience: We are one of the fastest-growing and most experienced solar companies in Canada. We are now supported by a major renewable investing partner that has given us the stability required in an ever-changing marketplace.\n\nb. Top-tiered products with competitive pricing: We provide competitive workmanship warranty services, and you can be assured that we will be present for the long haul.\n\nc. Unique programs: We offer programs that make going solar more accessible and affordable, minimizing the impact of an investment this size to ensure you reap the benefits earlier.\n\nd. Hassle-free: We take care of the paperwork, inspection, and coordination with municipalities and other related authorities. We provide excellent services to make the process seamless. If you require more detail, please reach us by calling (647) 557-1207 or contacting the Solar X Canada team through our website.",
      },
      {
        question: "What is Solar X Canada's full turnkey solution?",
        answer:
          "Our full turnkey solution provides you with a complete package of top-tier products and professional services to ensure a hassle-free experience when installing a solar panel system for your home. We take care of everything, so all you need to do is sit back, switch the system on, and start saving money.",
      },
      {
        question: "How does solar power work?",
        answer:
          "Solar panels convert sunlight (protons) into direct current (DC) electricity. The inverters and microinverters then convert DC energy into alternating current (AC), which is safe and usable energy. Every day, when sunlight hits your roof, your rooftop generates electricity and pays itself off with renewable energy. The solar energy powers your home directly, and the excess energy is sent back to the local utility grid as dollar credit for your next utility bill.",
      },
      {
        question: "How much can I save by adopting solar?",
        answer:
          "Depending on how much energy you currently use at home, the savings will vary. We will design a system that maximizes savings by using highly efficient panels and incorporating a system layout that optimizes sun exposure. Contact us to get a free proposal, and let's take care of the rest for you!",
      },
      {
        question: "What happens if I sell the house?",
        answer:
          "No worries! Our team will help you transfer your solar contract to the new homeowners. Please contact our team in advance so we can prepare the paperwork for you. We suggest informing potential buyers early to ensure a smooth process. If it happens during the leasing term, you can buy out the system at any time and include the price in the sale. According to research conducted by Lawrence Berkeley National Laboratory in California, houses with rooftop solar panels sell 20% faster and for 17% more than similar homes without them.",
      },
      {
        question: "Why should I purchase solar panels instead of solar shingles?",
        answer:
          "Solar shingles are half as efficient as solar panels because they require ventilation. Not only that, but they are also twice the price and aren't designed for Canadian climates or weather conditions.",
      },
      {
        question: "I am retiring or I will be retired in a few years. Am I too old to go solar?",
        answer:
          "The majority of our clients are either retired or will retire in a few years. They will have to live on a fixed income and want to protect their family against the rising cost of electricity. By investing in solar, you protect your budget, increase the value of your home (as solar is an appreciating asset), and make a positive impact on future generations.",
      },
    ],
  },
  {
    title: "Planning & Installation",
    questions: [
      {
        question: "How many steps do I need to get a solar system?",
        answer:
          "There are several steps to prep and install solar energy:\n\n1) Site assessment\n\n2) System design\n\n3) Structural Design\n\n4) Engineering Design Stamp\n\n5) Local Distribution Company (LDC) request to connect application\n\n6) Rebate applications\n\n7) Building Permit Application\n\n8) Hardware Packaging & Prep\n\n9) Panel Installation\n\n10) Electrical Installation\n\n11) Electrical Safety Authority (ESA) Assessment\n\n12) Issue ESA certificate to LDC\n\n13) Final inspection & commission\n\n14) Utility interconnection\n\n15) Issue ESA to confirm rebate\n\n16) Close Building Permit with Municipality\n\n17) Monitoring & maintenance\n\nToo complex? Don't worry. Solar X Canada provides a turnkey solution, where our expert team will assist you every step of the way. We take care of the paperwork, inspection, and working with the municipalities. We will make your solar experience as hassle-free as possible! Please feel free to reach us by calling (647) 557-1207 or contacting us through the Solar X Canada website.",
      },
      {
        question: "How long will it take to get my solar system ready?",
        answer:
          "In most cases, it will take around 4-6 months from site assessment to the moment the system is online. However, the length of the period will vary from home to home, depending on factors such as municipality processing times, weather conditions, and system complexity. Our team will keep you updated throughout the entire process.",
      },
      {
        question: "Do I need to maintain my solar panels?",
        answer:
          "Solar panels require minimal maintenance. They are designed to withstand various weather conditions. However, we recommend periodic cleaning to remove dust, debris, or snow buildup to ensure optimal performance. Our team can provide maintenance services if needed.",
      },
      {
        question: "Will animals live under or ruin my panels?",
        answer:
          "Solar X Canada installs critter guards on your solar system to help prevent animals from entering your system. This is a mesh that is wrapped around the ends of your solar system.",
      },
    ],
  },
  {
    title: "Customer Portal",
    questions: [
      {
        question: "What is the customer portal?",
        answer:
          "Solar X Canada's customer portal is our exclusive way of making sure all the necessary information you need to know about your system and project is available 24/7, including estimated timelines, finance information, and live data. Learn more about why we started our customer portal and all the features it has to offer!",
      },
      {
        question: "What is the difference between Solar X Canada's customer portal and my APsystem/Hoymiles App?",
        answer:
          "We pull your live data information directly from your monitoring system. This provides you with another place to check your production, especially over a certain period of time. Beyond that, you can also view your project progress, finance information, and check how many Solar X Canada reward points you've collected to redeem exclusive gifts. The goal of our customer portal is to build an integrated platform so you can get the most out of your experience with Solar X Canada.",
      },
      {
        question: "Can microFIT customers have access to the customer portal?",
        answer:
          "Unfortunately, microFIT customers don't currently have access to our customer portal because we can only connect with Net Metering projects at the moment.\n\nWe recommend checking your production in the following ways:\n\n1. On your APsystems app;\n\n2. Use the 'Find Your Neighborhood' feature on our Live Data Map to locate your installation.",
      },
      {
        question: "Where can I find my Customer Portal account information?",
        answer:
          "When your project moves to project management, we'll send your sign-in instructions with a temporary password to your email address. You will be required to set your own password after you sign in for the first time.\n\nIf you can't locate our email, you can reset your account's password or contact our Solar X Canada support team to gain access to your account.",
      },
      {
        question: "Which email address do I use to sign in, and how do I change my email address?",
        answer:
          "Please use the email address that you provided to Solar X Canada when you signed up with us.\n\nIf you'd like to change your email, please reach out to our customer care team or open a support ticket through the customer portal. Kindly allow up to 24 hours for the changes to be applied to your account.",
      },
      {
        question: "Why can't I sign in to my customer portal?",
        answer:
          "There might be multiple reasons why you can't sign in to your portal, including password errors, email changes, and incorrect verification codes.\n\nCheck out our Blog Article to view solutions for common customer portal sign-in issues.",
      },
      {
        question: "I entered my password/verification code too many times and got locked out of my account.",
        answer:
          "To protect you against potential cyberattacks, please wait a couple of days before trying again.\n\nIf you are the account owner and unable to access all 2-step verification methods, please contact our Solar X Canada support team for assistance.",
      },
      {
        question: "Why do we recommend resetting your password and how do I reset my password?",
        answer:
          "We strongly recommend customizing your password periodically for security reasons.\n\nIf you know your password and can sign in, you can reset your password from the Account Security Center:\n\n1. Click 'My Account' avatar (top-right corner) and select Account Security.\n\n2. Under 'Your ways to sign in', select Change next to 'Password'.\n\n3. Enter your new password and select Confirm Change.\n\nIf you forgot your password:\n\n1. Click 'I Forgot My Password' on the sign-in page.\n\n2. Enter your email and select 'Send Email'.\n\n3. Check your inbox for the password reset email.\n\nIf you don't receive the email, check your spam folder or ensure that messages from Solar X Canada are not being filtered out.",
      },
      {
        question: "The website is asking me for a verification code, but I don't get one in my email.",
        answer:
          "We will never send verification codes to your email. If we are asking for a verification code, it is very likely that you have 2-step verification enabled.\n\nCheck out our 2-Step Verification Blog for more information on setting up and using 2-step verification.",
      },
      {
        question: "How do I set up 2-step verification and why is it important?",
        answer:
          "To protect your sensitive information, we strongly recommend turning on 2-step verification for additional security.\n\nCheck out our 2-Step Verification Blog for a step-by-step guide on setting it up.",
      },
      {
        question: "Do I need to put in a 2-step verification code every time I sign in?",
        answer:
          "If you don't want to enter a verification code every time, you can set your device as a trusted device by checking 'Do not ask me for verification again on this browser'. Once verified, you won't need to enter a code when signing in with the same device.",
      },
      {
        question: "How do I set up a security question?",
        answer:
          "1. Click 'My Account' avatar and select Account Security.\n\n2. Under 'More available methods', select Security Question.\n\n3. Choose your questions and answers.\n\n4. Select Confirm.",
      },
      {
        question: "How do I turn off 2-step verification?",
        answer:
          "1. Click 'My Account' avatar and select Account Security.\n\n2. Under 'Your ways to sign in', select 'Turn OFF' next to 2-Step Verification.\n\n3. Confirm the action in the pop-up window.",
      },
      {
        question: "I recently changed/lost my phone and cannot receive 2-step verification codes. How can I sign in?",
        answer:
          "Please try verifying yourself with another 2-step verification method you have enabled.\n\nIf you didn't enable a second method or lost access, contact us through Solar X Canada support to request a reset.",
      },
      {
        question: "Why can't I use a password manager with your customer portal?",
        answer:
          "We have disabled password autofill due to security risks associated with browser-integrated password managers.",
      },
      {
        question: "What are my points for?",
        answer:
          "Your points can be used to buy items from our online shop (coming soon). Every 10 kWh your solar system generates earns you 1 point.",
      },
      {
        question: "Why is my project taking longer than the duration shown on the customer portal?",
        answer:
          "Durations for each step can vary depending on the province and weather conditions. If you'd like an update on your project, open a support ticket through the customer portal or contact our operations team through Solar X Canada support.",
      },
      {
        question: "What if I see incorrect information in my customer portal?",
        answer:
          "Please reach out to our marketing team or open a support ticket through the customer portal. Allow up to 24 hours for updates.",
      },
      {
        question: "Can I see financial information on my customer portal?",
        answer:
          "Yes, under the 'Finances' tab, you can view your balance, terms, and previous invoices. If you see incorrect information, contact our accounting team through Solar X Canada support.",
      },
      {
        question: "What is live data?",
        answer:
          "Live data provides information about your system's production. You can view production data from the last 5 minutes to the last year for a comprehensive overview.",
      },
      {
        question: "Why don't I see any live data on my customer portal?",
        answer:
          "If no live data appears, there may be a connection issue with your monitoring system. Open a support ticket through the customer portal or contact our after-service team for assistance.",
      },
      {
        question: "What should I do if I'm experiencing technical issues with my customer portal?",
        answer:
          "For technical questions, please reach out to our Solar X Canada technical support team for assistance.",
      },
    ],
  },
]

export function FAQSection() {
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
    <section className="bg-background py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
                {category.title}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${categoryIndex}-${faqIndex}`}
                    className="border-b border-border"
                  >
                    <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 relative min-h-screen w-full flex items-center justify-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/aerial-view-of-house-with-solar-panels-on-roof--dr.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
          </div>
          
          <div className="relative bg-primary/80 backdrop-blur-sm rounded-xl p-8 sm:p-12 w-full max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">Contact Us</h2>
              <p className="mt-4 text-lg text-primary-foreground/90">
                We're here to help! Whether you have questions about solar and battery solutions, rebates, or installation, our
                team is ready to assist. Send us a message, and we'll get back to you soon!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="faqFirstName" className="text-primary-foreground">
                  First Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="faqFirstName"
                  placeholder="First Name"
                  required
                  className="border-input bg-input text-primary-foreground placeholder:text-muted-foreground"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="faqLastName" className="text-primary-foreground">
                  Last Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="faqLastName"
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
                <Label htmlFor="faqEmail" className="text-primary-foreground">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="faqEmail"
                  type="email"
                  placeholder="Email"
                  required
                  className="border-input bg-input text-primary-foreground placeholder:text-muted-foreground"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="faqPhone" className="text-primary-foreground">
                  Phone Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="faqPhone"
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
                    <SelectItem value="solar">Solar Solution</SelectItem>
                    <SelectItem value="battery">Battery Solution</SelectItem>
                    <SelectItem value="solar-battery">Solar + Battery Solution</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="faqMessage" className="text-primary-foreground">Tell us about your need (Optional)</Label>
              <Textarea
                id="faqMessage"
                placeholder="Tell us about your need"
                className="min-h-[120px] border-input bg-input text-primary-foreground placeholder:text-muted-foreground"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="faqSubscribe"
                checked={formData.subscribe}
                onCheckedChange={(checked) => setFormData({ ...formData, subscribe: checked as boolean })}
                className="border-input data-[state=checked]:bg-primary"
              />
              <Label htmlFor="faqSubscribe" className="text-sm leading-relaxed text-primary-foreground/90">
                I would like to join the Solar X Canada SMS and mailing list to receive newsletters, updates, and event
                invitations from Solar X Canada.
              </Label>
            </div>

            <Button type="submit" className="w-full py-6 text-lg font-semibold">
              Submit Survey
            </Button>
          </form>
          </div>
        </div>
      </div>
    </section>
  )
}
