import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "Moe A.",
    text: "Dean was fantastic to work with and made the entire process incredibly easy from start to finish. He went above and beyond with his service, was extremely responsive, professional, and made sure everything was handled smoothly without any stress on my end. What really stood out was how attentive and helpful he was throughout the entire process—you can tell he genuinely cares about providing great service and making sure things are done right. I truly appreciated how seamless he made everything, and I highly recommend working with Dean if you want someone reliable, professional, and willing to go the extra mile. ⭐⭐⭐⭐⭐"
  },
  {
    name: "Xing G.",
    text: "We are moving to Chicago and worked with Dean to find our next apartment. He took a lot of time and effort to find out what we were looking for and suggested great apartments for me to tour. He scheduled all the appointments for me and I didn’t have to worry about anything! On the day of the tour, everything went so smoothly. I didn’t have to worry about how to get from place to place and even where we were going next. It was extremely helpful to tour all the apartments on the same day so that I could compare them. He helped me to ask the right questions and was able to point out the pros and cons of each place. We applied to an apartment right after. It was great to work with Dean in my apartment hunting process. It saved us a tremendous amount of time and effort! Thank you Dean!!"
  },
  {
    name: "Segun A.",
    text: "Big shout out to Dean Lauvina. He came highly recommended by a friend he helped get an apartment in the past and I can say I totally see why. He was very attentive to the things I cared about in an apartment. He sent me a shortlist, took me to check out the places I selected and I'm very happy to say I've found a place that checks all the boxes I care about."
  },
  {
    name: "Johan A.",
    text: "Hello! I had an amazing experience dealing with this company! Dean and Jay were phenomenal and professional throughout the whole process. They were diligent and responsive. They made my experience looking for a new apartment very easy and exciting! I would highly recommend using their services!"
  },
  {
    name: "Maritoni N.",
    text: "From scouring the typical apartments.com website, aptamigo was exceptional. Very clean aesthetic and easy-to-navigate use. Finding this website and Dean as our realtor was nothing short of coincidental and a blessing! Dean is very personable, he made this process of finding that perfect place very smooth and it was comforting to know he had our preferences in mind. He knew who to speak to, where to go, and key phrases to say. It was very helpful for someone like myself that was going through this process for the first time. I highly recommend Dean and aptamigo if you're searching for your next place, especially in downtown Chicago!"
  },
  {
    name: "Dannah M.",
    text: "Dean & Kaydee were such a pleasure to work with! They provided great options within my budget & timeline, and truly made the choice difficult in the best way. They alleviated the stress of apartment hunting & vetting down to the tours and lease signing. As someone moving from out of state, their assistance in finding the best apartment was a lifesaver, can't recommend them enough."
  },
  {
    name: "Lily S.",
    text: "Dean was great to work with! He was very informative on each apartment and helped us get moved in smoothly and quickly. Highly suggest reaching out to Dean if you are looking for apartments in Chicago. We love our apartment and can't thank Dean enough for his support and guidance through the process!"
  }
];

export default function Testimonials() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(containerRef.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%"
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const slideRight = () => {
    // Only allow sliding right if there's more items to show.
    // On desktop we show 2, on mobile we show 1. We just use CSS to manage the width,
    // so here we'll assume desktop as worst case bounds checking for the track translation
    if (currentIndex < reviews.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  return (
    <section id="reviews" ref={containerRef} className="py-24 md:py-32 bg-[#FAF9F6] text-textMain px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex gap-1 text-gold mb-3 opacity-90">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
          </div>
          <h2 className="text-lg font-bold text-charcoal tracking-wide uppercase">5.0 Average Rating</h2>
          <h3 className="text-3xl md:text-5xl font-serif italic text-gray-500 mt-4 max-w-2xl">
            "What clients say"
          </h3>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Controls */}
          <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-20">
            <button 
              onClick={slideLeft}
              disabled={currentIndex === 0}
              className="p-3 rounded-full bg-white shadow-md text-charcoal hover:bg-gold hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-charcoal"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-20">
            <button 
              onClick={slideRight}
              disabled={currentIndex === reviews.length - 1}
              className="p-3 rounded-full bg-white shadow-md text-charcoal hover:bg-gold hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-charcoal"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Track Window */}
          <div className="overflow-hidden px-2 py-4">
            <div 
              ref={trackRef}
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((r, i) => (
               <div key={i} className="w-full md:w-1/2 shrink-0 px-4">
                 <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100 h-full flex flex-col">
                   <div className="flex items-center gap-4 mb-6">
                     <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-bold text-charcoal text-lg">
                       {r.name.charAt(0)}
                     </div>
                     <span className="font-bold text-lg text-charcoal">{r.name}</span>
                   </div>
                   <p className="text-gray-600 leading-relaxed italic text-sm md:text-base flex-1 overflow-y-auto max-h-64 custom-scrollbar">
                     "{r.text}"
                   </p>
                 </div>
               </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-colors ${i === currentIndex ? 'bg-gold' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>

        <div className="mt-16 text-center flex flex-col items-center gap-6">
          <a 
            href="#" 
            className="text-gray-500 hover:text-charcoal text-sm font-medium transition-colors underline underline-offset-4"
          >
            Read More Reviews on Google
          </a>

          <a 
            href="https://www.aptamigo.com/dean.lauvina" 
            target="_blank" 
            rel="noreferrer"
            className="magnetic-button inline-flex bg-charcoal text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold transition-colors shadow-lg"
          >
            Let's Find Your Next Apartment
          </a>
        </div>
      </div>
    </section>
  );
}
