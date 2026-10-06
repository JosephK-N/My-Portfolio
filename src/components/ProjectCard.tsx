import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition bg-white">
      <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
      <p className="mt-2 text-slate-600 text-sm">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}