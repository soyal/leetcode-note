/**
 * Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-right-side-view
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：层序遍历
 * 将每层最右侧的节点返回即可
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return []

  const result = []

  let levelNodes = [root]
  while (levelNodes.length > 0) {
    const nextLevelNodes = []

    for (let i = 0; i < levelNodes.length; i++) {
      const node = levelNodes[i]
      if (i === 0) {
        result.push(node.val)
      }

      if (node.right) {
        nextLevelNodes.push(node.right)
      }

      if (node.left) {
        nextLevelNodes.push(node.left)
      }
    }
    levelNodes = nextLevelNodes
  }

  return result
}
