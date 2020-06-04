const _merge = (left: number[], right: number[]): number[] => {
	const arr: number[] = [];
	let il = 0;
	let ir = 0;
	while (il < left.length && ir < right.length) {
		const value = left[il] < right[ir] ? left[il++] : right[ir++];
		arr.push(value);
	}
	return [...arr, ...left.slice(il), ...right.slice(ir)];
};

const merge = (arr: number[]): number[] => {
	if (arr.length < 2) return arr;
	const middle = Math.floor(0.5 * arr.length);
	const left = merge(arr.slice(0, middle));
	const right = merge(arr.slice(middle));
	return _merge(left, right);
};

export default merge;
