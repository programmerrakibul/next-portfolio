import { ProjectsSection } from "@/features/projects/components/projects-section";
import { getProjects } from "@/features/projects/data/projects";

const ProjectsPage = () => {
  const projects = getProjects();

  return (
    <div className="pt-8">
      <ProjectsSection projects={projects} />
    </div>
  );
};

export default ProjectsPage;
