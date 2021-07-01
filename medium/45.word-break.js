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

// use case
wordBreak('catsandog', ['cats', 'dog', 'san', 'and', 'cat'])
