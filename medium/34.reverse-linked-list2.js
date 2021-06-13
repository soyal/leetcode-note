/**
 * Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/reverse-linked-list-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
/**
 * 题解：先确认left,right的位置，然后用传统写法将left right之间的局部链表反转
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  if (!head) return null

  const fakeHead = new ListNode()
  fakeHead.next = head

  let right = fakeHead
  let left = fakeHead

  const rightLeftDistance = n - m
  for (let i = 1; i <= n; i++) {
    right = right.next
    if (i - 2 >= rightLeftDistance) {
      left = left.next
    }
  }

  function reverseList(_head, _tail) {
    let pre = null
    let pointer = _head
    let isEnd = false
    while (pointer) {
      if (pointer === _tail) isEnd = true
      if (pre) {
        const nextPointer = pointer.next
        pointer.next = pre
        pre = pointer
        pointer = nextPointer
      } else {
        pre = pointer
        pointer = pointer.next
      }

      if (isEnd) break
    }
    return _tail
  }

  const tail = left.next
  const tailNext = right.next
  left.next = reverseList(left.next, right)
  tail.next = tailNext

  return fakeHead.next
}

/**
 * 题解：双指针+头插法
 * 先保持left right差一位，比如left在1，right在2，然后将两个指针保持相对位置，然后将left移动到m的前一位
 * 接下来要做的事情就是想将right右边的元素不断移动到left的直接右侧，移动m-n次即可
 * 
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween2 = function (head, m, n) {
  if (!head) return null

  const fakeHead = new ListNode()
  fakeHead.next = head

  let left = fakeHead
  let right = left.next
  for (let i = 1; i < m; i++) {
    left = left.next
    right = right.next
  }

  for (let count = 1; count <= n - m; count++) {
    const rightNext = right.next
    if (!rightNext) break
    const rightNextNext = rightNext.next
    const originLeftNext = left.next
    left.next = rightNext
    rightNext.next = originLeftNext
    right.next = rightNextNext
  }

  return fakeHead.next
}

// use case
const getLST = require('../utils/generate-link-list')
const list = getLST([1, 2, 3, 4, 5])
reverseBetween2(list, 2, 4)
