interface SkillsImages {
  src: string;
  height: number;
  width: number;
  alt: string;
}

export interface SkillsProps {
  title: string;
  description: string;
  images: SkillsImages[];
}

export interface ProjectsProps {
  image: string;
  githubLink: string;
  webLink?: string;
  title: string;
  description: string;
}

export interface WhatIDoProps {
  icon: string;
  title: string;
  description: string;
}
