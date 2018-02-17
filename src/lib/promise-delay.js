export const promise_delay = (time) => (result) => new Promise(resolve => setTimeout(() => resolve(result), time));

