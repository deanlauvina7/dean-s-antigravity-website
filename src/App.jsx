import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedListings from './components/FeaturedListings';
import FeaturesGrid from './components/FeaturesGrid';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Add noise overlay to body
    const noiseSvg = document.createElement("div");
    noiseSvg.className = "noise-overlay";
    noiseSvg.innerHTML = `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
      </svg>
    `;
    document.body.appendChild(noiseSvg);
    
    return () => {
      document.body.removeChild(noiseSvg);
    };
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-gold selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <FeaturedListings />
      <FeaturesGrid />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
