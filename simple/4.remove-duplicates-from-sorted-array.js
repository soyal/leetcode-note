/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/description/
 * Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
  Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(nums.length < 2) return nums.length;

  let p1 = 0;

  for(let p2 = 1;p2<nums.length;p2++) {
      if(nums[p2] !== nums[p1]) {
          nums[++p1] = nums[p2]
      }
  }

  return p1 + 1
};

/**
 * 题解
 * 数组相关的题目，在要求不使用额外空间的情况下，首选方案一般都是双指针
 * 此处用了双指针中快慢指针的方式
 */