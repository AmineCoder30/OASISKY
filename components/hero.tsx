import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/djmzvj6yf/image/upload/v1746548950/WhatsApp_Image_2025-05-06_at_15.21.04_7291d407_xfkg7k.jpg')",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Book Your Adventure Now
        </h1>
        <p className="mb-8 max-w-2xl text-lg sm:text-xl md:text-2xl">
          Discover unforgettable experiences and create memories that last a lifetime
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button asChild size="lg" className="text-lg bg-[#E8C27A] text-[#5A4A2F] hover:bg-[#E8C27A]/90">
            <Link href="#booking">Book Now</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-lg bg-transparent border-white text-white hover:bg-white/10"
          >
            <Link href="#gallery">Explore Activities</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
