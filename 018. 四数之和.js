/**
 * Created by admin on 2018/9/14.
 */

/**给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 * 注意：
 * 答案中不可以包含重复的四元组。
 * 示例：
 * 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
 * 满足要求的四元组集合为：
 * [
 *  [-1,  0, 0, 1],
 *  [-2, -1, 1, 2],
 *  [-2,  0, 0, 2]
 * ]
 */

/**和三数之和一样，把4数转化为三数的解题模式
 * 先数组排序
 * 现取4个数分别为one、two、left、right
 * one、two起初固定在数组的第一位、第二位，left从two+1，right从数组尾部开始
 * left、right移动策略任然维持在 nums[left] + nums[right] > target > ? right-- : left++
 * 当left、right重合时，two++
 * 当two === nums.length - 3时，one++， two = one + 1
 * 最后需要注意的点就是，每次移动的时候判断是否数字和上一次的是否相同
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {

    //  TODO
};

