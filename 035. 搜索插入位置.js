/**
 * Created by Administrator on 2018/5/7.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const len = nums.length;
  if (nums.indexOf(target) !== -1) return nums.indexOf(target);

  let result = 0;
  let max = len;
  let min = 0;
  let current = ~~(len / 2);

  while (max > min + 1) {
    console.log(max, min, current)
    target > nums[current] ? min = current : max = current;
    current = ~~((max - min) / 2 + min);
  }
  console.log('----', min, current, max)
  if (target > nums[max]) {
    result = max + 1;
  } else if (target < nums[min]) {
    result = min - 1 > 0 ? min - 1 : 0;
  } else {
    result = min + 1;
  }
  return result;
};

console.log(searchInsert([1, 3, 5, 6], 0))
