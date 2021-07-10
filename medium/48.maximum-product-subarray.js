/**
 * Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

  It is guaranteed that the answer will fit in a 32-bit integer.

  A subarray is a contiguous subsequence of the array.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/maximum-product-subarray
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：递推
 * 不考虑负数的情况，乘积最大值 = Math.max(之前连续最大乘积 * 当前值， 当前值)
 * 而当有负数的时候，当前值的正负情况会直接让最大最小值易位，所以在记录连续乘积最大值的情况下也要同时记录连续乘积最小值
 * 在当前值为负数的时候，将两者进行交换
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let result = -Infinity

  let continuousMax = -Infinity
  let continuousMin = Infinity
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]

    if (num > 0) {
      continuousMax = Math.max(continuousMax * num, num)
      continuousMin = Math.min(continuousMin * num, num)
    } else if (num === 0) {
      continuousMax = 0
      continuousMin = 0
    } else {
      const temp = Math.max(continuousMin * num, num)
      continuousMin = Math.min(continuousMax * num, num)
      continuousMax = temp
    }

    result = Math.max(result, continuousMax)
  }

  return result
}

// use case
maxProduct([-4, -3, -2])
