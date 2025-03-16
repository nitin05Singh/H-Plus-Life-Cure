import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Microscope, Pill, FlaskRoundIcon as Flask, Brain, Shield, Users } from "lucide-react"
import Image from "next/image"

export default function ServicesPage() {
  const services = [
    {
      icon: Microscope,
      title: "Research & Development",
      description: "Cutting-edge pharmaceutical research and innovative drug development programs.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Pill,
      title: "Drug Manufacturing",
      description: "State-of-the-art facilities for high-quality pharmaceutical production.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Flask,
      title: "Quality Control",
      description: "Rigorous testing and quality assurance for all our products.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Brain,
      title: "Clinical Trials",
      description: "Comprehensive clinical research and testing programs.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Ensuring all products meet international safety standards.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Users,
      title: "Healthcare Consulting",
      description: "Expert consultation services for healthcare providers.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl">
              Discover our comprehensive range of pharmaceutical services designed to advance healthcare solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <service.icon className="w-8 h-8 text-primary" />
                  <div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                  <li>Advanced methodologies</li>
                  <li>Expert team</li>
                  <li>Quality assurance</li>
                  <li>Innovative solutions</li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Research", description: "Initial research and analysis" },
              { step: "02", title: "Development", description: "Product development and testing" },
              { step: "03", title: "Quality Check", description: "Rigorous quality control" },
              { step: "04", title: "Delivery", description: "Safe and timely delivery" },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary/10 absolute -top-6 -left-4">{item.step}</div>
                <div className="relative bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

