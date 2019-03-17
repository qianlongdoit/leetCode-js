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
 * 上面的思路有个很大的漏洞。。。
 * 那就是没考虑到奇数的情况，也就是这个中位数可能只在num1或者num2中的一个数
 *
 * 换个思路
 * 我们现在已知在数据流中取中位数的解法
 * 维持2个堆，一个大根堆一个小根堆，2个堆的大小差不超过1，
 * 最大堆的堆首一定小于最小堆的堆首
 * 这样每次的中位数不是大根堆的堆首就是两个堆首的平均数
 *
 * 回到本题，2个堆已经建立了，那么剩下的就是调节2个堆的大小以及调整堆首的元素了
 * 但是这个算法的时间复杂度是多少，已经计算不出来了。。。
 *
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    //保持nums1长度比nums2的长度长
    if (nums1.length < nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const justifyHeap = (arr, flag) => {
        if (!arr.length) return;
        let i = 0;
        let left = 2 * i + 1;
        while (left < arr.length) {
            let max;
            if (!flag) {
                max = arr[left + 1] > arr[left] && left + 1 < arr.length ? left + 1 : left;
                max = arr[i] < arr[max] ? max : i;
            } else {
                max = arr[left + 1] < arr[left] && left + 1 < arr.length ? left + 1 : left;
                max = arr[i] < arr[max] ? i : max;
            }
            if (i === max) break;
            [arr[i], arr[max]] = [arr[max], arr[i]];
            i = max;
            left = 2 * i + 1;
        }
    }

    nums1 = nums1.reverse();
    //调整堆的size
    while (nums1.length - nums2.length > 1) {
        let current = nums1.shift();
        nums2.unshift(current);
        // justifyHeap(nums1);
        justifyHeap(nums2, true);
    }

    //调整2个堆的首元素
    while (nums1[0] > nums2[0]) {
        [nums1[0], nums2[0]] = [nums2[0], nums1[0]];
        justifyHeap(nums1);
        justifyHeap(nums2, true);
    }

    return !((nums1.length + nums2.length) % 2 ) ? (nums1[0] + nums2[0]) / 2 : nums1[0];
};

let num1 = [1, 2, 4, 7, 9, 10];
let num2 = [2, 2, 3, 4, 7, 8];

// num1 = [1, 3]
// num2 = [2]
num1 = [6]
num2 = [1,2,3,4,5,7,8]
console.log(findMedianSortedArrays(num1, num2));

