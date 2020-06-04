import { swap } from '../index';

const heapify = (arr: number[], node: number, size: number) => {
	let largest = node;
	const left = 2 * node + 1;
	const right = 2 * node + 2;
	if (left < size && arr[left] > arr[largest]) largest = left;
	if (right < size && arr[right] > arr[largest]) largest = right;
	if (largest !== node) {
		swap(arr, largest, node);
		heapify(arr, largest, size);
	}
};

const heap = (arr: number[]): number[] => {
	const N = arr.length;
	for (let i = Math.floor(N / 2) - 1; i >= 0; i--) heapify(arr, i, N);
	for (let j = N - 1; j > 0; j--) {
		swap(arr, 0, j);
		heapify(arr, 0, j);
	}
	return arr;
};

export default heap;
