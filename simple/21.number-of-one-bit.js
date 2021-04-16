/**
 * Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/number-of-1-bits
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 解法1
 * 一个数字的1的个数，其实就是将数字表示成2^n + 2^n-1 + 2^n-2... = x
 * 然后求2^y的个数
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let result = 0
  let temp = n

  for (let i = 31; i >= 0; --i) {
    const currValue = Math.pow(2, i)
    if (currValue <= temp) {
      temp -= currValue
      result += 1
    }
  }

  return result
}

/**
 * 方法2
 * 利用n&(n-1)可以消除最后一个1的特性
 * 为什么n&(n-1)可以消除最后一个1？
 * 如果n的最后一位是1，那么减1后，则最后一位为0
 * 如果n的最后一位不为1，那么减1后，向前借位，最后一个1(假设是第x位)变为0，其后的所有0变为1，那么跟n做&运算，x之后包括x都会变为0
 * 
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let result = 0
  while (n !== 0) {
    n = n & (n - 1)
    result++
  }

  return result
}
