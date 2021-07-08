/**
 * Evaluate the value of an arithmetic expression in Reverse Polish Notation.

  Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

  Note that division between two integers should truncate toward zero.

  It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/evaluate-reverse-polish-notation
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：逆波兰表达式 + 栈
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = []

  for (let i = 0; i < tokens.length; i++) {
    const item = tokens[i]
    if (Number.isInteger(Number(item))) {
      stack.push(item)
    } else {
      const num1 = stack.pop()
      const num2 = stack.pop()
      const operateValue = parseInt(eval(`Number(num2) ${item} Number(num1)`))
      stack.push(operateValue)
    }
  }

  return stack.pop()
}
