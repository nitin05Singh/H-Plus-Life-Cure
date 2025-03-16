"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Microscope, FlaskRoundIcon as Flask, Heart } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AboutPage() {
  const router = useRouter()
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">About H-Plus Lifecure</h1>
            <p className="text-xl">
              Pioneering innovative pharmaceutical solutions for tomorrow's healthcare challenges.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-600 mb-6">
              H-Plus Lifecure was founded with a clear vision: to revolutionize healthcare through innovative
              pharmaceutical solutions. We're committed to developing cutting-edge treatments that address unmet medical
              needs and improve patient outcomes.
            </p>
            <div className="space-y-4">
              {[
                "State-of-the-art research facilities",
                "Innovative research methodologies",
                "Focus on patient-centric solutions",
                "Commitment to quality and safety",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="text-primary h-5 w-5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image src="/placeholder.svg?height=400&width=600" alt="Modern Laboratory" fill className="object-cover" />
          </div>
        </div>

        {/* Approach Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Microscope,
              title: "Research Excellence",
              description: "Utilizing cutting-edge technology and methodologies in our research",
            },
            {
              icon: Flask,
              title: "Innovation",
              description: "Developing novel solutions for complex healthcare challenges",
            },
            {
              icon: Heart,
              title: "Patient Focus",
              description: "Prioritizing patient needs in every aspect of our work",
            },
          ].map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <div className="font-bold mb-2">{item.title}</div>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-8">
              We're dedicated to advancing healthcare through innovative pharmaceutical research and development. Our
              mission is to create effective, safe, and accessible treatments that improve patient outcomes and
              contribute to a healthier world.
            </p>
            <Button onClick={() => router.push("/contact")}>Partner With Us</Button>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl mb-2">Innovation</h3>
                <p className="text-gray-600">Pushing boundaries in pharmaceutical research and development.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl mb-2">Integrity</h3>
                <p className="text-gray-600">Maintaining the highest standards of ethical practice.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl mb-2">Impact</h3>
                <p className="text-gray-600">Making a real difference in global healthcare.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

