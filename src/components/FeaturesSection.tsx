
import { useEffect, useRef } from 'react';
import { Code, Server, Lock, Globe, Zap, Database } from 'lucide-react';

const FEATURES = [
  {
    icon: <Code size={24} />,
    title: 'Full-Stack Development',
    description: 'Everything you need to build and deploy in one place - no more juggling multiple tools.'
  },
  {
    icon: <Server size={24} />,
    title: 'Simple Deployments',
    description: 'Deploy with a single command. We handle the complexity so you can focus on building.'
  },
  {
    icon: <Globe size={24} />,
    title: 'Fast by Default',
    description: 'Built-in optimizations and edge distribution to make your apps lightning fast.'
  },
  {
    icon: <Database size={24} />,
    title: 'Integrated Storage',
    description: 'Skip the database setup hassle with our simple, built-in data storage.'
  },
  {
    icon: <Lock size={24} />,
    title: 'Self-Hostable',
    description: 'Own your infrastructure. Our open-source core means no vendor lock-in.'
  },
  {
    icon: <Zap size={24} />,
    title: 'Developer Experience',
    description: 'Built by developers, for developers. We obsess over the details that matter.'
  }
];

const FeaturesSection = () => {
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
    <section id="features" ref={sectionRef} className="py-24 bg-hexDark-500 relative">
      <div className="hexagon-grid absolute inset-0 opacity-60" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">What We're Building</h2>
          <p className="text-hexGray-400 reveal">
            We're creating the tools we always wished existed - simple, powerful, and actually enjoyable to use.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-hexDark-400/50 backdrop-blur-sm border border-hexDark-100/10 rounded-lg p-6 flex flex-col ${
                index % 3 === 0 
                  ? 'reveal-left' 
                  : index % 3 === 2 
                    ? 'reveal-right' 
                    : 'reveal'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-hexGreen-500/10 text-hexGreen-500 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-hexGray-400 flex-grow">{feature.description}</p>
              
              <div className="mt-4 pt-4 border-t border-hexDark-100/10">
                <a href="#" className="text-hexGreen-500 hover:text-hexGreen-400 text-sm font-medium flex items-center">
                  Coming soon
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
                    className="ml-1"
                  >
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
