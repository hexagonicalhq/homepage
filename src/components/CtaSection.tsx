import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="blob w-[800px] h-[800px] -right-[300px] -top-[300px] opacity-30" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-gradient-to-br from-hexDark-300 to-hexDark-500 border border-hexDark-100/10 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to build something great together?</h2>
          <p className="text-hexGray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            We're looking for early adopters who want to shape the future of developer tools. 
            Join us and help build something that actually works.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-hexGreen-500 hover:bg-hexGreen-600 text-black font-medium">
              Join Early Access
              <ChevronRight size={16} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-hexGray-600 hover:bg-hexDark-400">
              Chat with Us
            </Button>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-hexGray-400">
            <div className="flex items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="mr-2 text-hexGreen-500"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Free to try
            </div>
            <div className="flex items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="mr-2 text-hexGreen-500"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Shape the roadmap
            </div>
            <div className="flex items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="mr-2 text-hexGreen-500"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Direct access to founders
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
