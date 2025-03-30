"use client";
import { useEffect, useRef, useState } from 'react';
import NavBar from '../../src/components/nav-bar';
import Image from 'next/image';

const sections = [
  {
    title: "Introduction to Black Holes and Neutron Stars",
    content: "Black holes and neutron stars are among the most fascinating objects in our universe. They are born from the catastrophic end of massive stars and represent two extremes of stellar evolution. When a very massive star reaches the end of its life, it may explode as a supernova. The core that remains can collapse into a neutron star or, if even more massive, form a black hole.",
    image: "/images/black-hole-neutron-star-intro.jpg",
    imageAlt: "Artist's impression of a black hole and neutron star"
  },
  {
    title: "Neutron Stars: The Densest Objects",
    content: "Neutron stars are incredibly dense objects. They form when a star explodes and leaves behind a core composed almost entirely of neutrons. Imagine taking a mass greater than that of our Sun and compressing it into a sphere only about 20 kilometers in diameter. The discovery of pulsars in 1967 by Jocelyn Bell Burnell and Antony Hewish provided the first clear evidence of neutron stars. The regular pulses of radio waves that we detect from these stars are produced by their rapid rotation.",
    image: "/images/neutron-star.jpg",
    imageAlt: "Artist's impression of a neutron star"
  },
  {
    title: "Black Holes: Where Light Can't Escape",
    content: "Black holes are regions in space where the gravitational pull is so strong that nothing can escape, not even light. The theoretical prediction of black holes began with Karl Schwarzschild solving Einstein's field equations. However, it took decades before we observed indirect evidence of their existence. X-ray observatories such as NASA's Chandra X-ray Observatory provided images of hot gas swirling around black holes in accretion disks. These disks heat up to millions of degrees as matter falls in and emit powerful X-rays that we can detect.",
    image: "/images/black-hole-accretion.jpg",
    imageAlt: "X-ray image of a black hole's accretion disk"
  },
  {
    title: "Gravitational Waves: A New Window to the Universe",
    content: "In recent years, another groundbreaking tool has been used to study black holes. The Laser Interferometer Gravitational-Wave Observatory, known as LIGO, has detected gravitational waves from the merger of black holes. These ripples in spacetime were predicted by Einstein and have opened a new window into the study of the cosmos. The gravitational wave detections confirm that black holes can merge and release enormous amounts of energy in the process.",
    image: "/images/gravitational-waves.jpg",
    imageAlt: "Diagram of binary black hole merger and gravitational waves"
  },
  {
    title: "Tools of Discovery",
    content: "The tools and observations used for studying these objects include radio telescopes that detect pulsar signals from neutron stars, X-ray telescopes that capture the high-energy surroundings of black holes, and gravitational wave detectors that record the cosmic ripples produced by black hole mergers. The work of scientists such as Jocelyn Bell Burnell, Karl Schwarzschild, and Kip Thorne has been essential in shaping our understanding of these extreme objects.",
    image: "/images/astronomy-tools.jpg",
    imageAlt: "Various astronomical observation tools"
  },
  {
    title: "The Future of Research",
    content: "Together, these discoveries have not only enriched our knowledge of stellar evolution but have also challenged and expanded our theories of gravity and matter under extreme conditions. The study of black holes and neutron stars continues to be at the forefront of modern astrophysics and offers many exciting opportunities for future research.",
    image: "/images/future-research.jpg",
    imageAlt: "Future of astronomical research"
  }
];

export default function Introduction() {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const scrollPosition = container.scrollTop;
      const sectionHeight = container.clientHeight;
      
      const newSection = Math.floor(scrollPosition / sectionHeight);
      if (newSection !== currentSection) {
        setCurrentSection(newSection);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [currentSection]);

  return (
    <main className="min-h-screen bg-black text-white">
      <NavBar />
      <div 
        ref={containerRef}
        className="h-screen overflow-y-auto snap-y snap-mandatory"
      >
        {sections.map((section, index) => (
          <section
            key={index}
            className="h-screen snap-start flex flex-col items-center justify-center p-8 relative"
          >
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src={section.image}
                alt={section.imageAlt}
                fill
                className="object-cover opacity-50"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-8">
                {section.title}
              </h1>
              <p className="text-lg md:text-xl leading-relaxed">
                {section.content}
              </p>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
              <div className="flex space-x-2">
                {sections.map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === currentSection ? 'bg-white scale-125' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
} 