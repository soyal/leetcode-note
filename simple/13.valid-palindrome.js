/**
 * Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/valid-palindrome
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  // 去掉除字母外的其他字符
  const s1 = s.replace(/[^a-zA-Z0-9]/g, '')
  const s2 = s1.toLowerCase()

  for(let i = 0; i < Math.floor(s2.length/2); i++) {
      const startChar = s2[i]
      const endChar = s2[s2.length - 1 - i]
      if(startChar !== endChar) return false
  }

  return true
};

/**
 * 题解
 * 核心其实就是判断回文，只是中间有干扰项
 * 可以使用双指针略过干扰项，或者如上例所示，直接用正则将干扰项删除
 */