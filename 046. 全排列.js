/**
 * Created by admin on 2018/7/24.
 */
/**给定一个没有重复数字的序列，返回其所有可能的全排列。
 * 示例:
 * 输入: [1,2,3]
 * 输出:
 * [
 *  [1,2,3],
 *  [1,3,2],
 *  [2,1,3],
 *  [2,3,1],
 *  [3,1,2],
 *  [3,2,1]
 * ]
 *
 */


/**采用动态规划的思路解决
 * 假设 nums 前 i-1 项的全排列集合为dp[i - 1]
 * 则前 i 项的全排列共 dp[i - 1].length * i 种
 * 解释： dp[i - 1][0]中插入 nums[i] 共有 i种插入位置， adp[i - 1][0]中每个间隔都可以插入nums[i]
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    var len = nums.length;

    var dp = [];
    dp[0] = [[nums[0]]];

    for (var i = 1; i < len; i++) {
        var temp = [];
        // console.log(dp[i - 1], 111)
        for (var m = 0, len1 = dp[i - 1].length; m < len1; m++) {
            // console.log(dp[i - 1][m], '---')

            for (var n = 0, len2 = dp[i - 1][m].length; n <= len2; n++) {
                var arr = [].concat(dp[i - 1][m]);
                arr.splice(n, 0, nums[i])
                // console.log(dp[i - 1][m], '++++', nums[i], arr)
                temp.push(arr)
            }
        }
        dp[i] = temp;
        // console.log(dp[i], 'end')
    }

    // console.log(dp[nums.length - 1].length);
    return dp[nums.length - 1]
};

permute([1, 2, 3, 4, 5])