class Queue<T> {
	public data: Array<T> = [];

	get length(): number {
		return this.data.length;
	}

	public isEmpty(): boolean {
		return this.data.length === 0;
	}

	public enqueue(element: T) {
		this.data.push(element);
	}

	public dequeue(): T | undefined {
		if (this.isEmpty()) return undefined;
		return this.data.shift();
	}

	public peek(): T {
		if (this.isEmpty()) return undefined;
		return this.data[0];
	}

	public clear() {
		this.data = [];
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

export default Queue;
