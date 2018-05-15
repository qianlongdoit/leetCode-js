/**
 * Created by Administrator on 2018/5/15.
 */
/**给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 如果数组中不存在目标值，返回 [-1, -1]。
 *
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: [3,4]
 *
 * 输入: nums = [5,7,7,8,8,10], target = 6
 * 输出: [-1,-1]
 */

/**2次 二分法 分别寻找起始点和结束点
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let result = [];
  let left = 0;
  let right = nums.length - 1;

  if (nums[0] > target || nums[right] < target) return [-1, -1];

  while (left <= right) {
    let mid = (left + right) >> 1;

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  result.push(left);
  right = nums.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;

    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  result.push(right);
  return result[0] > result[1] ? [-1, -1] : result;
};

let arr = [5,7,7,8,8,10];

console.log(searchRange(arr, 6))