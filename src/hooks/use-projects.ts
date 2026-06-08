import { getProjects } from "@/features/projects/data/projects";
import { Project } from "@/types/projects";

const useProjects = (): Project[] => {
  return getProjects();
};

export default useProjects;
