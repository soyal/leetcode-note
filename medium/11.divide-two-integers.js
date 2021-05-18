/**
* 
Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, assume that your function returns 231 − 1 when the division result overflows.
https://leetcode-cn.com/problems/divide-two-integers/
*/

/**
 * 题解：
 * 核心思路就是不断做减法，知道被减的结果 < divisor
 * 然后因为一次减去一个divisor效率太过于低下，所以我们可以通过位运算来实现倍增的减法
 * 每次减去divisor*2^n
 * 用数学表达式表示就是将一个被除数表示为 divisor*(2^a + 2^b + 2^c....) = dividend 其中a > b > c
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const resultIsPositive =
    (dividend >= 0 && divisor > 0) || (dividend < 0 && divisor < 0)

  const absDividend = Math.abs(dividend)
  const absDivisor = Math.abs(divisor)
  const MAX_INTEGER = Math.pow(2, 31)

  if (absDividend < absDivisor) return 0

  let subtractedResult = absDividend
  let result = 0

  function recurse(target) {
    if (target < absDivisor) return

    if (target === absDivisor) {
      result += 1
      return
    }

    let tempResult = 1
    let tempAbsDivisor = absDivisor
    while (target > tempAbsDivisor) {
      tempAbsDivisor = tempAbsDivisor << 1
      tempAbsDivisor = tempAbsDivisor >>> 0
      tempResult = tempResult << 1
    }
    result += tempResult >>> 1
    const nextInput = target - (tempAbsDivisor >>> 1)

    recurse(nextInput)
  }

  recurse(subtractedResult)

  if (!resultIsPositive) {
    result = -result
  }

  if (result >= MAX_INTEGER) {
    result = MAX_INTEGER - 1
  }

  return result
}
