/**
 * Created by admin on 2018/9/25.
 */

/**给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，
 * 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 *
 * 示例 1:
 * 输入: nums = [-1,0,3,5,9,12], target = 9
 * 输出: 4
 * 解释: 9 出现在 nums 中并且下标为 4
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 1) return nums[0] === target ? 0: -1;

    let mid = nums.length >> 1;
    let start = 0;
    let end = nums.length;

    while (mid > start && mid < end) {
        if (nums[mid] > target && mid > 0) {
            end = mid;
            mid = (start + end) >> 1;
        }

        if (nums[mid] < target) {
            start = mid;
        }

        if (nums[mid] === target) return mid;
        mid = (start + end) >> 1;
    }

    return -1;
};

// let nums = [-1,0,3,5,9,12], target = -1;
let nums = [-1], target = -1;

console.log(search(nums, target))