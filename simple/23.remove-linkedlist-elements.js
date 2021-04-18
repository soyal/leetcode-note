/**
 * Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/remove-linked-list-elements
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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) return null

  const fakeHead = new ListNode(undefined, head)

  let pointer = fakeHead
  while (pointer && pointer.next) {
    const currNode = pointer.next
    if (currNode.val === val) {
      pointer.next = currNode.next
    } else {
      pointer = pointer.next
    }
  }

  return fakeHead.next
}

/**
 * 题解
 * 很简单的题，没啥好讲的，注意虚拟节点的设置，可以省掉很多冗余逻辑
 */