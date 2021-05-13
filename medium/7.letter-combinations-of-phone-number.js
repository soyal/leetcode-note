/**
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


/**
 * 题解：回溯法
 * 这是一道比较直接的用回溯法来解决的题目
 * 我们可以稍微简化下这个题目，就是给定n个组合，比如['abc', 'def', 'ghi']等，求所有元素排列组合的结果
 * 我们这里用递归来实现这个回溯
 * 每一层递归，就往tempArr里面塞一个字符，直到递归层级大于了digits.length - 1，我们就把tempArr里面的结果装进result里面
 * 
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return []

  const digitMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }

  const result = []
  function backtrace(index, tempArr) {
    if (index === digits.length) {
      result.push(tempArr.join(''))
      return
    }

    const digit = digits[index]
    const chars = digitMap[digit]

    for (let i = 0; i < chars.length; i++) {
      const currChar = chars[i]
      tempArr.push(currChar)
      backtrace(index + 1, tempArr)
      tempArr.pop()
    }
  }

  backtrace(0, [])

  return result
}
