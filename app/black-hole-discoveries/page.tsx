"use client";

import NavBar from "../../src/components/nav-bar";
import AiChat from "../../src/components/ai-chat";
import { useState, useEffect, useRef } from "react";
import Link from 'next/link';

export default function BlackHoleDiscoveries() {
  const [activeSection, setActiveSection] = useState(null);
  const [typingText, setTypingText] = useState("");
  const [fullText, setFullText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [lockChat, setLockChat] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [introTyped, setIntroTyped] = useState(false);
  const [introText, setIntroText] = useState("");
  const introRef = useRef(null);
  
  const introFullText = `Now that we've explored neutron stars, let's dive into even stranger objects—black holes. These are places where gravity becomes so extreme that not even light can escape.

Let's look at how scientists discovered these mysterious cosmic objects, from theoretical predictions to groundbreaking observations.`;
  
  useEffect(() => {
    // Type the intro text
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < introFullText.length) {
        setIntroText(prev => prev + introFullText[currentIndex]);
        currentIndex++;
        
        // Auto scroll to bottom of intro text
        if (introRef.current) {
          introRef.current.scrollTop = introRef.current.scrollHeight;
        }
      } else {
        clearInterval(typingInterval);
        setIntroTyped(true);
      }
    }, 30);
    
    return () => clearInterval(typingInterval);
  }, []);
  
  const sectionDetails = {
    theory: "On the black hole side, it started with theory—Karl Schwarzschild solved Einstein's equations predicting black holes way back in 1916. At this time, these objects were just mathematical solutions, not something scientists thought actually existed. Einstein himself was skeptical about their reality. It wasn't until decades later that physicists like John Wheeler (who actually coined the term 'black hole' in 1967) began to take these bizarre objects seriously and developed more complete theoretical descriptions.",
    
    xray: "Using X-ray telescopes like NASA's Chandra Observatory, scientists detected the hot, swirling gas falling into black holes. These accretion disks heat up to millions of degrees and emit X-rays before crossing the event horizon, confirming the black hole's presence. This method has allowed astronomers to identify numerous black hole candidates throughout our galaxy and beyond, including stellar-mass black holes formed from collapsed stars and supermassive black holes at galaxy centers.",
    
    radio: "Radio telescopes have been essential in black hole research, particularly for studying supermassive black holes at the centers of galaxies. A major breakthrough came in 2019 when the Event Horizon Telescope (EHT), a planet-wide network of radio observatories, captured the first-ever image of a black hole's shadow—the supermassive black hole at the center of galaxy M87. This extraordinary image confirmed visual predictions from Einstein's theories made over a century earlier.",
    
    gravitational: "One of the biggest discoveries came in 2015, when LIGO (Laser Interferometer Gravitational-Wave Observatory) detected gravitational waves—ripples in spacetime from two colliding black holes 1.3 billion light-years away. This confirmed Einstein's predictions from 100 years earlier. Later, LIGO also detected neutron star collisions. These waves gave us new information not just about stars, but about gravity itself, opening an entirely new way of studying the universe beyond electromagnetic radiation."
  };
  
  // Keyboard navigation handler
  useEffect(() => {
    if (!showContent) return;
    
    const handleKeyPress = (e) => {
      if (!activeSection && !lockChat) return;
      
      if (e.key === 'w' || e.key === 'ArrowUp') {
        setScrollPosition(prev => Math.max(prev - 30, 0));
      } else if (e.key === 's' || e.key === 'ArrowDown') {
        setScrollPosition(prev => prev + 30);
      } else if (e.key === 'l') {
        setLockChat(prev => !prev);
      } else if (e.key === 'Escape') {
        if (!lockChat) {
          setActiveSection(null);
        }
        setLockChat(false);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [activeSection, lockChat, showContent]);
  
  // Update scrolling when position changes
  useEffect(() => {
    const chatContent = document.getElementById('ai-chat-content');
    if (chatContent) {
      chatContent.scrollTop = scrollPosition;
    }
  }, [scrollPosition]);
  
  useEffect(() => {
    if ((!activeSection && !lockChat) || (lockChat && !typingText)) {
      return;
    }
    
    // If we're locked on an existing chat, don't restart typing
    if (lockChat && typingText.length > 0) {
      return;
    }
    
    const currentSection = lockChat ? activeSection : activeSection;
    if (!currentSection) return;
    
    setFullText(sectionDetails[currentSection]);
    setTypingText("");
    setIsTyping(true);
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < sectionDetails[currentSection].length) {
        setTypingText(prev => prev + sectionDetails[currentSection][currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 20);
    
    return () => clearInterval(typingInterval);
  }, [activeSection, lockChat]);
  
  // Function to handle card hover
  const handleCardHover = (section) => {
    if (!lockChat) {
      setActiveSection(section);
    }
  };
  
  // Function to handle card click to lock content
  const handleCardClick = (section) => {
    setActiveSection(section);
    setLockChat(true);
  };
  
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background image */}
      <div className="fixed inset-0 bg-[url('/space.jpg')] bg-cover bg-center z-0"></div>
      <div className="fixed inset-0 bg-black/60 z-0"></div>

      {/* Navbar */}
      <NavBar />

      <div className="relative z-10 container mx-auto px-4 py-16">
        {!showContent ? (
          <div className="flex flex-col items-center justify-center text-white min-h-[80vh]">
            <div 
              ref={introRef}
              className="max-w-3xl mx-auto mb-12 text-lg leading-relaxed bg-blue-900/30 p-8 rounded-lg backdrop-blur-sm h-64 overflow-y-auto"
            >
              {introText.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4" dangerouslySetInnerHTML={{ 
                  __html: paragraph
                    .replace(/\*\*\*(.*?)\*\*\*/g, '<span class="font-bold italic text-blue-300">$1</span>')
                    .replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-blue-300">$1</span>')
                }} />
              ))}
              <span className={`inline-block h-5 w-2 bg-white ${introTyped ? 'animate-pulse' : 'animate-blink'}`}></span>
            </div>
            
            {introTyped && (
              <button 
                onClick={() => setShowContent(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Let's Discover</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-white">
            <div className="w-full flex justify-between items-center mb-8">
              <Link href="/Discovery" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-sm transition-all duration-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Neutron Stars
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-center">
                Discovery of Black Holes
              </h1>
              <div className="w-32"></div> {/* Empty div for centering */}
            </div>

            {/* Section 1: Theoretical Beginnings */}
            <div className="bg-blue-900/80 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
              <div 
                className="group w-64 h-64 rounded-full bg-blue-900/80 border border-blue-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-blue-800/90 cursor-pointer"
                onMouseEnter={() => handleCardHover("theory")}
                onMouseLeave={() => !lockChat && setActiveSection(null)}
                onClick={() => handleCardClick("theory")}
              >
                <h2 className="text-md font-bold text-center mb-2">From Theory to Reality</h2>
                <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <p><span className="font-bold text-blue-300">Year:</span> 1916</p>
                  <p><span className="font-bold text-blue-300">Theorist:</span> Karl Schwarzschild</p>
                  <p><span className="font-bold text-blue-300">Concept:</span> Einstein's equations</p>
                </div>
              </div>
              <img
                src="/images/Discovery-Gifs/schwarzschild.jpg"
                className="w-full h-auto rounded-lg border border-blue-700/50 mt-6"
                alt="Karl Schwarzschild's theoretical work"
              />
            </div>

            {/* Section 2: X-Ray Telescope Observations */}
            <div className="bg-blue-900/80 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
              <div 
                className="group w-64 h-64 rounded-full bg-blue-900/80 border border-blue-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-blue-800/90 cursor-pointer"
                onMouseEnter={() => handleCardHover("xray")}
                onMouseLeave={() => !lockChat && setActiveSection(null)}
                onClick={() => handleCardClick("xray")}
              >
                <h2 className="text-md font-bold text-center mb-2">X-Ray Observations</h2>
                <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <p><span className="font-bold text-blue-300">Observatory:</span> Chandra</p>
                  <p><span className="font-bold text-blue-300">Detection:</span> Hot accretion disks</p>
                  <p><span className="font-bold text-blue-300">Evidence:</span> X-ray emissions</p>
                </div>
              </div>
              <img
                src="/images/Discovery-Gifs/chandra.png"
               
                
                className="w-full h-auto rounded-lg border border-blue-700/50 mt-6"
                alt="Chandra X-ray Observatory"
              />
            </div>

            {/* Section 3: Radio Telescope Observations */}
            <div className="bg-blue-900/80 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
              <div 
                className="group w-64 h-64 rounded-full bg-blue-900/80 border border-blue-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-blue-800/90 cursor-pointer"
                onMouseEnter={() => handleCardHover("radio")}
                onMouseLeave={() => !lockChat && setActiveSection(null)}
                onClick={() => handleCardClick("radio")}
              >
                <h2 className="text-md font-bold text-center mb-2">First Black Hole Image</h2>
                <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <p><span className="font-bold text-blue-300">Achievement:</span> M87 black hole</p>
                  <p><span className="font-bold text-blue-300">Year:</span> 2019</p>
                  <p><span className="font-bold text-blue-300">Project:</span> Event Horizon Telescope</p>
                </div>
              </div>
              <img
                src="/images/Discovery-Gifs/eht-m87.jpg"
                className="w-full h-auto rounded-lg border border-blue-700/50 mt-6"
                alt="Event Horizon Telescope image of M87 black hole"
              />
            </div>

            {/* Section 4: Gravitational Waves */}
            <div className="bg-blue-900/80 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
              <div 
                className="group w-64 h-64 rounded-full bg-blue-900/80 border border-blue-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-blue-800/90 cursor-pointer"
                onMouseEnter={() => handleCardHover("gravitational")}
                onMouseLeave={() => !lockChat && setActiveSection(null)}
                onClick={() => handleCardClick("gravitational")}
              >
                <h2 className="text-md font-bold text-center mb-2">Gravitational Wave Discovery</h2>
                <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <p><span className="font-bold text-blue-300">Detector:</span> LIGO</p>
                  <p><span className="font-bold text-blue-300">Year:</span> 2015</p>
                  <p><span className="font-bold text-blue-300">Event:</span> Black hole collision</p>
                </div>
              </div>
              <img
                src="/images/Discovery-Gifs/ligo.jpg"
                className="w-full h-auto rounded-lg border border-blue-700/50 mt-6"
                alt="LIGO gravitational wave observatory"
              />
            </div>
          </div>
        )}
      </div>

      {/* Custom AI Chat Info Box */}
      {showContent && (
        <div className="fixed bottom-16 right-8 w-96 max-w-full z-30">
          <div className={`bg-slate-800/90 border ${lockChat ? 'border-red-500' : 'border-blue-500'} rounded-lg shadow-lg p-4 text-white transition-all duration-300`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-blue-500 mr-2 animate-pulse"></div>
                <h3 className="text-lg font-semibold text-blue-300">AI Assistant</h3>
              </div>
              {(activeSection || lockChat) && (
                <div className="flex items-center space-x-3 text-xs">
                  <button 
                    onClick={() => setLockChat(!lockChat)} 
                    className={`px-2 py-1 rounded ${lockChat ? 'bg-red-700 text-white' : 'bg-blue-700 text-white'}`}
                  >
                    {lockChat ? 'Unlock' : 'Lock'}
                  </button>
                  {lockChat && (
                    <button 
                      onClick={() => {setActiveSection(null); setLockChat(false)}}
                      className="px-2 py-1 rounded bg-gray-700 text-white"
                    >
                      Close
                    </button>
                  )}
                </div>
              )}
            </div>
            <div 
              id="ai-chat-content"
              className="h-40 overflow-y-auto prose prose-invert prose-sm"
            >
              {typingText}
              {isTyping && <span className="animate-pulse">|</span>}
              {!typingText && !isTyping && (
                <>
                  <p className="text-gray-400 italic">Hover over any discovery card to learn more...</p>
                  <p className="text-gray-500 mt-2 text-xs">
                    <span className="font-bold">Pro tips:</span>
                    <br />• <span className="font-bold">Click</span> on a card to lock the content 
                    <br />• Press <span className="font-bold">L</span> to toggle lock/unlock
                    <br />• Use <span className="font-bold">W/S</span> or <span className="font-bold">↑/↓</span> keys to scroll 
                    <br />• Press <span className="font-bold">ESC</span> to close
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Original AiChat component */}
      <AiChat />
    </main>
  );
}