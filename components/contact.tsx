import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Contact Us</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions? We're here to help you plan your perfect adventure
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card shadow-sm">
            <div className="mb-4 rounded-full bg-primary/10 p-3">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Phone</h3>
            <p className="mb-4 text-muted-foreground">Mon-Fri from 8am to 6pm</p>
            <a href="tel:+11234567890" className="text-primary hover:underline">
              +1 (123) 456-7890
            </a>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card shadow-sm">
            <div className="mb-4 rounded-full bg-primary/10 p-3">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Email</h3>
            <p className="mb-4 text-muted-foreground">We'll respond within 24 hours</p>
            <a href="mailto:info@adventurebooking.com" className="text-primary hover:underline">
              info@adventurebooking.com
            </a>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card shadow-sm md:col-span-2 lg:col-span-1">
            <div className="mb-4 rounded-full bg-primary/10 p-3">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Office</h3>
            <p className="mb-4 text-muted-foreground">Visit our main office</p>
            <address className="not-italic text-primary">
              123 Adventure Way
              <br />
              Santa Monica, CA 90401
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center">
          <h3 className="mb-6 text-2xl font-bold">Follow Us</h3>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-[#E8C27A] text-[#E8C27A] hover:bg-[#E8C27A]/10"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-[#E8C27A] text-[#E8C27A] hover:bg-[#E8C27A]/10"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-[#E8C27A] text-[#E8C27A] hover:bg-[#E8C27A]/10"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-[#E8C27A] text-[#E8C27A] hover:bg-[#E8C27A]/10"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
