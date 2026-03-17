// this is the actual debounce funciton that help us with any kindl of delay and using the callbacks
export function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}