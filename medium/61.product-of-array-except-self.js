/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/product-of-array-except-self
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解: 创建两个数组，一个left，用于存储i的左侧乘积，一个right，用于存储i的右侧乘积，而answer[i]就为left[i]*right[i]
 * 
 * 注意，对应类似的题目，比如计算数组累加，累和这种，先列i的计算公式，从计算公式找突破口，进行子问题拆解
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const leftProduction = new Array(nums.length)
  const rightProduction = new Array(nums.length)
  const answers = new Array(nums.length)

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      leftProduction[i] = 1
    } else {
      leftProduction[i] = leftProduction[i - 1] * nums[i - 1]
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      rightProduction[i] = 1
    } else {
      rightProduction[i] = rightProduction[i + 1] * nums[i + 1]
    }

    answers[i] = leftProduction[i] * rightProduction[i]
  }

  return answers
}
