
import { Github } from 'lucide-react';
import Logo from './Logo';

const RESOURCES = [
  // { name: 'Documentation', url: '#' },
  // { name: 'API Reference', url: '#' },
  // { name: 'Tutorials', url: '#' },
  // { name: 'Blog', url: '#' },
  // { name: 'Changelog', url: '#' }
  { name: 'GitHub', url: 'https://github.com/hexagonicalhq'}
];

const COMPANY = [
  { name: 'Contact', url: '/contact' }
];

const LEGAL = [
  { name: 'Privacy Policy', url: '/legal/privacy' },
  { name: 'Terms of Service', url: '/legal/tos' }
];

const SOCIAL = [
  { name: 'GitHub', url: 'https://github.com/hexagonicalhq', icon: <Github size={18} /> },
  { 
    name: 'Twitter', 
    url: 'https://x.com/hexagonicalhq', 
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="18" 
        height="18" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
      </svg>
    ) 
  }
];

const Footer = () => {
  return (
    <footer className="bg-hexDark-400 border-t border-hexDark-100/10 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-hexGreen-500 rounded flex items-center justify-center">
                <div className="text-black text-lg font-bold"><Logo width={28}/></div>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">Hexagonical</span>
            </a>
            <p className="text-hexGray-400 mb-4 max-w-sm">
              Developer-first tools and hosting for modern teams. Build faster, deploy anywhere, scale effortlessly.
            </p>
            <div className="flex space-x-4">
              {SOCIAL.map((item, index) => (
                <a 
                  key={index}
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-hexGray-400 hover:text-white transition-colors"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {RESOURCES.map((item, index) => (
                <li key={index}>
                  <a href={item.url} className="text-hexGray-400 hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {COMPANY.map((item, index) => (
                <li key={index}>
                  <a href={item.url} className="text-hexGray-400 hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {LEGAL.map((item, index) => (
                <li key={index}>
                  <a href={item.url} className="text-hexGray-400 hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <a href="mailto:hello@hexagonical.ch" className="text-hexGreen-500 hover:text-hexGreen-400 transition-colors">
                hello@hexagonical.ch
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-hexDark-100/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-hexGray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Hexagonical. All rights reserved.
          </p>
          <div className="text-sm text-hexGray-500">
            Made with ♥ by developers, for developers
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;