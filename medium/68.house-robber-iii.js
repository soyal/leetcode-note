/**
 * 
  The thief has found himself a new place for his thievery again. There is only one entrance to this area, called root.

  Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that all houses in this place form a binary tree. It will automatically contact the police if two directly-linked houses were broken into on the same night.

  Given the root of the binary tree, return the maximum amount of money the thief can rob without alerting the police.
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
 * 题解：解法1 递归 + map存储
 * 类似于求一颗二叉树的累加和的问题
 * 思路就是拆解问题，将题目的问题转化成可递归的子问题
 * 
 * 这里拆解出的子问题就是怎么求一颗子树的最大和
 * 我们可以先分解状态，对于每个节点，有两种状态，一种是rob，一种是不rob，如果rob自身，那么左右子树的根节点不能被rob；如果不rob自身，那么左右节点可rob可不rob
 * 
 * 所以我们就有了第一种解法，根据父节点的状态，来决定以node为根节点的子树的结果怎么计算
 * 下面的题解用了map，是因为针对每颗子树，要根据isParentRobed进行两次递归，比较耗性能
 * 
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  const nodeMap = new Map()

  function robNode(node, isParentRobed) {
    if (!node) return 0

    if (!nodeMap.has(node)) {
      nodeMap.set(node, { 0: null, 1: null }) // 0:不偷 1: 偷
    }

    const currMap = nodeMap.get(node)

    if (isParentRobed) {
      if (currMap['0'] !== null) return currMap['0']
      const value = robNode(node.left, false) + robNode(node.right, false)
      currMap['0'] = value

      return value
    } else {
      if (currMap['1'] !== null) return currMap['1']

      const currRobAmount =
        robNode(node.left, true) + robNode(node.right, true) + node.val
      const currNoRobAmount =
        robNode(node.left, false) + robNode(node.right, false)

      const value = Math.max(currRobAmount, currNoRobAmount)
      currMap['1'] = value

      return value
    }
  }

  return robNode(root, false)
}

/**
 * 方法1的内存优化版本
 * 因为方法1里面，每次递归只能返回一种状态，为了计算两种情况，就要递归两次，非常耗费性能
 * 我们这里对递归逻辑进行优化，在一次递归中产出两种状态的结果，然后在最后才对这两种状态的结果做max运算
 * 
 * @param {TreeNode} root
 * @return {number}
 */
 var rob = function (root) {
  function robNode(node) {
      if (!node) return [0, 0]

      // 0: 不抢  1：抢
      const leftArr = robNode(node.left)
      const rightArr = robNode(node.right)

      const doRob = node.val + leftArr[0] + rightArr[0]
      const noRob = Math.max(leftArr[0], leftArr[1]) + Math.max(rightArr[0], rightArr[1])

      return [noRob, doRob]
  }

  const result = robNode(root)

  return Math.max(result[0], result[1])
};