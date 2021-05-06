/**
 * Given a string s, find the length of the longest substring without repeating characters

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解1：滑动窗口
 * 核心思路是用两个指针，之间的区域为窗口范围，for循环更新right，依据hashmap中是否有相应的记录，来更新左侧
 * 用一个hashmap来记录每个字符与其索引，有一个点需要注意，窗口左侧更新时，需要取Math.max(dict[char],left)
 * 比如abba，当left移动到index=2，也就是第二个b的时候，进入下一个循环，index=3，这个a会命中dict['a'] = 0,如果没有上面的约束，则会出现left=1的情况，也就是窗口往左走
 * 
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length

  const dict = {}

  let quick = 0
  let slow = 0
  let result = 0

  for (; quick < s.length; quick++) {
    const charac = s[quick]

    if (dict[charac] !== undefined) {
      slow = Math.max(dict[charac] + 1, slow)
    }
    dict[charac] = quick

    result = Math.max(result, quick - slow + 1)
  }

  return result
}
