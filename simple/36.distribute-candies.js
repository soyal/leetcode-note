/**
 * Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.

  The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.

  Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/distribute-candies
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const candies = new Set(candyType);

  return Math.min(candyType.length / 2, candies.size);
};

/**
 * 题解
 * 思路就是去重，拿去重后的结果数量和 length/2对比，返回小的那一个
 * 当然，这里取了个巧，直接用了Set，如果不用，也可以直接遍历，利用hashmap来做
 */