import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadRef = useRef(null);
  const ctaGroupRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.fromTo(headlineRef.current.children, 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, delay: 0.2 }
      )
      .fromTo(subheadRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(ctaGroupRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
        "-=0.6"
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full flex items-end pb-24 md:pb-32 px-6 md:px-12 lg:px-24">
      {/* Background Image & Gradient overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&q=80&w=2670")' }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

      <div className="relative z-10 w-full max-w-4xl text-white">
        <h1 ref={headlineRef} className="text-4xl md:text-5xl lg:text-7xl font-sans font-bold leading-tight mb-6">
          <span className="block">Find Your Perfect</span>
          <span className="block font-serif italic text-gold font-normal mt-2">Apartment in Chicago</span>
          <span className="block mt-2">— Without the Stress.</span>
        </h1>
        
        <p ref={subheadRef} className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl">
          Luxury Apartments. Exclusive Listings. <span className="text-white font-semibold">100% Free Service.</span>
        </p>
        
        <div ref={ctaGroupRef} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a 
            href="https://www.aptamigo.com/dean.lauvina"
            target="_blank"
            rel="noreferrer"
            className="magnetic-button bg-gold text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-colors"
          >
            Start My Apartment Search
          </a>
          
          <div className="flex flex-col gap-2">
            <a 
              href="#featured" 
              className="group flex items-center gap-2 text-white hover:text-gold transition-colors font-medium text-lg"
            >
              See Featured Listings
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <div className="text-sm text-gray-400 font-medium">
              Trusted by 100+ Chicago renters | ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
