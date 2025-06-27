
import { useEffect, useRef } from 'react';

const TIMELINE = [
  {
    date: 'August 2024',
    title: 'The Beginning',
    description: 'Started as a side project after one too many frustrating experiences with existing tools. Bought the domain and sketched out the first ideas on a napkin.'
  },
  {
    date: 'September 2024',
    title: 'Servers And Procrastination',
    description: 'Set up our first server and started building, sadly realized we had no idea what we were doing. Spent more time procrastinating than coding.'
  },

  {
    date: 'March 2025',
    title: 'First Working Prototype',
    description: 'Built our first alpha Product and tested it with a small group of developer friends. Lots of bugs, but the core idea clicked.'
  },
  {
    date: 'Today',
    title: 'Working Hard',
    description: 'Continuing work on HackDB and the CLI. Learning more every commit and getting closer to our vision of building for developers, instead of for PR.'
  }

];

const JourneySection = () => {
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
    <section id="journey" ref={sectionRef} className="py-24 relative">
      <div className="hexagon-grid absolute inset-0 opacity-40" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Our Story So Far</h2>
          <p className="text-hexGray-400 reveal">
            We believe in radical transparency. Here's the real story of how we got here - the good, the bad, and the lessons learned.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-hexGray-700" aria-hidden="true"></div>
          
          <div className="space-y-12">
            {TIMELINE.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div 
                    className={`relative p-6 bg-hexDark-400/80 backdrop-blur-sm border border-hexDark-100/10 rounded-lg shadow-lg ${
                      index % 2 === 0 ? 'reveal-left' : 'reveal-right'
                    }`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-hexGreen-500 text-sm font-semibold block mb-2">{item.date}</span>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-hexGray-300">{item.description}</p>
                  </div>
                </div>
                
                <div className="md:flex md:justify-center md:items-center hidden">
                  <div className="w-8 h-8 rounded-full bg-hexGreen-500 flex items-center justify-center z-10 reveal">
                    <span className="text-black font-bold text-sm">{index + 1}</span>
                  </div>
                </div>
                
                <div className="flex-1 md:mt-0">
                  {index === TIMELINE.length - 1 && index % 2 === 0 && (
                    <div className="reveal h-full flex items-center justify-center md:justify-start">
                      <div className="bg-hexGreen-500/10 text-hexGreen-500 border border-hexGreen-500/30 rounded-lg p-4 inline-block">
                        <p className="font-semibold">What's next?</p>
                        <p className="text-sm text-hexGray-200">
                          Help us shape the future of developer tools. Your feedback drives our roadmap.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center reveal">
          <a 
            href="https://github.com/hexagonicalhq" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-hexGreen-500 hover:text-hexGreen-400 font-medium"
          >
            Follow our journey on GitHub
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
              className="ml-2"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
