"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    {
      src: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
      alt: "Hiking through mountain trails",
      title: "Mountain Hiking",
    },
    {
      src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
      alt: "Kayaking in crystal clear waters",
      title: "Ocean Kayaking",
    },
    {
      src: "https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
      alt: "Rock climbing adventure",
      title: "Rock Climbing",
    },
    {
      src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
      alt: "Camping under the stars",
      title: "Wilderness Camping",
    },
    {
      src: "https://res.cloudinary.com/djmzvj6yf/image/upload/v1746548980/WhatsApp_Image_2025-05-06_at_15.21.34_409d94e2_sxnehb.jpg",
      alt: "Cycling through scenic routes",
      title: "Mountain Biking",
    },
    {
      src: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
      alt: "Paragliding over beautiful landscapes",
      title: "Paragliding",
    },
  ]

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "auto"
  }

  const navigateImage = (direction: number) => {
    const newIndex = (currentImage + direction + images.length) % images.length
    setCurrentImage(newIndex)
  }

  return (
    <section id="gallery" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Adventure Gallery</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our past adventures and get inspired for your next journey
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                <h3 className="text-white font-bold text-lg">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <button className="absolute top-4 right-4 text-white z-10" onClick={closeLightbox}>
            <X className="h-8 w-8" />
            <span className="sr-only">Close</span>
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white"
            onClick={() => navigateImage(-1)}
          >
            <span className="sr-only">Previous</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="relative max-h-[80vh] max-w-[90vw]">
            <Image
              src={images[currentImage].src || "/placeholder.svg"}
              alt={images[currentImage].alt}
              width={1200}
              height={900}
              className="max-h-[80vh] w-auto object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white">
              <h3 className="text-xl font-bold">{images[currentImage].title}</h3>
              <p>{images[currentImage].alt}</p>
            </div>
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white"
            onClick={() => navigateImage(1)}
          >
            <span className="sr-only">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}
