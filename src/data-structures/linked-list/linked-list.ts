interface LinkedListNode<T> {
  data: T;
  next: LinkedListNode<T> | null;
}

class LinkedList<T> {
  private head: LinkedListNode<T> = null;

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
    const node: LinkedListNode<T> = { data: value, next: null };
    let current = this.head;
    if (current === null) this.head = node;
    else {
      while (current.next !== null) current = current.next;
      current.next = node;
    }
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
      return data;
    }

    let previous: LinkedListNode<T> = null;
    let i = 0;
    while (current !== null && i < index) {
      i++;
      previous = current;
      current = current.next;
    }
    if (current === null) throw new RangeError();
    previous.next = current.next;
    return current.data;
  }

  public clear() {
    this.head = null;
  }

  public *values() {
    let current = this.head;
    while (current !== null) {
      yield current.data;
      current = current.next;
    }
  }

  public [Symbol.iterator]() {
    return this.values();
  }
}

export default LinkedList;
