/**
 * Given the root of a binary tree, return its maximum depth.

  A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

/**
 * 题解
 * 这道题很简单，方法有很多，只是写法上的区别
 * 这里最简洁的递归写法示例
 * 其实最直观的思路，是用dfs，然后不停刷新max result的值
 */