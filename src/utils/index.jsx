export const typeHandler = (types) => {
  if (types[1]) {
    return types[0].type.name + " | " + types[1].type.name;
  }
  return types[0].type.name;
};


export const capitalize = (str) => {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}