import { CheckCircle } from "lucide-react"

export default function About() {
  const features = [
    "Expert guides with years of experience",
    "Small groups for personalized attention",
    "All-inclusive packages with no hidden fees",
    "Eco-friendly and sustainable adventures",
    "Flexible booking and cancellation policies",
    "Safety-first approach to all activities",
  ]

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About Our Adventures</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We curate extraordinary experiences for thrill-seekers and nature lovers alike
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Why Choose Us?</h3>
            <p className="text-muted-foreground">
              Since 2010, we've been connecting adventurers with unforgettable experiences. Our team of passionate
              guides and travel experts work tirelessly to create the perfect adventure for you, whether you're seeking
              adrenaline-pumping activities or peaceful nature retreats.
            </p>
            <p className="text-muted-foreground">
              We believe that adventure is for everyone, which is why we offer a wide range of activities suitable for
              all ages and experience levels. Our commitment to safety, sustainability, and exceptional service sets us
              apart from the rest.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">What We Offer</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
