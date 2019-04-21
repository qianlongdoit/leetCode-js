/**
 * Created by doit on 2019/4/21.
 */

/**给出一个有序数组 A，数组中的每个数字都是 独一无二的，找出从数组最左边开始的第 K 个缺失数字。
 * 输入：A = [4,7,9,10], K = 3
 * 输出：8
 * 解释：
 * 缺失数字有 [5,6,8,...]，因此第三个缺失数字为 8 。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function(nums, k) {
    let start = nums[0];
    let miss = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== start) {
            while (nums[i] !== start) {
                miss.push(start);
                if (miss.length === k) {
                    console.log(miss);
                    return miss[k - 1];
                }
                start++;
            }
            start++

        } else {
            start++;
        }
    }

    if (miss.length < k) {
        return nums[nums.length - 1] + k - miss.length;
    }
    console.log(miss, start);
};

// console.log(missingElement([4,7,9,10], 3));
console.log(missingElement([1,2,4], 3));
console.log(missingElement([4,7,9,10], 1));