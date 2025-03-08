export const updateTitle = (pageName) => {
  const baseTitle = "Creative Agency";
  document.title = pageName ? `${pageName} | ${baseTitle}` : baseTitle;
};
