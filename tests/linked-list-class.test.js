import { LinkedList, Node } from "../src/linked-list-class.js";

describe("LinkedList (class version)", () => {
  test("append() and toString()", () => {
    const list = new LinkedList();
    list.append("dog");
    list.append("cat");

    expect(list.toString()).toBe("( dog ) -> ( cat ) -> null");
  });

  test("prepend()", () => {
    const list = new LinkedList();
    list.append("cat");
    list.prepend("dog");

    expect(list.head().value).toBe("dog");
    expect(list.toString()).toBe("( dog ) -> ( cat ) -> null");
  });

  test("size()", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.size()).toBe(3);
  });

  test("head()", () => {
    const list = new LinkedList();
    list.append("alpha");
    list.append("beta");

    expect(list.head().value).toBe("alpha");
  });

  test("tail()", () => {
    const list = new LinkedList();
    list.append("alpha");
    list.append("beta");
    list.append("gamma");

    expect(list.tail().value).toBe("gamma");
  });

  test("at(index)", () => {
    const list = new LinkedList();
    list.append("a");
    list.append("b");
    list.append("c");

    expect(list.at(0).value).toBe("a");
    expect(list.at(1).value).toBe("b");
    expect(list.at(2).value).toBe("c");
    expect(list.at(99)).toBe(null);
  });

  test("pop()", () => {
    const list = new LinkedList();
    list.append("x");
    list.append("y");
    list.append("z");

    list.pop();

    expect(list.toString()).toBe("( x ) -> ( y ) -> null");
  });

  test("contains(value)", () => {
    const list = new LinkedList();
    list.append("apple");
    list.append("banana");

    expect(list.contains("banana")).toBe(true);
    expect(list.contains("pear")).toBe(false);
  });

  test("find(value)", () => {
    const list = new LinkedList();
    list.append("apple");
    list.append("banana");
    list.append("cherry");

    expect(list.find("banana")).toBe(1);
    expect(list.find("xyz")).toBe(null);
  });

  test("insertAt(value, index)", () => {
    const list = new LinkedList();
    list.append("a");
    list.append("c");

    list.insertAt("b", 1);

    expect(list.toString()).toBe("( a ) -> ( b ) -> ( c ) -> null");
  });

  test("removeAt(index)", () => {
    const list = new LinkedList();
    list.append("a");
    list.append("b");
    list.append("c");

    list.removeAt(1);

    expect(list.toString()).toBe("( a ) -> ( c ) -> null");
  });

  test("removeAt(0) removes head", () => {
    const list = new LinkedList();
    list.append("first");
    list.append("second");

    list.removeAt(0);

    expect(list.head().value).toBe("second");
  });
});
