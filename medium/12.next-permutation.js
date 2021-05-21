/**
 * Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).

The replacement must be in place and use only constant extra memory.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/next-permutation
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：找规律
 * 首先要明确的一个问题，就是“什么是next permutation”
 * 观察下可以得出，排列序列就是按照每组排列组成的数字大小排列的
 * 比如[1,2,3]的所有排列，[1,2,3] [1,3,2] [2,1,3] [2,3,1] [3,1,2] [3,2,1]
 * 
 * 我们将一组排列分为三段 [i, k, j]，当[k, j]为升序排列，则[k,j]这一部分组成的数字是最小的，无论怎么交换顺序，也不会出现更小的数字
 * 当k === i时，整个排列组成的数字最小
 * 反之，如果[k,j]为降序排列，则[k,j]这部分排列组成的数字最大。这个时候，如果想要组成更大的数字（下一个排列），则需要考虑将k-1位的数字增大
 * 
 * 增大k-1位的数字，则必然要找个比它大的数字来交换，这个数字从哪儿来？必然不会从[i,k-1]这部分来，因为这部分任意位置的数字减小，都会使组成的数字减小
 * 所以k-1要交换的数字来自[k,j]这个降序的区域
 * 
 * 然后在交换k-1与[k,j]中的某位(设为x)后，[k,j]需要设置为升序，才能使组成的数字为k-1增大后能组成的数字中最小的
 * 
 * 所以解题思路：
 * 1.找到k所在的位置
 * 2.从j到k遍历寻找一个数字，其比nums[k-1]稍大
 * 3.交换nums[k-1]与nums[x]
 * 4.将[k,j]逆序，由降序转升序
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length < 2) return

  function doReverse(start, middle) {
    for (let k = start; k < middle; k++) {
      const last = nums.length - k + start - 1
      const temp = nums[k]
      nums[k] = nums[last]
      nums[last] = temp
    }
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      const smallNum = nums[i]

      for (let j = nums.length - 1; j > i; j--) {
        if (nums[j] > smallNum) {
          // swap
          const temp = nums[j]
          nums[j] = nums[i]
          nums[i] = temp
          break
        }
      }

      // reverse
      const middle = Math.ceil((nums.length + i) / 2)
      doReverse(i + 1, middle)

      break
    }

    if (i === 0) {
      doReverse(0, Math.ceil((nums.length - 1) / 2))
    }
  }
}
