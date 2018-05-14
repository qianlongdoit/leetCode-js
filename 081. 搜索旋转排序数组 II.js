/**
 * Created by Administrator on 2018/5/14.
 */
/**假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * ( 例如，数组 [0,0,1,2,2,5,6] 可能变为 [2,5,6,0,0,1,2] )。
 * 编写一个函数来判断给定的目标值是否存在于数组中。若存在返回 true，否则返回 false。
 *
 * 输入: nums = [2,5,6,0,0,1,2], target = 0
 * 输出: true
 *
 * 类似题目033 153 154
 */

/**注意边界条件！！！！
 * 如果分析不清楚，把长度为1、2的特殊处理也可以
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  if (!nums.length) return false;
  if (nums.length === 1) return nums[0] === target;
  if (nums.length === 2) return nums[1] === target || nums[0] === target;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = (left + right) >> 1;
    if (nums[mid] === target) return true;

    console.log(right, '+++++++++')
    if (nums[right] === nums[0]) {
      right--;
      continue
    }
    console.log(right, '--------', mid)

    if (nums[mid] >= nums[left]) { //left与mid之间没有递减的区间
      if (nums[left] <= target && target < nums[mid]) { //target在left与mid之间
        right = mid - 1;
      } else {  //target不在left与mid之间时
        left = mid + 1
      }

    } else {  //旋转点在left与mid之间
      if (nums[mid] < target && target <= nums[right]) { //target的值在mid与right之间
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

  }

  return false;
};

let arr = [1, 1, 1, 0, 1];
// let arr = [3, 2, 1];
// let arr = [3, 1];
// let arr = [1, 3];
// let arr = [1];
// let arr = [2,2,2,0,2,2]


console.log(search(arr, 0));