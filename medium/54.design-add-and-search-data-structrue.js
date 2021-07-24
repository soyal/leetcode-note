/**
 * Design a data structure that supports adding new words and finding if a string matches any previously added string.

  Implement the WordDictionary class:

  WordDictionary() Initializes the object.
  void addWord(word) Adds word to the data structure, it can be matched later.
  bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/design-add-and-search-words-data-structure
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 题解：在trie树的基础上，search方法增加对"."的特殊处理
 * 难点在于递归和for循环的混合使用，需要重复练习
 * 
 * 在做这道题的时候，递归运用的不够熟练
 * 递归的思路，在于分解问题，将大问题拆解为小问题
 * 下面的题解中，搜索单词的方法被拆解成了两个问题：1.搜索确定的字符，2.搜索不确定的字符
 * 搜索确定的字符走正常的流程，搜索不确定的字符走递归流程
 * 
 * 明确递归的函数要返回什么，是理清递归的关键
 * 比如下面，我们的search函数，确定是要返回一个boolean来告诉我们是否能搜索到word的
 */
var WordDictionary = function () {
  this.root = {}
}

WordDictionary.prototype.addWord = function (word) {
  let cur = this.root
  for (const ch of word) {
    if (!cur[ch]) {
      cur[ch] = {}
    }
    cur = cur[ch]
  }
  cur.isEnd = true
}

WordDictionary.prototype.search = function (word, cur = this.root) {
  for (let i = 0; i < word.length; i++) {
    const char = word[i]

    if (char === '.') {
      for (const key in cur) {
        if (key === 'isEnd') continue

        if (this.search(word.slice(i + 1), cur[key])) {
          return true
        }
      }

      return false
    } else if (!cur[char]) {
      return false
    }

    cur = cur[char]
  }

  return cur.isEnd === true
}

const wordDictionary = new WordDictionary()

wordDictionary.addWord('ran')
wordDictionary.addWord('rune')
wordDictionary.addWord('runner')
wordDictionary.addWord('runs')
wordDictionary.addWord('add')
wordDictionary.addWord('adds')
wordDictionary.addWord('adder')
wordDictionary.addWord('addee')
wordDictionary.search('...s')
wordDictionary.search('....e.')
