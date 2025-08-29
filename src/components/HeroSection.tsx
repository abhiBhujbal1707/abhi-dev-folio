import { Mail, Phone, MapPin, Linkedin, Github, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';

interface Contact {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  hackerrank: string;
}

interface HeroSectionProps {
  name: string;
  role: string;
  contact: Contact;
}

const HeroSection = ({ name, role, contact }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-secondary/90 to-portfolio-secondary/70" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="block text-portfolio-text">{name}</span>
          </h1>
        </div>
        
        <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl text-portfolio-muted mb-8 max-w-2xl mx-auto">
            {role}
          </p>
        </div>

        <div className="fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href={`mailto:${contact.email}`} className="portfolio-button flex items-center gap-2">
              <Mail size={20} />
              Email
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="portfolio-button flex items-center gap-2">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="portfolio-button flex items-center gap-2">
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>

        <div className="fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-wrap justify-center gap-6 text-portfolio-muted">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>{contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{contact.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-portfolio-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-portfolio-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;