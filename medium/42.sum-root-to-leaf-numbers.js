/**
 * You are given the root of a binary tree containing digits from 0 to 9 only.

  Each root-to-leaf path in the tree represents a number.

  For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
  Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

  A leaf node is a node with no children.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/sum-root-to-leaf-numbers
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
 * 题解：二叉树遍历
 * 很简单的题，遍历到叶子节点，把和给累加
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  if (!root) return 0

  let result = 0

  function dfs(node, numberStr) {
    if (!node) {
      return
    }

    const currNumberStr = numberStr + node.val

    if (!node.left && !node.right) {
      result += Number(currNumberStr)
    } else {
      dfs(node.left, currNumberStr)
      dfs(node.right, currNumberStr)
    }
  }

  dfs(root, '')

  return result
}
