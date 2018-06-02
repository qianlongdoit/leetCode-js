/**
 * Created by admin on 2018/6/2.
 */
/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 示例:
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 说明:
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 *
 */

/**容易出错点在于什么时候终止循环
 * 所以可以考虑用一个变量记录end的位置变化
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let n = nums.length;
  let end = n - 1;

  for (let i = 0; i < n; i++) {
    if (i >= end) break;
    if (nums[i] === 0) {
      nums.splice(i--, 1);
      nums.push(0);
      end--;
    }
  }
  console.log(arr);
};

var arr = [0, 0, 1];
moveZeroes(arr)