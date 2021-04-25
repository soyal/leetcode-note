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
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  const hours = [1, 2, 4, 8]
  const minutes = [1, 2, 4, 8, 16, 32]

  const result = []
  function readBinaryWatchRecurse(
    _turnedOn,
    visitedHours,
    visitedMinutes,
    hourResult,
    minuteResult,
    startHourIndex,
    startMinuteIndex
  ) {
    if (_turnedOn === 0) {
      result.push(
        `${hourResult}:${minuteResult > 9 ? minuteResult : '0' + minuteResult}`
      )
      return
    }

    for (let i = startMinuteIndex; i < minutes.length; i++) {
      const currMinute = minutes[i]
      if (!visitedMinutes[currMinute]) {
        if (minuteResult + currMinute > 59) break

        minuteResult = minuteResult + currMinute
        visitedMinutes[currMinute] = true
        readBinaryWatchRecurse(
          _turnedOn - 1,
          visitedHours,
          visitedMinutes,
          hourResult,
          minuteResult,
          startHourIndex,
          startMinuteIndex + 1
        )
        minuteResult = minuteResult - currMinute
        delete visitedMinutes[currMinute]
      }
    }

    for (let i = startHourIndex; i < hours.length; i++) {
      const currHour = hours[i]
      if (!visitedHours[currHour]) {
        if (hourResult + currHour > 11) break
        hourResult = hourResult + currHour
        visitedHours[currHour] = true
        readBinaryWatchRecurse(
          _turnedOn - 1,
          visitedHours,
          visitedMinutes,
          hourResult,
          minuteResult,
          startHourIndex + 1,
          startMinuteIndex
        )
        hourResult = hourResult - currHour
        delete visitedHours[currHour]
      }
    }
  }

  readBinaryWatchRecurse(turnedOn, {}, {}, 0, 0, 0, 0)

  return result
}

readBinaryWatch(2)
