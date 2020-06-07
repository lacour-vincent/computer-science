import Queue from './queue';

const createQueue = (): Queue<number> => {
	const queue = new Queue<number>();
	queue.enqueue(1);
	queue.enqueue(2);
	queue.enqueue(3);
	return queue;
};

describe('Stack', () => {
	describe('length', () => {
		it('should return the length of the empty queue', () => {
			const queue = new Queue();
			expect(queue.length).toBe(0);
		});
		it('should return the length of the queue', () => {
			const queue = createQueue();
			expect(queue.length).toBe(3);
		});
	});

	describe('isEmpty', () => {
		it('should return true with empty queue', () => {
			const queue = new Queue();
			expect(queue.isEmpty()).toBe(true);
		});
		it('should return false with queue with elements', () => {
			const queue = createQueue();
			expect(queue.isEmpty()).toBe(false);
		});
	});

	describe('enqueue', () => {
		it('should enqueue a element into the empty queue', () => {
			const queue = new Queue();
			queue.enqueue(1);
			expect([...queue]).toEqual([1]);
		});

		it('should queue a element into the queue', () => {
			const queue = createQueue();
			queue.enqueue(4);
			expect([...queue]).toEqual([1, 2, 3, 4]);
		});
	});

	describe('dequeue', () => {
		it('should dequeue nothing with an empty queue', () => {
			const queue = new Queue();
			expect(queue.dequeue()).toBe(undefined);
			expect([...queue]).toEqual([]);
		});

		it('should remove the first element enqueue into the queue', () => {
			const queue = createQueue();
			expect(queue.dequeue()).toBe(1);
			expect([...queue]).toEqual([2, 3]);
		});
	});

	describe('peek', () => {
		it('should return undefined with empty queue', () => {
			const queue = new Queue();
			expect(queue.peek()).toBe(undefined);
			expect([...queue]).toEqual([]);
		});

		it('should return the last element pushed into the stack', () => {
			const queue = createQueue();
			expect(queue.peek()).toBe(1);
			expect([...queue]).toEqual([1, 2, 3]);
		});
	});

	describe('clear', () => {
		it('should clear nothing with an empty queue', () => {
			const queue = new Queue();
			queue.clear();
			expect([...queue]).toEqual([]);
		});

		it('should clear the queue', () => {
			const queue = createQueue();
			queue.clear();
			expect([...queue]).toEqual([]);
		});
	});

	describe('values', () => {
		it('should return undefined with empty stack', () => {
			const queue = new Queue();
			const generator = queue.values();
			expect(generator.next().value).toBe(undefined);
		});

		it('should return each value of the stack', () => {
			const queue = createQueue();
			const generator = queue.values();
			expect(generator.next().value).toBe(1);
			expect(generator.next().value).toBe(2);
			expect(generator.next().value).toBe(3);
		});
	});

	describe('iterator', () => {
		it('should return the array representation of an empty stack', () => {
			const queue = new Queue();
			expect([...queue]).toEqual([]);
		});

		it('should return the array representation of a stack', () => {
			const queue = createQueue();
			expect([...queue]).toEqual([1, 2, 3]);
		});
	});
});
