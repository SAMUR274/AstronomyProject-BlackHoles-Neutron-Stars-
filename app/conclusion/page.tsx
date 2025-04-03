// app/conclusion/page.tsx
"use client";
import NavBar from '../../src/components/nav-bar';

export default function Conclusion() {
    return (
        <main className="min-h-screen bg-black text-white">
        <NavBar />
        
        <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">
                Conclusion: The Future of Black Holes and Neutron Stars
            </h1>

            {/* Key Takeaways */}
            <h2 className="text-2xl font-semibold mb-4 flex flex-col items-center justify-center text-center">Key Takeaways</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full mb-12">
                <div className="bg-purple-900/80 p-6 rounded-lg backdrop-blur-sm border border-purple-700/50 flex flex-col items-center">
                    <h2 className="text-lg font-bold text-center mb-2">Black holes have an event horizon</h2>
                    <p className="text-sm text-center">An event horizon marks the boundary where nothing, not even light, can escape.</p>
                </div>
                <div className="bg-purple-900/80 p-6 rounded-lg backdrop-blur-sm border border-purple-700/50 flex flex-col items-center">
                    <h2 className="text-lg font-bold text-center mb-2">Neutron stars are extremely dense</h2>
                    <p className="text-sm text-center">A teaspoon of neutron star material would weigh billions of tons.</p>
                </div>
                <div className="bg-purple-900/80 p-6 rounded-lg backdrop-blur-sm border border-purple-700/50 flex flex-col items-center">
                    <h2 className="text-lg font-bold text-center mb-2">Gravitational waves reveal cosmic collisions</h2>
                    <p className="text-sm text-center">Mergers of black holes and neutron stars produce ripples in space-time detected on Earth.</p>
                </div>
                <div className="bg-purple-900/80 p-6 rounded-lg backdrop-blur-sm border border-purple-700/50 flex flex-col items-center">
                    <h2 className="text-lg font-bold text-center mb-2">Technology advances our understanding</h2>
                    <p className="text-sm text-center">Gravitational wave detectors and telescopes help us study these extreme objects.</p>
                </div>
            </div>

            <div className="mb-12">
                <img
                    src="/images/blackhole.png"
                    alt="Black Hole"
                />
            </div>

            <section className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed">
                <h2 className="text-2xl font-semibold mb-4 flex flex-col items-center justify-center text-center">Our Last Message</h2>
                <p>
                Black holes and neutron stars are both remnants of massive stars, but they are fundamentally different. Black holes
                possess an event horizon, which renders them inescapable, whereas neutron stars are very dense but still detectable.
                Research on these celestial objects has been enhanced by theoretical physics, observations of astronomy, and groundbreaking
                findings such as gravitational waves and black hole imaging. Interpreting these leftovers enables us to explore the universe's
                extreme conditions and gain insights into gravity, space-time, and the evolution of stars.
                </p>
                <p className="mt-4">
                As we continue to develop more advanced technologies, such as gravitational wave detectors and space telescopes,
                we will uncover more mysteries hidden within these extraordinary cosmic entities.
                </p>
                <p className="mt-4">
                Ultimately, studying black holes and neutron stars will not only provide insight into stellar evolution
                but also allow us to test and refine the very laws of physics that govern the universe.
                </p>
            </section>

            <div className="mt-12">
                <p className="text-lg">
                Thank you for joining us on this cosmic journey! Stay curious and keep exploring the wonders of the universe.
                </p>
            </div>

            <section className="max-w-4xl mx-auto mt-16 text-left">
                <h2 className="text-2xl font-semibold mb-4 flex flex-col items-center justify-center text-center">Work Cited</h2>
                <ul className="text-sm md:text-base list-disc pl-5">
                    <li><a href="https://www.ligo.caltech.edu/" className="text-blue-400 underline">LIGO Lab: Caltech: MIT. Caltech. (n.d.).</a></li>
                    <li><a href="https://chandra.harvard.edu/" className="text-blue-400 underline">Chandra X-ray Observatory - NASA’s flagship X-ray telescope. (n.d.).</a></li>
                    <li><a href="https://www.space.com/15421-black-holes-facts-formation-discovery-sdcmp" className="text-blue-400 underline">Dobrijevic, D., & Tillman, N. T. (2025, February 15). Black holes: Everything you need to know. Space.com.</a></li>
                    <li><a href="https://universe.nasa.gov/black-holes/seeing-the-invisible" className="text-blue-400 underline">NASA Universe Web Team. (2021, April 12). Black holes: Seeing the invisible!. NASA.</a></li>
                    <li><a href="https://science.nasa.gov/astrophysics/focus-areas/black-holes" className="text-blue-400 underline">NASA. (2024, May 8). Black hole basics. NASA Science.</a></li>
                    <li><a href="https://www.cfa.harvard.edu/research/topics/black-holes" className="text-blue-400 underline">Harvard-Smithsonian Center for Astrophysics. (n.d.). Black Holes.</a></li>
                    <li>Bell Burnell, J. (2004). Discovery of pulsars. <i>Physics World, 17</i>(9), 33–38.</li>
                    <li>Lyne, A. G., & Graham-Smith, F. (2012). <i>Pulsar Astronomy</i> (4th ed.). Cambridge University Press.</li>
                    <li><a href="https://www.nasa.gov/nicer" className="text-blue-400 underline">NASA. (n.d.). Neutron star Interior Composition Explorer (NICER).</a></li>
                    <li>Rees, M. J. (1984). <i>Black Holes, White Dwarfs and Neutron Stars: The Physics of Compact Objects</i>. Wiley-VCH.</li>
                </ul>
            </section>
            </div>
        </div>
        </main>
    );
}
