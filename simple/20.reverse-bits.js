/**
 * Reverse bits of a given 32 bits unsigned integer.

  Note:

  Note that in some languages such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
  In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.
  Follow up:

  If this function is called many times, how would you optimize it?

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/reverse-bits
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let result = 0
  for (let i = 0; i < 32; i++) {
    result = (result << 1) + (n & 1)
    n = n >> 1
  }

  return result >>> 0
}

/**
 * 题解
 * 这道题的核心在于位运算，解决问题的关键线索
 * 1.将n的第一位的值给result
 * 2.result左移
 * 3.n右移
 * 4.循环32次
 * 
 * 思路很简单，难点在于最后怎么处理javascript中的无符号整数
 * 请注意上面题解中最后的result >>> 0
 * 之所以这么写，是因为javascript中没有无符号数，最后直接输出result的话，第32位(最高位)如果是1，则js会将其当做符号位输出
 * 所以假设最后的result为 2^32 + 2^31，那么直接输出的话就成了-2^31
 * 然后就要谈到>>>(无符号右移)的作用，其本来用法是让数字的右移，移出的位的值直接被舍弃，高位补0
 * 在这里 >>> 0 的结果，就是直接高位补0，也就是2^32不再被当成符号位，所以最终能输出正确结果，这算是js中的一个trick
 */