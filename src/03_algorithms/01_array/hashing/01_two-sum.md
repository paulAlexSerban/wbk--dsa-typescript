# Two Sum

## Problem Statement
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. 
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

## Explanation With Code

```js
export const twoSum = (nums: number[], target: number): number[] => {
  // Create a map to store the index of the complement of the current number
  const map = new Map<number, number>();

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement of the current number
    const complement = target - nums[i];
    // If the complement is in the map, return the indices
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    // Otherwise, store the index of the current number
    map.set(nums[i], i);
  }

  return [];
};
```
Initialize a Map:
- A map is used to store each number's complement (i.e., target - current number) and its index as you iterate through the array.

Iterate Through the Array:
- For each number in the array, calculate its complement.
- Check if this complement is already in the map:
    - If it is, return the indices of the complement and the current number (since their sum equals the target).
    - If it isn't, add the current number and its index to the map.