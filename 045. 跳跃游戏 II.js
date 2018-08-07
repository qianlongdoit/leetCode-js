/**
 * Created by admin on 2018/8/7.
 */
/**给定一个非负整数数组，你最初位于数组的第一个位置。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
 * 示例:
 * 输入: [2,3,1,1,4]
 * 输出: 2
 * 解释: 跳到最后一个位置的最小跳跃数是 2。
 * 从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
 * 说明:
 * 假设你总是可以到达数组的最后一个位置。
 */

/**普通dp解法会time limit exceeded
 *
 * 贪心策略是每次前进的下一步能达到的地方最远
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    // var dp = new Array(nums.length);
    // dp[0] = 0;

    // for (var i = 0, len = nums.length; i < len; i++) {
    //     for (var j = nums[i]; j >=0; j--) {
    //         if (i + j < len && !dp[i + j]) {
    //             dp[i + j] = dp[i] + 1;
    //         }
    //     }
    // }

    var index , max = 0;
    var step = 0, i = 0;
    var len = nums.length;
    if (len === 1) return 0;

    while (i < len) {
        if (i + nums[i] >= len - 1) {
            step++;
            break;
        }

        max = 0;
        for (var j = 1; j <= nums[i]; j++) {
            if (i + j < len && j + nums[i + j] > max) {
                max = j + nums[i + j];
                index = i + j;
                console.log(max, i, step)
            }
        }
        i = index;
        step++;
    }

    return step;
};


var nums = [4,1,1,3,1,1,1];
// var nums = [19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,1,0];
console.log(jump(nums));