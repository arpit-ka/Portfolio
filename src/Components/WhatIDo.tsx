import type { WhatIDoProps } from "../Utils/Types";

import whatIDoData from "../Data/whatIDo.json";

import WhatIDoHelper from "./What I Do Helper/WhatIDoHelper";
import Separator from "./utils/Separator";

function WhatIDo() {
  const items: WhatIDoProps[] = whatIDoData;

  return (
    <>
      <div id="what-i-do" className="bg-background text-white px-14 pb-24">
        <Separator />
        <h1 className="section-heading">What I Do</h1>
        <div className="flex flex-wrap justify-between mt-20">
          {items.map((item) => {
            return (
              <WhatIDoHelper
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default WhatIDo;
