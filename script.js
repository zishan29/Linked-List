function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.size = 0;

  this.addValue = (data) => {
    const node = new Node(data);
    let current;

    if (this.head === null) this.head = node;
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size += 1;
  };

  this.prependValue = (data) => {
    const node = new Node(data);

    if (this.head === null) this.head = node;
    else {
      const temp = this.head;
      this.head = node;
      node.next = temp;
    }
    this.size += 1;
  };

  this.listSize = () => this.size;

  this.listHead = () => this.head.data;

  this.listTail = () => {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current.data;
  };

  this.atIndex = (index) => {
    let i = 0;
    let current = this.head;
    while (current) {
      if (i === index) {
        return current.data;
      }
      current = current.next;
      i += 1;
    }
    return -1;
  };

  this.pop = () => {
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
    this.size -= 1;
  };

  this.containsValue = (value) => {
    let current = this.head;
    while (current) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  this.find = (value) => {
    let current = this.head;
    let i = 0;
    while (current) {
      if (current.data === value) {
        return i;
      }
      i += 1;
      current = current.next;
    }
    return null;
  };

  this.toString = () => {
    let curr = this.head;
    let str = '';
    while (curr) {
      str += `( ${curr.data} ) -> `;
      curr = curr.next;
    }
    console.log(`${str}null`);
  };

  this.insertAt = (value, index) => {
    const node = new Node(value);
    let i = 0;
    let current = this.head;
    if (index === 0) {
      const temp = this.head;
      this.head = node;
      node.next = temp;
      this.size += 1;
      return;
    }
    while (current) {
      if (i === index - 1) {
        const temp = current.next;
        current.next = node;
        node.next = temp;
        this.size += 1;
      }
      current = current.next;
      i += 1;
    }
  };

  this.removeAt = (index) => {
    let i = 0;
    let current = this.head;
    if (index === 0) {
      this.head = this.head.next;
      this.size -= 1;
      return;
    }
    while (current) {
      if (i === index - 1) {
        current.next = current.next.next;
        this.size -= 1;
      }
      current = current.next;
      i += 1;
    }
  };
}

const list = new LinkedList();
const index = 5;
list.addValue(1);
list.addValue(2);
list.addValue(3);
list.prependValue(0);
list.prependValue(-1);
list.addValue(4);
console.log('Initial list: ');
list.toString();

console.log(`Size: ${list.listSize()}`);
console.log(`Head: ${list.listHead()}`);
console.log(`Tail: ${list.listTail()}`);
console.log(`atIndex(${index}): ${list.atIndex(index)}`);
list.pop();
list.pop();
console.log('After popping elements twice from the list: ');
list.toString();
console.log(`Size: ${list.listSize()}`);
console.log(`Contains Value (2): ${list.containsValue(2)}`);
console.log(`Contains Value (12): ${list.containsValue(12)}`);
console.log(`find (1): ${list.find(1)}`);
list.toString();

list.insertAt(3, 4);
console.log(`After inserting element 3 at index 4: `);
list.toString();
console.log(`Size: ${list.listSize()}`);

list.removeAt(3);
console.log(`After removing an element from index 3: `);
list.toString();
console.log(`Size: ${list.listSize()}`);
