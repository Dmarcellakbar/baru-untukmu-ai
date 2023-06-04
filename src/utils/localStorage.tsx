export const getItem = (key: string) => {
  if (typeof window === 'undefined') return null;

  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const setItem = (key: string, value: any) => {
  if (typeof window === 'undefined') return;

  localStorage.setItem(key, JSON.stringify(value));
};

export const removeItem = (key: string) => {
  if (typeof window === 'undefined') return;

  localStorage.removeItem(key);
};
