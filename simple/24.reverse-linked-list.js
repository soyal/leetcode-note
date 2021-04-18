/**
 * 
  Given the head of a singly linked list, reverse the list, and return the reversed list.
  https://leetcode-cn.com/problems/reverse-linked-list/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return null

  if (!head.next) return head

  const reversedHead = reverseList(head.next)
  head.next.next = head
  head.next = null

  return reversedHead
}

/**
 * 题解
 * 常规的迭代思路就不多讲了，两个指针，一个记录prev，一个记录当前，不停翻转就行了
 * 上面的例子用的是递归的思路，递归到最后一个节点后，才开始作next的翻转，然后从最后一个节点修改到第一个
 */