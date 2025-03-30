// app/practice/page.tsx
"use client";
import NavBar from '../../src/components/nav-bar';
import AiChat from '../../src/components/ai-chat';

export default function Practice() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/space.jpg')] bg-cover bg-center"></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Navbar */}
      <NavBar />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-white">
          {/* Header */}
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            Neutron Stars
          </h1>

          {/* Introductory Text */}
          {/* <p className="text-lg md:text-xl max-w-3xl text-center mb-12">
            Neutron stars are some of the strangest objects in the universe. Born from the explosive deaths of massive stars, they pack the mass of the Sun into a sphere just 12 miles (20 kilometers) across. Let’s dive into what makes them so bizarre.
          </p> */}

          {/* Image Placeholder (replace with actual image) */}
          {/* <div className="w-full max-w-4xl mb-12">
            <img
              src="/neutron-star-placeholder.jpg" // Replace with actual image path
              alt="Neutron Star Illustration"
              className="w-full h-auto rounded-lg border border-purple-700/50"
            />
            <p className="text-sm opacity-80 mt-2 text-center">
              Illustration of a neutron star. Credit: NASA
            </p>
          </div> */}

          {/* Section 1: Density */}
          <div className="bg-purple-900/80 p-8 rounded-lg backdrop-blur-sm border border-purple-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
            {/* <h2 className="text-2xl font-bold mb-4">Neutron stars start their lives with a bang</h2> */}
            <div className="grid grid-cols-1 gap-8 max-w-5xl">
            {/* Spotlight 1: Born in a Bang */}
            <div className="group w-64 h-64 rounded-full bg-purple-900/80 border border-purple-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-purple-800/90">
              <h2 className="text-md font-bold text-center mb-2">Neutron stars start their lives with a bang</h2>
              <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                <p><span className="font-bold text-purple-300">Supernova:</span> Star explodes</p>
                <p><span className="font-bold text-purple-300">Mass:</span> 7–19 Suns</p>
                <p><span className="font-bold text-purple-300">Result:</span> Neutron star</p>
              </div>
            </div>
          </div>
            <img
              src="/images/neutronStars/supernova-1.gif" 
              className="w-full h-auto rounded-lg border border-purple-700/50"
            />
            {/* <p className="text-base">
              Imagine crushing the Sun down to the size of a small city. That’s a neutron star. A sugar-cube-sized piece of neutron star material would weigh about a billion tons on Earth—roughly the weight of Mount Everest. This density comes from the star’s core being squeezed so tightly that protons and electrons combine into neutrons.
            </p> */}
          </div>

          {/* Section 2: Gravity */}
          <div className="bg-purple-900/80 p-8 rounded-lg backdrop-blur-sm border border-purple-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
            {/* <h2 className="text-2xl font-bold mb-4">Neutron stars contain the densest material that we can directly observe</h2> */}
           {/* Spotlight 2: Cosmic Heavyweights */}
           <div className="group w-64 h-64 rounded-full bg-purple-900/80 border border-purple-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-purple-800/90">
              <h2 className="text-lg font-bold text-center mb-2">Neutron stars contain the densest material that we can directly observe</h2>
              <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                <p><span className="font-bold text-purple-300">Size:</span> City-scale</p>
                <p><span className="font-bold text-purple-300">Weight:</span> Billion-ton teaspoon</p>
                <p><span className="font-bold text-purple-300">View:</span> Pulsar glimpse</p>
              </div>
            </div>
            <img
              src="/images/neutronStars/2.gif" 
              className="w-full h-auto rounded-lg border border-purple-700/50"
            />
            {/* <p className="text-base">
              The gravity on a neutron star is so intense that if you dropped a marshmallow from a height of one meter, it would hit the surface at 4 million miles per hour (6.4 million kilometers per hour). This gravity warps spacetime around the star, bending light in ways we can observe from Earth.
            </p> */}
          </div>

          {/* Section 3: Spin */}
          <div className="bg-purple-900/80 p-8 rounded-lg backdrop-blur-sm border border-purple-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
            {/* <h2 className="text-2xl font-bold mb-4">Neutron stars can spin as fast as blender blades</h2> */}
            {/* Spotlight 3: Spinning Wonders */}
            <div className="group w-64 h-64 rounded-full bg-purple-900/80 border border-purple-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-purple-800/90">
              <h2 className="text-lg font-bold text-center mb-2">Neutron stars can spin as fast as blender blades</h2>
              <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                <p><span className="font-bold text-purple-300">Spin:</span> 43,000/min</p>
                <p><span className="font-bold text-purple-300">Pulse:</span> Cosmic clocks</p>
                <p><span className="font-bold text-purple-300">Use:</span> Navigation</p>
              </div>
            </div>
            <img
              src="/images/neutronStars/3.gif" 
              className="w-full h-auto rounded-lg border border-purple-700/50"
            />
            {/* <p className="text-base">
              Neutron stars can spin incredibly fast. Some, called pulsars, rotate hundreds of times per second. The fastest known pulsar spins 716 times per second! As they spin, they sweep beams of radiation across space, like a cosmic lighthouse, which we detect as regular pulses.
            </p> */}
          </div>

          {/* Section 4: Magnetic Fields */}
          <div className="bg-purple-900/80 p-8 rounded-lg backdrop-blur-sm border border-purple-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
            {/* <h2 className="text-2xl font-bold mb-4">Neutron stars are the strongest known magnets</h2> */}
            {/* Spotlight 4: Magnetic Titans */}
            <div className="group w-64 h-64 rounded-full bg-purple-900/80 border border-purple-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-purple-800/90">
              <h2 className="text-lg font-bold text-center mb-2">Neutron stars are the strongest known magnets</h2>
              <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                <p><span className="font-bold text-purple-300">Gravity:</span> Light-bending</p>
                <p><span className="font-bold text-purple-300">Fields:</span> Ultra-strong</p>
                <p><span className="font-bold text-purple-300">Power:</span> Dense mass</p>
              </div>
            </div>
            <img
              src="/images/neutronStars/4.gif" 
              className="w-full h-auto rounded-lg border border-purple-700/50"
            />
            {/* <p className="text-base">
              Neutron stars have magnetic fields a trillion times stronger than Earth’s. In some cases, like magnetars, these fields are so powerful they can rip atoms apart and cause starquakes—fractures in the star’s crust that release bursts of energy.
            </p> */}
          </div>

          {/* Section 5: Weird Physics */}
          <div className="bg-purple-900/80 p-8 rounded-lg backdrop-blur-sm border border-purple-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
            {/* <h2 className="text-2xl font-bold mb-4">Unlocking the Secrets of Neutron Stars</h2> */}
            {/* Spotlight 5: NICER Mission */}
            <div className="group w-64 h-64 rounded-full bg-purple-900/80 border border-purple-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-purple-800/90">
              <h2 className="text-lg font-bold text-center mb-2">Insight into Neutron Stars</h2>
              <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                <p><span className="font-bold text-purple-300">NICER:</span> ISS X-rays</p>
                <p><span className="font-bold text-purple-300">Goal:</span> Core secrets</p>
                <p><span className="font-bold text-purple-300">SEXTANT:</span> Space GPS</p>
              </div>
            </div>
            <img
              src="/images/neutronStars/6.gif" 
              className="w-full h-auto rounded-lg border border-purple-700/50"
            />
        
            {/* <p className="text-base">
              Inside a neutron star, matter behaves in ways we can’t fully replicate on Earth. The core might contain a soup of quarks or even stranger states of matter. Scientists are still puzzling out what happens under such extreme conditions.
            </p> */}
          </div>
        </div>
      </div>

      {/* Add AI Chat component */}
      <AiChat />
    </main>
  );
}