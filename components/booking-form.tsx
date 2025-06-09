"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { CalendarIcon, Clock } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  activity: z.string({
    required_error: "Please select an activity.",
  }),
  date: z.date({
    required_error: "Please select a date.",
  }),
  time: z.string({
    required_error: "Please select a time.",
  }),
  participants: z
    .string()
    .transform((val) => Number.parseInt(val, 10))
    .refine((val) => val > 0 && val <= 20, {
      message: "Number of participants must be between 1 and 20.",
    }),
  specialRequests: z.string().optional(),
})

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      participants: "1",
      specialRequests: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)

    // Simulate API call with timeout
    setTimeout(() => {
      console.log(values)
      toast({
        title: "Booking Submitted!",
        description: "We'll contact you shortly to confirm your booking.",
      })
      form.reset()
      setIsSubmitting(false)
    }, 1500)

    // In a real application, you would use EmailJS here
    // For example:
    // try {
    //   await emailjs.send(
    //     'YOUR_SERVICE_ID',
    //     'YOUR_TEMPLATE_ID',
    //     values,
    //     'YOUR_PUBLIC_KEY'
    //   );
    //   toast({
    //     title: "Booking Submitted!",
    //     description: "We'll contact you shortly to confirm your booking.",
    //   });
    //   form.reset();
    // } catch (error) {
    //   toast({
    //     title: "Something went wrong.",
    //     description: "Your booking was not submitted. Please try again.",
    //     variant: "destructive",
    //   });
    // } finally {
    //   setIsSubmitting(false);
    // }
  }

  const activities = [
    "Mountain Hiking",
    "Rock Climbing",
    "Kayaking",
    "Camping",
    "Cycling Tour",
    "Paragliding",
    "Zip Lining",
    "Wildlife Safari",
  ]

  const timeSlots = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ]

  return (
    <section id="booking" className="py-20 bg-muted/50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Book Your Adventure</h2>
          <p className="mt-4 text-lg text-muted-foreground">Fill out the form below to reserve your spot</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="(123) 456-7890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="activity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Activity</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an activity" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {activities.map((activity) => (
                            <SelectItem key={activity} value={activity}>
                              {activity}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={`w-full pl-3 text-left font-normal ${
                                  !field.value ? "text-muted-foreground" : ""
                                }`}
                              >
                                {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Time</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a time" />
                              <Clock className="ml-auto h-4 w-4 opacity-50" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="participants"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Participants</FormLabel>
                      <FormControl>
                        <Input type="number" min="1" max="20" {...field} />
                      </FormControl>
                      <FormDescription>Maximum 20 participants per booking.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="specialRequests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Special Requests</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any dietary requirements, accessibility needs, or other special requests..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-[#E8C27A] text-[#5A4A2F] hover:bg-[#E8C27A]/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Book Now"}
                </Button>
              </form>
            </Form>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="rounded-lg overflow-hidden h-[400px]">
              <iframe
                title="Adventure Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.393553120906!2d-118.50536621936224!3d34.01991793028336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4cec2910019%3A0xb4170ab5ff23f5ab!2sSanta%20Monica%2C%20CA!5e0!3m2!1sen!2sus!4v1653489688499!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Booking Information</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Reservation Policy:</span>
                  <span className="text-muted-foreground">Bookings must be made at least 48 hours in advance.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Cancellation Policy:</span>
                  <span className="text-muted-foreground">Free cancellation up to 24 hours before the activity.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Payment:</span>
                  <span className="text-muted-foreground">
                    50% deposit required at booking, balance due on arrival.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Weather Policy:</span>
                  <span className="text-muted-foreground">
                    Activities may be rescheduled due to severe weather conditions.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
