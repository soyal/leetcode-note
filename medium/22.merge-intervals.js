/**
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/merge-intervals
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：排序 + 合并
 * 核心思路：将区间按照interval[0]的大小进行排序，然后将排序后的区间进行合并
 * 只有排序之后我们才能比较方便地进行区间合并
 * 
 * 合并思路：
 * 排序之后，有intervals[i]和intervals[i+1]，只要intervals[i+1][0] <= intervals[i][1]，也就是后一个区间的起始点 <= 前一个区间的结束点
 * 则两个区间可以合并为 [intervals[i][0], Math.max(intervals[i][1], intervals[i+1][1])]
 * 之后就是将合并的结果推入result，收工
 * 
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort()

  const result = []

  let i = 0
  while (i < intervals.length) {
    const interval = intervals[i]

    let end = interval[1]

    let j = i + 1
    while (j < intervals.length && intervals[j][0] <= end) {
      end = Math.max(end, intervals[j][1])
      j++
    }
    result.push([interval[0], end])
    i = j
  }

  return result
}

// use case
merge([[1,3],[2,6],[8,10],[15,18]])