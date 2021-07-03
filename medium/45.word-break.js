/**
 * 
  Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

  Note that the same word in the dictionary may be reused multiple times in the segmentation.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/word-break
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：回溯 + 空间换时间
 *
 * 如果通过画图去理解题目，回溯法是比较好想到的
 * 拿"leetcode" ["leet", "code"]的输入举例
 * 处理流程就是 "l" -> x,  "le" -> x,  "lee" -> x, "leet" -> 匹配leet -> ("c" -> x, "co" -> x, "cod" -> x, "code" -> 匹配)
 * 按照这样的思路，可以很快写出标准的回溯法的算法
 * 但是当遇到这样的输入 "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", ["a","aa", "aaa"...]就会超时
 * 原因也比较好理解，就是子问题会被重复处理，所以我们需要将处理过的子问题给记录下来
 *
 * 在下面的代码中，每个substr就是处理的子问题，memo就是用于记录子问题用的
 *
 *
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let result = false
  const memo = {}

  function baktrace(substr) {
    if (substr === '') {
      result = true
      return
    }

    if (memo[substr]) return

    if (result) return

    for (let end = 1; end <= substr.length; end++) {
      const wordToMatch = substr.slice(0, end)
      if (wordDict.includes(wordToMatch)) {
        baktrace(substr.slice(end))
        if (result) break
      }
    }
    memo[substr] = true
  }

  baktrace(s)

  return result
}

/**
 * 题解2: 动态规划
 * 最小子问题：定义dp[i] 表示 s从0开始，长度为i的字符串是否可被wordDict中的词给分解掉
 * 状态转移方程: dp[i] = dp[j] && s[j,i] === wordDict[x]，其中s[j,i]表示s末尾的一个词，wordDict[x]表示词典中的某个词
 * 也就是如果s[0,j]的字串是能被wordDict分解的，并且s[j,i]也存在于wordDict中，那么s[0,j]就是能被wordDict分解的
 * 
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak2 = function (s, wordDict) {
  const dp = new Array(s.length + 1) // dp[i]表示s.slice(0, i）是否能分解为wordDict的词组

  dp[0] = true

  for (let end = 1; end <= s.length; end++) {
    for (let i = 0; i < wordDict.length; i++) {
      const wordToMatch = wordDict[i]
      const len = wordToMatch.length
      if (
        len <= end &&
        dp[end - len] &&
        wordToMatch === s.slice(end - len, end)
      ) {
        dp[end] = true
        break
      }

      if (i === wordDict.length - 1) {
        dp[end] = false
      }
    }
  }

  return dp[s.length]
}

// use case
wordBreak2('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])
