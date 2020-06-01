import selection from './selection';

describe('Selection Sort', () => {
	const empty: number[] = [];
	const sorted: number[] = [1, 2, 3, 4, 5];
	const unsorted: number[] = [5, 4, 3, 2, 1];

	it('should return the sorted array from empty array', () => {
		expect(selection(empty)).toEqual(empty);
	});

	it('should return the sorted array from sorted array', () => {
		expect(selection(sorted)).toEqual(sorted);
	});

	it('should return the sorted array from unsorted array', () => {
		expect(selection(unsorted)).toEqual(sorted);
	});
});
