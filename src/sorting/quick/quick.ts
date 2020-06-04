import { swap } from '../index';

const partition = (arr: number[], left: number, right: number): number => {
	const pivot = arr[Math.floor(0.5 * (right + left))];
	let i = left;
	let j = right;
	while (i <= j) {
		while (arr[i] < pivot) i++;
		while (arr[j] > pivot) j--;
		if (i <= j) swap(arr, i++, j--);
	}
	return i;
};

const quick = (arr: number[]): number[] => {
	const _quick = (arr: number[], left: number, right: number): number[] => {
		if (arr.length <= 1) return arr;
		const pivot = partition(arr, left, right);
		if (left < pivot - 1) _quick(arr, left, pivot - 1);
		if (pivot < right) _quick(arr, pivot, right);
		return arr;
	};
	return _quick(arr, 0, arr.length - 1);
};

export default quick;
