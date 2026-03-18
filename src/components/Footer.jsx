import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-400 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 border-b border-gray-800 pb-12 mb-8">

        {/* Brand */}
        <div>
          <h4 className="font-serif font-bold text-3xl text-white mb-2 tracking-wide">Dean Lauvina</h4>
          <p className="text-sm tracking-widest uppercase text-gold">Chicago Apartment Specialist</p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 text-sm font-medium">
          <a href="tel:815-295-0998" className="flex items-center gap-3 hover:text-white transition-colors group">
            <div className="p-2 rounded-full bg-gray-800 group-hover:bg-gold transition-colors text-white">
              <Phone size={16} />
            </div>
            <span>815-295-0998</span>
          </a>

          <a href="mailto:dean.lauvina@thenavagency.com" className="flex items-center gap-3 hover:text-white transition-colors group">
            <div className="p-2 rounded-full bg-gray-800 group-hover:bg-gold transition-colors text-white">
              <Mail size={16} />
            </div>
            <span>dean.lauvina@thenavagency.com</span>
          </a>

          <a href="https://instagram.com/DeanChicagoLiving" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group">
            <div className="p-2 rounded-full bg-gray-800 group-hover:bg-gold transition-colors text-white">
              <Instagram size={16} />
            </div>
            <span>@DeanChicagoLiving</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Dean Lauvina Real Estate. All rights reserved.</p>

        {/* Brokerage Disclosure */}
        <p className="max-w-md text-left md:text-right">
          Dean Lauvina is a licensed real estate broker affiliated with AptAmigo Inc. Equal Housing Opportunity.
        </p>
      </div>
    </footer>
  );
}
