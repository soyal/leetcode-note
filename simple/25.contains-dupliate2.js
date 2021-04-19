/**
 * Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/contains-duplicate-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const dict = {};

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (dict[value] !== undefined && i - dict[value] <= k) {
      return true;
    } else {
      dict[value] = i;
    }
  }

  return false;
};

/**
 * 题解
 * 比较简单的题，也是考对hashmap的应用
 * 记录一个value-index的哈希表，每次遍历判断value是否有存储过index，有且满足 abs(i-j) <= k的条件就返回true
 * 没有就更新哈希表
 */