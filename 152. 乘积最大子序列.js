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
  let maxPositive = 0;
  let minNegative = 0;
  let curPositive = 0;
  let curNegative = 0;

  for (let i = 0, len = nums.length; i < len; i++) {
    
  }
};