/**
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

    The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/merge-sorted-array
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let nums1Point = m - 1
  let nums2Point = n - 1

  for (let i = m + n - 1; i >= 0; i--) {
    let numToAdd
    if (nums1Point < 0) {
      numToAdd = nums2[nums2Point--]
    } else if (nums2Point < 0) {
      numToAdd = nums1[nums1Point--]
    } else {
      if (nums1[nums1Point] > nums2[nums2Point]) {
        numToAdd = nums1[nums1Point--]
      } else {
        numToAdd = nums2[nums2Point--]
      }
    }

    nums1[i] = numToAdd
  }
}

/**
 * 题解
 * 难点在于不使用额外存储空间
 * 不过既然nums1已经有额外的空间了，所以要利用起来，因此这里从后往前遍历
 * 核心在于三个指针的运用 + 后往前遍历的思路
 */