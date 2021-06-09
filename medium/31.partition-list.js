/**
 * Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

  You should preserve the original relative order of the nodes in each of the two partitions.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/partition-list
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
 * 题解：链表
 * 链表的题注意及时切断引用和遍历方式，都比较简单
 * 这里思路其实很清晰，就是创建两条新的链表，一条存放小于x的节点，一条存放大于等于x的节点，遍历完成后，将两条链表组合即可
 * 
 * 只是最后要注意切断greater那一组和之后节点的联系
 * 
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (!head) return null

  const fakeLessHead = new ListNode()
  const fakeGreaterHead = new ListNode()
  let lessPointer = fakeLessHead
  let greaterPointer = fakeGreaterHead

  for (let pointer = head; pointer !== null; pointer = pointer.next) {
    if (pointer.val < x) {
      lessPointer.next = pointer
      lessPointer = lessPointer.next
    } else {
      greaterPointer.next = pointer
      greaterPointer = greaterPointer.next
    }
  }

  greaterPointer.next = null // 切断greater那一组和下一个节点的联系
  lessPointer.next = fakeGreaterHead.next

  return fakeLessHead.next
}
