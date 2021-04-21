/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

  Note that you must do this in-place without making a copy of the array.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/move-zeroes
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解1：填坑法
 * 从前往后，找值为0的坑位，然后再在其之后找到一个不为0的值，双方进行交换
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length < 2) return nums

  for (let i = 0; i < nums.length - 1; i++) {
    const currNum = nums[i]

    if (currNum === 0) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] !== 0) {
          const temp = nums[j]
          nums[j] = nums[i]
          nums[i] = temp
          break
        }
      }
    }
  }
}

/**
 * 题解2：双指针
 * 一个慢指针在后，总是指向0，一个快指针在前，遇到非0的值，就和慢指针交换，然后慢指针往前走一步
 * 当然，在最后快指针走完的时候，慢指针所指的位置到数组最末尾需要填充0
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0,
    j = 0

  for (; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j++] = nums[i]
    }
  }

  for (; j < nums.length; j++) {
    nums[j] = 0
  }
}
