/**
 * Given the head of a linked list, rotate the list to the right by k places.
 * https://leetcode-cn.com/problems/rotate-list/
 */

/**
 * 题解：双指针
 * 其实就是普通的双指针问题，只是多了点条件，就是传入的K可能是 >= LinkedList.length的
 * 所以我们需要预先去计算一下链表的长度，然后取模
 * 
 * 接下来就是正常的快慢指针来取倒数第k-1个元素的正常操作
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) return null

  let len = 0
  let pointer = head
  while (pointer) {
    pointer = pointer.next
    len++
  }

  let rotateK = k % len

  if (rotateK === 0) return head

  let quick = head
  let slow = head
  while (quick.next) {
    quick = quick.next
    if (rotateK === 0) {
      slow = slow.next
    } else {
      rotateK--
    }
  }

  const newHead = slow.next
  slow.next = null
  quick.next = head

  return newHead
}

// use case
const generateList = require('../utils/generate-link-list')
rotateRight(generateList([1, 2, 3, 4, 5]), 2)
