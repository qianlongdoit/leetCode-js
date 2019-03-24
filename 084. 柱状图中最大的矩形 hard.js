/**
 * Created by doit on 2019/3/24.
 */

/**给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
 *
 * 求在该柱状图中，能够勾勒出来的矩形的最大面积。
 * 以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。
 * 示例:
 *
 * 输入: [2,1,5,6,2,3]
 * 输出: 10
 *
 */

/**解题关键，单调栈
 * 类似题目 085
 * 类似题目案例，简单版
 *
 * 题目是这样的，给一个数组，返回一个大小相同的数组。返回的数组的第i个位置的值应当是，
 * 对于原数组中的第i个元素，至少往右走多少步，才能遇到一个比自己大的元素
 * （如果之后没有比自己大的元素，或者已经是最后一个元素，则在返回数组的对应位置放上-1）。
 * 输入: [5, 3, 1, 2, 4]
 * 输出: [-1, 3, 1, 1, -1]
 * 解题思路就是维护单调递减的栈，栈中存原数组的index
 * 碰到比栈尾数大的时候，弹出栈，栈的单调递增性质
 * 每次弹出的时候，index的差值就是向右走多少步
 *
 * 回过头来看此题
 * 同样维护单调递增的栈，
 * 碰到比栈尾小的数，则弹出，
 * 这时候我们可以知道以弹出元素为矩形的h，最大的矩形面积
 * 这样就得到了数组中每个元素在以自己为高的时候的最大面积
 * 用一个全局变量存储这个最大值就可以得到最大的矩形面积
 *
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let stack = [];
    let i = 0;
    let maxArea = 0;

    while (i <= heights.length) {
        if (!stack.length || heights[stack[stack.length - 1]] <= heights[i]) {
            stack.push(i++);
        } else {
            let height = heights[stack.pop()];
            //i - （i前面有stack.length - 1个比height小的数） - 1
            let width = !stack.length ? i : i - stack[stack.length - 1] - 1;

            maxArea = Math.max(maxArea, height * width);
        }
    }

    return maxArea;
};
let arr = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(arr));
