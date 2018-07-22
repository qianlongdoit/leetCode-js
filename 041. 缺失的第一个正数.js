/**
 * Created by admin on 2018/7/21.
 */
/**给定一个未排序的整数数组，找出其中没有出现的最小的正整数。
 *
 * 示例 1:
 * 输入: [1,2,0]
 * 输出: 3
 *
 * 示例 2:
 * 输入: [3,4,-1,1]
 * 输出: 2
 *
 * 示例 3:
 * 输入: [7,8,9,11,12]
 * 输出: 1
 *
 * 说明:
 * 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的空间。
 */


/**根据提示得到解法：如果一个数组已经排好序了，那么从1开始，我们开始数数，第一个找不到的数就是题目所求
 * 这个排序我们就按照桶排序的操作，把1放在第1位，2放在第2位，第一个 arr[i] !== i + 1的就是题目所求；
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    if (nums.length === 0) return 1;

    var i = 0, len = nums.length;
    while (i < len) {
        if (nums[i] < 0 || i > len) {
            i++;
            continue;
        }

        if (nums[i] === i + 1 || nums[i] === nums[nums[i] - 1]) {
            i++;
            continue;
        }

        swap(nums, i , nums[i] - 1);
    }

    for (var i = 0; i < len; i++) {
        if (nums[i] !== i + 1) return i + 1;
    }


    function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return len + 1;
};




// var arr = [1, 4, 3, 2];
var arr = [1, 1];
console.log(firstMissingPositive(arr))
