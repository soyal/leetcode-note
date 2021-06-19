/**
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).

  A valid BST is defined as follows:

  The left subtree of a node contains only nodes with keys less than the node's key.
  The right subtree of a node contains only nodes with keys greater than the node's key.
  Both the left and right subtrees must also be binary search trees.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/validate-binary-search-tree
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
 * 题解：中序遍历
 * 这里有一个知识点：当你以中序遍历的方式去遍历一颗BTS的时候，你得到是一个升序数组
 * 因为BTS的定义是，你左边的子树永远比你本身小，而你右边的子树永远比你自身大，跟快排(分治法)的运行逻辑是一样的
 * 所以BST摊平就是一个有序的升序数组，而遍历这个“有序数组”的方式就是中序遍历
 * 
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let prevValue

  function __isValidBST(node) {
    if (!node) return true

    if (!__isValidBST(node.left)) return false

    if (prevValue !== undefined && prevValue >= node.val) {
      return false
    }
    prevValue = node.val

    return __isValidBST(node.right)
  }

  return __isValidBST(root)
}
