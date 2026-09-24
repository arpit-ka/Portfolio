import type { ProjectsProps } from "../../Utils/Types";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function ProjectsHelper({ image, title, link, description }: ProjectsProps) {
  return (
    <div className="p-4 flex flex-col gap-5 bg-surface max-w-[20rem] rounded-md">
      <img src={image} className="rounded-md" />
      <div className="flex justify-between items-center">
        <h2>{title}</h2>
        <a href={link}>
          <OpenInNewIcon />
        </a>
      </div>
      <p className="opacity-40 text-sm">{description}</p>
    </div>
  );
}

export default ProjectsHelper;
