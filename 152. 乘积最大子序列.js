/**
 * Created by admin on 2018/5/31.
 */
/**给定一个整数数组 nums ，找出一个序列中乘积最大的连续子序列（该序列至少包含一个数）。
 * 输入: [2,3,-2,4]
 * 输出: 6
 * 解释: 子数组 [2,3] 有最大乘积 6。
 *
 */

/**动态规划问题
 * 维护一个以i位置为结尾时的最大连续子序列乘积
 * 当全部是正数的时候没问题，但如果有负数，则负数在遇到下一个负数的时候会变成正数
 * 所以可以改进为维护2个数组
 * 分别存放乘积的最大正数和最小的负数
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  let maxPositive = 0;
  let minNegative = 0;
  let curPositive = 0;
  let curNegative = 0;

  for (let i = 0, len = nums.length; i < len; i++) {
      if (nums[i] === 0) {
        curPositive = curNegative = 0;
      }

      if (nums[i] > 0) {
        curPositive = Math.max(nums[i], curPositive * nums[i]);
        curNegative = Math.min(0 , curNegative * nums[i]);
      }

      if (nums[i] < 0) {
        let tempP = curPositive;
        curPositive = Math.max(0, curNegative * nums[i]);
        curNegative = Math.min(nums[i], tempP * nums[i]);
      }

    maxPositive = Math.max(maxPositive, curPositive);
    minNegative = Math.min(minNegative, curNegative);

    console.log(curPositive, curNegative, maxPositive, minNegative)
  }

  return maxPositive;
};

var arr = [-2, 1, 2, -3, 0, 3, -3, -2, 2, 1];
// var arr = [3, -1, 4];

console.log(maxProduct(arr))