export const generateRandomString = (): string => {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const length = 10;
    
  return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join("");
};