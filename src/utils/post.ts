export const trimContent = (content: string) => {
  const splitted = content.split("\n");
  if (splitted.length > 4) {
    const subSplitted = splitted.slice(0, 4);

    return `${subSplitted.join("\n")}...`;
  }

  if (content.length > 200) {
    return `${content.substring(0, 199)}...`;
  }

  return content;
};
