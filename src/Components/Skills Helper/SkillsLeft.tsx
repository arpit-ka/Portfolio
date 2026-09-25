import type { SkillsProps } from "../../Utils/Types";

function SkillsLeft({ title, description, images }: SkillsProps) {
  return (
    <div className="flex justify-between items-center gap-22 mt-30 mb-10">
      <div className="flex flex-col max-w-[50%]">
        <h2 className="font-bold text-3xl mb-3">{title}</h2>
        <p className="text-sm opacity-70">{description}</p>
      </div>
      <div className="icons flex flex-wrap gap-x-4 gap-y-4 items-center justify-center">
        {images.map((image, idx) => (
          <img
            key={idx}
            src={image.src}
            height={image.height}
            width={image.width}
            alt={image.alt}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillsLeft;
