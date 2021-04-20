/**
 * Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

  Implement the MyQueue class:

  void push(int x) Pushes element x to the back of the queue.
  int pop() Removes the element from the front of the queue and returns it.
  int peek() Returns the element at the front of the queue.
  boolean empty() Returns true if the queue is empty, false otherwise.
  Notes:

  You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
  Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
  Follow-up: Can you implement the queue such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/implement-queue-using-stacks
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.inStack = [];
  this.outStack = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inStack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  this.__transmitToOut();
  return this.outStack.pop();
};

MyQueue.prototype.__transmitToOut = function () {
  if (this.outStack.length !== 0) return;

  while (this.inStack.length > 0) {
    this.outStack.push(this.inStack.pop());
  }
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  this.__transmitToOut();
  return this.outStack[this.outStack.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.inStack.length === 0 && this.outStack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

/**
 * 题解
 * 本题要求的是用两个栈来实现一个队列，难点在于怎么以一个先入后出的结构，实现先入先出的特性
 * 要让栈底部的元素，能够被弹出，必定要让之后入栈的所有元素先出栈，所以在解法上，我们必定在某个时间点，需要将一个栈的数据推到另一个栈
 * 而这个时间点，必定是需要读取最前面元素的时候，即peek和pop操作
 * 按照这样的思路，其实本题已经不难解出来了
 */