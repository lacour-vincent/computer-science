import Heap from "./heap";

const createHeap = (): Heap => {
  const heap = new Heap();
  heap.add(2);
  heap.add(4);
  heap.add(1);
  heap.add(3);
  return heap;
};

describe("Heap", () => {
  describe("length", () => {
    it("should return the length of an empty heap", () => {
      const heap = new Heap();
      expect(heap.length).toBe(0);
    });

    it("should return the length of a heap", () => {
      const heap = createHeap();
      expect(heap.length).toBe(4);
    });
  });

  describe("isEmpty", () => {
    it("should return true with empty heap", () => {
      const heap = new Heap();
      expect(heap.isEmpty()).toBe(true);
    });

    it("should return false with heap with elements", () => {
      const heap = createHeap();
      expect(heap.isEmpty()).toBe(false);
    });
  });

  describe("peek", () => {
    it("should return undefined with empty heap", () => {
      const heap = new Heap();
      expect(heap.peek()).toBe(undefined);
      expect([...heap]).toEqual([]);
    });

    it("should return the peek of the heap", () => {
      const heap = createHeap();
      expect(heap.peek()).toBe(1);
      expect([...heap]).toEqual([1, 3, 2, 4]);
    });
  });

  describe("add", () => {
    it("should add an element to an empty heap", () => {
      const heap = new Heap();
      heap.add(0);
      expect([...heap]).toEqual([0]);
    });

    it("should add a max-element to the heap", () => {
      const heap = createHeap();
      heap.add(5);
      expect([...heap]).toEqual([1, 3, 2, 4, 5]);
    });

    it("should add a min-element to the heap", () => {
      const heap = createHeap();
      heap.add(0);
      expect([...heap]).toEqual([0, 1, 2, 4, 3]);
    });
  });

  describe("poll", () => {
    it("should return undefined with an empty heap", () => {
      const heap = new Heap();
      expect(heap.poll()).toBe(undefined);
      expect([...heap]).toEqual([]);
    });

    it("should remove and return the root element of the heap without heapify down", () => {
      const heap = new Heap();
      heap.add(0);
      expect(heap.poll()).toBe(0);
      expect([...heap]).toEqual([]);
    });

    it("should remove and return the root element of the heap with heapify down", () => {
      const heap = createHeap();
      expect(heap.poll()).toBe(1);
      expect([...heap]).toEqual([2, 3, 4]);
    });
  });

  describe("clear", () => {
    it("should clear an empty heap", () => {
      const heap = new Heap();
      heap.clear();
      expect([...heap]).toEqual([]);
    });

    it("should clear the heap", () => {
      const heap = createHeap();
      heap.clear();
      expect([...heap]).toEqual([]);
    });
  });

  describe("values", () => {
    it("should return undefined with empty heap", () => {
      const heap = new Heap();
      const generator = heap.values();
      expect(generator.next().value).toBe(undefined);
    });

    it("should return values of the heap", () => {
      const heap = createHeap();
      const generator = heap.values();
      expect(generator.next().value).toBe(1);
      expect(generator.next().value).toBe(3);
      expect(generator.next().value).toBe(2);
      expect(generator.next().value).toBe(4);
    });
  });

  describe("iterator", () => {
    it("should return the array representation of an empty heap", () => {
      const heap = new Heap();
      expect([...heap]).toEqual([]);
    });

    it("should return the array representation of a heap", () => {
      const heap = createHeap();
      expect([...heap]).toEqual([1, 3, 2, 4]);
    });
  });
});
