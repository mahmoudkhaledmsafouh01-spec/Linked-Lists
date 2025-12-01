// Node Class
export class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

// LinkedList Class
export class LinkedList {
  constructor() {
    this.headNode = null;
  }

  // Append a new value at the end
  append(value) {
    const newNode = new Node(value);

    if (this.headNode === null) {
      this.headNode = newNode;
      return;
    }

    let current = this.headNode;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  // Prepend a new value at the start
  prepend(value) {
    const newNode = new Node(value, this.headNode);
    this.headNode = newNode;
  }

  // Return number of nodes
  size() {
    let count = 0;
    let current = this.headNode;

    while (current !== null) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  // Return head node
  head() {
    return this.headNode;
  }

  // Return tail node
  tail() {
    if (this.headNode === null) return null;

    let current = this.headNode;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }

  // Return node at index
  at(index) {
    let current = this.headNode;
    let count = 0;

    while (current !== null) {
      if (count === index) return current;
      count++;
      current = current.nextNode;
    }
    return null;
  }

  // Remove last element
  pop() {
    if (this.headNode === null) return null;

    // Only one node
    if (this.headNode.nextNode === null) {
      this.headNode = null;
      return;
    }

    let current = this.headNode;
    let previous = null;

    while (current.nextNode !== null) {
      previous = current;
      current = current.nextNode;
    }

    previous.nextNode = null; // Remove tail
  }

  // Check if value exists
  contains(value) {
    let current = this.headNode;

    while (current !== null) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  // Return index of value, or null if not found
  find(value) {
    let current = this.headNode;
    let index = 0;

    while (current !== null) {
      if (current.value === value) return index;
      index++;
      current = current.nextNode;
    }
    return null;
  }

  // Convert list to printable string
  toString() {
    let result = "";
    let current = this.headNode;

    while (current !== null) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return result + "null";
  }

  // EXTRA CREDIT — insert at index
  insertAt(value, index) {
    if (index === 0) return this.prepend(value);

    const prev = this.at(index - 1);
    if (prev === null) return; // index out of bounds

    const newNode = new Node(value, prev.nextNode);
    prev.nextNode = newNode;
  }

  // EXTRA CREDIT — remove at index
  removeAt(index) {
    if (index === 0 && this.headNode !== null) {
      this.headNode = this.headNode.nextNode;
      return;
    }

    const prev = this.at(index - 1);
    if (prev === null || prev.nextNode === null) return; // out of bounds

    prev.nextNode = prev.nextNode.nextNode;
  }
}
