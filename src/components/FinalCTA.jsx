import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const ctaRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(ctaRef.current.children,
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%"
          }
        }
      );
    }, ctaRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-charcoal text-white relative overflow-hidden">
      {/* Abstract background shape */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
      
      <div ref={ctaRef} className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-sans font-bold mb-6">
          Ready to Move to Chicago?
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 font-serif italic mb-12">
          Tell me what you're looking for and I'll send you the best options within 24 hours.
        </p>
        
        <a 
          href="https://www.aptamigo.com/dean.lauvina" 
          target="_blank" 
          rel="noreferrer"
          className="magnetic-button inline-block bg-white text-charcoal px-10 py-5 rounded-full font-bold text-xl hover:bg-gold hover:text-white transition-colors shadow-xl"
        >
          Start My Search Now
        </a>
      </div>
    </section>
  );
}
