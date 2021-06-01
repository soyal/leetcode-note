/**
 * The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

  By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

  "123"
  "132"
  "213"
  "231"
  "312"
  "321"
  Given n and k, return the kth permutation sequence.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/permutation-sequence
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


/**
 * 题解：回溯+剪枝
 * 
 * 正常思路肯定是想要跟全排列(16.permutations)那道题类似，先求出全排列，然后返回result[k]
 * 但是在求解过程中不难发现，其实很多分支我们是可以直接跳过的
 * 拿 n=4 举例，其中 第一位分别为1,2,3,4的时候，对应了k为[1,6],[7,12],[13,18],[19,24]的情况
 * 所以，如果k=9，那么我们直接可以确定第一位为1的情况可以跳过
 * 
 * 同样的，已经确定了第一位为2，那么问题就已经等价于求[1,3,4]的第 k - 6个排列
 * 依次类推
 * 
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  function jieCheng(target) {
    if (target === 0) return 1

    let result = 1
    while (target > 1) {
      result = result * target
      target--
    }

    return result
  }

  let result
  const arr = Array(n)
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1
  }
  function backtrace(temp, visited, level, currK) {
    if (temp.length === n) {
      result = temp.join('')
      return
    }

    const jumpDistance = jieCheng(n - level)
    let jumpCount = 0

    for (let i = 0; i < arr.length; i++) {
      const currNum = arr[i]
      if (visited[currNum]) continue

      jumpCount++
      const distance = jumpCount * jumpDistance
      if (distance < currK) continue

      visited[currNum] = true
      temp.push(currNum)
      backtrace(
        temp,
        visited,
        level + 1,
        currK - jumpDistance * (jumpCount - 1)
      )
    }
  }

  backtrace([], {}, 1, k)

  return result
}

// use case
getPermutation(3, 2)
