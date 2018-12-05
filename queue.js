const createQueue = () => {
  const queue = [];

  return {
    enqueue: item => {
      queue.unshift(item);
    },
    dequeue: () => queue.pop(),
    peek: () => queue[queue.length - 1],
    isEmpty: () => queue.length === 0,
    getLength: () => queue.length
  };
};

module.exports = createQueue;
