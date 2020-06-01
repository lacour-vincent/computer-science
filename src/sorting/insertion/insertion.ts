const insertion = (src: unknown[]): unknown[] => {
	const arr = [...src];
	for (let i = 1; i < arr.length; i++) {
		const value = arr[i];
		while (i > 0 && arr[i - 1] > value) {
			arr[i] = arr[i - 1];
			i--;
		}
		arr[i] = value;
	}
	return arr;
};

export default insertion;
