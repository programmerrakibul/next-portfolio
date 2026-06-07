export interface Project {
  id: string;
  title: string;
  description: string;
  photoUrl: string;
  featured: boolean;
  liveUrl: string;
  repoUrl: string;
  stacks: string[];
  createdAt: Date;
  updatedAt: Date;
}
