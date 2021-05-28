/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.

  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/group-anagrams
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解1：排序
 * 遍历每个字符串，将其排序，排序结果相同的归为一组
 * 
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const result = []
  const sortedGroupPattern = []

  function groupStr(str) {
    const sortedStr = str.split('').sort().join('')

    for (let i = 0; i < sortedGroupPattern.length; i++) {
      if (sortedGroupPattern === sortedStr) {
        result[i].push(str)
        return
      }
    }

    sortedGroupPattern.push(sortedStr)
    result.push([str])
  }

  strs.forEach((str) => {
    groupStr(str)
  })

  return result
}

/**
 * 题解2：计数
 * 核心思路为统计每个字符串，每个字符出现的次数（因为题目给定了英文），字符出现频率相同的为一组
 * 
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    
  const hashtable = {}

  function groupStr(str) {
      const counts = Array(26).fill(0)

      for(let i=0;i<str.length;i++) {
          counts[str.charCodeAt(i) - 'a'.charCodeAt(0)] ++
      }

      const key = counts.join('-')
      if(!hashtable[key]) {
          hashtable[key] = []
      }
      hashtable[key].push(str)
  }

  strs.forEach(str => {
      groupStr(str)
  })

  return Object.keys(hashtable).map(key => {
      return hashtable[key]
  })
};

// use case
groupAnagrams(["eat","tea","tan","ate","nat","bat"])