import { ExternalLink, Github, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
interface Project {
  name: string;
  stack: string[];
  description: string;
  link: string;
  gitLink:string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="portfolio-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="portfolio-title zoom-in">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="portfolio-card zoom-in"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="text-portfolio-primary" size={24} />
                <h3 className="text-xl font-semibold text-portfolio-text">{project.name}</h3>
              </div>
              
              <p className="text-portfolio-muted mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-portfolio-accent/20 text-portfolio-accent rounded text-xs font-medium border border-portfolio-accent/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3 mt-auto">
                {project.link && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 border-portfolio-primary t  ext-portfolio-primary hover:bg-portfolio-primary hover:text-portfolio-secondary"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}

                

                <Button
                  variant="outline"
                  size="sm"
                  className="border-portfolio-muted text-portfolio-muted hover:bg-portfolio-muted hover:text-portfolio-secondary"
                  asChild
                >
                  
                 <a href ={project.gitLink}><Github size={16} className="mr-2" /> Code</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;