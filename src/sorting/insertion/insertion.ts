const insertion = (src: unknown[]): unknown[] => {
	const arr = [...src];
	for (let i = 1; i < arr.length; i = i + 1) {
		const current = arr[i];
		while (i > 0 && arr[i - 1] > current) {
			arr[i] = arr[i - 1];
			i = i - 1;
		}
		arr[i] = current;
	}
	return arr;
};

export default insertion;
