export function Node(value = null, nextNode = null) {
  return { value, nextNode };
}

export function LinkedList() {
  let headNode = null;

  const append = (value) => {
    const newNode = Node(value);

    if (!headNode) {
      headNode = newNode;
      return;
    }

    let current = headNode;
    while (current.nextNode) current = current.nextNode;
    current.nextNode = newNode;
  };

  const prepend = (value) => {
    headNode = Node(value, headNode);
  };

  const size = () => {
    let count = 0;
    let current = headNode;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  };

  const head = () => headNode;

  const tail = () => {
    if (!headNode) return null;
    let current = headNode;
    while (current.nextNode) current = current.nextNode;
    return current;
  };

  const at = (index) => {
    let current = headNode;
    let count = 0;
    while (current) {
      if (count === index) return current;
      count++;
      current = current.nextNode;
    }
    return null;
  };

  const pop = () => {
    if (!headNode) return;
    if (!headNode.nextNode) {
      headNode = null;
      return;
    }

    let current = headNode;
    let previous = null;

    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }

    previous.nextNode = null;
  };

  const contains = (value) => {
    let current = headNode;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  };

  const find = (value) => {
    let index = 0;
    let current = headNode;
    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    return null;
  };

  const toString = () => {
    let result = "";
    let current = headNode;
    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return result + "null";
  };

  const insertAt = (value, index) => {
    if (index === 0) return prepend(value);
    const prev = at(index - 1);
    if (!prev) return;
    prev.nextNode = Node(value, prev.nextNode);
  };

  const removeAt = (index) => {
    if (index === 0) {
      headNode = headNode.nextNode;
      return;
    }
    const prev = at(index - 1);
    if (!prev || !prev.nextNode) return;
    prev.nextNode = prev.nextNode.nextNode;
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}
