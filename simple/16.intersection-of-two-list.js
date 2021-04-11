/**
 * Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.
    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/intersection-of-two-linked-lists
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null

  let pointer1 = headA
  let pointer2 = headB

  while (pointer1 !== pointer2) {
    pointer1 = pointer1 === null ? headB : pointer1.next
    pointer2 = pointer2 === null ? headA : pointer2.next
  }

  return pointer1
}

/**
 * 题解
 * 画图，将A,B链表相交的部分和自己的部分分为三段,a为A链表head到交点，b为B链表head到交点，c为交点到终点
 * 则 a + c + b = b + c + a
 * 所以我们只需要用指针来表示这个移动过程就行了
 * 上面的代码就是这个思路的体现
 */