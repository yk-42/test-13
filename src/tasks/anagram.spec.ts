import { groupByAnagrams, isAnagram } from "./anagram";
import data from "../py/test_data.json";
describe("isAnagram", () => {
  it('should show true for "abc" and "cba"', () => {
    expect(isAnagram("abc", "cba")).toBe(true);
  });
});

describe("groupByAnagrams", () => {
  it("should group By Anagrams", () => {
    const input = ["listen", "silent", "enlist", "hello", "ohlle", "world"];
    const output = [
      ["listen", "silent", "enlist"],
      ["hello", "ohlle"],
      ["world"],
    ];

    expect(groupByAnagrams(input)).toEqual(expect.arrayContaining(output));
  });

  test("generated anagrams from Python", () => {
    const result = groupByAnagrams(data);
    // assertions
    expect(result).toBe(1);
  });
});
