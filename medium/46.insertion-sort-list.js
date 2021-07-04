/**
 * Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.

  The steps of the insertion sort algorithm:

  Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
  At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
  It repeats until no input elements remain.
  The following is a graphical example of the insertion sort algorithm. The partially sorted list (black) initially contains only the first element in the list. One element (red) is removed from the input data and inserted in-place into the sorted list with each iteration.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/insertion-sort-list
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
 * 题解：链表操作+画图
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  if (!head) return null

  const fakeHead = new ListNode()
  fakeHead.next = head

  let pre = head
  let pointer = head.next

  while (pointer !== null) {
    if (pre.val > pointer.val) {
      for (let tnode = fakeHead; tnode !== pre; tnode = tnode.next) {
        if (pointer.val < tnode.next.val) {
          const tnodeNext = tnode.next
          const pointerNext = pointer.next

          tnode.next = pointer
          pointer.next = tnodeNext

          pre.next = pointerNext

          pointer = pointerNext

          break
        }
      }
    } else {
      pre = pre.next
      pointer = pointer.next
    }
  }

  return fakeHead.next
}

// usecase
insertionSortList(generateList([4, 2, 1, 3]))
