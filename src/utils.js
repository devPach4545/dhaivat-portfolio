export const getImageUrl = (path) => {
  // Get the base URL dynamically
  
  const baseUrl = import.meta.env.BASE_URL || '/';
  return `${baseUrl}assets/${path}`;
};