/**
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

  According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree
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
 * 题解：递归
 * 对于我们设计的函数来讲 输入一棵树和两个节点，其结果有四种情况
 * null: p,q均不在该树中
 * q: q在该树中，p可能是q的子孙，也可能不在
 * p: p在该树中，q可能是p的子孙，也可能不在
 * root: root为p,q公共祖先
 * 
 * 所以我们先判断root是否等于pq中的一个，等于就直接返回（不用判断pq是否都在这棵树中，如果该树是完整的树，那么无论root等于pq中的谁，直接返回即可；而如果该树是一颗子树，
 * 也可以通过另外一颗子树的返回结果知晓公共祖先在哪儿）
 * 如果root不为pq中的任意一个节点，那么就递归对左子树和右子树调用该函数
 * ...
 * 
 * 这道题考察的是递归的应用，难点在于设计递归函数的返回值
 * 
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) {
    return null
  }

  if (root === q || root === p) {
    return root
  }

  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  if (left && right) {
    return root
  } else if (left) {
    return left
  } else if (right) {
    return right
  }

  return null
}
