/**
 * Given an integer n, return true if it is a power of four. Otherwise, return false.

  An integer n is a power of four, if there exists an integer x such that n == 4x.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/power-of-four
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 方法1
 * 不停除以4，最后能得到1就是4的幂次方
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n === 0) return false;

  while (n !== 1) {
    if (n % 4 === 0) {
      n = n / 4;
    } else {
      return false;
    }
  }

  return true;
};

/**
 * 数学
 * 利用定理：
 * 1.如果一个数n是4的幂次方，那么一定是2的幂次方。而如果一个数是2的幂次方，则n&(n-1) === 0
 * 2.如果一个数n是4的幂次方，则 n - 1 一定是3的倍数（可以用4进制法证明，比如用4进制表示的话，100就是16，16-1 = 033 = 3*4^1 + 3，肯定能被3整除）

 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfFour = function(n) {
  if(n === 0) return false

  return n > 0 && (n & (n-1)) === 0 && ((n - 1) % 3 === 0)
};