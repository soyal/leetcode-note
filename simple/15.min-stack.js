/**
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

    Implement the MinStack class:

    MinStack() initializes the stack object.
    void push(val) pushes the element val onto the stack.
    void pop() removes the element on the top of the stack.
    int top() gets the top element of the stack.
    int getMin() retrieves the minimum element in the stack.

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/min-stack
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * initialize your data structure here.
 */
function Node(val, next, min) {
  this.val = val
  this.next = next
  this.min = min
}

var MinStack = function () {
  this.head = null
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (!this.head) {
    this.head = new Node(val, null, val)
  } else {
    this.head = new Node(val, this.head, Math.min(this.head.min, val))
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.head = this.head.next
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.head.val
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.head.min
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


 /**
  * 题解
  * 因为题目是要求我们构造一个栈，所以直接用api的栈的方式暂且放到一边，这里用链表来模拟栈
  * 关键点在于要在getMin的时候做到o(1)的时间复杂度，所以这个最小值应该在每次pop和push的时候计算出来
  * 注意上面题解中，Node的min属性。因为栈这个结构比较特殊，在当前node未出栈前，可以保证，它之前的node都不会出栈
  * 所以我们完全可以将当前node和它之前入栈的node中的最小值存储下来，当做以当前node为头结点的子栈的最小值，存储在min属性中
  */