/**
 * Given an array nums of size n, return the majority element.

  The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/majority-element
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0;
  let target;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      target = nums[i];
      count++;
    } else {
      if (nums[i] === target) {
        count++;
      } else {
        count--;
      }
    }
  }

  return target;
};

/**
 * 题解
 * 拿到题目，符合直觉的做法，当然是直接用哈希表来对每个Key进行计数，最后再把计数最高的元素返回
 * 但是这种方式一个是有多余的空间耗费，另一方面也没有完全利用题目的条件，出现此处 > n/2
 * 
 * 所以这里引入一种新的算法思路——摩尔计数法
 * 核心原理就是对一组数据，异项相消，最后剩下的元素，一定是majority element
 */