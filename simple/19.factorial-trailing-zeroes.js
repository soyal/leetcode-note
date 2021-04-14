/**
 * Given an integer n, return the number of trailing zeroes in n!.

  Follow up: Could you write a solution that works in logarithmic time complexity?

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/factorial-trailing-zeroes
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let jie = 1;
  let result = 0;
  while (true) {
    const jieCount = Math.floor(n / Math.pow(5, jie));
    if (jieCount >= 1) {
      result += jieCount;
      jie++;
    } else {
      break;
    }
  }

  return result;
};


/**
 * 题解
 * 这道题其实考得是一种数学思维
 * 按照题目意思，肯定不是让我们直接求阶乘结果，然后去数有多少个0，所以我们需要对阶乘做一个分析，先抛一个问题，阶乘的0的数量跟什么有关
 * 首先我们先看一次阶乘是怎么得出0的，比如5! = 5x4x3x2x1，结果有0是因为2x5 = 10得到的
 * 再看10的阶乘 10! = 10x9x8x7x6x5x4x3x2x1，结果有两个0，分别来自2x5和10，而10做分解也可以得到2x5，0是5跟一个偶数相乘得到的
 * 所以我们大概的可以看出0的数量，跟5的数量是有直接关系的，有多少个5，就含有多少个0
 * 那是不是n/5就是最后的结果呢，显然不是，比如25!，其中25 = 5x5，含两个5，所以25的阶乘的0的数量为6
 * 那么稍微推导下，不难得出，0的数量 = n/5 + n/5^2 + n/5^3...
 * 然后上例就是这种思路的体现
 */