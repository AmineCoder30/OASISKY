"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      })
      setEmail("")
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section className="py-12 bg-[#E8C27A] text-[#5A4A2F]">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Subscribe to Our Newsletter</h2>
          <p className="mt-4 text-[#5A4A2F]/80">Get the latest adventure updates, exclusive offers, and travel tips</p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 mx-auto max-w-md">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white text-foreground"
            />
            <Button
              type="submit"
              variant="secondary"
              disabled={isSubmitting}
              className="bg-[#5A4A2F] text-white hover:bg-[#5A4A2F]/90"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          <p className="mt-4 text-xs text-[#5A4A2F]/70">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  )
}
