import DoublyLinkedList from "./doubly-linked-list";

const createDoublyLinkedList = (): DoublyLinkedList<number> => {
  const list = new DoublyLinkedList<number>();
  list.add(1);
  list.add(2);
  list.add(3);
  return list;
};

describe("DoublyLinkedList", () => {
  describe("length", () => {
    it("should return the length of an empty doubly-linked-list", () => {
      const list = new DoublyLinkedList();
      expect(list.length).toBe(0);
    });

    it("should return the length of a doubly-linked-list", () => {
      const list = createDoublyLinkedList();
      expect(list.length).toBe(3);
    });
  });

  describe("add", () => {
    it("should add an element in an empty doubly-linked-list", () => {
      const list = new DoublyLinkedList<number>();
      list.add(1);
      expect([...list]).toEqual([1]);
    });

    it("should add an element in a doubly-linked-list", () => {
      const list = createDoublyLinkedList();
      list.add(4);
      expect([...list]).toEqual([1, 2, 3, 4]);
    });
  });

  describe("get", () => {
    it("should return the value associated to the index", () => {
      const list = createDoublyLinkedList();
      expect(list.get(0)).toBe(1);
      expect(list.get(1)).toBe(2);
      expect(list.get(2)).toBe(3);
    });

    it("should return undefined with empty list", () => {
      const list = new DoublyLinkedList<number>();
      expect(list.get(0)).toBe(undefined);
    });

    it("should return undefined with wrong index", () => {
      const list = createDoublyLinkedList();
      expect(list.get(-1)).toBe(undefined);
      expect(list.get(3)).toBe(undefined);
    });
  });

  describe("indexOf", () => {
    it("should return the index associated to the value", () => {
      const list = createDoublyLinkedList();
      expect(list.indexOf(1)).toBe(0);
      expect(list.indexOf(2)).toBe(1);
      expect(list.indexOf(3)).toBe(2);
    });

    it("should return the index of the first value found", () => {
      const list = createDoublyLinkedList();
      list.add(1);
      expect(list.indexOf(1)).toBe(0);
    });

    it("should return -1 with empty doubly-linked-list", () => {
      const list = new DoublyLinkedList<number>();
      expect(list.indexOf(0)).toBe(-1);
    });

    it("should return -1 when the value is not found", () => {
      const list = createDoublyLinkedList();
      expect(list.indexOf(4)).toBe(-1);
    });
  });

  describe("remove", () => {
    it("should remove the head of the doubly-linked-list", () => {
      const list = createDoublyLinkedList();
      list.remove(0);
      expect([...list]).toEqual([2, 3]);
    });

    it("should remove the tail of the doubly-linked-list", () => {
      const list = createDoublyLinkedList();
      list.remove(2);
      expect([...list]).toEqual([1, 2]);
    });

    it("should remove an element in the doubly-linked-list", () => {
      const list = createDoublyLinkedList();
      list.remove(1);
      expect([...list]).toEqual([1, 3]);
    });

    it("should throw RangeError with an empty doubly-linked-list", () => {
      const list = new DoublyLinkedList<number>();
      expect(() => list.remove(0)).toThrow(RangeError);
    });

    it("should throw RangeError with wrong index", () => {
      const list = createDoublyLinkedList();
      expect(() => list.remove(-1)).toThrow(RangeError);
      expect(() => list.remove(3)).toThrow(RangeError);
    });
  });

  describe("clear", () => {
    it("should clear an empty doubly-linked-list", () => {
      const list = new DoublyLinkedList<number>();
      list.clear();
      expect([...list]).toEqual([]);
    });

    it("should clear the doubly-linked-list", () => {
      const list = createDoublyLinkedList();
      list.clear();
      expect([...list]).toEqual([]);
    });
  });

  describe("values", () => {
    it("should return undefined with empty doubly-linked-list", () => {
      const list = new DoublyLinkedList<number>();
      const generator = list.values();
      expect(generator.next().value).toBe(undefined);
    });

    it("should return each value of the doubly-linked-list in asc order", () => {
      const list = createDoublyLinkedList();
      const generator = list.values();
      expect(generator.next().value).toBe(1);
      expect(generator.next().value).toBe(2);
      expect(generator.next().value).toBe(3);
    });
  });

  describe("reverse", () => {
    it("should return undefined with empty doubly-linked-list", () => {
      const list = new DoublyLinkedList<number>();
      const generator = list.reverse();
      expect(generator.next().value).toBe(undefined);
    });

    it("should return each value of the doubly-linked-list in desc order", () => {
      const list = createDoublyLinkedList();
      const generator = list.reverse();
      expect(generator.next().value).toBe(3);
      expect(generator.next().value).toBe(2);
      expect(generator.next().value).toBe(1);
    });
  });

  describe("iterator", () => {
    it("should return the array representation of an empty doubly-linked-list", () => {
      const list = new DoublyLinkedList<number>();
      expect([...list]).toEqual([]);
    });

    it("should return the array representation of a doubly-linked-list", () => {
      const list = createDoublyLinkedList();
      expect([...list]).toEqual([1, 2, 3]);
    });
  });
});
