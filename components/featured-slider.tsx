"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FeaturedSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const featuredPackages = [
    {
      title: "Mountain Expedition",
      description: "A 3-day adventure through scenic mountain trails with expert guides.",
      image:
        "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      price: "$299",
      duration: "3 days",
      difficulty: "Moderate",
    },
    {
      title: "Coastal Kayaking",
      description: "Explore hidden caves and pristine beaches on this kayaking adventure.",
      image:
        "https://images.unsplash.com/photo-1535191059345-c16453b851b2?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$199",
      duration: "1 day",
      difficulty: "Easy",
    },
    {
      title: "Forest Camping Retreat",
      description: "Disconnect from technology and reconnect with nature in our guided camping experience.",
      image:
        "https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      price: "$349",
      duration: "2 days",
      difficulty: "Easy",
    },
    {
      title: "Rock Climbing Challenge",
      description: "Test your limits with our professional rock climbing instructors on natural cliffs.",
      image:
        "https://images.unsplash.com/photo-1519021228607-ef6e4c22d821?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$249",
      duration: "1 day",
      difficulty: "Hard",
    },
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === featuredPackages.length - 1 ? 0 : prev + 1))
  }, [featuredPackages.length])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredPackages.length - 1 : prev - 1))
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [autoplay, nextSlide])

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Featured Adventures</h2>
          <p className="mt-4 text-lg text-muted-foreground">Our most popular packages and upcoming events</p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredPackages.map((pkg, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={pkg.image || "/placeholder.svg"}
                        alt={pkg.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle>{pkg.title}</CardTitle>
                        <Badge variant="outline" className="text-primary">
                          {pkg.price}
                        </Badge>
                      </div>
                      <CardDescription>{pkg.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex space-x-4">
                        <Badge variant="secondary">{pkg.duration}</Badge>
                        <Badge
                          variant="secondary"
                          className={
                            pkg.difficulty === "Easy"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              : pkg.difficulty === "Moderate"
                                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                          }
                        >
                          {pkg.difficulty}
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-[#E8C27A] text-[#5A4A2F] hover:bg-[#E8C27A]/90">Book Now</Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-background shadow-md md:-translate-x-6"
            onClick={prevSlide}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous slide</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-background shadow-md md:translate-x-6"
            onClick={nextSlide}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next slide</span>
          </Button>

          {/* Dots */}
          <div className="mt-6 flex justify-center space-x-2">
            {featuredPackages.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${currentSlide === index ? "bg-primary" : "bg-muted-foreground/30"}`}
                onClick={() => setCurrentSlide(index)}
                onMouseEnter={() => setAutoplay(false)}
                onMouseLeave={() => setAutoplay(true)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
