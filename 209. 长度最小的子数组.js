/**
 * Created by admin on 2018/6/13.
 */
/**给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的子数组。
 * 如果不存在符合条件的子数组，返回 0。
 * 示例:
 * 输入: s = 7, nums = [2,3,1,2,4,3]
 * 输出: 2
 * 解释: 子数组 [4,3] 是该条件下的长度最小的子数组。
 * 进阶:
 * 如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。
 */

/**滑动窗口问题
 * 子数组是连续的！
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  if (!nums.length) return 0;
  let fast = 0;
  let slow = 0;
  let sum = nums[0];
  let minLen = Number.MAX_VALUE;
  let len = nums.length;

  while (slow <= fast && fast < len) {

    while (sum < s && fast < len - 1) {
      sum += nums[++fast];
    }

    while (sum - nums[slow] >= s && slow < fast) {
      sum -= nums[slow++];
    }

    minLen = Math.min(minLen, fast - slow + 1);

    fast < len - 1 ? sum += nums[++fast] : fast++;
  }

  return sum >= s ? minLen : 0;
};

var arr = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(7, arr))