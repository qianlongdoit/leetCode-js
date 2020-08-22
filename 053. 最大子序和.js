/**
 * Created by Administrator on 2018/5/16.
 */
/**给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */

/**滑动窗口的最大值
 * 指针i j 分别置于数组头部，i 为慢指针， j为快指针
 * 制定 i j 移动的策略
 * j 移动到正数，累加。
 * 负数： 判断sum，如果 sum < 0,则舍弃前面的累加和，i移动到此时的j位置
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


/**动态规划
 * dp里面放以 i 位置结尾，最大的连续子数组的和
 *
 */
maxSubArray = function (nums) {
    if (nums.length === 1) return nums[0];
    let max = 0;
    let dp = [];
    dp[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
        max = Math.max(max, dp[i]);
    }

    return max
}


console.log(maxSubArray(arr))