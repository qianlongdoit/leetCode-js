/**
 * Created by Administrator on 2018/5/8.
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
      len--;
    }
  }

  return nums.length
};


// var arr = [0, 1, 2, 2, 3, 0, 4, 2]
var arr = [3,2,2,3]
// arr.splice(0, 1)
console.log(removeElement(arr, 3))