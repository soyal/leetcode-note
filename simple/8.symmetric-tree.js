/**
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/symmetric-tree
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true

  let result = true
  function isTwoTreeSymmetric(root1, root2) {
    if (!result) return

    if (!root1 && !root2) return

    if (!root1 || !root2) {
      result = false
      return
    }

    if (root1.val === root2.val) {
      isTwoTreeSymmetric(root1.left, root2.right)
      isTwoTreeSymmetric(root1.right, root2.left)
    } else {
      result = false
    }
  }

  isTwoTreeSymmetric(root.left, root.right)

  return result
}


/**
 * 题解
 * 1.其实最好想的第一种方法是先层序遍历，然后判断每层节点val的数组是否是对称的，只是实现起来有点麻烦
 * 2.用递归，递归的子结构其实就是判断两个节点是否相等，相等就接着递归处理子节点，分别对比a.left和b.right 以及 a.right和b.left
 */