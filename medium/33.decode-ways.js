/**
 * A message containing letters from A-Z can be encoded into numbers using the following mapping:

  'A' -> "1"
  'B' -> "2"
  ...
  'Z' -> "26"
  To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

  "AAJF" with the grouping (1 1 10 6)
  "KJF" with the grouping (11 10 6)
  Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

  Given a string s containing only digits, return the number of ways to decode it.

  The answer is guaranteed to fit in a 32-bit integer.

   

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/decode-ways
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：动态规划
 * 不难想到状态转移方程 dp[i] = dp[i-1] + dp[i-2]
 * 只是要补充一些条件，就是如果s[i]为'0'就不该累加上dp[i-1]的值
 * 如果s[i-1]为'0'或者s[i-1]与s[i]组合起来的数字大于了26，那么也不该累加上dp[i-2]的值
 * 并且，因为本题中，状态的转移只跟前两个状态有关，所以我们也不必记录下每个dp[i]的值，所以采用推导的方式
 * 
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s.length === 0) return 0

  let pre2 = 1 // i-2
  let pre = 1 // i -1
  let result = 0

  for (let i = 0; i < s.length; i++) {
    let tempResult = 0
    if (s[i] !== '0') {
      tempResult += pre
    }

    if (i >= 1 && s[i - 1] !== '0' && parseInt(s[i - 1] + s[i]) <= 26) {
      tempResult += pre2
    }

    result = tempResult
    pre2 = pre
    pre = tempResult
  }

  return result
}
