"use client";

import { useState, useEffect } from "react";
import { getSchoolData } from "@/lib/schoolData";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const school = getSchoolData();
  const slides = school.images.slides && school.images.slides.length > 0
    ? school.images.slides
    : [{ image: school.images.hero, title: `Welcome to ${school.name}`, subtitle: school.motto }];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? "scale(1.05)" : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <div className={`max-w-4xl transform transition-all duration-1000 ${index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md max-w-2xl mx-auto">
                {slide.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${school.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full text-lg font-semibold bg-primary text-white hover:bg-primary/90 transition-all transform hover:scale-105"
                  style={{ backgroundColor: school.theme.primary }}
                >
                  Enroll Today
                </a>
                <a
                  href="#about"
                  className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-white text-white hover:bg-white/10 transition-all transform hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRight size={32} />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
