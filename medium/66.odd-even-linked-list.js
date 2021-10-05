/**
 * Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

  The first node is considered odd, and the second node is even, and so on.

  Note that the relative order inside both the even and odd groups should remain as it was in the input.

  You must solve the problem in O(1) extra space complexity and O(n) time complexity.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/odd-even-linked-list
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
 * 题解: 链表操作
 * 链表的题其实都没有特别的技巧，都是在考察对于链表这个数据结构的操作熟练度
 * 这里的要点，就是在从头到尾的遍历中，不断地将当前pointer的next设置为pointer.next.next
 * 
 * 最后再把两条链表拼接在一起
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head || !head.next) return head

  let oddHead = head
  let oddTail = null
  let evenHead = head.next

  let isOdd = true
  let pointer = head
  for (; pointer !== null; ) {
    const nPointer = pointer.next
    if (nPointer) {
      pointer.next = nPointer.next
    } else {
      pointer.next = null
    }

    if (isOdd) {
      oddTail = pointer
    }

    isOdd = !isOdd

    pointer = nPointer
  }

  oddTail.next = evenHead

  return oddHead
}
