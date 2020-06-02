import insertion from './insertion';

describe('Insertion Sort', () => {
	const empty: number[] = [];
	const sorted: number[] = [1, 2, 3, 4, 5];
	const unsorted: number[] = [5, 4, 3, 2, 1];
	const random: number[] = [5, 1, 3, 2, 4];

	it('should return the sorted array from empty array', () => {
		expect(insertion(empty)).toEqual(empty);
	});

	it('should return the sorted array from sorted array', () => {
		expect(insertion(sorted)).toEqual(sorted);
	});

	it('should return the sorted array from unsorted array', () => {
		expect(insertion(unsorted)).toEqual(sorted);
	});

	it('should return the sorted array from unsorted random array', () => {
		expect(insertion(random)).toEqual(sorted);
	});
});
