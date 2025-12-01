import { LinkedList } from "../src/linked-list-factory.js";

test("append + toString", () => {
  const list = LinkedList();
  list.append("dog");
  list.append("cat");

  expect(list.toString()).toBe("( dog ) -> ( cat ) -> null");
});

test("prepend", () => {
  const list = LinkedList();
  list.append("cat");
  list.prepend("dog");

  expect(list.head().value).toBe("dog");
});

test("size", () => {
  const list = LinkedList();
  list.append(1);
  list.append(2);

  expect(list.size()).toBe(2);
});

test("find", () => {
  const list = LinkedList();
  list.append("apple");
  list.append("banana");

  expect(list.find("banana")).toBe(1);
  expect(list.find("pear")).toBe(null);
});
