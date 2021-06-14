/**
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/binary-tree-inorder-traversal
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
 * 题解：二叉树中序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = []

  function dfs(_root) {
    if (!_root) return
    dfs(_root.left)
    result.push(_root.val)
    dfs(_root.right)
  }
  dfs(root)
  return result
}
