export const capitalizeFirstLetter = (str: string) => {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
}

export const replaceSpace = (text: string) => {
  return text.replace(/\s+/g, '');
}
