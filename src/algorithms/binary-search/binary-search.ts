const binarySearch = (arr: number[], value: number): number => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor(0.5 * (start + end));
  while (arr[middle] !== value && start < end) {
    if (value < arr[middle]) end = middle - 1;
    else if (value > arr[middle]) start = middle + 1;
    middle = Math.floor(0.5 * (start + end));
  }
  const isFound = arr[middle] === value;
  return isFound ? middle : -1;
};

export default binarySearch;
