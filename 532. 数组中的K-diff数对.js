/**
 * Created by admin on 2018/6/3.
 */
/**给定一个整数数组和一个整数 k, 你需要在数组里找到不同的 k-diff 数对。这里将 k-diff 数对定义为一个
 * 整数对 (i, j), 其中 i 和 j 都是数组中的数字，且两数之差的绝对值是 k.
 *
 * 输入: [1, 3, 1, 5, 4], k = 0
 * 输出: 1
 * 解释: 数组中只有一个 0-diff 数对，(1, 1)。
 * 输入: [3, 1, 4, 1, 5], k = 2
 *
 * 输出: 2
 * 解释: 数组中有两个 2-diff 数对, (1, 3) 和 (3, 5)。
 * 尽管数组中有两个1，但我们只应返回不同的数对的数量。
 *
 * 注意:
 * 数对 (i, j) 和数对 (j, i) 被算作同一数对。
 * 数组的长度不超过10,000。
 * 所有输入的整数的范围在 [-1e7, 1e7]。
 */

/**双指针问题
 * 2个指针都从头开始
 * 和相等、大于、小于分别考虑
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  if (nums.length < 2) return 0;
  let result = 0;
  nums.sort((a, b) => a - b);

  let n = nums.length;
  let p1 = 0;
  let p2 = 1;
  while (p1 < n && p2 < n) {
    if (nums[p1] + k === nums[p2]) {
      result++;
      while (nums[p1] === nums[p1 + 1]) {
        p1++;
      }
      p1++;
      p2 = p1 + 1;
    } else if (nums[p1] + k > nums[p2]) {
      p2++;
    } else {
      p1++;
      p2 = p1 + 1;
    }

  }
  return result;
};

// console.log(findPairs([3, 1, 4, 1, 5], 2))
// console.log(findPairs([1, 2, 3, 4, 5], 1))
console.log(findPairs([1, 3, 1, 5, 4], 0))