import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants.ts';
import CodeBlock from '../components/CodeBlock.tsx';
import { ArrowLeftIcon } from '../components/icons.tsx';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = PROJECTS.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Project not found</h2>
        <Link to="/" className="text-primary hover:underline mt-4 inline-block">Go back to Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-sky-400 mb-8 transition-colors">
        <ArrowLeftIcon />
        Back to Projects
      </Link>

      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">{project.title}</h1>
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map(tag => (
          <span key={tag} className="px-3 py-1 text-sm font-semibold bg-secondary text-slate-300 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      <p className="text-lg text-text-muted leading-relaxed mb-12">{project.longDescription}</p>

      <h2 className="text-3xl font-bold mb-6">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {project.images.map((img, index) => (
          <img key={index} src={img} alt={`${project.title} - Screenshot ${index + 1}`} className="rounded-lg shadow-lg w-full h-full object-cover" />
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-6">Key Equations & Code</h2>
      <div className="space-y-8">
        {project.latexCode.map((codeSnippet, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-slate-300 mb-2">{codeSnippet.title}</h3>
            <CodeBlock code={codeSnippet.code} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetailPage;