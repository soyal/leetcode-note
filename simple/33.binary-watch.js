/**
 * A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59). Each LED represents a zero or one, with the least significant bit on the right.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/binary-watch
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  const hours = [1, 2, 4, 8]
  const minutes = [1, 2, 4, 8, 16, 32]

  const result = []

  function readBinaryWatchRecursive(
    _turnedOn,
    tempHours,
    tempMinutes,
    hourStartIndex,
    minuteStarIndex
  ) {
    if (_turnedOn === 0) {
      result.push(
        `${tempHours}:${tempMinutes > 9 ? tempMinutes : '0' + tempMinutes}`
      )
      return
    }

    for (let i = minuteStarIndex; i < minutes.length; i++) {
      const currMinute = minutes[i]
      if (currMinute + tempMinutes <= 59) {
        readBinaryWatchRecursive(
          _turnedOn - 1,
          tempHours,
          tempMinutes + currMinute,
          hourStartIndex,
          i + 1
        )
      }
    }

    for (let i = hourStartIndex; i < hours.length; i++) {
      const currHour = hours[i]
      if (currHour + tempHours <= 11) {
        readBinaryWatchRecursive(
          _turnedOn - 1,
          tempHours + currHour,
          tempMinutes,
          i + 1,
          minutes.length
        )
      }
    }
  }

  readBinaryWatchRecursive(turnedOn, 0, 0, 0, 0)

  return result
}

/**
 * 题解
 * 回溯法
 * 可以把minute和hour合成一个数组来看，但是在处理上要做对应的调整
 */
