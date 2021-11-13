/**
 * Given an encoded string, return its decoded string.

  The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

  You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

  Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/decode-string
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：栈
 * 思路类似于之前遇到的跟括号相关的处理字符串的题目
 * 简单来讲，就是通过栈的数据结构，一边遍历s，一边处理字符串
 * 遍历s的过程中，在没遇到"]"的时候，将字符推入栈，注意下对数字的处理
 * 遇到"]"，就将前面包含"["以及"["前数字的字符全部出栈进行decode，再将decode的结果重新入栈
 * 
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = []

  let lastNum = ''
  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (char !== ']') {
      const numChar = Number(char)
      if (Number.isNaN(numChar)) {
        if (lastNum) {
          stack.push(Number(lastNum))
          lastNum = ''
        }
        stack.push(char)
      } else {
        lastNum = lastNum + `${numChar}`
      }
    } else {
      let popChar = stack.pop()
      let partStr = ''
      while (popChar !== '[') {
        partStr = popChar + partStr
        popChar = stack.pop()
      }
      const digit = stack.pop()
      for (let n = 0; n < digit; n++) {
        stack.push(partStr)
      }
    }
  }

  return stack.join('')
}
