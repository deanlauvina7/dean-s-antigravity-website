import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Navbar() {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Initial fade in
    gsap.fromTo(navRef.current, 
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
    );
  }, []);

  return (
    <nav 
      ref={navRef}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full px-6 py-3 flex items-center justify-between gap-8 md:gap-16 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-lg border border-gray-100 text-textMain' 
          : 'bg-transparent text-white'
      }`}
    >
      <div className="font-serif font-bold text-xl tracking-wide shrink-0">
        Dean Lauvina
      </div>
      
      <div className="hidden md:flex items-center gap-6 font-medium text-sm">
        <a href="#about" className="hover:-translate-y-[1px] transition-transform">About</a>
        <a href="#featured" className="hover:-translate-y-[1px] transition-transform">Listings</a>
        <a href="#features" className="hover:-translate-y-[1px] transition-transform">Why Me</a>
        <a href="#reviews" className="hover:-translate-y-[1px] transition-transform">Reviews</a>
      </div>

      <a 
        href="https://www.aptamigo.com/dean.lauvina"
        target="_blank"
        rel="noreferrer"
        className={`magnetic-button shrink-0 px-5 py-2 rounded-full font-medium text-sm transition-colors ${
          isScrolled ? 'bg-charcoal text-white hover:bg-black' : 'bg-white text-black hover:bg-gray-100'
        }`}
      >
        Start Search
      </a>
    </nav>
  );
}
