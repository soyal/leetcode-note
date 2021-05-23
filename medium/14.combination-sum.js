/**
 * Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

  The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

  It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/combination-sum
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：回溯法
 * 从题目描述就能很容易看出来，是属于回溯法的题目
 * 
 * 但是难点不在于想到回溯法本身，而在回溯法的剪枝策略
 * 题目没有说candidates为有序数组，如果直接全部遍历，分支太多
 * 而在排序后，到某个索引值的时候，target只要小于0，则可以直接干掉后面的分支
 * 
 * 另外，如果直接不加考虑地将所有的item纳入回溯范围，则会有大量重复解
 * 比如candidates = [2, 3, 5, 7], target = 7的输入，[2,2,3], [3,2,2], [2,3,2]都是一个解
 * 我们当然可以通过Set或者hash表来解决这个问题，但是消耗太多
 * 另一种更好的思路，其实就是在遍历的时候，进入下一个递归，不再回头。其实就是排列组合中C的思路，不是A的思路
 * 
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const sortedCandidates = candidates.slice().sort((num1, num2) => num1 - num2)

  const result = []
  function backtrace(temp = [], _target, _index) {
    if (_target === 0) {
      result.push(temp.slice())
      return
    }

    for (let i = _index; i < sortedCandidates.length; i++) {
      const nextTarget = _target - sortedCandidates[i]
      if (nextTarget < 0) break

      temp.push(sortedCandidates[i])
      backtrace(temp, nextTarget, i)
      temp.pop()
    }
  }

  backtrace([], target, 0)

  return result
}

// use case
combinationSum([2, 3, 5, 7], 7)
