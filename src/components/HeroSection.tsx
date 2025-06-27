
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Code } from 'lucide-react';
import { Terminal } from '@/components/Terminal';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const scrollPosition = rect.top + rect.height * 0.2;
      
      document.documentElement.style.setProperty(
        '--scroll-position', 
        `${Math.max(0, Math.min(1, 1 - scrollPosition / window.innerHeight))}`
      );
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const terminalLines = [
    { prompt: '$', text: 'npm install hexagonical-cli -g' },
    { prompt: '$', text: 'hexagonical init my-awesome-project ' },
    { prompt: 'info', text: 'Initializing project...' },
    { prompt: 'info', text: 'Installing dependencies...' },
    { prompt: 'success', text: '✓ Project ready! Start building something great.' },
    { prompt: '$', text: 'cd my-awesome-project && hexagonical deploy' },
    { prompt: 'info', text: 'Deploying to Hexagonical...' },
    { prompt: 'success', text: '✓ Successfully deployed (Yayy :D ) visit under: https://0f02e202-4bd3-4243-ab9e-c8c00c8ec439.hexagonical.xyz' },
  ];

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden"
    >
      {/* Background effects */}
      <div className="parallax-bg" />
      <div className="blob w-[600px] h-[600px] top-[20%] left-[60%] opacity-40" />
      <div className="blob w-[300px] h-[300px] top-[70%] left-[10%] opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 space-y-6 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <div 
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="inline-block py-1 px-3 text-xs font-semibold bg-hexGreen-500/10 text-hexGreen-400 rounded-full mb-4">
                Early Access
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Developer Tools <br />
                <span className="text-gradient">That Actually Work</span>
              </h1>
              <p className="mt-6 text-lg text-hexGray-300">
                We're a small team building the development platform we always wanted to use. 
                Simple, powerful, and designed by developers who understand the pain points.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-hexGreen-500 hover:bg-hexGreen-600 text-black font-medium">
                  Join Early Access
                  <ChevronRight size={16} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-hexGray-600 hover:bg-hexDark-400">
                  <Code size={16} className="mr-2" />
                  View Roadmap
                </Button>
              </div>
              
              <div className="mt-8 text-sm text-hexGray-400">
                Free to try · No commitment · Built in public
              </div>
            </div>
          </div>

          <div 
            className={`flex-1 w-full max-w-xl mx-auto transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <Terminal lines={terminalLines} />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a 
          href="#features" 
          className="flex items-center justify-center w-10 h-10 rounded-full border border-hexGray-700 text-hexGray-400 hover:text-hexGreen-500 hover:border-hexGreen-500 transition-colors"
          aria-label="Scroll to features section"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="animate-bounce"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;