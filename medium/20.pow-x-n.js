/**
 * Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
 * https://leetcode-cn.com/problems/powx-n/
 */

/**
 * 题解：递归 + 二分
 * 首先想到的肯定是循环去做乘法，但是某些用例会超时，时间复杂度O(n)
 * 所以肯定是需要做优化的
 * 
 * 挨次相乘不行，那我们就不停二分去乘
 * x^n = x^(n/2) * x^(n/2)
 * 按照这种思路去做递归
 * 需要特殊判断n为奇数和n为负数的情况
 * 
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
  if(n === 0) return 1

  if(n % 2 === 0) {
      const tempResult = myPow(x, parseInt(n/2))
      return tempResult*tempResult
  } else {
      let nextN 
      let xResult
      if(n < 0) {
          nextN = n + 1
          xResult = 1/x
      } else {
          nextN = n - 1
          xResult = x
      }

      const tempResult = myPow(x, parseInt(nextN/2))
      return tempResult*tempResult*xResult
  }
};