/**
 * Created by Administrator on 2018/6/6.
 */
/**给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
 * 你只可以看到在滑动窗口 k 内的数字。滑动窗口每次只向右移动一位。
 * 返回滑动窗口最大值。
 *
 * 示例:
 * 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
 * 输出: [3,3,5,5,6,7]
 * 解释:
 * 滑动窗口的位置                最大值
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 *  1 [3  -1  -3] 5  3  6  7       3
 *  1  3 [-1  -3  5] 3  6  7       5
 *  1  3  -1 [-3  5  3] 6  7       5
 *  1  3  -1  -3 [5  3  6] 7       6
 *  1  3  -1  -3  5 [3  6  7]      7
 * 注意：
 * 你可以假设 k 总是有效的，1 ≤ k ≤ 输入数组的大小，且输入数组不为空。
 * 进阶：
 * 你能在线性时间复杂度内解决此题吗？
 */

/**用一个栈保存一个对象{index: Number, index: Number}
 * 策略：
 *    right进数，如果nums[right]比stack尾部的value小，则放入stack
 *    否则stack尾部的值出栈，直到stack尾部的value比这个数大或者空为止
 *
 *    left出数，如果stack头部的index比left小，说明这个数不在窗口内了，头部的值出栈
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (!nums.length) return [];
  let result = [];
  let stack = [];
  let left = 0;
  let right = 0;
  let n = nums.length;

  //  初始化right的位置
  while (right < k) {
    if (!stack.length || stack[stack.length - 1].value > nums[right]) {
      stack.push({
        value: nums[right],
        index: right
      });
      right++;
    } else {
      stack.pop();
    }
  }
  result[left] = stack[0].value;

  //  窗口右移的时候
  while (right < n) {
    //  right右移的时候
    if (!stack.length || stack[stack.length - 1].value > nums[right]) {
      //  right右移
      stack.push({
        index: right,
        value: nums[right]
      });
    } else {
      stack.pop();
      continue;
    }

    console.log(stack, left)
    //  left右移
    left++;
    if (!stack.length || left > stack[0].index) {
      stack.shift();
    }
    console.log(stack, left)
    result[left] = stack[0].value;
    right++;
  }

  console.log(result)
  return result;
};

var arr = [1, 3, -1, -3, 5, 3, 6, 7], k = 3;
// var arr = [1,-1], k = 1;
maxSlidingWindow(arr, k)