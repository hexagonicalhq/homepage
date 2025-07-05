import { useEffect, useState } from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
import { Mail, MessageSquare, Users, Zap } from 'lucide-react';

const CONTACT_OPTIONS = [
  {
    icon: <MessageSquare size={24} />,
    title: "General Inquiries",
    description: "Questions about our tools or company",
    email: "hello@hexagonical.ch",
    response: "We'll get back to you within 24 hours"
  },
  {
    icon: <Users size={24} />,
    title: "Partnerships",
    description: "Interested in working together",
    email: "partnerships@hexagonical.ch", 
    response: "Let's explore opportunities"
  },
  {
    icon: <Zap size={24} />,
    title: "Technical Support",
    description: "Need help with our tools",
    email: "support@hexagonical.ch",
    response: "Technical questions get priority"
  },
  {
    icon: <Mail size={24} />,
    title: "Press & Media",
    description: "Media inquiries and press requests",
    email: "press@hexagonical.ch",
    response: "We love talking to journalists"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    document.title = "Contact | Hexagonical";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-hexDark-500 text-white antialiased">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="blob w-[600px] h-[600px] -right-[200px] -top-[200px] opacity-20" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-hexGray-300 mb-12 max-w-2xl mx-auto">
                We're a small team, but we read every email. Whether you have questions, 
                feedback, or just want to say hi – we'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16 bg-hexDark-400">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">How Can We Help?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {CONTACT_OPTIONS.map((option, index) => (
                <div key={index} className="bg-hexDark-300/50 rounded-2xl p-6 text-center border border-hexDark-100/10">
                  <div className="w-12 h-12 bg-hexGreen-500/10 text-hexGreen-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {option.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                  <p className="text-hexGray-400 text-sm mb-4">{option.description}</p>
                  <a 
                    href={`mailto:${option.email}`}
                    className="text-hexGreen-500 hover:text-hexGreen-400 text-sm font-medium block mb-2"
                  >
                    {option.email}
                  </a>
                  <p className="text-hexGray-500 text-xs">{option.response}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        {/* <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-hexGray-400">
                  Prefer forms? Fill this out and we'll get back to you within 24 hours.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="bg-hexDark-400/50 rounded-2xl p-8 border border-hexDark-100/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="name" className="text-white">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2 bg-hexDark-300 border-hexDark-100/20 text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 bg-hexDark-300 border-hexDark-100/20 text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="company" className="text-white">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-2 bg-hexDark-300 border-hexDark-100/20 text-white"
                    placeholder="Your company (optional)"
                  />
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="message" className="text-white">Message *</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-2 w-full rounded-md border border-hexDark-100/20 bg-hexDark-300 px-3 py-2 text-white placeholder:text-hexGray-400 focus:outline-none focus:ring-2 focus:ring-hexGreen-500"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-hexGreen-500 hover:bg-hexGreen-600 text-black font-medium"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section> */}

        {/* Quick Stats */}
        <section className="py-16 bg-hexDark-400">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-8">We're Here to Help</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-hexGreen-500 mb-2">{"<24hrs"}</div>
                  <p className="text-hexGray-400">Average response time</p>
                </div>

                <div>
                  <div className="text-3xl font-bold text-hexGreen-500 mb-2">100%</div>
                  <p className="text-hexGray-400">Of emails get a human response</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
