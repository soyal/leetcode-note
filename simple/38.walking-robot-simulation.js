/**
 * A robot on an infinite XY-plane starts at point (0, 0) and faces north. The robot can receive one of three possible types of commands:

  -2: turn left 90 degrees,
  -1: turn right 90 degrees, or
  1 <= k <= 9: move forward k units.
  Some of the grid squares are obstacles. The ith obstacle is at grid point obstacles[i] = (xi, yi).

  If the robot would try to move onto them, the robot stays on the previous grid square instead (but still continues following the rest of the route.)

  Return the maximum Euclidean distance that the robot will be from the origin squared (i.e. if the distance is 5, return 25).



  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/walking-robot-simulation
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  let direct = 0; // n s w e
  let pos = [0, 0];
  const obMap = {};
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  let result = 0;

  obstacles.forEach((ob) => {
    const x = ob[0];
    const y = ob[1];
    obMap[`${x},${y}`] = true;
  });

  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];

    if (command < 0) {
      if (command === -1) {
        direct = (direct + 1) % 4;
      } else if (command === -2) {
        direct = (direct - 1 + 4) % 4;
      }
    } else if (command > 0) {
      for (let j = 0; j < command; j++) {
        const rx = pos[0] + dx[direct];
        const ry = pos[1] + dy[direct];

        if (obMap[`${rx},${ry}`]) break;

        pos[0] = rx;
        pos[1] = ry;

        const currResult = Math.pow(pos[0], 2) + Math.pow(pos[1], 2);
        result = Math.max(result, currResult);
      }
    }
  }

  return result;
};

/**
 * 题解
 * 逻辑题，没有技巧，可以借鉴的是上面对于方向的处理逻辑，最好是拆成数字运算，不要用自然语言思维
 */