export const isAnagram = (str1: string, str2: string): boolean => {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
};

export const groupByAnagrams = (input: string[]): string[][] => {
  const nextRound: string[] = [];
  if (input.length === 1) return [input];
  const [first, ...rest] = input;
  const result: string[] = [first];
  rest.forEach((element) => {
    if (isAnagram(first, element)) {
      result.push(element);
    } else {
      nextRound.push(element);
    }
  });

  return nextRound.length
    ? [result].concat(groupByAnagrams(nextRound))
    : [result];
};
