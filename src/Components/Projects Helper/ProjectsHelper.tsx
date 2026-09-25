import type { ProjectsProps } from "../../Utils/Types";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function ProjectsHelper({
  image,
  title,
  githubLink,
  webLink,
  description,
}: ProjectsProps) {
  return (
    <div
      onClick={() => window.open(webLink, "_blank")}
      className={`p-4 flex flex-col gap-5 bg-surface max-w-[20rem] rounded-md ${webLink ? "cursor-pointer" : ""}`}
    >
      <img src={image} className="rounded-md" />
      <div className="flex justify-between items-center">
        <h2>{title}</h2>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          <OpenInNewIcon />
        </a>
      </div>
      <p className="opacity-40 text-sm">{description}</p>
    </div>
  );
}

export default ProjectsHelper;
