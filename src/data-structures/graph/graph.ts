class Graph<T> {
	private nodes = new Map<T, Set<T>>();

	public addNode(node: T): boolean {
		if (this.nodes.has(node)) return false;
		this.nodes.set(node, new Set());
		return true;
	}

	public addEdge(src: T, dst: T): boolean {
		if (!this.nodes.has(src) || !this.nodes.has(dst)) return false;
		if (this.nodes.get(src).has(dst)) return false;
		this.nodes.get(src).add(dst);
		return true;
	}

	public removeNode(node: T): boolean {
		if (!this.nodes.has(node)) return false;
		this.nodes.delete(node);
		this.nodes.forEach((n) => n.delete(node));
		return true;
	}

	public removeEdge(src: T, dst: T): boolean {
		if (!this.nodes.has(src) || !this.nodes.has(dst)) return false;
		if (!this.nodes.get(src).has(dst)) return false;
		this.nodes.get(src).delete(dst);
		return true;
	}

	public depthFirstSearch(node: T, visited: Set<T> = new Set()): Array<T> {
		if (!this.nodes.has(node)) return [];
		const adjacencies = this.nodes.get(node);
		visited.add(node);
		for (const n of adjacencies) {
			if (!visited.has(n)) this.depthFirstSearch(n, visited);
		}
		return [...visited];
	}

	public breadthFirstSearch(node: T): Array<T> {
		if (!this.nodes.has(node)) return [];
		const visited = new Set<T>();
		const queue: Array<T> = [node];
		visited.add(node);
		while (queue.length > 0) {
			const current = queue.shift();
			const adjacencies = this.nodes.get(current);
			for (const n of adjacencies) {
				if (!visited.has(n)) {
					visited.add(n);
					queue.push(n);
				}
			}
		}
		return [...visited];
	}

	public *values() {
		for (let [node, adjacencies] of this.nodes) {
			yield { node, adjacencies: [...adjacencies] };
		}
	}

	public [Symbol.iterator]() {
		return this.values();
	}
}

export default Graph;
