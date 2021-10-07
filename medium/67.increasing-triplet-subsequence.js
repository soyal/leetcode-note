/**
 * Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/increasing-triplet-subsequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：逻辑题
 * 解这种题目要做的第一件事情，就是先用简单的程序语言来翻译题目
 * 而这道题，简单的翻译下，就是要求一个数组中，是否有至少三次的递增过程(非连续)
 * 我们这里用一个length为3的数组tripletArr来辅助我们计算这样的递增过程
 * 注意,tripletArr本身代表的含义，并非[nums[i],nums[j],nums[k]]，而是一种比较抽象的程序意义
 * 比如遍历到nums[x]时，tripletArr中，只有0,1两个索引有值，那么其中1这个索引的值，代表之前的[0, x-1]的范围内，绝对高度最低的，达成了题目所述要求的nums[j]的值
 * 而tripletArr[0]并不是指的nums[i]，因为它在遍历的过程中会被随时更新成遍历到的范围内的最小值
 * 
 * 只要tripletArr[1]有值，并且在遍历的过程中，有nums[i] > tripletArr[1]，那么就说明存在k，使得 i < j < k nums[i] < nums[j] < nums[k]
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  const tripletArr = Array(3).fill(undefined)

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]

    for (let j = 0; j < tripletArr.length; j++) {
      if (tripletArr[j] === undefined || tripletArr[j] >= num) {
        tripletArr[j] = num
        break
      }
    }
    console.log(tripletArr)
  }
  return tripletArr[2] !== undefined
}
