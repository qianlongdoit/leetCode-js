/**
 * Created by Administrator on 2018/6/7.
 */
/**设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。
 * push(x) -- 将元素 x 推入栈中。
 * pop() -- 删除栈顶的元素。
 * top() -- 获取栈顶元素。
 * getMin() -- 检索栈中的最小元素。
 *
 * 示例:
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> 返回 -3.
 * minStack.pop();
 * minStack.top();      --> 返回 0.
 * minStack.getMin();   --> 返回 -2.
 */


/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.minStack = [];
  this.left = 0;
  this.right = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  let stack = this.stack;
  let minStack = this.minStack;
  this.right++;
  if (!minStack.length || minStack[minStack.length - 1] < x) {
    minStack.push(x);
  }
  stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.left++;
  if (this.left > this.minStack[0].index) {
    this.minStack.pop();
  }
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.stack.pop();
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top());
console.log(minStack.getMin())
