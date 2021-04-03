/**
 * 最大子序和
 * https://leetcode-cn.com/problems/maximum-subarray/
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const sumResults = Array(nums.length);

  let maxResult = -Infinity;
  let sum = 0;
  nums.forEach((num, index) => {
    if (sum < 0) {
      sum = 0;
    }

    sum += num;

    maxResult = Math.max(sum, maxResult);
  });

  return maxResult;
};

/**
 * 题解
 * 核心就是思考出状态转移方程 fsum(x) = fsum(x - 1) + currNum
 * 然后将fsum的值和result对比，取最大值即可
 *
 */
