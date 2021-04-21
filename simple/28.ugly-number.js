/**
 * An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

    Given an integer n, return true if n is an ugly number.

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/ugly-number
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n < 1) return false

  while (n !== 1) {
    if (n % 5 === 0) {
      n = n / 5
    } else if (n % 3 === 0) {
      n = n / 3
    } else if (n % 2 === 0) {
      n = n / 2
    } else {
      return false
    }
  }

  return true
}

/**
 * 题解
 * 数学解法，丑数就是 n = 2^x * 3^y * 5^z
 * 所以就不停拿这三个数去除，然后看最后能不能得到1就行
 */