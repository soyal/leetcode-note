/**
 * 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
https://leetcode-cn.com/problems/intersection-of-two-arrays/
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const visited = {}

  nums1.forEach((num) => {
    visited[num] = true
  })

  const result = []
  nums2.forEach((num) => {
    if (visited[num]) {
      result.push(num)
      delete visited[num]
    }
  })

  return result
}

/**
 * 题解
 * 最直观的方式就是哈希表
 * 先遍历第一个数组，将所有的值都存进一个哈希表
 * 然后遍历第二个，判断哈希表中是否存在，存在就push进入结果集，并且删除哈希表中对应的字段
 */