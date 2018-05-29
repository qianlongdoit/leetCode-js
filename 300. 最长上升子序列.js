/**
 * Created by Administrator on 2018/5/29.
 */
/**给定一个无序的整数数组，找到其中最长上升子序列的长度。
 *
 * 示例:
 * 输入: [10,9,2,5,3,7,101,18]
 * 输出: 4
 * 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
 *
 * 说明:
 * 可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
 * 你算法的时间复杂度应该为 O(n2) 。
 * 进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?
 *
 */

/**其他思路：非动态规划的O(n log n)解法
 * 建立辅助数组arr,把nums[0]加入arr的第一项
 * 遍历nums[1]-nums[i],如果nums[i]比arr.pop()大，则放入数组，
 * 否则找到第一个比num[i]大的数字，然后替换掉
 * 最后数组长度为题目所求
 *
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (!nums.length) return 0;
  let dp = [1];
  let max = 1;

  for (let i = 1, len = nums.length; i < len; i++) {
    if (!dp[i]) dp[i] = 1;

    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        console.log(dp[j])
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    max = Math.max(max, dp[i])
  }

  console.log(dp)
  return max;
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
