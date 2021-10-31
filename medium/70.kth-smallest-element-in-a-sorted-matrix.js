/**
 * Given an n x n matrix where each of the rows and columns are sorted in ascending order, return the kth smallest element in the matrix.

  Note that it is the kth smallest element in the sorted order, not the kth distinct element.
  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：矩阵 二分
 * 从题目中的已知条件，可以快速得出信息
 * 矩阵中所有元素的大小范围在[matrix[0,0], matrix[n-1][n-1]]之间，我们记最小值为min，最大值为max
 * 我们转换下求解条件，只要解出x，满足条件： 在矩阵中，数值在[min, x]的区间内的元素有k个，且x在矩阵中，则得出结果
 * 我们利用二分法求出x让处于区间的元素为k个并不难，但是关键在于怎么理解用二分法得出的结果x一定在矩阵中
 * 
 * 如果很难理解，不如换个思路，在数组的二分查找中，left right的收敛一定会落到数组中的某个元素身上
 * 而矩阵，就是很多个数组
 * 
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(matrix, k) {
  const n = matrix.length
  function countNotGreaterThanMid(mid) {
      let result = 0
      for(let i=0;i<n;i++) {
          const first = matrix[i][0]
          const last = matrix[i][n-1]
          if(mid < first) continue
          if(mid >= last) {
              result +=n
              continue
          }

          for(let j=0;j<n;j++) {
              const num = matrix[i][j]
              if(num > mid) {
                  result += j
                  break
              }
          }
      }
      return result
  }

  let left = matrix[0][0]
  let right = matrix[n-1][n-1]

  while(left < right) {
      const mid = Math.floor((left + right)/2)
      const notGreaterCount = countNotGreaterThanMid(mid)
      if(notGreaterCount >= k) {
          right = mid
      } else {
          left = mid + 1
      }
  }

  return right
};