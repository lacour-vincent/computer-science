interface DoublyLinkedListNode<T> {
  previous: DoublyLinkedListNode<T> | null;
  data: T;
  next: DoublyLinkedListNode<T> | null;
}

class DoublyLinkedList<T> {
  private head: DoublyLinkedListNode<T> | null = null;
  private tail: DoublyLinkedListNode<T> | null = null;

  get length(): number {
    let current = this.head;
    let i = 0;
    while (current !== null) {
      i++;
      current = current.next;
    }
    return i;
  }

  public add(value: T) {
    const node: DoublyLinkedListNode<T> = { previous: null, data: value, next: null };
    if (this.head === null) this.head = node;
    else {
      this.tail!.next = node;
      node.previous = this.tail;
    }
    this.tail = node;
  }

  public get(index: number): T | undefined {
    if (index < 0) return undefined;
    let current = this.head;
    let i = 0;
    while (current !== null && i < index) {
      i++;
      current = current.next;
    }
    return current?.data;
  }

  public indexOf(value: T): number {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (current.data === value) return index;
      index++;
      current = current.next;
    }
    return -1;
  }

  public remove(index: number): T {
    let current = this.head;
    if (current === null || index < 0) throw new RangeError();

    if (index === 0) {
      const { data } = current;
      this.head = current.next;
      if (this.head === null) this.tail = null;
      else this.head.previous = null;
      return data;
    }

    let i = 0;
    while (current !== null && i < index) {
      i++;
      current = current.next;
    }
    if (current === null) throw new RangeError();
    current.previous!.next = current.next;
    if (this.tail === current) this.tail = current.previous;
    else current.next!.previous = current.previous;
    return current.data;
  }

  public clear() {
    this.head = null;
    this.tail = null;
  }

  public *values() {
    let current = this.head;
    while (current !== null) {
      yield current.data;
      current = current.next;
    }
  }

  public *reverse() {
    let current = this.tail;
    while (current !== null) {
      yield current.data;
      current = current.previous;
    }
  }

  public [Symbol.iterator]() {
    return this.values();
  }
}

export default DoublyLinkedList;
