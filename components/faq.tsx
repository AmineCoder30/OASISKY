"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Faq() {
  const faqs = [
    {
      question: "What should I bring for my adventure?",
      answer:
        "We recommend bringing comfortable clothing appropriate for the activity and weather, a water bottle, sunscreen, and a camera. For specific activities, we'll provide a detailed packing list after booking.",
    },
    {
      question: "Are your activities suitable for beginners?",
      answer:
        "Yes! Most of our activities are designed for all experience levels, from beginners to experts. Our guides provide thorough instruction and ensure everyone's safety and enjoyment.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We offer free cancellation up to 24 hours before your scheduled activity. Cancellations made less than 24 hours in advance are subject to a 50% fee. No-shows are charged the full amount.",
    },
    {
      question: "Do you provide transportation to the activity locations?",
      answer:
        "For some activities, we offer optional transportation from central meeting points for an additional fee. This option can be selected during the booking process.",
    },
    {
      question: "Are there age restrictions for your activities?",
      answer:
        "Age restrictions vary by activity. Most of our adventures are suitable for participants aged 12 and up, while some are appropriate for younger children. Specific age requirements are listed in each activity description.",
    },
    {
      question: "What happens if there's bad weather on the day of my activity?",
      answer:
        "Safety is our priority. If weather conditions make an activity unsafe, we'll contact you to reschedule or offer a full refund. For light rain or minor weather issues, activities usually proceed as planned.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-muted-foreground">Find answers to common questions about our adventures</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
