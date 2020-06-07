import Stack from './stack';

const createStack = (): Stack<number> => {
	const stack = new Stack<number>();
	stack.push(1);
	stack.push(2);
	stack.push(3);
	return stack;
};

describe('Stack', () => {
	describe('length', () => {
		it('should return the length of the empty stack', () => {
			const stack = new Stack();
			expect(stack.length).toBe(0);
		});
		it('should return the length of the stack', () => {
			const stack = createStack();
			expect(stack.length).toBe(3);
		});
	});

	describe('isEmpty', () => {
		it('should return true with empty stack', () => {
			const stack = new Stack();
			expect(stack.isEmpty()).toBe(true);
		});
		it('should return false with stack with elements', () => {
			const stack = createStack();
			expect(stack.isEmpty()).toBe(false);
		});
	});

	describe('push', () => {
		it('should push a element into the empty stack', () => {
			const stack = new Stack();
			stack.push(1);
			expect([...stack]).toEqual([1]);
		});

		it('should push a element into the stack', () => {
			const stack = createStack();
			stack.push(4);
			expect([...stack]).toEqual([1, 2, 3, 4]);
		});
	});

	describe('pop', () => {
		it('should remove nothing with an empty stack', () => {
			const stack = new Stack();
			expect(stack.pop()).toBe(undefined);
			expect([...stack]).toEqual([]);
		});

		it('should remove the last element pushed into the stack', () => {
			const stack = createStack();
			expect(stack.pop()).toBe(3);
			expect([...stack]).toEqual([1, 2]);
		});
	});

	describe('peek', () => {
		it('should return undefined with empty stack', () => {
			const stack = new Stack();
			expect(stack.peek()).toBe(undefined);
			expect([...stack]).toEqual([]);
		});

		it('should return the last element pushed into the stack', () => {
			const stack = createStack();
			expect(stack.peek()).toBe(3);
			expect([...stack]).toEqual([1, 2, 3]);
		});
	});

	describe('clear', () => {
		it('should clear nothing with an empty stack', () => {
			const stack = new Stack();
			stack.clear();
			expect([...stack]).toEqual([]);
		});

		it('should clear the stack', () => {
			const stack = createStack();
			stack.clear();
			expect([...stack]).toEqual([]);
		});
	});

	describe('values', () => {
		it('should return undefined with empty stack', () => {
			const stack = new Stack();
			const generator = stack.values();
			expect(generator.next().value).toBe(undefined);
		});

		it('should return each value of the stack', () => {
			const stack = createStack();
			const generator = stack.values();
			expect(generator.next().value).toBe(1);
			expect(generator.next().value).toBe(2);
			expect(generator.next().value).toBe(3);
		});
	});

	describe('iterator', () => {
		it('should return the array representation of an empty stack', () => {
			const stack = new Stack();
			expect([...stack]).toEqual([]);
		});

		it('should return the array representation of a stack', () => {
			const stack = createStack();
			expect([...stack]).toEqual([1, 2, 3]);
		});
	});
});
