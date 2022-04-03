import binarySearch from "./binary-search";

describe("Binary Search", () => {
  const arr: number[] = [1, 2, 3, 4, 5];
  const empty: number[] = [];

  it("should return the index of the found value", () => {
    expect(binarySearch(arr, 3)).toBe(2);
  });

  it("should return the index when the found value is the first element", () => {
    expect(binarySearch(arr, 1)).toBe(0);
  });

  it("should return the index when the found value is the last element", () => {
    expect(binarySearch(arr, 5)).toBe(4);
  });

  it("should return -1 when the value is not found", () => {
    expect(binarySearch(arr, 6)).toBe(-1);
  });

  it("should return -1 with empty arr", () => {
    expect(binarySearch(empty, 1)).toBe(-1);
  });
});
