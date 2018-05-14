/**
 * Created by admin on 2018/5/14.
 */
/**假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
 * 请找出其中最小的元素。
 * 注意数组中可能存在重复的元素。
 *
 * 输入: [1,3,5]
 * 输出: 1
 *
 * 输入: [2,2,2,0,1]
 * 输出: 0
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.min(nums[0], nums[1]);

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = (left + right) >> 1;

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else if (nums[mid] < mid[right]) {
      right = mid
    } else {
      right--;
    }
  }

  return nums[left];
};

// let arr = [1,3,5]
// let arr = [2,2,2,0,1]
// let arr = [1, 1, 1, 0, 1];
// let arr = [3, 2, 1];
// let arr = [3, 1];
// let arr = [1, 3];
// let arr = [1];
let arr = [2,2,2,0,2,2]
console.log(findMin(arr))