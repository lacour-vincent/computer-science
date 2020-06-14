class Stack<T> {
	private data: Array<T> = [];

	get length(): number {
		return this.data.length;
	}

	public isEmpty(): boolean {
		return this.data.length === 0;
	}

	public push(element: T) {
		this.data.push(element);
	}

	public pop(): T | undefined {
		if (this.isEmpty()) return undefined;
		return this.data.pop();
	}

	public peek(): T {
		if (this.isEmpty()) return undefined;
		return this.data[this.data.length - 1];
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

export default Stack;
