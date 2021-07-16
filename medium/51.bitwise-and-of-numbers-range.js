/**
 * Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/bitwise-and-of-numbers-range
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解: 位运算
 * 常规解法肯定不行，所以要换思路
 * 首先我们得先转换问题，将连续与的问题转换成求最大前缀的问题
 * 这个转换思路是怎么来的？答：找规律
 * 
 * 先看例子中的[5,7]的输入
 * 101 & 110 & 111，在&运算的过程中，只要对应的位，有任意一个数字跟其他数不一致，那么那一位连续&的结果就是0
 * 我们开始列推论：
 * 要使[left,right]连续&有值，需要满足下面的条件
 * 1.left right的位数应该是相等的，为什么？因为位数不等，比如 1000 和 10001，那么在他们连续&的过程中，必定出现01111和10000的数字，计算结果就为0
 * 2.连续&计算的结果就是left到right所有数的二进制最大公共前缀，刚才我们谈到了left和right的位数应该相等，那么必然存在一个公共前缀。
 * 假设前缀是x位，那么从左数第x+1位不相等，因为left<right，那么left的x+1位应该是0，right的x+1位是1，在连续的数字中，出现了0到1的跃迁
 * 那么跟推论1中的推导一样，也必然在连续&的过程中计算为0，所以这个连续&的结果就是公共前缀
 * 
 * 所以这道题最终被转换成计算[left,right]这一连串数字的最长二进制公共前缀
 * 
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function (left, right) {
  let result = 0
  let shiftResult = 1 << 30

  while (shiftResult > 0 && (shiftResult & left) === (shiftResult & right)) {
    result = result | (shiftResult & left)
    shiftResult = shiftResult >> 1
  }

  return result
}

// use case
rangeBitwiseAnd(1 << 29, 1 << 29)
