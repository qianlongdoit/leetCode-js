/**
 * Created by admin on 2018/6/3.
 */
/**给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和
 * 与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 *
 * 例如，给定数组 nums = [-1, 2, 1, -4], 和 target = 1.
 * 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 */

/**和15一样的双指针问题
 * 需要注意的点是，差值有正负
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);

  let minDiff = Number.MAX_VALUE;

  for (let i = 0, len = nums.length; i < len - 2; i++) {
    let sum = target - nums[i];
    let left = i + 1;
    let right = len - 1;

    while (left < right) {
      if (nums[left] + nums[right] === sum) {
        return target;
      }

      //  差值要存正负值，否则无法知道最接近的之和是大于还是小于
      if (Math.abs(sum - nums[left] - nums[right]) < Math.abs(minDiff)) {
        minDiff = sum - nums[left] - nums[right];
      }

      nums[left] + nums[right] <= sum ? left++ : right--;
    }
  }

  console.log(`minDiff: ${minDiff}`);
  return target - minDiff;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1))
console.log(threeSumClosest([1, 1, 1, 0], -100))
console.log(threeSumClosest([-1,2,1,-4], 1))