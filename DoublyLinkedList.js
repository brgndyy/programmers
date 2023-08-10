class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    // 만약 현재 노드의 길이가 0이었다면
    if (this.length === 0) {
      this.head = new Node(val);
      this.tail = new Node(val);
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }
}

const list = new DoublyLinkedList();

list.push(1);
list.push(2);

console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
