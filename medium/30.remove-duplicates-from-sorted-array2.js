/**
 * 
  Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.

  Do not allocate extra space for another array; you must do this by modifying the input array in-place with O(1) extra memory.

  Clarification:

  Confused why the returned value is an integer, but your answer is an array?

  Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller.

  Internally you can think of this:

  // nums is passed in by reference. (i.e., without making a copy)
  int len = removeDuplicates(nums);

  // any modification to nums in your function would be known by the caller.
  // using the length returned by your function, it prints the first len elements.
  for (int i = 0; i < len; i++) {
      print(nums[i]);
  }
 */

/**
 * 题解：遍历+慢指针
 * 有点类似快慢指针
 * 就是拿一个指针指向要设置的index，称为slowPoint，然后判定nums[i]与nums[slowPoint-2]相不相等，不相等即是要设置的值
 * 
 * 想要快速理解这个思路，可以想象下经过处理后的数组的形态，必定是nums[i]与nums[i-2]不相等的
 * 
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let slowPoint = 0
  for (let i = 0; i < nums.length; i++) {
    if (slowPoint < 2 || nums[i] !== nums[slowPoint - 2]) {
      nums[slowPoint++] = nums[i]
    }
  }

  return slowPoint
}

// use case
removeDuplicates([1, 1, 1, 2, 2, 3])
