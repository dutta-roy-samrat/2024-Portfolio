export const debounce = (func: () => void, wait: number = 0) => {
  let timeoutId: NodeJS.Timeout;
  const debouncedFunction = () => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(func, wait);
  };
  return debouncedFunction;
};
