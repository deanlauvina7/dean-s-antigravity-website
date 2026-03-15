import { useEffect, useRef } from 'react';
import { DollarSign, Building2, Target, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "100% Free Service",
    desc: "My expertise and guidance cost you nothing. The buildings compensate me directly, allowing you to access premium service for free.",
    icon: DollarSign
  },
  {
    title: "Access to Off-Market Units",
    desc: "Gain a competitive edge with exclusive access to unlisted luxury apartments before they hit the public market.",
    icon: Building2
  },
  {
    title: "Expert Negotiation & Concessions",
    desc: "I negotiate directly with management to secure you the best pricing, including months of free rent and waived fees.",
    icon: Target
  },
  {
    title: "Streamlined Touring Process",
    desc: "No stress. I schedule your entire day, handle the logistics, and guide you through each building so you only see the best.",
    icon: CheckCircle2
  }
];

export default function FeaturesGrid() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(".features-header",
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%"
          }
        }
      );

      // Staggered cards
      gsap.fromTo(cardsRef.current,
        { y: 40, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out",
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 80%"
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={containerRef} className="py-24 md:py-32 bg-white text-textMain px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="features-header text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <h2 className="text-sm uppercase tracking-widest text-gold font-semibold mb-4">The Advantage</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
            Why Work With Me
          </h3>
        </div>

        <div className="features-grid grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((f, i) => (
            <div 
              key={i} 
              ref={(el) => cardsRef.current[i] = el}
              className="group p-8 md:p-12 rounded-[2rem] bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                <f.icon size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-bold text-charcoal mb-4">{f.title}</h4>
              <p className="text-gray-600 text-lg leading-relaxed max-w-sm mx-auto">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
