import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-hexDark-500/95 backdrop-blur-md py-2 shadow-md shadow-black/10' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-hexGreen-500 rounded flex items-center justify-center">
            <div className="text-black text-lg font-bold"><Logo width={28}/></div>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">Hexagonical</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          <a href="/#products" className="px-4 py-2 text-hexGray-400 hover:text-white transition-colors">Products</a>
          <a href="/#mission" className="px-4 py-2 text-hexGray-400 hover:text-white transition-colors">Mission</a>
          <a href="/#journey" className="px-4 py-2 text-hexGray-400 hover:text-white transition-colors">Journey</a>
          <div className="ml-4">
            <Button variant="outline" className="border-hexGreen-600 text-hexGreen-500 hover:bg-hexGreen-500/10">Docs</Button>
          </div>
          <div className="ml-2">
            <Button className="bg-hexGreen-500 hover:bg-hexGreen-600 text-black">Try Now</Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-hexDark-400 border-b border-hexGray-800">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <a 
              href="#features" 
              className="px-4 py-2 text-white hover:bg-hexDark-300 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#products" 
              className="px-4 py-2 text-white hover:bg-hexDark-300 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a 
              href="#mission" 
              className="px-4 py-2 text-white hover:bg-hexDark-300 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Mission
            </a>
            <a 
              href="#journey" 
              className="px-4 py-2 text-white hover:bg-hexDark-300 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Journey
            </a>
            <div className="flex space-x-2 pt-2">
              <Button variant="outline" className="border-hexGreen-600 text-hexGreen-500 hover:bg-hexGreen-500/10 w-1/2">
                Docs
              </Button>
              <Button className="bg-hexGreen-500 hover:bg-hexGreen-600 text-black w-1/2">
                Try Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
