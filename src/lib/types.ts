export interface Profile {
  name: string;
  title: string;
  about: string;
  image: string;
  experience: Experience[];
  projects: Project[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
}

export interface Project {
  name: string;
  description: string;
}