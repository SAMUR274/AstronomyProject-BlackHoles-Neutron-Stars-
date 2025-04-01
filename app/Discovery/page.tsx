// "use client";

// import NavBar from "../../src/components/nav-bar";
// import AiChat from "../../src/components/ai-chat";

// export default function Discoveries() {
//   return (
//     <main
//       className="min-h-screen relative overflow-hidden"
//     >
//       {/* Background image */}
//       <div className="absolute inset-0 bg-[url('/space.jpg')] bg-cover bg-center"></div>
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* Navbar */}
//       <NavBar />

//       <div className="relative z-10 container mx-auto px-4 py-16">
//         <div className="flex flex-col items-center justify-center text-white">
//           <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center">
//             Discovery of Neutron Stars
//           </h1>

//           {/* Section 1: Jocelyn Bell's Discovery */}
//           <div className="bg-blue-900/80 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
//             <div className="group w-64 h-64 rounded-full bg-blue-900/80 border border-blue-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-blue-800/90">
//               <h2 className="text-md font-bold text-center mb-2">The First Pulsar Signal</h2>
//               <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
//                 <p><span className="font-bold text-blue-300">Year:</span> 1967</p>
//                 <p><span className="font-bold text-blue-300">Discovered by:</span> Jocelyn Bell Burnell</p>
//                 <p><span className="font-bold text-blue-300">Signal:</span> LGM-1 (Little Green Men)</p>
//               </div>
//             </div>
//             <img
//               src="/images/Discovery-Gifs/bellburnell.jpg"
//               className="w-full h-auto rounded-lg border border-blue-700/50 mt-6"
//               alt="Jocelyn Bell discovering pulsar"
//             />
//           </div>

//           {/* Section 2: Confirmation of Neutron Stars */}
//           <div className="bg-blue-900/80 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
//             <div className="group w-64 h-64 rounded-full bg-blue-900/80 border border-blue-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-blue-800/90">
//               <h2 className="text-md font-bold text-center mb-2">Proof of Neutron Stars</h2>
//               <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
//                 <p><span className="font-bold text-blue-300">Theory:</span> 1930s (Baade & Zwicky)</p>
//                 <p><span className="font-bold text-blue-300">Confirmed:</span> 1968</p>
//                 <p><span className="font-bold text-blue-300">Object:</span> Spinning neutron core</p>
//               </div>
//             </div>
//             <img
//               src="/images/Discovery-Gifs/pulsar-signal.gif"
//               className="w-full h-auto rounded-lg border border-blue-700/50 mt-6"
//               alt="Pulsar signal graphic"
//             />
//           </div>

//           {/* Section 3: Bell Burnell Snubbed by Nobel */}
//           <div className="bg-blue-900/80 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
//             <div className="group w-64 h-64 rounded-full bg-blue-900/80 border border-blue-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-blue-800/90">
//               <h2 className="text-md font-bold text-center mb-2">Nobel Controversy</h2>
//               <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
//                 <p><span className="font-bold text-blue-300">Nobel:</span> 1974 (Hewish, not Bell)</p>
//                 <p><span className="font-bold text-blue-300">Debate:</span> Credit controversy</p>
//                 <p><span className="font-bold text-blue-300">Later:</span> Bell honored globally</p>
//               </div>
//             </div>
//             <img
//               src="/images/Discovery-Gifs/nobel-snub.jpg"
//               className="w-full h-auto rounded-lg border border-blue-700/50 mt-6"
//               alt="Bell Burnell Nobel snub photo"
//             />
//           </div>

//           {/* Section 4: Modern Tools Like NICER */}
//           <div className="bg-blue-900/80 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
//             <div className="group w-64 h-64 rounded-full bg-blue-900/80 border border-blue-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-blue-800/90">
//               <h2 className="text-md font-bold text-center mb-2">NICER & Modern Exploration</h2>
//               <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
//                 <p><span className="font-bold text-blue-300">Mission:</span> NICER (ISS)</p>
//                 <p><span className="font-bold text-blue-300">Goal:</span> Measure neutron interiors</p>
//                 <p><span className="font-bold text-blue-300">Bonus:</span> Deep-space navigation</p>
//               </div>
//             </div>
//             <img
//               src="/images/neutronStars/4.gif"
//               className="w-full h-auto rounded-lg border border-blue-700/50 mt-6"
//               alt="NICER observatory image"
//             />
//           </div>
//         </div>
//       </div>

//       {/* AI Chat Assistant */}
//       <AiChat />
//     </main>
//   );
// }





//draft 2


// "use client";

// import NavBar from "../../src/components/nav-bar";
// import AiChat from "../../src/components/ai-chat";
// import { useState, useEffect } from "react";

// export default function Discoveries() {
//   const [activeSection, setActiveSection] = useState(null);
//   const [typingText, setTypingText] = useState("");
//   const [fullText, setFullText] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
  
//   const sectionDetails = {
//     pulsar: "In 1967, Jocelyn Bell Burnell, a graduate student at Cambridge University, discovered the first pulsar while analyzing data from a radio telescope. This regular pulsing signal, originally nicknamed 'LGM-1' (Little Green Men), was eventually identified as radiation from a rapidly rotating neutron star. This groundbreaking discovery provided the first observational evidence of neutron stars, which had only been theoretical until that point.",
    
//     neutronStars: "Neutron stars were first theorized in 1933 by astronomers Walter Baade and Fritz Zwicky, who predicted their formation following supernovae. These incredibly dense objects, composed almost entirely of neutrons, represent one of the possible evolutionary endpoints of high-mass stars. When Jocelyn Bell discovered the first pulsar in 1967, it confirmed these earlier theoretical predictions about neutron stars' existence.",
    
//     nobel: "Despite making the actual discovery of pulsars, Jocelyn Bell Burnell was controversially excluded from the 1974 Nobel Prize in Physics, which was awarded to her supervisor Antony Hewish and radio astronomer Martin Ryle. This decision sparked ongoing debates about recognition and gender bias in science. Bell Burnell has since received numerous honors including the Special Breakthrough Prize in Fundamental Physics in 2018, much of which she donated to fund underrepresented groups in physics.",
    
//     nicer: "NASA's Neutron Star Interior Composition Explorer (NICER), installed on the International Space Station in 2017, uses X-ray timing to study the internal structure and physics of neutron stars. This cutting-edge instrument has created the first-ever precise mass and radius measurements of neutron stars and demonstrated pulsar-based navigation through the SEXTANT project, which could revolutionize deep space travel with autonomous navigation."
//   };
  
//   useEffect(() => {
//     if (!activeSection) {
//       setTypingText("");
//       setFullText("");
//       return;
//     }
    
//     setFullText(sectionDetails[activeSection]);
//     setTypingText("");
//     setIsTyping(true);
    
//     let currentIndex = 0;
//     const typingInterval = setInterval(() => {
//       if (currentIndex < sectionDetails[activeSection].length) {
//         setTypingText(prev => prev + sectionDetails[activeSection][currentIndex]);
//         currentIndex++;
//       } else {
//         clearInterval(typingInterval);
//         setIsTyping(false);
//       }
//     }, 20);
    
//     return () => clearInterval(typingInterval);
//   }, [activeSection]);
  
//   return (
//     <main
//       className="min-h-screen relative overflow-hidden"
//     >
//       {/* Background image */}
//       <div className="absolute inset-0 bg-[url('/space.jpg')] bg-cover bg-center"></div>
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* Navbar */}
//       <NavBar />

//       <div className="relative z-10 container mx-auto px-4 py-16">
//         <div className="flex flex-col items-center justify-center text-white">
//           <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center">
//             Discovery of Neutron Stars
//           </h1>

//           {/* Section 1: Jocelyn Bell's Discovery */}
//           <div className="bg-blue-900/80 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
//             <div 
//               className="group w-64 h-64 rounded-full bg-blue-900/80 border border-blue-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-blue-800/90 cursor-pointer"
//               onMouseEnter={() => setActiveSection("pulsar")}
//               onMouseLeave={() => setActiveSection(null)}
//             >
//               <h2 className="text-md font-bold text-center mb-2">The First Pulsar Signal</h2>
//               <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
//                 <p><span className="font-bold text-blue-300">Year:</span> 1967</p>
//                 <p><span className="font-bold text-blue-300">Discovered by:</span> Jocelyn Bell Burnell</p>
//                 <p><span className="font-bold text-blue-300">Signal:</span> LGM-1 (Little Green Men)</p>
//               </div>
//             </div>
//             <img
//               src="/images/Discovery-Gifs/bellburnell.jpg"
//               className="w-full h-auto rounded-lg border border-blue-700/50 mt-6"
//               alt="Jocelyn Bell discovering pulsar"
//             />
//           </div>

//           {/* Section 2: Confirmation of Neutron Stars */}
//           <div className="bg-blue-900/80 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
//             <div 
//               className="group w-64 h-64 rounded-full bg-blue-900/80 border border-blue-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-blue-800/90 cursor-pointer"
//               onMouseEnter={() => setActiveSection("neutronStars")}
//               onMouseLeave={() => setActiveSection(null)}
//             >
//               <h2 className="text-md font-bold text-center mb-2">Proof of Neutron Stars</h2>
//               <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
//                 <p><span className="font-bold text-blue-300">Theory:</span> 1930s (Baade & Zwicky)</p>
//                 <p><span className="font-bold text-blue-300">Confirmed:</span> 1968</p>
//                 <p><span className="font-bold text-blue-300">Object:</span> Spinning neutron core</p>
//               </div>
//             </div>
//             <img
//               src="/images/Discovery-Gifs/pulsar-signal.gif"
//               className="w-full h-auto rounded-lg border border-blue-700/50 mt-6"
//               alt="Pulsar signal graphic"
//             />
//           </div>

//           {/* Section 3: Bell Burnell Snubbed by Nobel */}
//           <div className="bg-blue-900/80 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
//             <div 
//               className="group w-64 h-64 rounded-full bg-blue-900/80 border border-blue-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-blue-800/90 cursor-pointer"
//               onMouseEnter={() => setActiveSection("nobel")}
//               onMouseLeave={() => setActiveSection(null)}
//             >
//               <h2 className="text-md font-bold text-center mb-2">Nobel Controversy</h2>
//               <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
//                 <p><span className="font-bold text-blue-300">Nobel:</span> 1974 (Hewish, not Bell)</p>
//                 <p><span className="font-bold text-blue-300">Debate:</span> Credit controversy</p>
//                 <p><span className="font-bold text-blue-300">Later:</span> Bell honored globally</p>
//               </div>
//             </div>
//             <img
//               src="/images/Discovery-Gifs/nobel-snub.jpg"
//               className="w-full h-auto rounded-lg border border-blue-700/50 mt-6"
//               alt="Bell Burnell Nobel snub photo"
//             />
//           </div>

//           {/* Section 4: Modern Tools Like NICER */}
//           <div className="bg-blue-900/80 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
//             <div 
//               className="group w-64 h-64 rounded-full bg-blue-900/80 border border-blue-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-blue-800/90 cursor-pointer"
//               onMouseEnter={() => setActiveSection("nicer")}
//               onMouseLeave={() => setActiveSection(null)}
//             >
//               <h2 className="text-md font-bold text-center mb-2">NICER & Modern Exploration</h2>
//               <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
//                 <p><span className="font-bold text-blue-300">Mission:</span> NICER (ISS)</p>
//                 <p><span className="font-bold text-blue-300">Goal:</span> Measure neutron interiors</p>
//                 <p><span className="font-bold text-blue-300">Bonus:</span> Deep-space navigation</p>
//               </div>
//             </div>
//             <img
//               src="/images/neutronStars/4.gif"
//               className="w-full h-auto rounded-lg border border-blue-700/50 mt-6"
//               alt="NICER observatory image"
//             />
//           </div>
//         </div>
//       </div>

//       {/* AI Chat Assistant */}
//       {/* Custom AI Chat Info Box */}
//       <div className="fixed bottom-16 right-8 w-96 max-w-full z-30">
//         <div className="bg-slate-800/90 border border-blue-500 rounded-lg shadow-lg p-4 text-white">
//           <div className="flex items-center mb-3">
//             <div className="h-3 w-3 rounded-full bg-blue-500 mr-2 animate-pulse"></div>
//             <h3 className="text-lg font-semibold text-blue-300">AI Assistant</h3>
//           </div>
//           <div className="h-40 overflow-y-auto prose prose-invert prose-sm">
//             {typingText}
//             {isTyping && <span className="animate-pulse">|</span>}
//             {!typingText && !isTyping && (
//               <p className="text-gray-400 italic">Hover over any discovery card to learn more...</p>
//             )}
//           </div>
//         </div>
//       </div>
      
//       {/* Original AiChat component */}
//       <AiChat />
//     </main>
//   );
// }














//Draft 3
// "use client";

// import NavBar from "../../src/components/nav-bar";
// import AiChat from "../../src/components/ai-chat";
// import { useState, useEffect } from "react";

// export default function Discoveries() {
//   const [activeSection, setActiveSection] = useState(null);
//   const [typingText, setTypingText] = useState("");
//   const [fullText, setFullText] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const [lockChat, setLockChat] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);
  
//   const sectionDetails = {
//     pulsar: "In 1967, Jocelyn Bell Burnell, a graduate student at Cambridge University, discovered the first pulsar while analyzing data from a radio telescope. This regular pulsing signal, originally nicknamed 'LGM-1' (Little Green Men), was eventually identified as radiation from a rapidly rotating neutron star. This groundbreaking discovery provided the first observational evidence of neutron stars, which had only been theoretical until that point.",
    
//     neutronStars: "Neutron stars were first theorized in 1933 by astronomers Walter Baade and Fritz Zwicky, who predicted their formation following supernovae. These incredibly dense objects, composed almost entirely of neutrons, represent one of the possible evolutionary endpoints of high-mass stars. When Jocelyn Bell discovered the first pulsar in 1967, it confirmed these earlier theoretical predictions about neutron stars' existence.",
    
//     nobel: "Despite making the actual discovery of pulsars, Jocelyn Bell Burnell was controversially excluded from the 1974 Nobel Prize in Physics, which was awarded to her supervisor Antony Hewish and radio astronomer Martin Ryle. This decision sparked ongoing debates about recognition and gender bias in science. Bell Burnell has since received numerous honors including the Special Breakthrough Prize in Fundamental Physics in 2018, much of which she donated to fund underrepresented groups in physics.",
    
//     nicer: "NASA's Neutron Star Interior Composition Explorer (NICER), installed on the International Space Station in 2017, uses X-ray timing to study the internal structure and physics of neutron stars. This cutting-edge instrument has created the first-ever precise mass and radius measurements of neutron stars and demonstrated pulsar-based navigation through the SEXTANT project, which could revolutionize deep space travel with autonomous navigation."
//   };
  
//   // Keyboard navigation handler
//   useEffect(() => {
//     const handleKeyPress = (e) => {
//       if (!activeSection && !lockChat) return;
      
//       if (e.key === 'w' || e.key === 'ArrowUp') {
//         setScrollPosition(prev => Math.max(prev - 30, 0));
//       } else if (e.key === 's' || e.key === 'ArrowDown') {
//         setScrollPosition(prev => prev + 30);
//       } else if (e.key === 'l') {
//         setLockChat(prev => !prev);
//       } else if (e.key === 'Escape') {
//         if (!lockChat) {
//           setActiveSection(null);
//         }
//         setLockChat(false);
//       }
//     };
    
//     window.addEventListener('keydown', handleKeyPress);
//     return () => window.removeEventListener('keydown', handleKeyPress);
//   }, [activeSection, lockChat]);
  
//   // Update scrolling when position changes
//   useEffect(() => {
//     const chatContent = document.getElementById('ai-chat-content');
//     if (chatContent) {
//       chatContent.scrollTop = scrollPosition;
//     }
//   }, [scrollPosition]);
  
//   useEffect(() => {
//     if ((!activeSection && !lockChat) || (lockChat && !typingText)) {
//       return;
//     }
    
//     // If we're locked on an existing chat, don't restart typing
//     if (lockChat && typingText.length > 0) {
//       return;
//     }
    
//     const currentSection = lockChat ? activeSection : activeSection;
//     if (!currentSection) return;
    
//     setFullText(sectionDetails[currentSection]);
//     setTypingText("");
//     setIsTyping(true);
    
//     let currentIndex = 0;
//     const typingInterval = setInterval(() => {
//       if (currentIndex < sectionDetails[currentSection].length) {
//         setTypingText(prev => prev + sectionDetails[currentSection][currentIndex]);
//         currentIndex++;
//       } else {
//         clearInterval(typingInterval);
//         setIsTyping(false);
//       }
//     }, 20);
    
//     return () => clearInterval(typingInterval);
//   }, [activeSection, lockChat]);
  
//   // Function to handle card hover
//   const handleCardHover = (section) => {
//     if (!lockChat) {
//       setActiveSection(section);
//     }
//   };
  
//   // Function to handle card click to lock content
//   const handleCardClick = (section) => {
//     setActiveSection(section);
//     setLockChat(true);
//   };
  
//   return (
//     <main
//       className="min-h-screen relative overflow-hidden"
//     >
//       {/* Background image */}
//       <div className="absolute inset-0 bg-[url('/space.jpg')] bg-cover bg-center"></div>
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* Navbar */}
//       <NavBar />

//       <div className="relative z-10 container mx-auto px-4 py-16">
//         <div className="flex flex-col items-center justify-center text-white">
//           <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center">
//             Discovery of Neutron Stars
//           </h1>

//           {/* Section 1: Jocelyn Bell's Discovery */}
//           <div className="bg-blue-900/80 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
//             <div 
//               className="group w-64 h-64 rounded-full bg-blue-900/80 border border-blue-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-blue-800/90 cursor-pointer"
//               onMouseEnter={() => handleCardHover("pulsar")}
//               onMouseLeave={() => !lockChat && setActiveSection(null)}
//               onClick={() => handleCardClick("pulsar")}
//             >
//               <h2 className="text-md font-bold text-center mb-2">The First Pulsar Signal</h2>
//               <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
//                 <p><span className="font-bold text-blue-300">Year:</span> 1967</p>
//                 <p><span className="font-bold text-blue-300">Discovered by:</span> Jocelyn Bell Burnell</p>
//                 <p><span className="font-bold text-blue-300">Signal:</span> LGM-1 (Little Green Men)</p>
//               </div>
//             </div>
//             <img
//               src="/images/Discovery-Gifs/bellburnell.jpg"
//               className="w-full h-auto rounded-lg border border-blue-700/50 mt-6"
//               alt="Jocelyn Bell discovering pulsar"
//             />
//           </div>

//           {/* Section 2: Confirmation of Neutron Stars */}
//           <div className="bg-blue-900/80 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
//             <div 
//               className="group w-64 h-64 rounded-full bg-blue-900/80 border border-blue-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-blue-800/90 cursor-pointer"
//               onMouseEnter={() => handleCardHover("neutronStars")}
//               onMouseLeave={() => !lockChat && setActiveSection(null)}
//               onClick={() => handleCardClick("neutronStars")}
//             >
//               <h2 className="text-md font-bold text-center mb-2">Proof of Neutron Stars</h2>
//               <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
//                 <p><span className="font-bold text-blue-300">Theory:</span> 1930s (Baade & Zwicky)</p>
//                 <p><span className="font-bold text-blue-300">Confirmed:</span> 1968</p>
//                 <p><span className="font-bold text-blue-300">Object:</span> Spinning neutron core</p>
//               </div>
//             </div>
//             <img
//               src="/images/Discovery-Gifs/pulsar-signal.gif"
//               className="w-full h-auto rounded-lg border border-blue-700/50 mt-6"
//               alt="Pulsar signal graphic"
//             />
//           </div>

//           {/* Section 3: Bell Burnell Snubbed by Nobel */}
//           <div className="bg-blue-900/80 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
//             <div 
//               className="group w-64 h-64 rounded-full bg-blue-900/80 border border-blue-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-blue-800/90 cursor-pointer"
//               onMouseEnter={() => handleCardHover("nobel")}
//               onMouseLeave={() => !lockChat && setActiveSection(null)}
//               onClick={() => handleCardClick("nobel")}
//             >
//               <h2 className="text-md font-bold text-center mb-2">Nobel Controversy</h2>
//               <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
//                 <p><span className="font-bold text-blue-300">Nobel:</span> 1974 (Hewish, not Bell)</p>
//                 <p><span className="font-bold text-blue-300">Debate:</span> Credit controversy</p>
//                 <p><span className="font-bold text-blue-300">Later:</span> Bell honored globally</p>
//               </div>
//             </div>
//             <img
//               src="/images/Discovery-Gifs/nobel-snub.jpg"
//               className="w-full h-auto rounded-lg border border-blue-700/50 mt-6"
//               alt="Bell Burnell Nobel snub photo"
//             />
//           </div>

//           {/* Section 4: Modern Tools Like NICER */}
//           <div className="bg-blue-900/80 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
//             <div 
//               className="group w-64 h-64 rounded-full bg-blue-900/80 border border-blue-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-blue-800/90 cursor-pointer"
//               onMouseEnter={() => handleCardHover("nicer")}
//               onMouseLeave={() => !lockChat && setActiveSection(null)}
//               onClick={() => handleCardClick("nicer")}
//             >
//               <h2 className="text-md font-bold text-center mb-2">NICER & Modern Exploration</h2>
//               <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
//                 <p><span className="font-bold text-blue-300">Mission:</span> NICER (ISS)</p>
//                 <p><span className="font-bold text-blue-300">Goal:</span> Measure neutron interiors</p>
//                 <p><span className="font-bold text-blue-300">Bonus:</span> Deep-space navigation</p>
//               </div>
//             </div>
//             <img
//               src="/images/neutronStars/4.gif"
//               className="w-full h-auto rounded-lg border border-blue-700/50 mt-6"
//               alt="NICER observatory image"
//             />
//           </div>
//         </div>
//       </div>

//       {/* AI Chat Assistant */}
//       {/* Custom AI Chat Info Box */}
//       <div className="fixed bottom-16 right-8 w-96 max-w-full z-30">
//         <div className={`bg-slate-800/90 border ${lockChat ? 'border-red-500' : 'border-blue-500'} rounded-lg shadow-lg p-4 text-white transition-all duration-300`}>
//           <div className="flex items-center justify-between mb-3">
//             <div className="flex items-center">
//               <div className="h-3 w-3 rounded-full bg-blue-500 mr-2 animate-pulse"></div>
//               <h3 className="text-lg font-semibold text-blue-300">AI Assistant</h3>
//             </div>
//             {(activeSection || lockChat) && (
//               <div className="flex items-center space-x-3 text-xs">
//                 <button 
//                   onClick={() => setLockChat(!lockChat)} 
//                   className={`px-2 py-1 rounded ${lockChat ? 'bg-red-700 text-white' : 'bg-blue-700 text-white'}`}
//                 >
//                   {lockChat ? 'Unlock' : 'Lock'}
//                 </button>
//                 {lockChat && (
//                   <button 
//                     onClick={() => {setActiveSection(null); setLockChat(false)}}
//                     className="px-2 py-1 rounded bg-gray-700 text-white"
//                   >
//                     Close
//                   </button>
//                 )}
//               </div>
//             )}
//           </div>
//           <div 
//             id="ai-chat-content"
//             className="h-40 overflow-y-auto prose prose-invert prose-sm"
//           >
//             {typingText}
//             {isTyping && <span className="animate-pulse">|</span>}
//             {!typingText && !isTyping && (
//               <>
//                 <p className="text-gray-400 italic">Hover over any discovery card to learn more...</p>
//                 <p className="text-gray-500 mt-2 text-xs">
//                   <span className="font-bold">Pro tips:</span>
//                   <br />• <span className="font-bold">Click</span> on a card to lock the content 
//                   <br />• Press <span className="font-bold">L</span> to toggle lock/unlock
//                   <br />• Use <span className="font-bold">W/S</span> or <span className="font-bold">↑/↓</span> keys to scroll 
//                   <br />• Press <span className="font-bold">ESC</span> to close
//                 </p>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
      
//       {/* Original AiChat component */}
//       <AiChat />
//     </main>
//   );
// }





//Draft 4
"use client";

// import NavBar from "../../src/components/nav-bar";
// import AiChat from "../../src/components/ai-chat";
// import { useState, useEffect } from "react";

// export default function Discoveries() {
//   const [activeSection, setActiveSection] = useState(null);
//   const [typingText, setTypingText] = useState("");
//   const [fullText, setFullText] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const [lockChat, setLockChat] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);
  
//   const sectionDetails = {
//     pulsar: "In 1967, Jocelyn Bell Burnell, a graduate student at Cambridge University, discovered the first pulsar while analyzing data from a radio telescope. This regular pulsing signal, originally nicknamed 'LGM-1' (Little Green Men), was eventually identified as radiation from a rapidly rotating neutron star. This groundbreaking discovery provided the first observational evidence of neutron stars, which had only been theoretical until that point.",
    
//     neutronStars: "Neutron stars were first theorized in 1933 by astronomers Walter Baade and Fritz Zwicky, who predicted their formation following supernovae. These incredibly dense objects, composed almost entirely of neutrons, represent one of the possible evolutionary endpoints of high-mass stars. When Jocelyn Bell discovered the first pulsar in 1967, it confirmed these earlier theoretical predictions about neutron stars' existence.",
    
//     nobel: "Despite making the actual discovery of pulsars, Jocelyn Bell Burnell was controversially excluded from the 1974 Nobel Prize in Physics, which was awarded to her supervisor Antony Hewish and radio astronomer Martin Ryle. This decision sparked ongoing debates about recognition and gender bias in science. Bell Burnell has since received numerous honors including the Special Breakthrough Prize in Fundamental Physics in 2018, much of which she donated to fund underrepresented groups in physics.",
    
//     nicer: "NASA's Neutron Star Interior Composition Explorer (NICER), installed on the International Space Station in 2017, uses X-ray timing to study the internal structure and physics of neutron stars. This cutting-edge instrument has created the first-ever precise mass and radius measurements of neutron stars and demonstrated pulsar-based navigation through the SEXTANT project, which could revolutionize deep space travel with autonomous navigation."
//   };
  
//   // Keyboard navigation handler
//   useEffect(() => {
//     const handleKeyPress = (e) => {
//       if (!activeSection && !lockChat) return;
      
//       if (e.key === 'w' || e.key === 'ArrowUp') {
//         setScrollPosition(prev => Math.max(prev - 30, 0));
//       } else if (e.key === 's' || e.key === 'ArrowDown') {
//         setScrollPosition(prev => prev + 30);
//       } else if (e.key === 'l') {
//         setLockChat(prev => !prev);
//       } else if (e.key === 'Escape') {
//         if (!lockChat) {
//           setActiveSection(null);
//         }
//         setLockChat(false);
//       }
//     };
    
//     window.addEventListener('keydown', handleKeyPress);
//     return () => window.removeEventListener('keydown', handleKeyPress);
//   }, [activeSection, lockChat]);
  
//   // Update scrolling when position changes
//   useEffect(() => {
//     const chatContent = document.getElementById('ai-chat-content');
//     if (chatContent) {
//       chatContent.scrollTop = scrollPosition;
//     }
//   }, [scrollPosition]);
  
//   useEffect(() => {
//     if ((!activeSection && !lockChat) || (lockChat && !typingText)) {
//       return;
//     }
    
//     // If we're locked on an existing chat, don't restart typing
//     if (lockChat && typingText.length > 0) {
//       return;
//     }
    
//     const currentSection = lockChat ? activeSection : activeSection;
//     if (!currentSection) return;
    
//     setFullText(sectionDetails[currentSection]);
//     setTypingText("");
//     setIsTyping(true);
    
//     let currentIndex = 0;
//     const typingInterval = setInterval(() => {
//       if (currentIndex < sectionDetails[currentSection].length) {
//         setTypingText(prev => prev + sectionDetails[currentSection][currentIndex]);
//         currentIndex++;
//       } else {
//         clearInterval(typingInterval);
//         setIsTyping(false);
//       }
//     }, 20);
    
//     return () => clearInterval(typingInterval);
//   }, [activeSection, lockChat]);
  
//   // Function to handle card hover
//   const handleCardHover = (section) => {
//     if (!lockChat) {
//       setActiveSection(section);
//     }
//   };
  
//   // Function to handle card click to lock content
//   const handleCardClick = (section) => {
//     setActiveSection(section);
//     setLockChat(true);
//   };
  
//   return (
//     <main
//       className="min-h-screen relative overflow-hidden"
//     >
//       {/* Background image */}
//       <div className="fixed inset-0 bg-[url('/space.jpg')] bg-cover bg-center z-0"></div>
//       <div className="fixed inset-0 bg-black/60 z-0"></div>

//       {/* Navbar */}
//       <NavBar />

//       <div className="relative z-10 container mx-auto px-4 py-16">
//         <div className="flex flex-col items-center justify-center text-white">
//           <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center">
//             Discovery of Neutron Stars
//           </h1>

//           {/* Section 1: Jocelyn Bell's Discovery */}
//           <div className="bg-blue-900/80 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
//             <div 
//               className="group w-64 h-64 rounded-full bg-blue-900/80 border border-blue-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-blue-800/90 cursor-pointer"
//               onMouseEnter={() => handleCardHover("pulsar")}
//               onMouseLeave={() => !lockChat && setActiveSection(null)}
//               onClick={() => handleCardClick("pulsar")}
//             >
//               <h2 className="text-md font-bold text-center mb-2">The First Pulsar Signal</h2>
//               <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
//                 <p><span className="font-bold text-blue-300">Year:</span> 1967</p>
//                 <p><span className="font-bold text-blue-300">Discovered by:</span> Jocelyn Bell Burnell</p>
//                 <p><span className="font-bold text-blue-300">Signal:</span> LGM-1 (Little Green Men)</p>
//               </div>
//             </div>
//             <img
//               src="/images/Discovery-Gifs/bellburnell.jpg"
//               className="w-full h-auto rounded-lg border border-blue-700/50 mt-6"
//               alt="Jocelyn Bell discovering pulsar"
//             />
//           </div>

//           {/* Section 2: Confirmation of Neutron Stars */}
//           <div className="bg-blue-900/80 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
//             <div 
//               className="group w-64 h-64 rounded-full bg-blue-900/80 border border-blue-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-blue-800/90 cursor-pointer"
//               onMouseEnter={() => handleCardHover("neutronStars")}
//               onMouseLeave={() => !lockChat && setActiveSection(null)}
//               onClick={() => handleCardClick("neutronStars")}
//             >
//               <h2 className="text-md font-bold text-center mb-2">Proof of Neutron Stars</h2>
//               <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
//                 <p><span className="font-bold text-blue-300">Theory:</span> 1930s (Baade & Zwicky)</p>
//                 <p><span className="font-bold text-blue-300">Confirmed:</span> 1968</p>
//                 <p><span className="font-bold text-blue-300">Object:</span> Spinning neutron core</p>
//               </div>
//             </div>
//             <img
//               src="/images/Discovery-Gifs/pulsar-signal.gif"
//               className="w-full h-auto rounded-lg border border-blue-700/50 mt-6"
//               alt="Pulsar signal graphic"
//             />
//           </div>

//           {/* Section 3: Bell Burnell Snubbed by Nobel */}
//           <div className="bg-blue-900/80 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
//             <div 
//               className="group w-64 h-64 rounded-full bg-blue-900/80 border border-blue-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-blue-800/90 cursor-pointer"
//               onMouseEnter={() => handleCardHover("nobel")}
//               onMouseLeave={() => !lockChat && setActiveSection(null)}
//               onClick={() => handleCardClick("nobel")}
//             >
//               <h2 className="text-md font-bold text-center mb-2">Nobel Controversy</h2>
//               <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
//                 <p><span className="font-bold text-blue-300">Nobel:</span> 1974 (Hewish, not Bell)</p>
//                 <p><span className="font-bold text-blue-300">Debate:</span> Credit controversy</p>
//                 <p><span className="font-bold text-blue-300">Later:</span> Bell honored globally</p>
//               </div>
//             </div>
//             <img
//               src="/images/Discovery-Gifs/nobel-snub.jpg"
//               className="w-full h-auto rounded-lg border border-blue-700/50 mt-6"
//               alt="Bell Burnell Nobel snub photo"
//             />
//           </div>

//           {/* Section 4: Modern Tools Like NICER */}
//           <div className="bg-blue-900/80 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
//             <div 
//               className="group w-64 h-64 rounded-full bg-blue-900/80 border border-blue-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-blue-800/90 cursor-pointer"
//               onMouseEnter={() => handleCardHover("nicer")}
//               onMouseLeave={() => !lockChat && setActiveSection(null)}
//               onClick={() => handleCardClick("nicer")}
//             >
//               <h2 className="text-md font-bold text-center mb-2">NICER & Modern Exploration</h2>
//               <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
//                 <p><span className="font-bold text-blue-300">Mission:</span> NICER (ISS)</p>
//                 <p><span className="font-bold text-blue-300">Goal:</span> Measure neutron interiors</p>
//                 <p><span className="font-bold text-blue-300">Bonus:</span> Deep-space navigation</p>
//               </div>
//             </div>
//             <img
//               src="/images/neutronStars/4.gif"
//               className="w-full h-auto rounded-lg border border-blue-700/50 mt-6"
//               alt="NICER observatory image"
//             />
//           </div>
//         </div>
//       </div>

//       {/* AI Chat Assistant */}
//       {/* Custom AI Chat Info Box */}
//       <div className="fixed bottom-16 right-8 w-96 max-w-full z-30">
//         <div className={`bg-slate-800/90 border ${lockChat ? 'border-red-500' : 'border-blue-500'} rounded-lg shadow-lg p-4 text-white transition-all duration-300`}>
//           <div className="flex items-center justify-between mb-3">
//             <div className="flex items-center">
//               <div className="h-3 w-3 rounded-full bg-blue-500 mr-2 animate-pulse"></div>
//               <h3 className="text-lg font-semibold text-blue-300">AI Assistant</h3>
//             </div>
//             {(activeSection || lockChat) && (
//               <div className="flex items-center space-x-3 text-xs">
//                 <button 
//                   onClick={() => setLockChat(!lockChat)} 
//                   className={`px-2 py-1 rounded ${lockChat ? 'bg-red-700 text-white' : 'bg-blue-700 text-white'}`}
//                 >
//                   {lockChat ? 'Unlock' : 'Lock'}
//                 </button>
//                 {lockChat && (
//                   <button 
//                     onClick={() => {setActiveSection(null); setLockChat(false)}}
//                     className="px-2 py-1 rounded bg-gray-700 text-white"
//                   >
//                     Close
//                   </button>
//                 )}
//               </div>
//             )}
//           </div>
//           <div 
//             id="ai-chat-content"
//             className="h-40 overflow-y-auto prose prose-invert prose-sm"
//           >
//             {typingText}
//             {isTyping && <span className="animate-pulse">|</span>}
//             {!typingText && !isTyping && (
//               <>
//                 <p className="text-gray-400 italic">Hover over any discovery card to learn more...</p>
//                 <p className="text-gray-500 mt-2 text-xs">
//                   <span className="font-bold">Pro tips:</span>
//                   <br />• <span className="font-bold">Click</span> on a card to lock the content 
//                   <br />• Press <span className="font-bold">L</span> to toggle lock/unlock
//                   <br />• Use <span className="font-bold">W/S</span> or <span className="font-bold">↑/↓</span> keys to scroll 
//                   <br />• Press <span className="font-bold">ESC</span> to close
//                 </p>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
      
//       {/* Original AiChat component */}
//       <AiChat />
//     </main>
//   );
// }








//Draft 5
// "use client";

// import NavBar from "../../src/components/nav-bar";
// import AiChat from "../../src/components/ai-chat";
// import { useState, useEffect, useRef } from "react";

// export default function Discoveries() {
//   const [activeSection, setActiveSection] = useState(null);
//   const [typingText, setTypingText] = useState("");
//   const [fullText, setFullText] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const [lockChat, setLockChat] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [showContent, setShowContent] = useState(false);
//   const [introTyped, setIntroTyped] = useState(false);
//   const [introText, setIntroText] = useState("");
//   const introRef = useRef(null);
  
//   const introFullText = `So we've just heard about how strange and powerful neutron stars are—from their unbelievable density to their rapid spin and magnetic fields. But all of this raises a big question... how do we even know this stuff?

// That's where my part comes in—the discoveries. Let's take a look at how scientists actually found and studied black holes and neutron stars over time.`;
  
//   useEffect(() => {
//     // Type the intro text
//     let currentIndex = 0;
//     const typingInterval = setInterval(() => {
//       if (currentIndex < introFullText.length) {
//         setIntroText(prev => prev + introFullText[currentIndex]);
//         currentIndex++;
        
//         // Auto scroll to bottom of intro text
//         if (introRef.current) {
//           introRef.current.scrollTop = introRef.current.scrollHeight;
//         }
//       } else {
//         clearInterval(typingInterval);
//         setIntroTyped(true);
//       }
//     }, 30);
    
//     return () => clearInterval(typingInterval);
//   }, []);
  
//   const sectionDetails = {
//     pulsar: "In 1967, Jocelyn Bell Burnell, a graduate student at Cambridge University, discovered the first pulsar while analyzing data from a radio telescope. This regular pulsing signal, originally nicknamed 'LGM-1' (Little Green Men), was eventually identified as radiation from a rapidly rotating neutron star. This groundbreaking discovery provided the first observational evidence of neutron stars, which had only been theoretical until that point.",
    
//     neutronStars: "Neutron stars were first theorized in 1933 by astronomers Walter Baade and Fritz Zwicky, who predicted their formation following supernovae. These incredibly dense objects, composed almost entirely of neutrons, represent one of the possible evolutionary endpoints of high-mass stars. When Jocelyn Bell discovered the first pulsar in 1967, it confirmed these earlier theoretical predictions about neutron stars' existence.",
    
//     nobel: "Despite making the actual discovery of pulsars, Jocelyn Bell Burnell was controversially excluded from the 1974 Nobel Prize in Physics, which was awarded to her supervisor Antony Hewish and radio astronomer Martin Ryle. This decision sparked ongoing debates about recognition and gender bias in science. Bell Burnell has since received numerous honors including the Special Breakthrough Prize in Fundamental Physics in 2018, much of which she donated to fund underrepresented groups in physics.",
    
//     nicer: "NASA's Neutron Star Interior Composition Explorer (NICER), installed on the International Space Station in 2017, uses X-ray timing to study the internal structure and physics of neutron stars. This cutting-edge instrument has created the first-ever precise mass and radius measurements of neutron stars and demonstrated pulsar-based navigation through the SEXTANT project, which could revolutionize deep space travel with autonomous navigation."
//   };
  
//   // Keyboard navigation handler
//   useEffect(() => {
//     if (!showContent) return;
    
//     const handleKeyPress = (e) => {
//       if (!activeSection && !lockChat) return;
      
//       if (e.key === 'w' || e.key === 'ArrowUp') {
//         setScrollPosition(prev => Math.max(prev - 30, 0));
//       } else if (e.key === 's' || e.key === 'ArrowDown') {
//         setScrollPosition(prev => prev + 30);
//       } else if (e.key === 'l') {
//         setLockChat(prev => !prev);
//       } else if (e.key === 'Escape') {
//         if (!lockChat) {
//           setActiveSection(null);
//         }
//         setLockChat(false);
//       }
//     };
    
//     window.addEventListener('keydown', handleKeyPress);
//     return () => window.removeEventListener('keydown', handleKeyPress);
//   }, [activeSection, lockChat, showContent]);
  
//   // Update scrolling when position changes
//   useEffect(() => {
//     const chatContent = document.getElementById('ai-chat-content');
//     if (chatContent) {
//       chatContent.scrollTop = scrollPosition;
//     }
//   }, [scrollPosition]);
  
//   useEffect(() => {
//     if ((!activeSection && !lockChat) || (lockChat && !typingText)) {
//       return;
//     }
    
//     // If we're locked on an existing chat, don't restart typing
//     if (lockChat && typingText.length > 0) {
//       return;
//     }
    
//     const currentSection = lockChat ? activeSection : activeSection;
//     if (!currentSection) return;
    
//     setFullText(sectionDetails[currentSection]);
//     setTypingText("");
//     setIsTyping(true);
    
//     let currentIndex = 0;
//     const typingInterval = setInterval(() => {
//       if (currentIndex < sectionDetails[currentSection].length) {
//         setTypingText(prev => prev + sectionDetails[currentSection][currentIndex]);
//         currentIndex++;
//       } else {
//         clearInterval(typingInterval);
//         setIsTyping(false);
//       }
//     }, 20);
    
//     return () => clearInterval(typingInterval);
//   }, [activeSection, lockChat]);
  
//   // Function to handle card hover
//   const handleCardHover = (section) => {
//     if (!lockChat) {
//       setActiveSection(section);
//     }
//   };
  
//   // Function to handle card click to lock content
//   const handleCardClick = (section) => {
//     setActiveSection(section);
//     setLockChat(true);
//   };
  
//   return (
//     <main className="min-h-screen relative overflow-hidden">
//       {/* Background image */}
//       <div className="fixed inset-0 bg-[url('/space.jpg')] bg-cover bg-center z-0"></div>
//       <div className="fixed inset-0 bg-black/60 z-0"></div>

//       {/* Navbar */}
//       <NavBar />

//       <div className="relative z-10 container mx-auto px-4 py-16">
//         {!showContent ? (
//           <div className="flex flex-col items-center justify-center text-white min-h-[80vh]">
//             <div 
//               ref={introRef}
//               className="max-w-3xl mx-auto mb-12 text-lg leading-relaxed bg-blue-900/30 p-8 rounded-lg backdrop-blur-sm h-64 overflow-y-auto"
//             >
//               {introText.split("\n\n").map((paragraph, index) => (
//                 <p key={index} className="mb-4" dangerouslySetInnerHTML={{ 
//                   __html: paragraph
//                     .replace(/\*\*\*(.*?)\*\*\*/g, '<span class="font-bold italic text-blue-300">$1</span>')
//                     .replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-blue-300">$1</span>')
//                 }} />
//               ))}
//               <span className={`inline-block h-5 w-2 bg-white ${introTyped ? 'animate-pulse' : 'animate-blink'}`}></span>
//             </div>
            
//             {introTyped && (
//               <button 
//                 onClick={() => setShowContent(true)}
//                 className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
//               >
//                 <span>Let's Discover</span>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </button>
//             )}
//           </div>
//         ) : (
//           <div className="flex flex-col items-center justify-center text-white">
//             <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center">
//               Discovery of Neutron Stars
//             </h1>

//             {/* Section 1: Jocelyn Bell's Discovery */}
//             <div className="bg-blue-900/80 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
//               <div 
//                 className="group w-64 h-64 rounded-full bg-blue-900/80 border border-blue-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-blue-800/90 cursor-pointer"
//                 onMouseEnter={() => handleCardHover("pulsar")}
//                 onMouseLeave={() => !lockChat && setActiveSection(null)}
//                 onClick={() => handleCardClick("pulsar")}
//               >
//                 <h2 className="text-md font-bold text-center mb-2">The First Pulsar Signal</h2>
//                 <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
//                   <p><span className="font-bold text-blue-300">Year:</span> 1967</p>
//                   <p><span className="font-bold text-blue-300">Discovered by:</span> Jocelyn Bell Burnell</p>
//                   <p><span className="font-bold text-blue-300">Signal:</span> LGM-1 (Little Green Men)</p>
//                 </div>
//               </div>
//               <img
//                 src="/images/Discovery-Gifs/bellburnell.jpg"
//                 className="w-full h-auto rounded-lg border border-blue-700/50 mt-6"
//                 alt="Jocelyn Bell discovering pulsar"
//               />
//             </div>

//             {/* Section 2: Confirmation of Neutron Stars */}
//             <div className="bg-blue-900/80 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
//               <div 
//                 className="group w-64 h-64 rounded-full bg-blue-900/80 border border-blue-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-blue-800/90 cursor-pointer"
//                 onMouseEnter={() => handleCardHover("neutronStars")}
//                 onMouseLeave={() => !lockChat && setActiveSection(null)}
//                 onClick={() => handleCardClick("neutronStars")}
//               >
//                 <h2 className="text-md font-bold text-center mb-2">Proof of Neutron Stars</h2>
//                 <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
//                   <p><span className="font-bold text-blue-300">Theory:</span> 1930s (Baade & Zwicky)</p>
//                   <p><span className="font-bold text-blue-300">Confirmed:</span> 1968</p>
//                   <p><span className="font-bold text-blue-300">Object:</span> Spinning neutron core</p>
//                 </div>
//               </div>
//               <img
//                 src="/images/Discovery-Gifs/pulsar-signal.gif"
//                 className="w-full h-auto rounded-lg border border-blue-700/50 mt-6"
//                 alt="Pulsar signal graphic"
//               />
//             </div>

//             {/* Section 3: Bell Burnell Snubbed by Nobel */}
//             <div className="bg-blue-900/80 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
//               <div 
//                 className="group w-64 h-64 rounded-full bg-blue-900/80 border border-blue-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-blue-800/90 cursor-pointer"
//                 onMouseEnter={() => handleCardHover("nobel")}
//                 onMouseLeave={() => !lockChat && setActiveSection(null)}
//                 onClick={() => handleCardClick("nobel")}
//               >
//                 <h2 className="text-md font-bold text-center mb-2">Nobel Controversy</h2>
//                 <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
//                   <p><span className="font-bold text-blue-300">Nobel:</span> 1974 (Hewish, not Bell)</p>
//                   <p><span className="font-bold text-blue-300">Debate:</span> Credit controversy</p>
//                   <p><span className="font-bold text-blue-300">Later:</span> Bell honored globally</p>
//                 </div>
//               </div>
//               <img
//                 src="/images/Discovery-Gifs/nobel-snub.jpg"
//                 className="w-full h-auto rounded-lg border border-blue-700/50 mt-6"
//                 alt="Bell Burnell Nobel snub photo"
//               />
//             </div>

//             {/* Section 4: Modern Tools Like NICER */}
//             <div className="bg-blue-900/80 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
//               <div 
//                 className="group w-64 h-64 rounded-full bg-blue-900/80 border border-blue-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-blue-800/90 cursor-pointer"
//                 onMouseEnter={() => handleCardHover("nicer")}
//                 onMouseLeave={() => !lockChat && setActiveSection(null)}
//                 onClick={() => handleCardClick("nicer")}
//               >
//                 <h2 className="text-md font-bold text-center mb-2">NICER & Modern Exploration</h2>
//                 <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
//                   <p><span className="font-bold text-blue-300">Mission:</span> NICER (ISS)</p>
//                   <p><span className="font-bold text-blue-300">Goal:</span> Measure neutron interiors</p>
//                   <p><span className="font-bold text-blue-300">Bonus:</span> Deep-space navigation</p>
//                 </div>
//               </div>
//               <img
//                 src="/images/neutronStars/4.gif"
//                 className="w-full h-auto rounded-lg border border-blue-700/50 mt-6"
//                 alt="NICER observatory image"
//               />
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Custom AI Chat Info Box */}
//       {showContent && (
//         <div className="fixed bottom-16 right-8 w-96 max-w-full z-30">
//           <div className={`bg-slate-800/90 border ${lockChat ? 'border-red-500' : 'border-blue-500'} rounded-lg shadow-lg p-4 text-white transition-all duration-300`}>
//             <div className="flex items-center justify-between mb-3">
//               <div className="flex items-center">
//                 <div className="h-3 w-3 rounded-full bg-blue-500 mr-2 animate-pulse"></div>
//                 <h3 className="text-lg font-semibold text-blue-300">AI Assistant</h3>
//               </div>
//               {(activeSection || lockChat) && (
//                 <div className="flex items-center space-x-3 text-xs">
//                   <button 
//                     onClick={() => setLockChat(!lockChat)} 
//                     className={`px-2 py-1 rounded ${lockChat ? 'bg-red-700 text-white' : 'bg-blue-700 text-white'}`}
//                   >
//                     {lockChat ? 'Unlock' : 'Lock'}
//                   </button>
//                   {lockChat && (
//                     <button 
//                       onClick={() => {setActiveSection(null); setLockChat(false)}}
//                       className="px-2 py-1 rounded bg-gray-700 text-white"
//                     >
//                       Close
//                     </button>
//                   )}
//                 </div>
//               )}
//             </div>
//             <div 
//               id="ai-chat-content"
//               className="h-40 overflow-y-auto prose prose-invert prose-sm"
//             >
//               {typingText}
//               {isTyping && <span className="animate-pulse">|</span>}
//               {!typingText && !isTyping && (
//                 <>
//                   <p className="text-gray-400 italic">Hover over any discovery card to learn more...</p>
//                   <p className="text-gray-500 mt-2 text-xs">
//                     <span className="font-bold">Pro tips:</span>
//                     <br />• <span className="font-bold">Click</span> on a card to lock the content 
//                     <br />• Press <span className="font-bold">L</span> to toggle lock/unlock
//                     <br />• Use <span className="font-bold">W/S</span> or <span className="font-bold">↑/↓</span> keys to scroll 
//                     <br />• Press <span className="font-bold">ESC</span> to close
//                   </p>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
      
//       {/* Original AiChat component */}
//       <AiChat />
//     </main>
//   );
// }





//Draft6

"use client";

import NavBar from "../../src/components/nav-bar";
import AiChat from "../../src/components/ai-chat";
import { useState, useEffect, useRef } from "react";
import Link from 'next/link';

export default function Discoveries() {
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
  
  const introFullText = `So we've just heard about how strange and powerful neutron stars are—from their unbelievable density to their rapid spin and magnetic fields. But all of this raises a big question... how do we even know this stuff?

That's where my part comes in—the discoveries. Let's take a look at how scientists actually found and studied black holes and neutron stars over time.`;
  
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
    pulsar: "In 1967, Jocelyn Bell Burnell, a graduate student at Cambridge University, discovered the first pulsar while analyzing data from a radio telescope. This regular pulsing signal, originally nicknamed 'LGM-1' (Little Green Men), was eventually identified as radiation from a rapidly rotating neutron star. This groundbreaking discovery provided the first observational evidence of neutron stars, which had only been theoretical until that point.",
    
    neutronStars: "Neutron stars were first theorized in 1933 by astronomers Walter Baade and Fritz Zwicky, who predicted their formation following supernovae. These incredibly dense objects, composed almost entirely of neutrons, represent one of the possible evolutionary endpoints of high-mass stars. When Jocelyn Bell discovered the first pulsar in 1967, it confirmed these earlier theoretical predictions about neutron stars' existence.",
    
    nobel: "Despite making the actual discovery of pulsars, Jocelyn Bell Burnell was controversially excluded from the 1974 Nobel Prize in Physics, which was awarded to her supervisor Antony Hewish and radio astronomer Martin Ryle. This decision sparked ongoing debates about recognition and gender bias in science. Bell Burnell has since received numerous honors including the Special Breakthrough Prize in Fundamental Physics in 2018, much of which she donated to fund underrepresented groups in physics.",
    
    nicer: "NASA's Neutron Star Interior Composition Explorer (NICER), installed on the International Space Station in 2017, uses X-ray timing to study the internal structure and physics of neutron stars. This cutting-edge instrument has created the first-ever precise mass and radius measurements of neutron stars and demonstrated pulsar-based navigation through the SEXTANT project, which could revolutionize deep space travel with autonomous navigation."
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
              <div className="w-32"></div> {/* Empty div for centering */}
              <h1 className="text-3xl md:text-5xl font-bold text-center">
                Discovery of Neutron Stars
              </h1>
              <Link href="/black-hole-discoveries" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-sm transition-all duration-300 flex items-center">
                Black Holes
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Section 1: Jocelyn Bell's Discovery */}
            <div className="bg-blue-900/80 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
              <div 
                className="group w-64 h-64 rounded-full bg-blue-900/80 border border-blue-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-blue-800/90 cursor-pointer"
                onMouseEnter={() => handleCardHover("pulsar")}
                onMouseLeave={() => !lockChat && setActiveSection(null)}
                onClick={() => handleCardClick("pulsar")}
              >
                <h2 className="text-md font-bold text-center mb-2">The First Pulsar Signal</h2>
                <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <p><span className="font-bold text-blue-300">Year:</span> 1967</p>
                  <p><span className="font-bold text-blue-300">Discovered by:</span> Jocelyn Bell Burnell</p>
                  <p><span className="font-bold text-blue-300">Signal:</span> LGM-1 (Little Green Men)</p>
                </div>
              </div>
              <img
                src="/images/Discovery-Gifs/bellburnell.jpg"
                className="w-full h-auto rounded-lg border border-blue-700/50 mt-6"
                alt="Jocelyn Bell discovering pulsar"
              />
            </div>

            {/* Section 2: Confirmation of Neutron Stars */}
            <div className="bg-blue-900/80 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
              <div 
                className="group w-64 h-64 rounded-full bg-blue-900/80 border border-blue-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-blue-800/90 cursor-pointer"
                onMouseEnter={() => handleCardHover("neutronStars")}
                onMouseLeave={() => !lockChat && setActiveSection(null)}
                onClick={() => handleCardClick("neutronStars")}
              >
                <h2 className="text-md font-bold text-center mb-2">Proof of Neutron Stars</h2>
                <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <p><span className="font-bold text-blue-300">Theory:</span> 1930s (Baade & Zwicky)</p>
                  <p><span className="font-bold text-blue-300">Confirmed:</span> 1968</p>
                  <p><span className="font-bold text-blue-300">Object:</span> Spinning neutron core</p>
                </div>
              </div>
              <img
                src="/images/Discovery-Gifs/pulsar-signal.gif"
                className="w-full h-auto rounded-lg border border-blue-700/50 mt-6"
                alt="Pulsar signal graphic"
              />
            </div>

            {/* Section 3: Bell Burnell Snubbed by Nobel */}
            <div className="bg-blue-900/80 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
              <div 
                className="group w-64 h-64 rounded-full bg-blue-900/80 border border-blue-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-blue-800/90 cursor-pointer"
                onMouseEnter={() => handleCardHover("nobel")}
                onMouseLeave={() => !lockChat && setActiveSection(null)}
                onClick={() => handleCardClick("nobel")}
              >
                <h2 className="text-md font-bold text-center mb-2">Nobel Controversy</h2>
                <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <p><span className="font-bold text-blue-300">Nobel:</span> 1974 (Hewish, not Bell)</p>
                  <p><span className="font-bold text-blue-300">Debate:</span> Credit controversy</p>
                  <p><span className="font-bold text-blue-300">Later:</span> Bell honored globally</p>
                </div>
              </div>
              <img
                src="/images/Discovery-Gifs/nobel-snub.jpg"
                className="w-full h-auto rounded-lg border border-blue-700/50 mt-6"
                alt="Bell Burnell Nobel snub photo"
              />
            </div>

            {/* Section 4: Modern Tools Like NICER */}
            <div className="bg-blue-900/80 p-8 rounded-lg backdrop-blur-sm border border-blue-700/50 max-w-6xl w-full mb-8 flex flex-col items-center">
              <div 
                className="group w-64 h-64 rounded-full bg-blue-900/80 border border-blue-700/50 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:bg-blue-800/90 cursor-pointer"
                onMouseEnter={() => handleCardHover("nicer")}
                onMouseLeave={() => !lockChat && setActiveSection(null)}
                onClick={() => handleCardClick("nicer")}
              >
                <h2 className="text-md font-bold text-center mb-2">NICER & Modern Exploration</h2>
                <div className="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                  <p><span className="font-bold text-blue-300">Mission:</span> NICER (ISS)</p>
                  <p><span className="font-bold text-blue-300">Goal:</span> Measure neutron interiors</p>
                  <p><span className="font-bold text-blue-300">Bonus:</span> Deep-space navigation</p>
                </div>
              </div>
              <img
                src="/images/neutronStars/4.gif"
                className="w-full h-auto rounded-lg border border-blue-700/50 mt-6"
                alt="NICER observatory image"
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
  )};