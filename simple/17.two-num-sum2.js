/**
 * Given an array of integers numbers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

  Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.

  You may assume that each input would have exactly one solution and you may not use the same element twice.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
  */

/**
 * 方法1：哈希表
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const dict = {};

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];

    if (dict[num] !== undefined) {
      return [dict[num] + 1, i + 1];
    } else {
      dict[target - num] = i;
    }
  }

  return [];
};

/**
 * 方法2：双指针
 * @param {*} numbers
 * @param {*} target
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const leftValue = numbers[left];
    const rightValue = numbers[right];

    const sum = leftValue + rightValue;
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }

  return [];
};

/**
 * 题解
 * 本题是在1.two-num-sum的基础上做的变种，增加了数组为升序排序的条件
 * 跟1一样，也可以采用hash表的办法，但是既然增加了新的条件，还是用老方法肯定不符合出题者的意思
 * 所以为了节省空间复杂度，可以采用第二种办法，双指针法
 */
