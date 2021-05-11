/**
 * 
  Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

  Notice that you may not slant the container.
  https://leetcode-cn.com/problems/container-with-most-water/
 */

/**
 * 题解1：短板移动
 * 根据题意，可以很容易列出公式 S(容器蓄水量) = Math.min(leftValue, rightValue)*(right - left)
 * 如果我们在初始化的时候，将left置于0，right置于length-1，随着right-left的缩小(两个挡板向中间移动)
 * 要想使S变大，只能去提高Math.min(leftValue, rightValue)，而要使该值提高，去移动高位的挡板是不行的
 * 因为移动高位挡板，S只有变小的可能，所以只有移动低位挡板
 * 按照这个思路，来寻找可能的最大值
 * 
 * 类似题型的思路：思路很重要，第一点，一定要列公式，这里，面积的计算公式就是核心，根据公式很容易推导出思路
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (height.length === 0) return 0

  if (height.length === 1) return height[0]

  let result = 0
  let left = 0
  let right = height.length - 1
  while (left < right) {
    const leftValue = height[left]
    const rightValue = height[right]
    result = Math.max(result, (right - left) * Math.min(leftValue, rightValue))

    if (leftValue < rightValue) {
      left++
    } else {
      right--
    }
  }

  return result
}
