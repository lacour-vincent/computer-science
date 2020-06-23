import BinarySearchTree from './binary-search-tree';

const createBST = (): BinarySearchTree => {
	const bst = new BinarySearchTree();
	bst.add(5);
	bst.add(3);
	bst.add(8);
	bst.add(2);
	bst.add(4);
	bst.add(7);
	bst.add(9);
	return bst;
};

describe('BinarySearchTree', () => {
	describe('length', () => {
		it('should return the length of an empty binary-search-tree', () => {
			const bst = new BinarySearchTree();
			expect(bst.length).toBe(0);
		});

		it('should return the length of a binary-search-tree', () => {
			const bst = createBST();
			expect(bst.length).toBe(7);
		});
	});

	describe('isEmpty', () => {
		it('should return true with empty binary-search-tree', () => {
			const bst = new BinarySearchTree();
			expect(bst.isEmpty()).toBe(true);
		});

		it('should return false with binary-search-tree with elements', () => {
			const bst = createBST();
			expect(bst.isEmpty()).toBe(false);
		});
	});

	describe('add', () => {
		it('should add an element to the empty binary-search-tree', () => {
			const bst = new BinarySearchTree();
			bst.add(0);
			expect([...bst]).toEqual([0]);
		});

		it('should add a max-element to the binary-search-tree', () => {
			const bst = createBST();
			bst.add(10);
			expect([...bst]).toEqual([2, 3, 4, 5, 7, 8, 9, 10]);
		});

		it('should add a min-element to the binary-search-tree', () => {
			const bst = createBST();
			bst.add(0);
			expect([...bst]).toEqual([0, 2, 3, 4, 5, 7, 8, 9]);
		});
	});

	describe('has', () => {
		it('should return false with empty binary search tree', () => {
			const bst = new BinarySearchTree();
			expect(bst.has(0)).toBe(false);
		});

		it('should return false when the binary-search-tree does not have the value', () => {
			const bst = createBST();
			expect(bst.has(10)).toBe(false);
		});

		it('should return true when the binary-search-tree has the value', () => {
			const bst = createBST();
			expect(bst.has(9)).toBe(true);
		});
	});

	describe('remove', () => {
		it('should not remove a value in empty binary-search-tree', () => {
			const bst = new BinarySearchTree();
			expect(bst.remove(0)).toBe(false);
			expect([...bst]).toEqual([]);
		});

		it('should not remove a value not present in the binary-search-tree', () => {
			const bst = createBST();
			expect(bst.remove(0)).toBe(false);
			expect([...bst]).toEqual([2, 3, 4, 5, 7, 8, 9]);
		});

		it('should remove a left-leaf of the binary-search-tree', () => {
			const bst = createBST();
			expect(bst.remove(2)).toBe(true);
			expect([...bst]).toEqual([3, 4, 5, 7, 8, 9]);
		});

		it('should remove a right-leaf of the binary-search-tree', () => {
			const bst = createBST();
			expect(bst.remove(9)).toBe(true);
			expect([...bst]).toEqual([2, 3, 4, 5, 7, 8]);
		});

		it('should remove a left-node with children of the binary-search-tree', () => {
			const bst = createBST();
			expect(bst.remove(3)).toBe(true);
			expect([...bst]).toEqual([2, 4, 5, 7, 8, 9]);
		});

		it('should remove a right-node with children of the binary-search-tree', () => {
			const bst = createBST();
			expect(bst.remove(8)).toBe(true);
			expect([...bst]).toEqual([2, 3, 4, 5, 7, 9]);
		});

		it('should remove the root of the binary-search-tree', () => {
			const bst = createBST();
			expect(bst.remove(5)).toBe(true);
			expect([...bst]).toEqual([2, 3, 4, 7, 8, 9]);
		});
	});

	describe('min', () => {
		it('should return undefined with an empty binary-search-tree', () => {
			const bst = new BinarySearchTree();
			expect(bst.min()).toEqual(undefined);
		});

		it('should return the minimum value of the binary-search-tree', () => {
			const bst = createBST();
			expect(bst.min()).toEqual(2);
		});
	});

	describe('max', () => {
		it('should return undefined with an empty binary-search-tree', () => {
			const bst = new BinarySearchTree();
			expect(bst.max()).toEqual(undefined);
		});

		it('should return the maximum value of the binary-search-tree', () => {
			const bst = createBST();
			expect(bst.max()).toEqual(9);
		});
	});

	describe('clear', () => {
		it('should clear the binary-search-tree', () => {
			const bst = new BinarySearchTree();
			bst.clear();
			expect([...bst]).toEqual([]);
		});

		it('should clear the binary-search-tree', () => {
			const bst = createBST();
			bst.clear();
			expect([...bst]).toEqual([]);
		});
	});

	describe('values', () => {
		it('should return undefined binary-search-tree', () => {
			const bst = new BinarySearchTree();
			const generator = bst.values();
			expect(generator.next().value).toBe(undefined);
		});

		it('should return values of the binary-search-tree', () => {
			const bst = createBST();
			const generator = bst.values();
			expect(generator.next().value).toBe(2);
			expect(generator.next().value).toBe(3);
			expect(generator.next().value).toBe(4);
			expect(generator.next().value).toBe(5);
			expect(generator.next().value).toBe(7);
			expect(generator.next().value).toBe(8);
			expect(generator.next().value).toBe(9);
		});
	});

	describe('iterator', () => {
		it('should return the array representation of an empty binary-search-tree', () => {
			const bst = new BinarySearchTree();
			expect([...bst]).toEqual([]);
		});

		it('should return the array representation of the binary-search-tree', () => {
			const bst = createBST();
			expect([...bst]).toEqual([2, 3, 4, 5, 7, 8, 9]);
		});
	});
});
