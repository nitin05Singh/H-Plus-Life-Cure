"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleContact = () => {
    router.push("/contact")
  }

  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-27%20at%2010.25.44-YgrxWDo1t5R2XvJAP5umrFtGSUIiQE.jpeg"
            alt="H-Plus Lifecure Logo"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
          <Button onClick={handleContact}>Get in Touch</Button>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 mt-8">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <Button
                onClick={() => {
                  handleContact()
                  setIsOpen(false)
                }}
              >
                Get in Touch
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

