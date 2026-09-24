import type { WhatIDoProps } from "../../Utils/Types";
import type { SvgIconComponent } from "@mui/icons-material";

import MonitorIcon from "@mui/icons-material/Monitor";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const iconMap: Record<string, SvgIconComponent> = {
  web: MonitorIcon,
  mobile: PhoneAndroidIcon,
  ai: SmartToyIcon,
};

function WhatIDoHelper({ icon, title, description }: WhatIDoProps) {
  const Icon = iconMap[icon];
  return (
    <div className="bg-surface w-[30%] px-6 py-8 rounded-xl">
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-red-500 rounded-full p-1">
          <Icon />
        </div>
        <p className="font-semibold">{title}</p>
      </div>
      <p className="opacity-50 text-md">{description}</p>
    </div>
  );
}

export default WhatIDoHelper;
