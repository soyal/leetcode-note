/**
 * Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

  A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function buildSubBST(_nums) {
    if (_nums.length === 0) return null

    const centerIndex = parseInt(_nums.length / 2)
    const _root = new TreeNode(_nums[centerIndex])
    const _left = buildSubBST(_nums.slice(0, centerIndex))
    const _right = buildSubBST(_nums.slice(centerIndex + 1))

    _root.left = _left
    _root.right = _right

    return _root
  }

  return buildSubBST(nums)
}

/**
 * 题解
 * 首先要明白什么是二叉搜索树
 * 二叉搜索树：left < root, right > root
 * 题目给了一个升序数组，而一颗平衡的二叉搜索树，将其拍平成一条线，就是一个升序数组
 * 所以这道题，就是将这条拍平的线，还原成二叉搜索树
 * 这道题递归的核心，就在于递归找数组中点，然后将其设置为每颗子树的根节点
 */