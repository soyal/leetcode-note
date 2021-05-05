/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

  You may assume the two numbers do not contain any leading zero, except the number 0 itself.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/add-two-numbers
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 题解
 * 逻辑题，考察加法运算原理以及链表操作，没太多好讲的
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let p1 = l1
  let p2 = l2

  let increment = 0

  const resultHead = new ListNode()
  let resultPointer = resultHead

  while (p1 || p2) {
    let currResult = 0
    if (!p1) {
      currResult = p2.val + increment
      p2 = p2.next
    } else if (!p2) {
      currResult = p1.val + increment
      p1 = p1.next
    } else {
      currResult = p1.val + p2.val + increment
      p1 = p1.next
      p2 = p2.next
    }

    if (currResult >= 10) {
      currResult = currResult - 10
      increment = 1
    } else {
      increment = 0
    }

    resultPointer.next = new ListNode(currResult)
    resultPointer = resultPointer.next
  }

  if (increment) {
    resultPointer.next = new ListNode(increment)
  }

  return resultHead.next
}
