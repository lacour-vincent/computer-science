import { swap } from '../index';

class Heap {
	private data: number[] = [];

	get length(): number {
		return this.data.length;
	}

	public isEmpty(): boolean {
		return this.data.length === 0;
	}

	private hasLeftChild(index: number): boolean {
		return this.getLeftChildIndex(index) < this.data.length;
	}

	private hasRightChild(index: number): boolean {
		return this.getRightChildIndex(index) < this.data.length;
	}

	private getParentIndex(index: number): number {
		return Math.floor((index - 1) / 2);
	}

	private getLeftChildIndex(index: number): number {
		return 2 * index + 1;
	}

	private getRightChildIndex(index: number): number {
		return 2 * index + 2;
	}

	private getSmallerChildIndex(index: number): number {
		const il = this.getLeftChildIndex(index);
		if (!this.hasRightChild(index)) return il;
		const ir = this.getRightChildIndex(index);
		return this.data[il] < this.data[ir] ? il : ir;
	}

	private heapifyUp() {
		let current = this.data.length - 1;
		while (current > 0) {
			const parent = this.getParentIndex(current);
			if (this.data[current] >= this.data[parent]) break;
			swap(this.data, current, parent);
			current = parent;
		}
	}

	private heapifyDown() {
		let current = 0;
		while (this.hasLeftChild(current)) {
			const smallerChildIndex = this.getSmallerChildIndex(current);
			if (this.data[current] <= this.data[smallerChildIndex]) break;
			swap(this.data, current, smallerChildIndex);
			current = smallerChildIndex;
		}
	}

	public peek(): number | undefined {
		if (this.isEmpty()) return undefined;
		return this.data[0];
	}

	public add(element: number) {
		this.data.push(element);
		this.heapifyUp();
	}

	public poll(): number | undefined {
		if (this.isEmpty()) return undefined;
		if (this.data.length === 1) return this.data.pop();
		const root = this.data[0];
		const tail = this.data.pop();
		this.data[0] = tail;
		this.heapifyDown();
		return root;
	}

	public clear() {
		this.data.length = 0;
	}

	public *values() {
		let index = 0;
		while (this.data[index] !== undefined) {
			yield this.data[index];
			index++;
		}
	}

	public [Symbol.iterator]() {
		return this.values();
	}
}

export default Heap;
