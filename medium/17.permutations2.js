/**
 * Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/permutations-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：回溯法
 * 跟16.permutations的解法非常类似，但是相比于上一道题，多了一个难点——去重
 * 
 * 拿[1,1,2]的输入举例
 * 如果我们还按照上一题的思路去做，得到的解为[1,1,2],[1,1,2],[1,2,1],[2,1,1],[2,1,1]
 * 从结果出发，当然可以采用如Set之类的方式，去进行结果的去重，但是毫无疑问，程序的时间复杂度会被拔高，所以我们需要去思考一个更合理的方案
 * 
 * 怎么做？先画图，这里直接借用了别人做好的图 imgs/17-1.png
 * 观察这个回溯的路径图之后，其实可以比较明显地看到，满足下列的判断，就该跳过该回溯分支
 *  i > 0 && currNum === sortedNums[i - 1] && !visited[`${i - 1}-${currNum}`]
 * 
 * 当然，为了让其满足剪枝的条件，需要先进行一轮排序
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = []
  const sortedNums = nums.sort((num1, num2) => num1 - num2)

  function backtrace(visited, temp) {
    if (temp.length === sortedNums.length) {
      result.push(temp.slice())
      return
    }

    for (let i = 0; i < sortedNums.length; i++) {
      const currNum = sortedNums[i]
      const numKey = `${i}-${currNum}`
      if (visited[numKey]) continue

      if (
        i > 0 &&
        currNum === sortedNums[i - 1] &&
        !visited[`${i - 1}-${currNum}`]
      )
        continue

      visited[numKey] = true
      temp.push(currNum)
      backtrace(visited, temp)
      temp.pop()
      visited[numKey] = false
    }
  }

  backtrace({}, [])

  return result
}

// use case
permuteUnique([1, 1, 2])
