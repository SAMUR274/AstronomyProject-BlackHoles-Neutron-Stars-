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
            <h2 className="font-semibold mb-4">Key Takeaways</h2>
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
                <h2 className="font-semibold mb-4">Our Last Message</h2>
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
            </div>
        </div>
        </main>
    );
}
