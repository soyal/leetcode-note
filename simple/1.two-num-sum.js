/**
 * 两数之和
 * https://leetcode-cn.com/problems/two-sum/
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

    你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

    示例:

    给定 nums = [2, 7, 11, 15], target = 9

    因为 nums[0] + nums[1] = 2 + 7 = 9
    所以返回 [0, 1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {

  const dict = {}
  for(let i=0;i<nums.length;i++) {
      const num = nums[i]
      if(dict[target - num] !== undefined) {
          return [dict[target - num], i]
      }
      dict[num] = i
  }

  return []
};

/**
 * 题解：
 * 第一反应肯定是暴力求解，两次循环求和找答案，时间复杂度N2
 * 然后想对应的优化思路
 * 一次遍历的过程中，完全可以将每个元素的值记录下来，因为题目要求返回索引值，所以用字典，记录值和索引
 * 然后将遍历的当前元素和字典中记录的元素值比对，看两者的和是否满足条件，满足则返回，不满足继续
 */