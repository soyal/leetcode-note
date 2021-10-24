/**
 * You are given two jugs with capacities jug1Capacity and jug2Capacity liters. There is an infinite amount of water supply available. Determine whether it is possible to measure exactly targetCapacity liters using these two jugs.

  If targetCapacity liters of water are measurable, you must have targetCapacity liters of water contained within one or both buckets by the end.

  Operations allowed:

  Fill any of the jugs with water.
  Empty any of the jugs.
  Pour water from one jug into another till the other jug is completely full, or the first jug itself is empty.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/water-and-jug-problem
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：数学法
 * 我们这里不用dfs的方式，因为会超时
 * 所谓的dfs的方式，就是将每一步两个水壶的所有状态都枚举出来，然后递归地去更改每个状态节点，直到达成期望的状态
 * 
 * 将题目的描述转化为数学公式，就是ax + by = z
 * 其中, x,y表示壶的容量，z表示目标的容量,ab为a壶1和壶2 填满水或者倒水的次数
 * 引入一个定理：ax + by = z，其中x,y,z都为整数，要使该方程有解，当且仅当z为x,y最大公约数的倍数
 * 
 * 然后下面的代码都是依据这个公式列出来的
 * 
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
var canMeasureWater = function (jug1Capacity, jug2Capacity, targetCapacity) {
  if (jug1Capacity + jug2Capacity < targetCapacity) return false

  function findGYS(a, b) {
    let smaller = Math.min(a, b)

    while (smaller > 0) {
      if (a % smaller === 0 && b % smaller === 0) return smaller

      smaller -= 1
    }

    return smaller
  }

  const gys = findGYS(jug1Capacity, jug2Capacity)

  return targetCapacity % gys === 0
}
