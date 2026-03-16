import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const listings = [
  {
    id: 1,
    name: "NEMA Chicago",
    neighborhood: "South Loop",
    price: "From $3,400",
    desc: "Unrivaled views of Lake Michigan and Grant Park with resort-style amenities.",
    img: "https://www.rentnemachicago.com/assets/uploads/transforms/images/chicago/amenities/69727/Skyline-Terrace-1_3c1657810feb51330bbfc5a9ae7e2f09.jpg",
  },
  {
    id: 2,
    name: "Wolf Point East",
    neighborhood: "River North",
    price: "From $2,800",
    desc: "Iconic riverfront living where the three branches of the Chicago River meet.",
    img: "https://images.unsplash.com/photo-1512403754473-27835f7b9984?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "The Sinclair",
    neighborhood: "Gold Coast",
    price: "From $3,200",
    desc: "Sophisticated luxury integrated with a flagship Jewel-Osco next to transit.",
    img: "https://images.unsplash.com/photo-1623862215440-42baacccb416?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "One Chicago",
    neighborhood: "River North / Gold Coast",
    price: "From $3,500",
    desc: "A lifestyle masterpiece spanning an entire city block with Whole Foods & Lifetime Fitness.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    name: "727 W Madison",
    neighborhood: "West Loop",
    price: "From $2,600",
    desc: "Modern living steps from Fulton Market and Randolph Street.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  }
];

export default function FeaturedListings() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(".listing-header",
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%"
          }
        }
      );

      // Staggered cards entrance
      gsap.fromTo(cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: {
            trigger: ".listings-grid",
            start: "top 85%"
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="featured" ref={containerRef} className="py-24 md:py-32 bg-gray-50 text-textMain px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        <div className="listing-header text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <h2 className="text-sm uppercase tracking-widest text-gold font-semibold mb-4">Curated Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
            Featured Listings
          </h3>
          <p className="text-lg text-gray-600">
            A selection of Chicago's most prestigious and sought-after luxury properties.
          </p>
        </div>

        {/* 3-column grid for the first 3 cards, 2-column or centered for the remaining 2 */}
        <div className="listings-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {listings.slice(0, 3).map((l, i) => (
            <ListingCard key={l.id} listing={l} ref={(el) => cardsRef.current[i] = el} />
          ))}
        </div>

        <div className="listings-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center lg:px-[16.666%]">
          {listings.slice(3, 5).map((l, i) => (
            <ListingCard key={l.id} listing={l} ref={(el) => cardsRef.current[i + 3] = el} />
          ))}
        </div>

      </div>
    </section>
  );
}

// Custom forwardRef for the card to allow GSAP targeting
import { forwardRef } from 'react';

const ListingCard = forwardRef(({ listing }, ref) => {
  return (
    <div ref={ref} className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
      {/* Image container with zoom effect */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
        <img
          src={listing.img}
          alt={listing.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-charcoal uppercase tracking-wide shadow-sm">
          {listing.neighborhood}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-2xl font-serif font-bold text-charcoal group-hover:text-gold transition-colors">{listing.name}</h4>
          <span className="text-sm font-semibold text-gray-500 shrink-0 mt-1">{listing.price}</span>
        </div>
        <p className="text-gray-600 mb-8 flex-1">{listing.desc}</p>

        <a
          href="https://www.aptamigo.com/dean.lauvina"
          target="_blank"
          rel="noreferrer"
          className="magnetic-button w-full block text-center bg-gray-50 text-charcoal py-3 rounded-full font-medium hover:bg-gold hover:text-white transition-colors border border-gray-200 hover:border-gold"
        >
          Request Availability
        </a>
      </div>
    </div>
  );
});
ListingCard.displayName = 'ListingCard';
