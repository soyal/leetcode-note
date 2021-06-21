/**
 * Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal
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
 * 题解：就是层序遍历加点干扰逻辑
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return []

  const result = []

  let q = [root]
  let direction = 'toRight' // toRight | roLeft
  while (q.length > 0) {
    const tempVals = []
    const children = []

    for (let i = 0; i < q.length; i++) {
      const _node = q[i]
      const reversedNode = q[q.length - 1 - i]
      if (direction === 'toRight') {
        tempVals.push(_node.val)
      } else {
        tempVals.push(reversedNode.val)
      }
      if (_node.left) {
        children.push(_node.left)
      }
      if (_node.right) {
        children.push(_node.right)
      }
    }

    result.push(tempVals)
    q = children
    direction = direction === 'toRight' ? 'toLeft' : 'toRight'
  }

  return result
}
