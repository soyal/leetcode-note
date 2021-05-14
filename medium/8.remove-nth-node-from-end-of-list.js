/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.

  Follow up: Could you do this in one pass?

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list
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
 * 题解：双指针
 * 在链表中，要求倒数第几个元素，肯定首选双指针
 * 两指针间隔 n - 1的距离，在quick到达结尾，那么slow必然满足条件
 * 
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const fakeHead = new ListNode()
  fakeHead.next = head

  let quick = fakeHead
  let slow = fakeHead

  let count = n - 1

  while (quick.next.next) {
    quick = quick.next
    if (count > 0) {
      count--
    } else {
      slow = slow.next
    }
  }

  slow.next = slow.next.next

  return fakeHead.next
}
