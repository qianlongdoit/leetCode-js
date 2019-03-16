/**
 * Created by doit on 2019/3/15.
 */

/**给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 *
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 *
 * 你可以假设 nums1 和 nums2 不会同时为空。
 *
 * 示例 1:
 *
 * nums1 = [1, 3]
 * nums2 = [2]
 *
 * 则中位数是 2.0
 * 示例 2:
 *
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 *
 * 则中位数是 (2 + 3)/2 = 2.5
 */

/**根据题目的提示时间复杂度为 O(log(m + n))很容易想到这是有2分法类似的解法的
 * 关键是如何二分？
 *
 * 最朴素的想法
 * 如果2个数组合并后排序，那么中位数是中间位置或者是中间2个数的平均数
 *
 * 稍作变化
 * 两个指针c1, c2从分别从数组num1 num2的0位置开始移动，有这样的移动策略
 * 比较c1位置和c2位置的数的大小，谁小谁移动
 * 直到c1和c2的和为中位数的索引即可
 * 这时候的时间复杂度为O((m + n) / 2)
 *
 * 再做变化
 * 这个移动的策略可以优化为二分法查找
 * 如此便是题目要求的 O(log(m + n))的时间复杂度了
 *
 * 那么二分移动的终止条件是什么呢？
 * 假使c1, c2分别为符合条件的点，那么一定存在这样的关系
 * 在num1 和 num2数组中一定不存一个数在 num1[c1] 和 num1[c2]之间
 * 且c1 + c2就是中位数的index，即长度的一半
 *
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let len1 = nums1.length;
    let len2 = nums2.length;
    let c1 = 0;
    let c2 = 0;

    let medianIndex = Math.ceil(len1 + len2);

    while (c1 + c2 !== medianIndex) {
        console.log(c1, c2);
        //  需要向尾部移动
        if (c1 + c1 < medianIndex) {
            //  谁小谁移动
            if (nums1[c1] <= nums2[c2]) {
                c1 = ~~((c1 + len1) / 2);
            } else {
                c2 = ~~((c2 + len2) / 2);
            }
        } else {
            //需要向头部移动
            if (nums1[c1] <= nums2[c2]) {
                c1 = ~~(c1 / 2);
            } else {
                c2 = ~~(c2 / 2);
            }
        }
    }

    console.log(c1, c2);
};

let num1 = [1, 3];
let num2 = [2];
findMedianSortedArrays(num1, num2)

