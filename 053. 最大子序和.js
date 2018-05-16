/**
 * Created by Administrator on 2018/5/16.
 */
/**给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */

/**全是负数的时候？
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let current = 0;

  for (let i = 0, len = nums.length; i < len; i++) {
    current < 0 ? current = nums[i] : current += nums[i];
    maxSum = Math.max(current, maxSum);
  }

  return maxSum
};

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let arr = [-2, -1, -3, -4, -1, -2, -1, -5, -4];

console.log(maxSubArray(arr))