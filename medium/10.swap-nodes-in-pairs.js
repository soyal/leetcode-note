/**
 * Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/swap-nodes-in-pairs
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
 * 题解1：非递归解法
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head) return null

  if (!head.next) return head

  const fakeHead = new ListNode()
  fakeHead.next = head
  let slow = fakeHead
  let quick = fakeHead.next.next

  while (quick) {
    const temp = quick.next
    quick.next = slow.next
    slow.next.next = temp
    slow.next = quick

    if (temp && temp.next) {
      quick = temp.next
      slow = slow.next.next
    } else {
      break
    }
  }

  return fakeHead.next
}

/**
 * 题解2：递归解法
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head
  }

  const next = head.next
  head.next = swapPairs(next.next)
  next.next = head

  return next
}
