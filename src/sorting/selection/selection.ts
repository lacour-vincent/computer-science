import { swap } from "../index";

const selection = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (min !== i) swap(arr, i, min);
  }
  return arr;
};

export default selection;
