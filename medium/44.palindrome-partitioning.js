/**
 * Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

  A palindrome string is a string that reads the same backward as forward.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/palindrome-partitioning
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：回溯法
 * 
 * 这种要求详细列出所有可能性的题，第一个思路肯定都是回溯法(如果是可能性数量，则应该想到动态规划)
 * 但是关键是怎么去回溯
 * 如果一时半会儿想不到，一定要画图，我们这里直接借鉴大神的图(./imgs/44-1.png)
 * 从图中其实可以很快推导出思路，跟我们之前做全排列是一样的，只需要从第一个字母开始，不断扩大划分范围，不满足回文条件就剪枝，然后将字串进行递归处理就好了
 * 
 * 所以再次强调，回溯问题一定要学会画图
 * 
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = []

  function isPalindrome(str) {
    if (str.length === 1) return true

    for (let i = 0; i < Math.floor(str.length); i++) {
      const startChar = str[i]
      const endChar = str[str.length - 1 - i]
      if (startChar !== endChar) return false
    }

    return true
  }

  function backtrace(substr, temp) {
    if (substr === '') {
      result.push(temp.slice())
      return
    }

    for (let end = 1; end <= substr.length; end++) {
      const atomStr = substr.substring(0, end)
      if (isPalindrome(atomStr)) {
        temp.push(atomStr)
        backtrace(substr.substring(end), temp)
        temp.pop()
      }
    }
  }

  backtrace(s, [])

  return result
}
