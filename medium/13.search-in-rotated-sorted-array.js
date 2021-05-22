/**
 * There is an integer array nums sorted in ascending order (with distinct values).

  Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

  Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

  You must write an algorithm with O(log n) runtime complexity.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/search-in-rotated-sorted-array
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：二分查找
 * 核心是二分查找，只是添加了干扰项
 * 
 * 先简单画个图(imgs/13-1)，根据题意，其实就是一个升序数组被截成两段，后一段拼接到了前一段左侧，形成了两段升序数组
 * 既然是升序数组，所以我们优先想到的查找方式还是二分法
 * 只是这里二分法有了干扰项，关于mid的判断问题
 * 
 * 每次获取mid，如图，mid可能存在B点，也可能存在E点
 * 所以需要先让mid与left做一次大小比较，来推断mid在B还是E
 * 如果在B点，那么将视角切换到target，如果target < mid，那么可能是出于[A,B]区间，也可能处于[C,F]区间
 * 所以还需要一个限定判断，target与left的比较，如果target >= left，则target在[A,B]，此时 right = mid - 1
 * 否则，target处于[C,F]，此时，left = mid + 1
 * 
 * 同理，也可以得到mid在E点的情况
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length === 0) return -1
  if (nums.length === 1) return nums[0] === target ? 0 : -1

  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = (left + right) >> 1
    if (nums[mid] === target) return mid

    if (nums[left] <= nums[mid]) {
      if (target < nums[mid] && target >= nums[left]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }

  return -1
}

// use case
search([1, 3], 3)
