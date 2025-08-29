interface Skills {
  languages: string[];
  webTechnologies: string[];
  frameworksLibraries: string[];
  databases: string[];
  tools: string[];
}

interface SkillsSectionProps {
  skills: Skills;
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  const skillCategories = [
    { title: 'Languages', items: skills.languages, delay: '0.2s' },
    { title: 'Web Technologies', items: skills.webTechnologies, delay: '0.4s' },
    { title: 'Frameworks & Libraries', items: skills.frameworksLibraries, delay: '0.6s' },
    { title: 'Databases', items: skills.databases, delay: '0.8s' },
    { title: 'Tools', items: skills.tools, delay: '1.0s' },
  ];

  return (
    <section id="skills" className="portfolio-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="portfolio-title slide-in-left">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="portfolio-card slide-in-left"
              style={{ animationDelay: category.delay }}
            >
              <h3 className="portfolio-subtitle text-lg mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-portfolio-primary/20 text-portfolio-primary rounded-full text-sm font-medium border border-portfolio-primary/30 hover:bg-portfolio-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;