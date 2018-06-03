/**
 * Created by admin on 2018/6/3.
 */
/**给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 *
 * 注意:
 * 不能使用代码库中的排序函数来解决这道题。
 *
 * 示例:
 * 输入: [2,0,2,1,1,0]
 * 输出: [0,0,1,1,2,2]
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let len = nums.length;
  let slow = 0;
  let fast = 1;

  //  第一遍历把红色排好
  while (fast < len) {
    if (nums[slow] === 0) {
      slow++;
      fast = slow + 1;
    } else {
      nums[fast] === 0 ? swap(nums, slow++, fast++) : fast++;
    }
  }

  fast = len - 1;
  //  第二次遍历时把蓝色排好
  while (slow < fast) {
    if (nums[fast] === 2) {
      fast--;
    } else {
      nums[slow] === 2 ? swap(nums, slow++, fast--) : slow++;
    }
  }

  function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }

  console.log(nums)
};

// let arr = [2,0,2,1,1,0];
let arr = [1, 2, 1];
sortColors(arr);