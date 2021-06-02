function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

function generateList(arr) {
  const head = new ListNode(arr[0])
  let pointer = head

  for (let i = 1; i < arr.length; i++) {
    pointer.next = new ListNode(arr[i])
    pointer = pointer.next
  }

  return head
}

module.exports = generateList
