/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

  Notice that the solution set must not contain duplicate triplets.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/3sum
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：遍历 + 双指针法
 * 在一种解法中，可以将此题转换成2sum的问题，就是遍历数组，-nums[i]即为target，然后用2sum的解法来解剩下的部分
 * 但是这种解法复杂度为O(n^2)，而且有额外的空间复杂度
 * 我们这里采用时间复杂度为O(n^2)，但是没有额外空间复杂度的解法，遍历+双指针
 * 跟上面的思路类似，只是在遍历前，我们会先进行一次排序
 * 排序之后，每次锚定一个nums[i]，然后从nums[i+1]和nums[nums.length - 1]开始往中间找符合条件的解
 * if nums[i] > 0 就结束遍历
 * if nums[i] + nums[left] + nums[right] === 0，过滤掉left和right往中间行进过程中的重复值后，各自向前一步
 * if nums[i] + nums[left] + nums[right] > 0,right--
 * if nums[i] + nums[left] + nums[right] < 0,left++
 * 
 * 还有一个需要注意的点，在每次尝试该题时，总是会想先排序，然后用三指针来解，这种解法无法计算元素重复利用的情况
 * 就比如[-2,0,1,1,2]这种输入，有[-2,0,2]和[-2,1,1]两种解，但是用三指针，找到一次正确解后，就只能各自进一步，-2是没法重复利用的
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return []

  const sortedNums = nums.sort((num1, num2) => num1 - num2)

  const result = []

  for (let i = 0; i < sortedNums.length; i++) {
    if (nums[i] > 0) break

    if (i > 0 && nums[i] === nums[i - 1]) continue

    let left = i + 1
    let right = sortedNums.length - 1

    while (left < right) {
      const tempSum = nums[i] + nums[left] + nums[right]
      if (tempSum === 0) {
        result.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[left] === nums[left + 1]) {
          left++
        }
        left++

        while (left < right && nums[right] === nums[right - 1]) {
          right--
        }
        right--
      } else if (tempSum > 0) {
        right--
      } else {
        left++
      }
    }
  }

  return result
}
