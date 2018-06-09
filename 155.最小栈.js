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


/**可以这样设计，用一个栈来记录最小值，如下规则
 *    1.push时如果栈为空，则把数组index及value放入栈中；
 *    2.------如果栈不为空，比较当前栈顶元素，如果比栈顶元素小，则放入栈中，否则无视；
 *    3.pop时，比较数组长度和栈顶元素的index，如果index > length - 1则说明当前栈顶元素过期了，栈顶元素弹出，
 *      否则栈顶元素仍然是当前最小值
 *
 *  优化空间：
 *    不用存value，存index即可。
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.arr = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  let stack = this.stack;
  let arr = this.arr;

  if (!stack.length || arr[stack[stack.length - 1]] > x) {
    stack.push(arr.length);
  }
  arr.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let stack = this.stack;
  let arr = this.arr;
  if (stack.length && stack[stack.length - 1] >= arr.length - 1) {
    stack.pop();
  }
  arr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.arr[this.arr.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  let stack = this.stack;
  return this.arr[stack[stack.length - 1]];
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
