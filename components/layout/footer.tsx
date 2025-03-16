import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <p className="text-sm text-gray-200">
            H-Plus Lifecure is dedicated to providing cutting-edge health solutions for improved wellness through
            innovative pharmaceutical research and development.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <nav className="flex flex-col gap-2">
            <Link href="/" className="text-sm text-gray-200 hover:text-white">
              Home
            </Link>
            <Link href="/services" className="text-sm text-gray-200 hover:text-white">
              Services
            </Link>
            <Link href="/about" className="text-sm text-gray-200 hover:text-white">
              About Us
            </Link>
            <Link href="/contact" className="text-sm text-gray-200 hover:text-white">
              Contact
            </Link>
          </nav>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Contact Info</h3>
          <div className="space-y-2">
            <p className="text-sm text-gray-200 flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              123 Pharma Street, Health City
            </p>
            <p className="text-sm text-gray-200 flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +1 234 567 890
            </p>
            <p className="text-sm text-gray-200 flex items-center gap-2">
              <Mail className="h-4 w-4" />
              contact@hpluslifecure.com
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-200 hover:text-white">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-200 hover:text-white">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-200 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="container py-6 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} H-Plus Lifecure. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

