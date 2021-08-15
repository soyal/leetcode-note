/**
 * Given the root of a binary search tree, and an integer k, return the kth (1-indexed) smallest element in the tree.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst
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
 * 题解： 二叉树的中序遍历
 * 一棵BST，其中序遍历的结果就是一个从小到大排列的数组
 * 
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const result = []

  function dfs(node) {
    if (!node) return

    dfs(node.left)

    result.push(node.val)

    dfs(node.right)
  }

  dfs(root)

  return result[k - 1]
}
