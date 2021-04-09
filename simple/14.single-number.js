/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

  Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/single-number
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ret = 0;
  nums.forEach((num) => {
    ret = ret ^ num;
  });

  return ret;
};

/**
 * 这道题关键在于对”异或“操作的理解
 * 1. a ^ b = b ^ a
 * 2. 任何数和自身异或为0, a ^ a = 0
 * 3. 任何数和0异或为自身, a ^ 0 = a
 * 所以，如[4,1,2,1,2] 累计异或结果为 4^1^2^1^2 = 1^1^2^2^4 = 0^4 = 4
 */