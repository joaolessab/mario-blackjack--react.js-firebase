export const generateRandomString = (): string => {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const length = 10;
    
  return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join("");
};

export const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const timestampToStringDate = (timeStamp) => {
  return new Date(timeStamp?.toDate())?.toLocaleString();
};
