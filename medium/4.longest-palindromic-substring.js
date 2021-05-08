/**
 * Given a string s, return the longest palindromic substring in s.
 * https://leetcode-cn.com/problems/longest-palindromic-substring/
 */

/**
 * 题解1：中心漫延法
 * 顾名思义，就是以每个字符为中心，向两侧漫延，逐个检查两侧是否相等
 * 需要注意的是偶数的情况，比如 abbc这种，其中bb也是回文
 * 为了处理这种情况，这里在遍历的时候，每次递增的是0.5,而不是1
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  if(s.length < 2) return s

  let result = ''

  function centerCount(index) {
      let left = Math.floor(index)
      let right = Math.ceil(index)

      while(left >= 0 && right <= s.length - 1) {
          if(s[left] === s[right]) {
              if(result.length < (right - left + 1)) {
                  result = s.substring(left, right + 1)
              }
              left--
              right++
          } else {
              break
          }
      }
  }

  for(let i=0;i<s.length;i += 0.5) {
      centerCount(i)
  }

  return result
};