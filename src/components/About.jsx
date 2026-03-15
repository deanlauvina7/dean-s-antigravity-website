import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import headshot from '../assets/dean.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current,
        { opacity: 0, scale: 0.8, rotate: -5 },
        { 
          opacity: 1, scale: 1, rotate: 0, duration: 1.2, ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%"
          }
        }
      );
      
      gsap.fromTo(textRef.current.children,
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%"
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white text-textMain overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* Headshot */}
        <div ref={imgRef} className="relative w-64 h-64 md:w-96 md:h-96 shrink-0 aspect-square">
          <div className="absolute inset-0 rounded-full bg-gold/20 blur-2xl transform translate-x-4 translate-y-4"></div>
          <img 
            src={headshot} 
            alt="Dean Lauvina - Chicago Real Estate" 
            className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl relative z-10"
          />
        </div>

        {/* Bio Content */}
        <div ref={textRef} className="flex-1 max-w-2xl">
          <h2 className="text-sm uppercase tracking-widest text-gold font-semibold mb-4">About the Specialist</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-8 leading-tight">
            Meet Dean Lauvina — <br />
            <span className="italic font-normal">Chicago Luxury Leasing Specialist</span>
          </h3>
          
          <div className="space-y-6 text-lg text-gray-600 mb-10">
            <p>
              Whether you are relocating to Chicago or simply upgrading to your dream home, navigating the city's fast-paced luxury rental market can be overwhelming. I specialize in making the process completely seamless and efficient.
            </p>
            <p>
              I have deep, localized knowledge of Downtown Chicago's most coveted neighborhoods—including River North, the West Loop, South Loop, Old Town, and the Gold Coast. I provide insider access to nearly every high-end rental building in the city, fast-tracking your apartment hunt.
            </p>
            <p className="font-medium text-charcoal">
              The best part? My service is 100% free to my clients.
            </p>
            <p>
              I am known by my clients for eliminating the stress of touring and applying, so you can focus entirely on enjoying your new luxury lifestyle.
            </p>
          </div>

          <a 
            href="https://www.aptamigo.com/dean.lauvina" 
            target="_blank" 
            rel="noreferrer"
            className="magnetic-button inline-flex items-center justify-center bg-charcoal text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold hover:text-charcoal transition-colors"
          >
            Work With Dean
          </a>
        </div>
      </div>
    </section>
  );
}
