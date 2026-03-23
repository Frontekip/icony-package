const getIconNames = (iconSet) => {
  if (!iconSet?.icons) throw new Error("icony: invalid iconSet");
  return iconSet.icons.map((icon) => icon.properties.name);
};

const hasIcon = (iconSet, name) => {
  if (!iconSet?.icons) throw new Error("icony: invalid iconSet");
  return iconSet.icons.some((icon) => icon.properties.name === name);
};

export { getIconNames, hasIcon };
