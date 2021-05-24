/**
 * Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

  Each number in candidates may only be used once in the combination.

  Note: The solution set must not contain duplicate combinations.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/combination-sum-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：回溯法+剪枝
 * 跟上一题(14.combination-sum)一样，本题采用回溯法
 * 与上一题不同的地方有两点：
 * 1.本题中会有重复元素
 * 2.本题的每个元素，只能使用一次
 * 
 * 跟上一道题解法差不太多，核心难点其实在于去重，当然，我们可以用Set，但是用Set后，性能惨不忍睹，所以这里采用另一种思路
 * if (i > _index && sortedCandidates[i] === sortedCandidates[i - 1]) continue
 * 主要表达的意思，就是在决策树的同一个节点向下的决策中，相同的分支不取第二次
 * 如果想不通，可以参考imgs/15-1的图，能更好地帮助理解
 * 
 * 
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = []
  const sortedCandidates = candidates.sort((num1, num2) => num1 - num2)

  function backtrace(temp, _target, _index) {
    if (_target === 0) {
      result.push(temp.slice())
      return
    }

    for (let i = _index; i < sortedCandidates.length; i++) {
      if (i > _index && sortedCandidates[i] === sortedCandidates[i - 1])
        continue

      const currNum = sortedCandidates[i]
      const currTarget = _target - currNum
      if (currTarget < 0) break

      temp.push(currNum)
      backtrace(temp, currTarget, i + 1)
      temp.pop()
    }
  }

  backtrace([], target, 0)

  return result
}
// use case
combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)
