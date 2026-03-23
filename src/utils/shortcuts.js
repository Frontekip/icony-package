const getIconNames = (iconSet) => {
  if (iconSet?.icons) {
    return iconSet.icons.map((icon) => icon.properties.name);
  }
  throw new Error("icony: invalid iconSet");
};

const hasIcon = (iconSet, name) => {
  if (iconSet?.icons) {
    return iconSet.icons.some((icon) => icon.properties.name === name);
  }
  throw new Error("icony: invalid iconSet");
};

export { getIconNames, hasIcon };
