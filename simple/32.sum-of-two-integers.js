/**
 * Given two integers a and b, return the sum of the two integers without using the operators + and -.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/sum-of-two-integers
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  if (a === 0) return b

  if (b === 0) return a

  let increment = (a & b) << 1
  let result = a ^ b

  return getSum(result, increment)
}

/**
 * 题解
 * 核心两个点：
 * 1.a ^ b 可以得到二进制的 无进位 加法结果
 * 2.a&b 可以得到进位结果 为了让进位结果参与运算需要 左移一位
 * 然后就行递归计算进位与无进位的异或的值
 * 
 * 举例
 * 1 + 3 = 4
 * 1:01
 * 3:11
 * 01 ^ 11 = 10
 * 01 & 11 = 01   01 << 1 = 10
 * 
 * 10 ^ 10 = 00
 * 10 & 10 = 10   10 << 1 = 100
 * 
 * 然后因为a === 00 则直接返回b = 100 为4
 */