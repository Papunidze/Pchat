import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IconProps extends Omit<FontAwesomeIconProps, "icon"> {
  icon: string;
}
function Icon({ icon, ...rest }: IconProps) {
  return (
    <FontAwesomeIcon
      icon={icon as IconProp}
      fill={rest.fill || "#3d3d4e"}
      {...rest}
    />
  );
}

export default Icon;
