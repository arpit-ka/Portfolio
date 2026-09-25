import type { ProjectsProps } from "../Utils/Types";

import projectsData from "../Data/projects.json";

import ProjectsHelper from "./Projects Helper/ProjectsHelper";
import Separator from "./utils/Separator";

function Projects() {
  const items: ProjectsProps[] = projectsData;
  return (
    <section id="projects" className="bg-background px-14 pb-24">
      <Separator />
      <div className=" text-white">
        <h1 className="section-heading">Projects</h1>
        <div className="flex flex-wrap gap-10 justify-between mt-20 mb-20">
          {items.map((item, idx) => {
            return (
              <ProjectsHelper
                key={idx}
                image={item.image}
                title={item.title}
                githubLink={item.githubLink}
                webLink={item.webLink}
                description={item.description}
              />
            );
          })}
        </div>
        <a
          href="https://github.com/arpit-ka?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 block w-fit mx-auto py-2 px-4 rounded-md text-center"
        >
          Other Projects
        </a>
      </div>
    </section>
  );
}

export default Projects;
