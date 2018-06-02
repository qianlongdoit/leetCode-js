/**
 * Created by admin on 2018/6/2.
 */
/**给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
 * 说明:
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 *
 *  示例:
 *    输入:
 *    nums1 = [1,2,3,0,0,0], m = 3
 *    nums2 = [2,5,6],       n = 3
 *    输出: [1,2,2,3,5,6]
 */

/**此题关键在于原地修改nums1
 * 如果是从小到大一个个的插入，则会修改很多次，
 * 所以应该由大到小插入，即从尾部插入
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[n + m - 1] = nums1[m - 1];
      m--;
    } else {
      nums1[n + m - 1] = nums2[n - 1];
      n--;
    }
  }

  while (n > 0) {
    nums1[n - 1] = nums2[n - 1];
    n--;
  }
};

merge([0], 0, [1], 1)