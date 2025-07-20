import * as FaIcons from "react-icons/fa";
import * as DiIcons from "react-icons/di";
import * as Fa6Icons from "react-icons/fa6";

const iconLibraries = {
  Fa: FaIcons,
  Di: DiIcons,
  Fa6: Fa6Icons,
};

const SkillIcon = ({
  iconName,
  size = "2em",
  color = "currentColor",
  className = "",
}) => {
  if (!iconName) {
    return null;
  }

  const prefixMatch = iconName.match(/^[A-Z][a-z]*/);
  const prefix = prefixMatch ? prefixMatch[0] : null;

  const Library = iconLibraries[prefix];

  if (!Library) {
    console.warn(
      `Icon library for prefix "${prefix}" not found for icon "${iconName}"`
    );
    if (FaIcons[iconName]) {
      const IconComponent = FaIcons[iconName];
      return <IconComponent size={size} color={color} className={className} />;
    }
    return null;
  }

  const IconComponent = Library[iconName];

  if (!IconComponent) {
    console.warn(
      `Icon "${iconName}" not found in library "${prefix}". Check spelling or if it's in a different library.`
    );
    return null;
  }

  return <IconComponent size={size} color={color} className={className} />;
};

export default SkillIcon;
