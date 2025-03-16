"use client"

// Previous imports remain same...
import { Shield, FlaskRoundIcon as Flask, Heart, Award, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  const router = useRouter()

  return (
    <>
      {/* Hero Section - remains same */}

      {/* Vision Section - New */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/modern-laboratory_951562-3986.jpg"  // Add a lab research image here
            alt="Laboratory Research"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                The Pursuit of a Healthier Future
                <br />
                Fueled by Science
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Advancing healthcare through innovative pharmaceutical solutions
              </p>
              <Button 
                size="lg" 
                variant="primary"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => router.push('/about')} 
              >
                Discover More
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
          <p className="text-sm mb-2">SCROLL</p>
          <div className="animate-bounce">↓</div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose H-Plus Lifecure?</h2>
            <p className="text-gray-600">
              We combine cutting-edge technology with innovative research to deliver exceptional pharmaceutical
              solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Assured",
                description: "Rigorous quality control and testing protocols",
              },
              {
                icon: Flask,
                title: "Innovation First",
                description: "Advanced research and development approach",
              },
              {
                icon: Heart,
                title: "Patient Focused",
                description: "Dedicated to improving patient outcomes",
              },
              {
                icon: Award,
                title: "Modern Facilities",
                description: "State-of-the-art research laboratories",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Focus Section - New */}
      <section className="py-16 bg-secondary/10">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Research Focus</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Drug Development",
                description:
                  "Developing innovative pharmaceutical solutions using cutting-edge technology and research methodologies.",
                image: "/Cert-Drug-Discovery-scaled.jpg?height=200&width=300",
              },
              {
                title: "Clinical Studies",
                description:
                  "Conducting thorough clinical studies to ensure the safety and efficacy of our pharmaceutical products.",
                image: "/o-CLINICAL-TRIAL-facebook.jpg?height=200&width=300",
              },
              {
                title: "Healthcare Innovation",
                description: "Exploring new approaches to improve healthcare delivery and patient outcomes.",
                image: "/digital-health-innovation.jpg?height=200&width=300",
              },
            ].map((focus, index) => (
              <Card key={index} className="overflow-hidden">
                <Image
                  src={focus.image || "/placeholder.svg"}
                  alt={focus.title}
                  width={300}
                  height={200}
                  className="w-full object-cover h-48"
                />
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2">{focus.title}</h3>
                  <p className="text-sm text-gray-600">{focus.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-secondary to-accent text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us in Shaping the Future of Healthcare</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Partner with us to develop innovative pharmaceutical solutions that make a real difference.
          </p>
          <Button size="lg" variant="primary" onClick={() => router.push("/contact")}>
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </>
  )
}

