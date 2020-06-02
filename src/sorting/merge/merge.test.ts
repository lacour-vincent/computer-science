import merge from './merge';

describe('Merge Sort', () => {
	const empty: number[] = [];
	const sorted: number[] = [1, 2, 3, 4, 5];
	const unsorted: number[] = [5, 4, 3, 2, 1];
	const random: number[] = [5, 1, 3, 2, 4];

	it('should return the sorted array from empty array', () => {
		expect(merge(empty)).toEqual(empty);
	});

	it('should return the sorted array from sorted array', () => {
		expect(merge(sorted)).toEqual(sorted);
	});

	it('should return the sorted array from unsorted array', () => {
		expect(merge(unsorted)).toEqual(sorted);
	});

	it('should return the sorted array from unsorted random array', () => {
		expect(merge(random)).toEqual(sorted);
	});
});
