const createNode = value => {
  return {
    value,
    next: null
  };
};

const createLinkedList = () => {
  return {
    head: null,
    tail: null,
    length: 0,
    isEmpty: () => this.length === 0,
    push: value => {
      const node = createNode(value);

      if (this.head == null) {
        this.head = node;
      } else {
        this.tail.next = node;
      }

      this.tail = node;
      this.length++;
      return node;
    },
    pop: () => {
      if (this.isEmpty) {
        return null;
      }

      const node = this.tail;

      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        this.length--;
        return node;
      }

      let current = this.head;

      while (current) {
        if (current.next === this.tail) {
          break;
        }

        current = current.next;
      }

      if (current) {
        this.tail = current;
        this.tail.next = null;

        this.length--;
      }

      return node;
    },
    print: () => {
      const values = [];

      let current = this.head;
      while (current) {
        values.push(current.value);
        current = current.next;
      }

      return values.join(" ==> ");
    }
  };
};

let l = createLinkedList();

l.push(1);
l.push(2);
l.push(3);

console.log(l.print());
console.log(l.pop());
console.log(l.pop());
