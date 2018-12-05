const createStack = () => {
  const stack = [];

  return {
    push: item => {
      stack.push(item);
    },
    pop: () => stack.pop(),
    peek: () => stack[stack.length - 1],
    isEmpty: () => stack.length === 0
  };
};

const s = createStack();

console.log(s.peek());
