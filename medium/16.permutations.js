/**
 * Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/permutations
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：回溯
 * 回溯算法经典入门题，如果解题过程中遇到困难，先画回溯的树状图
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = []

  function backtrace(visited, temp) {
    if (temp.length === nums.length) {
      result.push(temp.slice())
      return
    }

    for (let i = 0; i < nums.length; i++) {
      const currNum = nums[i]

      if (visited[currNum]) continue
      visited[currNum] = true
      temp.push(currNum)
      backtrace(visited, temp)
      temp.pop()
      visited[currNum] = false
    }
  }

  backtrace({}, [])

  return result
}
