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
    if (nums.length < 4) return [];

    nums.sort((a, b) => a - b);
    let len = nums.length;
    let result = [];
    let one = 0;
    while (one < len - 3) {
        let two = one + 1;

        while (two < len - 2) {
            let left = two + 1;
            let right = len - 1;

            let sum = target - nums[one] - nums[two];
            while (left < right) {
                if (nums[left] + nums[right] < sum) {
                    left++;
                    continue;
                }
                if (nums[left] + nums[right] > sum) {
                    right--;
                    continue;
                }
                if (left - 1 > two && nums[left] === nums[left - 1]) {
                    left++;
                    continue;
                }
                if (right + 1 < len && nums[right] === nums[right + 1]) {
                    right--;
                    continue;
                }

                result.push([nums[one], nums[two], nums[left], nums[right]]);
                left++;
            }
            //  two指针移动，对移动的过程进行去重
            two++;
            while (nums[two] === nums[two - 1]) {
                two++;
            }
        }
        //  one指针移动，对移动的过程中进行去重
        one++;
        while (nums[one] === nums[one - 1]) {
            one++;
        }
    }

    console.log(result)
    return result
};

// var nums = [1, 0, -1, 0, -2, 2];
var nums = [-3,-2,-1,0,0,1,2,3];
fourSum(nums, 0)