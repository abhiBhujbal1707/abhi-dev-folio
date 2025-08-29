import { GraduationCap, Calendar } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  year: string;
  score: string;
}

interface EducationSectionProps {
  education: Education[];
}

const EducationSection = ({ education }: EducationSectionProps) => {
  return (
    <section id="education" className="portfolio-section">
      <div className="max-w-4xl mx-auto">
        <h2 className="portfolio-title fade-in-right">Education</h2>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={`${edu.degree}-${edu.institution}`}
              className="portfolio-card fade-in-right"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-portfolio-primary/20 rounded-lg">
                  <GraduationCap className="text-portfolio-primary" size={24} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-portfolio-text mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-portfolio-muted font-medium mb-2">
                    {edu.institution}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-portfolio-muted">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{edu.year}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">Score: {edu.score}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;