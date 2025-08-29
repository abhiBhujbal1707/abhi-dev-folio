import { Mail, Phone, MapPin, Linkedin, Github, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Contact {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  hackerrank: string;
}

interface ContactSectionProps {
  contact: Contact;
  careerObjective: string;
}

const ContactSection = ({ contact, careerObjective }: ContactSectionProps) => {
  return (
    <section id="contact" className="portfolio-section">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="portfolio-title bounce">Let's Connect</h2>
        
        <div className="bounce" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg text-portfolio-muted mb-8 leading-relaxed max-w-2xl mx-auto">
            {careerObjective}
          </p>
        </div>
        
        <div className="portfolio-card bounce" style={{ animationDelay: '0.4s' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-portfolio-text mb-4">Get in Touch</h3>
              
              <a 
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-portfolio-primary/10 transition-colors group"
              >
                <Mail className="text-portfolio-primary group-hover:scale-110 transition-transform" size={20} />
                <span className="text-portfolio-text">{contact.email}</span>
              </a>
              
              <div className="flex items-center gap-3 p-3">
                <Phone className="text-portfolio-primary" size={20} />
                <span className="text-portfolio-text">{contact.phone}</span>
              </div>
              
              <div className="flex items-center gap-3 p-3">
                <MapPin className="text-portfolio-primary" size={20} />
                <span className="text-portfolio-text">{contact.location}</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-portfolio-text mb-4">Follow Me</h3>
              
              <div className="space-y-3">
                <Button
                  variant="outline"
                  asChild
                  className="w-full justify-start border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-portfolio-secondary"
                >
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-3" size={20} />
                    LinkedIn
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  asChild
                  className="w-full justify-start border-portfolio-muted text-portfolio-muted hover:bg-portfolio-muted hover:text-portfolio-secondary"
                >
                  <a href={contact.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-3" size={20} />
                    GitHub
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  asChild
                  className="w-full justify-start border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio-secondary"
                >
                  <a href={contact.hackerrank} target="_blank" rel="noopener noreferrer">
                    <Code className="mr-3" size={20} />
                    HackerRank
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;