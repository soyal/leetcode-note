/**
 * Given a string s which represents an expression, evaluate this expression and return its value. 

  The integer division should truncate toward zero.

  Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/basic-calculator-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：双栈法
 * 每次符号或者数字入栈前，都需要根据符号栈最顶部的符号，决定是否执行计算结果
 * 这里特别要注意对数字的处理，检测到数字不能立刻用，需要先存起来，以为无法确定数字的位数
 * 
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const ops = []
  const nums = []

  function calc(num1, num2, op) {
    switch (op) {
      case '+':
        return num1 + num2
      case '-':
        return num1 - num2
      case '*':
        return num1 * num2
      case '/':
        return Math.floor(num1 / num2)
    }
  }

  // take last op and last two number, calculate the result and push it to nums
  function doOp() {
    const num2 = nums.pop()
    const num1 = nums.pop()
    const op = ops.pop()
    nums.push(calc(num1, num2, op))
  }

  function getLastOp() {
    if (ops.length === 0) return null

    return ops[ops.length - 1]
  }

  let tempNumArr = []

  for (let i = 0; i < s.length; i++) {
    const ch = s[i]

    if (ch === ' ') continue

    // operation
    if (Number.isNaN(Number(ch))) {
      nums.push(Number(tempNumArr.join('')))
      tempNumArr = []
      const lastOp = getLastOp()
      if ((lastOp === '*' || lastOp === '/') && nums.length > 1) {
        doOp()
      }

      if (nums.length >= 2) {
        switch (ch) {
          case '+':
          case '-':
            const lastOp = getLastOp()
            if (lastOp === '+' || lastOp === '-') {
              doOp()
            }
            ops.push(ch)
            break
          default:
            ops.push(ch)
        }
      } else {
        ops.push(ch)
      }
      // number
    } else {
      tempNumArr.push(ch)
    }
  }

  if (tempNumArr.length > 0) {
    nums.push(Number(tempNumArr.join('')))
  }

  while (nums.length >= 2) {
    doOp()
  }

  return nums[0]
}

// use case
calculate('3+2*2')
