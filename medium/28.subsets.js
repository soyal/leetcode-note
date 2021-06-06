/**
 * Given an integer array nums of unique elements, return all possible subsets (the power set).

  The solution set must not contain duplicate subsets. Return the solution in any order.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/subsets
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：回溯法
 * 跟全排列的题型有点像，但是有所不同的是，不是走到决策树的终点才执行result.push(temp.slice())，而是在每个节点都执行
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = []
  function getSubsets(temp, visited, start = 0) {
    result.push(temp.slice())

    for (let i = start; i < nums.length; i++) {
      const num = nums[i]
      if (!visited[num]) {
        visited[num] = true
        temp.push(num)
        getSubsets(temp, visited, i + 1)
        temp.pop()
        visited[num] = false
      }
    }
  }

  getSubsets([], {})

  return result
}
