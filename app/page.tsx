import Hero from "@/components/hero"
import About from "@/components/about"
import Gallery from "@/components/gallery"
import FeaturedSlider from "@/components/featured-slider"
import Testimonials from "@/components/testimonials"
import BookingForm from "@/components/booking-form"
import Faq from "@/components/faq"
import Contact from "@/components/contact"
import Newsletter from "@/components/newsletter"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Gallery />
      <FeaturedSlider />
      <Testimonials />
      <BookingForm />
      <Faq />
      <Contact />
      <Newsletter />
    </main>
  )
}
