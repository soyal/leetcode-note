/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

  有效字符串需满足：

  左括号必须用相同类型的右括号闭合。
  左括号必须以正确的顺序闭合。
  注意空字符串可被认为是有效字符串。

  示例 1:

  输入: "()"
  输出: true
  示例 2:

  输入: "()[]{}"
  输出: true
  示例 3:

  输入: "(]"
  输出: false
  示例 4:

  输入: "([)]"
  输出: false
  示例 5:

  输入: "{[]}"
  输出: true
 */

 /**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = []
  const bracketsMap = {
      '(': ')',
      '{': '}',
      '[': ']'
  }
  const endBrackets = Object.values(bracketsMap)

  for(let i=0;i<s.length;i++) {
      const char = s[i]
      const lastStackChar = stack[stack.length - 1]
      if(bracketsMap[lastStackChar] && bracketsMap[lastStackChar] === char) {
          stack.pop()
      } else {
          if(endBrackets.indexOf(char) > -1) return false
          stack.push(char)
      }
  }

  return stack.length === 0
};

/**
 * 题解
 * 任何关于配对相关的题目，第一个想法就应该是栈，这是最直观的思路，本题比较简单，没有什么可讲的
 * 可以扩展下：本题的思路也可用于处理如，html标签匹配，xml标签匹配等问题
 */