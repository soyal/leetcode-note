/**
 * A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

  Implement the Trie class:

  Trie() Initializes the trie object.
  void insert(String word) Inserts the string word into the trie.
  boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
  boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/implement-trie-prefix-tree
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * 题解：数据结构 Trie树
 */

/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.children = {}
}

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.children

  for (const char of word) {
    if (!node[char]) {
      node[char] = {}
    }

    node = node[char]
  }

  node.isEnd = true
}

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.children
  for (const char of word) {
    if (node[char] === undefined) return false
    node = node[char]
  }

  return node.isEnd === true
}

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.children
  for (const char of prefix) {
    if (node[char] === undefined) return false
    node = node[char]
  }

  return true
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
