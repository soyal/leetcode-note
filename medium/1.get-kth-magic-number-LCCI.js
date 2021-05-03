/**
 * Design an algorithm to find the kth number such that the only prime factors are 3, 5, and 7. Note that 3, 5, and 7 do not have to be factors, but it should not have any other prime factors. For example, the first several multiples would be (in order) 1, 3, 5, 7, 9, 15, 21.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/get-kth-magic-number-lcci
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 无论哪种解法，都是按照递推的思路来的，因此在面对这种题目时，不要总是优先思考如何“跳步”，而是按照递推的思路去做，谨记
 * 
 * 解法1：三指针
 * 核心在于遵循一个思路，类似于动态规划，后者的值是由前者通过推导得到
 * 核心的转移方程：ugly[i] = Math.min(3 * ugly[p3], 5 * ugly[p5], 7 * ugly[p7]);
 * 只是这里引入了三个指针变量，各个指针的递增逻辑是一个难点
 * 
 * 
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function (k) {
  const ugly = [1];
  const candidates = [3, 5, 7];
  let p3 = 0;
  let p5 = 0;
  let p7 = 0;

  for (let i = 1; i < k; i++) {
    ugly[i] = Math.min(3 * ugly[p3], 5 * ugly[p5], 7 * ugly[p7]);

    if (ugly[i] === 3 * ugly[p3]) p3++;
    if (ugly[i] === 5 * ugly[p5]) p5++;
    if (ugly[i] === 7 * ugly[p7]) p7++;
  }

  return ugly[k - 1];
};

/**
 * 题解2：利用最小堆
 * 最小堆：一棵树，根节点总是比左右子节点小
 * 用最小堆，只是利用了其能很方便pop最小值的特性，思路就是每次pop最小丑数(1,3,5,7,9...)出来
 * 让其跟3,5,7相乘取最小值，然后将这个最小值塞到堆里面去
 * 这里因为js没有原生的堆结构，偷个懒，只写思路
 */