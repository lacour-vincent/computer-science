import bubble from "./bubble/bubble";
import selection from "./selection/selection";
import insertion from "./insertion/insertion";
import merge from "./merge/merge";
import quick from "./quick/quick";
import heap from "./heap/heap";

export const swap = (arr: unknown[], i: number, j: number) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

export { bubble, selection, insertion, merge, quick, heap };
