/**
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 题解：基础的层序遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []

  const result = []
  let q = [root]

  while (q.length > 0) {
    const tempQ = []
    const tempVal = []
    q.forEach((node) => {
      tempVal.push(node.val)
      if (node.left) {
        tempQ.push(node.left)
      }

      if (node.right) {
        tempQ.push(node.right)
      }
    })
    if (tempVal.length > 0) {
      result.push(tempVal)
    }

    q = tempQ
  }

  return result
}
