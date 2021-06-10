/**
 * 
  Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

  The solution set must not contain duplicate subsets. Return the solution in any order.
  https://leetcode-cn.com/problems/subsets-ii/
 */

/**
 * 题解：回溯法
 * 跟28.subsets1 非常类似，不同点在于有重复元素，所以为了剪枝，我们需要先排序，然后根据i > start && nums[i] === nums[i - 1]这个条件来做
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const result = []
  nums.sort()

  function backtrace(start, temp) {
    result.push(temp.slice())

    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue

      temp.push(nums[i])
      backtrace(i + 1, temp)
      temp.pop()
    }
  }

  backtrace(0, [])

  return result
}
