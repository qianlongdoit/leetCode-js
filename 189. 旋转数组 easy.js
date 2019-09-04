/**
 * Created by doit on 2019/9/4.
 */

/**给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 *
 * 示例 1:
 *
 * 输入: [1,2,3,4,5,6,7] 和 k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释:
 * 向右旋转 1 步: [7,1,2,3,4,5,6]
 * 向右旋转 2 步: [6,7,1,2,3,4,5]
 * 向右旋转 3 步: [5,6,7,1,2,3,4]
 *
 * 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
 * 要求使用空间复杂度为 O(1) 的 原地 算法。
 */


/**方法1：一个个的推出数字，一个个压入数组；
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    while (k > 0) {
        k--;
        let out = nums.pop();
        nums.unshift(out);
    }
};

/**数组的前(num.length - k)个数字的index变更为 (index + num.length) % nums.length
 */
rotate = function(nums, k) {
    let len = nums.length;
    k = len - k % len;
    for (let i = 0; i < k; i++) {
        nums[len + i] = nums[i];
    }
    nums.splice(0, k);
};

/**数组以index = k处为分界点，分为 leftPart rightPart
 * 步骤1：leftPart颠倒
 * 步骤2：rightPart颠倒
 * 步骤3：整个数组颠倒
 */
rotate = function(nums, k) {
    if (k === 0) return;
    let reverse = function (arr, low, high) {
        while (low < high) {
            [arr[low], arr[high]] = [arr[high], arr[low]];
            low++;
            high--;
        }
    };
    let len = nums.length;
    k = k % len;
    k = k < 0 ? k + len : k;
    reverse(nums,0, len - k - 1);
    reverse(nums,len - k, len - 1);
    reverse(nums,0, len - 1);
};

var arr = [1,2,3,4,5,6,7];
rotate(arr, 3)

