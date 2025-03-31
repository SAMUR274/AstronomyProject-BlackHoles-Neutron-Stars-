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

            <section className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed">
                <h2 className="font-semibold mb-4">Key Takeaways</h2>
                <p>
                Black holes and neutron stars represent two of the most extreme states of matter in the universe.
                These objects challenge our understanding of physics, from the behavior of matter under intense gravity
                to the warping of spacetime itself.
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