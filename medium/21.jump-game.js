/**
 * Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

  Each element in the array represents your maximum jump length at that position.

  Determine if you are able to reach the last index.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/jump-game
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解1：贪心算法
 * 从前往后遍历数组，不断更新能到达的最远距离，如果能到达的最远距离比当前索引小，直接返回false
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxTarget = 0

  for (let i = 0; i < nums.length; i++) {
    if (maxTarget < i) return false

    const currLength = nums[i]
    maxTarget = Math.max(i + currLength, maxTarget)

    if (maxTarget > nums.length - 1) return true
  }

  return true
}
