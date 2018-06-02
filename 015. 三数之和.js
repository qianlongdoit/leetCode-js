/**
 * Created by admin on 2018/6/2.
 */
/**给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所
 * 有满足条件且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 满足要求的三元组集合为：
 * [
 *  [-1, 0, 1],
 *  [-1, -1, 2]
 * ]
 *
 */

/**整体思路是先固定一个数，然后转化为2数之和的问题求解
 * 为了方便去重，所以数组先排序，再开始固定
 * 固定一个数后，用头尾指针遍历排序后的数组
 * 和比target大，尾指针移动，比target小则尾指针移动
 * 容易忽略点在于，固定一个数之后头尾指针移动过程中的重复问题
 * 所以target每次变换的时候和上一次比较是否重复，重复则跳过
 * 头尾指针移动的时候也是和上一次的值比较是否重复，重复则跳过
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let n = nums.length;
  if (n < 3) return [];
  let result = [];
  nums.sort((a, b) => a - b);

  let index = 0;
  while (index < n - 2) {
    //  结果去重
    //  什么情况会重复？
    //  即target相等的时候，所以当本次target和上次target相等就跳过本次
    if (index > 0 && nums[index] === nums[index - 1]) {
      index++;
      continue;
    }
    let target = -nums[index];

    let start = index + 1;
    let end = n - 1;
    while (start < end) {

      let sum = nums[start] + nums[end];
      if (sum > target) {
        end--;
      } else if (sum < target) {
        start++;
      } else {
        //  当start和end移动的时候如果和上一次的数字相同就跳过，避免重复
        if (start - 1 > index && nums[start] === nums[start - 1]) {
          start++;
          continue;
        }
        if (end + 1 < n &&  nums[end] === nums[end + 1]) {
          end--;
          continue;
        }
        result.push([nums[index], nums[start], nums[end]]);
        start++;
      }

    }

    index++;
  }
  return result;
};

// var arr = [-1, 0, 1, 2, -1, -4, 1, 1, 2];
// var arr = [0, 0, 0, 0];
var arr = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(arr))