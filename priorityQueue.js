const queue = require("./queue");

const priorityQueue = () => {
  lowPriorityQueue = queue();
  highPriorityQueue = queue();

  return {
    enqueue: (item, highPriority = false) => {
      highPriority
        ? highPriorityQueue.enqueue(item)
        : lowPriorityQueue.enqueue(item);
    },
    dequeue: () => {
      return highPriorityQueue.isEmpty()
        ? lowPriorityQueue.dequeue()
        : highPriorityQueue.dequeue();
    },
    peek: () => {
      highPriorityQueue.getLength() > 0
        ? highPriorityQueue.peek()
        : lowPriorityQueue.peek();
    },
    isEmpty: () => {
      highPriorityQueue.getLength() + lowPriorityQueue.getLength() === 0;
    },
    getLenght: () => {
      highPriorityQueue.getLength() + lowPriorityQueue.getLength();
    }
  };
};

var q = priorityQueue();
q.enqueue(1, true);
q.enqueue(2);
q.enqueue(3, true);

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
