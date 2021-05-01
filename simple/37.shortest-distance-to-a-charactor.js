/**
 * Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.

  The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/shortest-distance-to-a-character
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 解法1：先记录每个c的位置，然后计算每个位置跟每个c的相对距离，取最小值
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const cIndexes = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === c) {
      cIndexes.push(i);
    }
  }

  const result = Array(s.length);
  for (let i = 0; i < s.length; i++) {
    result[i] = Math.min(
      ...cIndexes.map((cIndex) => {
        return Math.abs(cIndex - i);
      })
    );
  }

  return result;
};


/**
 * 解法2：双循环，先正向循环，然后反向循环
 * 正向循环先算出部分元素与它前面的c的相对距离，反向循环再来一次，两个相对距离取最小值
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
 var shortestToChar = function(s, c) {
    
  let prevIndex
  const result = Array(s.length)

  for(let i=0;i<s.length;i++) {
      const char = s[i]
      if(char === c) {
          prevIndex = i
          result[i] = 0
      } else if(prevIndex !== undefined) {
          result[i] = Math.abs(prevIndex - i)
      } else {
          result[i] = Infinity
      }
  }

  for(let i=s.length - 1;i>=0;i--) {
      const char = s[i]
      if(char === c) {
          prevIndex = i
      } else {
          result[i] = Math.min(Math.abs(prevIndex - i), result[i])
      }
  }

  
  return result
};