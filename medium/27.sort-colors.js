/**
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

  We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

  You must solve this problem without using the library's sort function.

   

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/sort-colors
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解1：单指针 + 双循环
 * 扫描两次，第一次扫描将所有的0放在左边
 * 第二次扫描将所有的2放在右边
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let scanIndex = 0
  let leftIndex = 0
  let rightIndex = nums.length - 1

  function swap(i, j) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }

  while (scanIndex < nums.length) {
    if (nums[scanIndex] === 0) {
      swap(scanIndex, leftIndex)
      leftIndex++
    }
    scanIndex++
  }

  scanIndex = nums.length - 1

  while (scanIndex >= leftIndex) {
    if (nums[scanIndex] === 2) {
      swap(scanIndex, rightIndex)
      rightIndex--
    }
    scanIndex--
  }
}

/**
 * 题解2：双指针+单循环
 * 在题解1的基础上，优化了循环次数
 * 每次遍历，nums[i] === 0 则与left交换，否则与right交换
 * 但是要注意，与right交换完成后还有判断从right那边交换回来的值是0还是1,0的话还要与left交换一次
 * 并且还要确保right那边不会将2交换回来
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let scanIndex = 0
  let leftIndex = 0
  let rightIndex = nums.length - 1

  function swap(i, j) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }

  while (scanIndex <= rightIndex) {
    if (nums[scanIndex] === 0) {
      swap(scanIndex, leftIndex)
      leftIndex++
    } else if (nums[scanIndex] === 2) {
      while (nums[rightIndex] === 2) {
        rightIndex--
      }
      if (rightIndex < scanIndex) break

      swap(scanIndex, rightIndex)
      rightIndex--

      if (nums[scanIndex] === 0) {
        swap(scanIndex, leftIndex)
        leftIndex++
      }
    }
    scanIndex++
  }
}
