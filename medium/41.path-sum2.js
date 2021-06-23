/**
 * Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where each path's sum equals targetSum.

  A leaf is a node with no children.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/path-sum-ii
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
 * 题解：深度优先+回溯法
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const result = []

  function dfs(node, temp = [], _target) {
    if (!node) return

    temp.push(node.val)
    const leftValue = _target - node.val

    if (leftValue === 0 && !node.left && !node.right) {
      result.push(temp.slice())
    } else {
      dfs(node.left, temp, leftValue)
      dfs(node.right, temp, leftValue)
    }
    temp.pop()
  }

  dfs(root, [], targetSum)

  return result
}
