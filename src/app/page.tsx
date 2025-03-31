"use client";
import { useState } from 'react';
import TypingEffect from '../components/typing-effect';
import Link from 'next/link';
import BlackHoleModel from '../components/3d-model';
import NavBar from '../components/nav-bar';
import ModelViewer from '../components/3d-model-viewer';
import AiChat from '../components/ai-chat';

export default function Home() {
  const [selectedObject, setSelectedObject] = useState<string | null>(null);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/space.jpg')] bg-cover bg-center"></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Navbar */}
      <NavBar />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          {/* 3D Model positioned in the background */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 opacity-80">
            <BlackHoleModel />
          </div>
          
          {/* Main content */}
          <div className="relative z-20">
            <div className="mb-12">
              <TypingEffect 
                texts={[
                  "Explore the Bizarre Stellar Graveyard: Black Holes & Neutron Stars",
                  "Where gravity becomes so strong, even light can't escape...",
                  "Discover stars so dense, a teaspoon weighs as much as a mountain...",
                  "Witness the most extreme environments in our universe...",
                  "Journey through spacetime warps and quantum phenomena...",
                  "Unravel the mysteries of stellar evolution..."
                ]} 
                className="text-3xl md:text-5xl font-bold text-white" 
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-4xl mx-auto">
              <Link 
                href="/introduction"
                className="bg-indigo-900/80 hover:bg-indigo-800 text-white p-8 rounded-lg transition-all transform hover:scale-105 backdrop-blur-sm border border-indigo-700/50"
              >
                <h2 className="text-2xl font-bold mb-3">Introduction to Black Holes and Neutron Stars</h2>
                <p className="text-sm opacity-90">Explore the fascinating world of these extreme cosmic objects</p>
              </Link>
              <Link 
                href="/practice"
                className="bg-purple-900/80 hover:bg-purple-800 text-white p-8 rounded-lg transition-all transform hover:scale-105 backdrop-blur-sm border border-purple-700/50"
              >
                <h2 className="text-2xl font-bold mb-3">Practice</h2>
                <p className="text-sm opacity-90">Test your knowledge with interactive quizzes on stellar physics</p>
              </Link>
              <Link 
                href="/Discovery"
                className="bg-blue-900/80 hover:bg-blue-800 text-white p-8 rounded-lg transition-all transform hover:scale-105 backdrop-blur-sm border border-blue-700/50"
              >
                <h2 className="text-2xl font-bold mb-3">Discoveries</h2>
                <p className="text-sm opacity-90">Explore landmark discoveries from Jocelyn Bell to modern observations</p>
              </Link>
              <Link 
                href="/learn-more"
                className="bg-cyan-900/80 hover:bg-cyan-800 text-white p-8 rounded-lg transition-all transform hover:scale-105 backdrop-blur-sm border border-cyan-700/50"
              >
                <h2 className="text-2xl font-bold mb-3">Learn More</h2>
                <p className="text-sm opacity-90">Dive deeper into relativistic physics and quantum mechanics</p>
              </Link>
            </div>
            
            <div className="mt-12">
              <button 
                onClick={() => setSelectedObject('blackhole')}
                className="bg-red-900/80 hover:bg-red-800 text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 backdrop-blur-sm mt-8 mr-4 border border-red-700/50"
              >
                Explore 3D Black Hole
              </button>
              <button 
                onClick={() => setSelectedObject('neutronstar')}
                className="bg-orange-900/80 hover:bg-orange-800 text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 backdrop-blur-sm mt-8 border border-orange-700/50"
              >
                Explore 3D Neutron Star
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add AI Chat component */}
      <AiChat />
      
      {selectedObject && (
        <ModelViewer 
          selectedPlanet={selectedObject} 
          onClose={() => setSelectedObject(null)} 
        />
      )}
    </main>
  );
}