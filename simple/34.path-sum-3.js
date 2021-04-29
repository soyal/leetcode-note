/**
 * Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

  The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/path-sum-iii
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  const hashmap = {
    0: 1,
  };

  let result = 0;

  function recur(node, submap, prefixSum) {
    if (!node) return;

    const currSum = prefixSum + node.val;

    if (submap[currSum - targetSum]) {
      result += submap[currSum - targetSum];
    }

    submap[currSum] = (submap[currSum] || 0) + 1;
    recur(node.left, submap, currSum);
    recur(node.right, submap, currSum);
    submap[currSum] = submap[currSum] - 1;
  }

  recur(root, hashmap, 0);

  return result;
};

/**
 * 题解
 * 这题有两种方式，一种是双递归，比较好理解，不详细展开
 * 还有一种就是前缀和，核心目的就是利用空间换时间，不用重复递归，也就是上面代码中使用的算法
 * 核心理清楚几个问题：
 * 1.什么是前缀和
 * 比如都是左节点的一棵树，从上往下依次是 1 -> 2 -> 3，那么前缀和依次是 1 -> 3 -> 6
 * 2.前缀和有什么用
 * 如果 a -> b -> c -> d的树，prefixSum(d) - prefixSum(b) 差为x，则说明 c -> d两个节点的值的和为x
 * 我们利用这一特性，可以先将每个节点的前缀和，以及同一个前缀和对应的不同节点的数量，存进hashmap，然后每遍历
 * 一个节点，就从hashmap中查找 hashmap[currSum - target]的值，即能得出当前节点往上回溯，所能得到的节点和等于
 * target的路径数量
 * 3.要及时删除hashmap中不属于当前子树的前缀和结果
 * 在回溯法中，我们都知道，每退出一个递归分支，都要清空该递归分支所缓存的部分值，在这里也是一样的
 * 如果不清空的话，在递归a.right的时候，a.left的结果前缀和缓存也会被带过去 
 */