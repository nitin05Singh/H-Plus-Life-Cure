import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600">
          Get in touch with us for any inquiries about our pharmaceutical solutions and services.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-bold mb-2">Visit Us</h3>
                <p className="text-gray-600">
                  123 Pharma Street
                  <br />
                  Health City, HC 12345
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-bold mb-2">Call Us</h3>
                <p className="text-gray-600">
                  +1 234 567 890
                  <br />
                  +1 234 567 891
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-bold mb-2">Email Us</h3>
                <p className="text-gray-600">
                  info@hpluslifecure.com
                  <br />
                  support@hpluslifecure.com
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>

          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">First Name</label>
                <Input placeholder="John" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Last Name</label>
                <Input placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <Input type="email" placeholder="john@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Subject</label>
              <Input placeholder="How can we help?" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Message</label>
              <Textarea placeholder="Your message..." className="min-h-[150px]" />
            </div>
            <Button size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        <div className="relative h-[400px] lg:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564752026!5m2!1sen!2s"
            className="absolute inset-0 w-full h-full rounded-lg"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}

