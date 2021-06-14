/**
 * Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/unique-binary-search-trees-ii
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
 * 题解：回溯法
 * 第一反应应该都能想到回溯法，只是这里的处理需要一点技巧
 * BTS的特性是左子树比根节点小，而右子树比根节点大，其实摊平就是一个升序数组，所以我们将一个升序数组还原成一组BTS也不是难事
 * 也就是我们需要一个函数，传入一个数值范围如[1,3]，然后返回这个[1,3]这个区间中的三个数字所组成的所有子树
 * 函数的具体实现可以参考下面的代码
 * 处理流程就是遍历数组，然后取i为根节点，[1,i)为左子树集合，(i,n]为右子树集合，最后将两个集合做一个笛卡尔积，就是最后的结果
 * 
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  function generateTreesByRange(start, end) {
    if (start > end) return [null]

    const trees = []
    for (let i = start; i <= end; i++) {
      const leftSubTrees = generateTreesByRange(start, i - 1)
      const rightSubTrees = generateTreesByRange(i + 1, end)

      for (let l = 0; l < leftSubTrees.length; l++) {
        for (let r = 0; r < rightSubTrees.length; r++) {
          const subRoot = new TreeNode(i)
          subRoot.left = leftSubTrees[l]
          subRoot.right = rightSubTrees[r]
          trees.push(subRoot)
        }
      }
    }

    return trees
  }

  const result = generateTreesByRange(1, n)

  return result
}
