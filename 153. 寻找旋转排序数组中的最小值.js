/**
 * Created by Administrator on 2018/5/14.
 */
/**假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
 * 请找出其中最小的元素。
 * 你可以假设数组中不存在重复元素。
 *
 * 输入: [3,4,5,1,2]
 * 输出: 1
 *
 * 输入: [4,5,6,7,0,1,2]
 * 输出: 0
 */

/**此题 思路简单，边界条件不好区分
 * 如果二分时取mid - 1 或 mid + 1 容易造成正好越界的情况
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (!nums.length) return false;
  if (nums.length === 1) return nums[0];

  let left = 0;
  let right = nums.length - 1;
  let mid;

  //  如果未旋转
  if (nums[0] < nums[right]) return nums[0];

  //  以下均为旋转后的逻辑判断
  while (left < right) {
    mid = (left + right) >> 1;

    nums[mid] >= nums[0] ? left = mid : right = mid ;

    if (right - 1 === left) break;
  }

  return Math.min(nums[left], nums[mid], nums[right]);
};

let arr = [4,5,6,7,0,1,2];
// arr = [3,4,5,6,1,2]
// arr = [1];
// arr = [4,5,1,2,3];
arr = [2,1];

console.log(findMin(arr));