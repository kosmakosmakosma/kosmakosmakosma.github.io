import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants.ts';
import { Project } from '../types.ts';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="block group">
      <div className="bg-slate-800 rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 border border-slate-700">
        <img src={project.images[0]} alt={project.title} className="w-full h-48 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-text-main mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
          <p className="text-text-muted text-sm mb-4 flex-grow">{project.shortDescription}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="px-2 py-1 text-xs font-semibold bg-secondary text-slate-300 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

const HomePage: React.FC = () => {
  return (
    <div>
      <section className="text-center py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">John Doe</h1>
        <p className="text-xl md:text-2xl text-primary font-semibold mb-8">Control Systems Engineer</p>
        <p className="max-w-3xl mx-auto text-lg text-text-muted leading-relaxed">
          I am a passionate control engineer with a strong foundation in classical and modern control theory, robotics, and automation. My expertise lies in designing and implementing robust control strategies for complex dynamic systems. I thrive on solving challenging problems and turning theoretical concepts into practical, real-world solutions.
        </p>
      </section>

      <section id="projects">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;