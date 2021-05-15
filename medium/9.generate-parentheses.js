/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/generate-parentheses
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解1：回溯 + 减枝（图解参考imgs/9-1.png）
 * 可以先画一个决策树，每次决策有两个分支，要么加"("，要么加")"
 * 需要一些限制条件用于减枝，比如 leftCount < rightCount
 *
 * 这里主要是要对回溯法有更深一层的认识，第一步先画树，因为每一层回溯就相当于是在处理level n到level n+1这个过程中的逻辑
 * 具体怎么画这颗决策树，这道题对应的图解就是很好的例子(imgs/9-1.png)
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n === 0) return []

  const result = []

  function backtrace(temp, leftCount, rightCount) {
    if (leftCount === 0 && rightCount === 0) {
      result.push(temp.slice().join(''))
      return
    }

    if (leftCount > 0) {
      temp.push('(')
      backtrace(temp, leftCount - 1, rightCount)
      temp.pop()
    }

    if (rightCount > leftCount) {
      temp.push(')')
      backtrace(temp, leftCount, rightCount - 1)
      temp.pop()
    }
  }

  backtrace([], n, n)

  return result
}

/**
 * 题解2：动态规划
 * 基础状态 dp[0] = [''], dp[1] = ["()"]
 * 状态转移方程 dp[i] = `(${dp[p]})${dp[i - 1 - p]}`
 * 
 * 是否能列出这个状态转移方程，是该解法的关键
 * dp[n] = (dp[n-1])dp[0] + (dp[n-2])dp[1] + ..... + (dp[0])dp(n-1)
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const dp = Array(n + 1)
  dp[0] = ['']
  dp[1] = ['()']

  if (n < 2) return dp[n]

  for (let i = 2; i <= n; i++) {
    for (let p = 0; p < i; p++) {
      for (let j = 0; j < dp[p].length; j++) {
        for (let z = 0; z < dp[i - 1 - p].length; z++) {
          if (!dp[i]) {
            dp[i] = []
          }
          dp[i].push(`(${dp[p][j]})${dp[i - 1 - p][z]}`)
        }
      }
    }
  }

  return dp[n]
}
