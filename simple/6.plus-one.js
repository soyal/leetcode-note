/**
 * Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

    The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

    You may assume the integer does not contain any leading zero, except the number 0 itself.

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/plus-one
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

  let increment = 1

  const result = []
  for(let i=digits.length - 1;i>=0;i--) {
      const currDigit = digits[i]
      const currSum = currDigit + increment

      increment = 0
      if(currSum === 10) {
          increment = 1
          result.push(0)
      } else {
          result.push(currSum)
      }
  }

  if(increment > 0) {
      result.push(increment)
  }

  return result.reverse()
};

/**
 * 题解
 * 没有太多可讲的，就是一道逻辑题，用程序表述小学的加法运算
 */