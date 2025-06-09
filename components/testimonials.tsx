"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials = [
    {
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
      role: "Adventure Enthusiast",
      content:
        "The mountain expedition was absolutely breathtaking! Our guide was knowledgeable and made sure we were safe throughout the journey. I can't wait to book my next adventure!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
      role: "First-time Climber",
      content:
        "As someone who had never rock climbed before, I was nervous about the experience. The team was patient and encouraging, making it one of the most rewarding challenges I've ever undertaken.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
      role: "Family Traveler",
      content:
        "We booked the forest camping retreat for our family of four, and it was perfect! The kids loved the guided nature walks, and we all enjoyed disconnecting from technology for a weekend.",
      rating: 4,
    },
    {
      name: "David Wilson",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
      role: "Photography Enthusiast",
      content:
        "The coastal kayaking tour provided incredible photo opportunities. The guides knew exactly where to take us for the best views and wildlife sightings. Highly recommended!",
      rating: 5,
    },
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }, [testimonials.length])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        nextSlide()
      }, 6000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [autoplay, nextSlide])

  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What Our Adventurers Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Read about the experiences of those who've joined our adventures
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="h-full">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <Avatar className="h-20 w-20 mb-4">
                          <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                          <AvatarFallback>
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-500" : "text-gray-300 dark:text-gray-600"}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>

                        <blockquote className="mb-4 text-lg">"{testimonial.content}"</blockquote>

                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
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
            <span className="sr-only">Previous testimonial</span>
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
            <span className="sr-only">Next testimonial</span>
          </Button>

          {/* Dots */}
          <div className="mt-6 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${currentSlide === index ? "bg-primary" : "bg-muted-foreground/30"}`}
                onClick={() => setCurrentSlide(index)}
                onMouseEnter={() => setAutoplay(false)}
                onMouseLeave={() => setAutoplay(true)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
