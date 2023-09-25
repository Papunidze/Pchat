import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IconProps extends Omit<FontAwesomeIconProps, "icon"> {
  icon: string;
  color?: string;
}
function Icon({ icon, color, ...rest }: IconProps) {
  return (
    <FontAwesomeIcon
      icon={icon as IconProp}
      className={color || "default-icons dark:white-icons"}
      size="1x"
      {...rest}
    />
  );
}

export default Icon;
