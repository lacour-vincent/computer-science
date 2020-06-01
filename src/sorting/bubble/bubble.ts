import { swap } from '../index';

const bubble = (src: unknown[]): unknown[] => {
	const arr = [...src];
	let isSorted: boolean;
	do {
		isSorted = true;
		for (let i = 0; i < arr.length; i = i + 1) {
			if (arr[i] > arr[i + 1]) {
				swap(arr, i, i + 1);
				isSorted = false;
			}
		}
	} while (!isSorted);
	return arr;
};

export default bubble;
