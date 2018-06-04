/**
 * Created by Administrator on 2018/6/4.
 */
/**给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 *
 * 给定 nums = [0,0,1,1,1,1,2,3,3],
 * 函数应返回新长度 length = 7, 并且原数组的前五个元素被修改为 0, 0, 1, 1, 2, 3, 3 。
 * 你不需要考虑数组中超出新长度后面的元素。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length < 3) return nums.length;
  let current = 2;

  while (current < nums.length) {
    nums[current] === nums[current - 2]
      ? nums.splice(current, 1)
      : current++;
  }

  console.log(nums)
  return nums.length;
};

var arr = [0, 0, 1, 1, 1, 1, 2, 3, 3];
removeDuplicates(arr)