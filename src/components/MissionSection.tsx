
import { useEffect, useRef } from 'react';

const MissionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealElements.forEach(el => observer.observe(el));
    
    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="mission" ref={sectionRef} className="py-24 relative bg-hexDark-400">
      <div className="blob w-[500px] h-[500px] top-[10%] right-[5%] opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 reveal-left">
            <h2 className="text-3xl md:text-4xl font-bold">Why We Started This</h2>
            
            <p className="text-xl text-hexGray-300">
              We got tired of fighting with tools that make simple things complicated. So we decided to build something different - tools that actually help you build, not get in your way.
            </p>
            
            <blockquote className="border-l-4 border-hexGreen-500 pl-4 text-hexGray-300 italic">
              "We're building the platform we always wished existed: powerful enough for real projects, simple enough that you don't need a PhD to use it."
            </blockquote>

            <p className="text-hexGray-400">
              Started by a small team who saw how bloated everything had become. We believe great tools should be simple, not "enterprise-grade" complex.
            </p>
          </div>
          
          <div className="space-y-8 reveal-right">
            <div className="bg-hexDark-300 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">How We're Different</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-4 mt-1 text-hexGreen-500">
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
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <strong className="text-white block mb-1">Small Team, Big Focus</strong>
                    <p className="text-hexGray-400">Just a few people who actually use the tools we build. No corporate bureaucracy, just honest feedback.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 mt-1 text-hexGreen-500">
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
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <strong className="text-white block mb-1">Building in Public</strong>
                    <p className="text-hexGray-400">We share our progress, struggles, and wins openly. No marketing fluff, just real updates.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 mt-1 text-hexGreen-500">
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
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <strong className="text-white block mb-1">Bootstrapped & Independent</strong>
                    <p className="text-hexGray-400">We're not beholden to VCs or investors. We build for users, not for hypergrowth metrics.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-hexGreen-900/20 to-transparent p-6 rounded-lg border border-hexGreen-900/30">
              <h3 className="text-2xl font-bold mb-4">The Goal</h3>
              <p className="text-hexGray-300 mb-4">
                We want to make building software fun again. Not everything needs to be "enterprise-ready" from day one. Sometimes you just want to build something cool without jumping through hoops.
              </p>
              <p className="text-hexGray-300">
                We're working to prove that great developer tools can be both powerful and simple. No compromises needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;