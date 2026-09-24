import type { SkillsProps } from "../Utils/Types";

import skillsData from "../Data/skills.json";

import SkillsLeft from "./Skills Helper/SkillsLeft";
import SkillsRight from "./Skills Helper/SkillsRight";
import Separator from "./utils/Separator";

function Skills() {
  const items: SkillsProps[] = skillsData;
  return (
    <>
      <div id="skills" className="bg-background text-white px-14 pb-24">
        <Separator />
        <h1 className="section-heading">Skills</h1>
        <div>
          {items.map((item, idx) => {
            if (idx % 2 == 0)
              return (
                <SkillsLeft
                  title={item.title}
                  description={item.description}
                  images={item.images}
                />
              );
            else
              return (
                <SkillsRight
                  title={item.title}
                  description={item.description}
                  images={item.images}
                />
              );
          })}
        </div>
      </div>
    </>
  );
}

export default Skills;
