interface BinarySearchTreeNode {
  value: number;
  parent: BinarySearchTreeNode | null;
  right: BinarySearchTreeNode | null;
  left: BinarySearchTreeNode | null;
}

class BinarySearchTree {
  private root: BinarySearchTreeNode | null = null;

  get length(): number {
    const traverse = (node: BinarySearchTreeNode | null): number => {
      if (node === null) return 0;
      const { left, right } = node;
      return 1 + traverse(left) + traverse(right);
    };
    return traverse(this.root);
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

  public add(value: number) {
    const node: BinarySearchTreeNode = { value, parent: null, right: null, left: null };
    let current = this.root;
    if (current === null) this.root = node;
    else {
      while (current !== null) {
        if (value === current.value) break;
        if (value < current.value) {
          if (current.left === null) {
            node.parent = current;
            current.left = node;
            break;
          } else current = current.left;
        }
        if (value > current.value) {
          if (current.right === null) {
            node.parent = current;
            current.right = node;
            break;
          } else current = current.right;
        }
      }
    }
  }

  public has(value: number): boolean {
    const node = this.search(value);
    return node !== null;
  }

  public remove(value: number): boolean {
    const node = this.search(value);
    if (node === null) return false;
    const { parent, left, right } = node;
    let replacement = null;
    if (left !== null && right !== null) {
      let replacementParent = node;
      replacement = left;
      while (replacement.right !== null) {
        replacementParent = replacement;
        replacement = replacement.right;
      }
      replacement.right = right;
      if (replacementParent !== node) {
        replacementParent.right = replacement.left;
        replacement.left = left;
      }
    } else if (left !== null) {
      replacement = left;
    } else if (right !== null) {
      replacement = right;
    }
    if (node === this.root) {
      this.root = replacement;
    } else {
      if (node.value < parent!.value) {
        parent!.left = replacement;
      } else {
        parent!.right = replacement;
      }
    }
    return true;
  }

  private search(value: number): BinarySearchTreeNode | null {
    let current = this.root;
    let found = false;
    while (current !== null && !found) {
      if (value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
      else found = true;
    }
    return found ? current : null;
  }

  public min(): number | undefined {
    let current = this.root;
    if (current === null) return undefined;
    while (current.left !== null) {
      current = current.left;
    }
    return current.value;
  }

  public max(): number | undefined {
    let current = this.root;
    if (current === null) return undefined;
    while (current.right !== null) {
      current = current.right;
    }
    return current.value;
  }

  public clear() {
    this.root = null;
  }

  public *values() {
    if (this.root === null) return undefined;
    function* traverse(node: BinarySearchTreeNode): Generator {
      if (node === null) return;
      const { left, right, value } = node;
      if (left !== null) yield* traverse(left);
      yield value;
      if (right !== null) yield* traverse(right);
    }
    yield* traverse(this.root);
  }

  public [Symbol.iterator]() {
    return this.values();
  }
}

export default BinarySearchTree;
