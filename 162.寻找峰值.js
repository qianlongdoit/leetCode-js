/**
 * Created by Administrator on 2018/5/8.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  if (nums.length === 1) return 0;
  while (left < right) {
    let middle = ~~((right - left) / 2 + left);
    if (nums[middle] < nums[middle + 1]) {
      left = middle;
    } else {
      right = middle;
    }

    console.log(left, middle, right)

    if (right - left < 2) {
      console.log('peak is', nums[left + 1])
      break;
    }
  }

  return nums[left] > nums[left + 1] ? left : left + 1;
};
// var arr = [1, 2, 1, 9, 8, 7, 6, 7, 8, 7, 5, 6, 4]
// var arr = [1, 2, 3, 1]
var arr = [1,2,3,4]
// var arr = [1,4,3,2,1]
console.log(findPeakElement(arr))