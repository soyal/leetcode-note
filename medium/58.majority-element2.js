/**
 * Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Follow-up: Could you solve the problem in linear time and in O(1) space?

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/majority-element-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：摩尔计数法 升级
 * 摩尔计数法的本质就是凑组进行消除，之前的majority element1里面，是一组为2进行消除(找 > 50%的数字)
 * 在这里要找>1/3的数字，就是凑3为一组进行消除。
 * 你可以想象是这样一个过程，有一个消消乐游戏，凑3个不同数字就触发消除，我们不断重复这个过程，如果一个数组中有出现次数>1/3的数字，那么它必定能留到最后
 * 需要注意的是，留到最后的不一定是出现次数>1/3的数字，比如[1,2,3,4,5]，这个数组中没有出现次数>1/3的数字，但是[4,5]却会留到最后
 * 针对这样的情况，我们需要进行一轮验算
 * 因此实际的时间复杂度为2n
 * 
 * 其实做到这里，看到类似的题目其实都应该能解决了，后面如果遇到找>1/4,>1/5这样的问题，思路也是一致的，就是凑n个数字进行消除，看最后的结果是否满足条件
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  if (nums.length < 2) return nums

  let leftA = [null, 0]
  let leftB = [null, 0]

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (leftA[0] !== null && num === leftA[0]) {
      leftA[1]++
    } else if (leftB[0] !== null && num === leftB[0]) {
      leftB[1]++
    } else if (leftA[1] === 0) {
      leftA = [num, 1]
    } else if (leftB[1] === 0) {
      leftB = [num, 1]
    } else {
      leftA[1]--
      leftB[1]--
    }
  }

  if (leftA[1] === 0 && leftB[1] === 0) return []

  // 存在[1,2,3,4,5]这种情况，返回的结果可能是错误的，所以需要验证
  let aCount = 0
  let bCount = 0
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num === leftA[0]) aCount++
    if (num === leftB[0]) bCount++
  }

  const result = []
  const baseCount = Math.floor(nums.length / 3)
  if (aCount > baseCount) {
    result.push(leftA[0])
  }

  if (bCount > baseCount) {
    result.push(leftB[0])
  }

  return result
}

// use case
majorityElement([3, 2, 3])
