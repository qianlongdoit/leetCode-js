/**
 * Created by Administrator on 2018/5/24.
 */
/**你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都围成一圈，
 * 这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，
 * 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。
 *
 * 输入: [2,3,2]
 * 输出: 3
 * 解释: 你不能先偷窃 1 号房屋(金额 = 2) ，然后偷窃 3号房屋 (金额 = 2), 因为他们是相邻的。
 *
 */

/**转换一下即不能同时偷头尾
 * 即nums[0]和nums[n-1]不能同时包含
 * 即nums[0...n-2]和nums[1...n-1]两者间取较大值
 *
 * 个人方法：房子围成圈，选择从第一个或第二个房间开始，rob的最大值即为最大值
 * 如果最后一次偷窃了最后一个房间，那么最后一次的结果修改为n-2或n-3中的较大者
 *
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let len = nums.length;
  let total = [];

  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length <= 2) return Math.max(...nums);

  total[0] = nums[0];
  total[1] = Math.max(nums[0], nums[1]);

  //  将第一个房间挪到最尾部，新开一个数组用来缓存这个房子的最大rob信息
  let temp = total.concat([]);
  let nums2 = nums.concat([]);
  nums2.push(nums2.shift());
  for (let i = 2; i < len; i++) {
    total[i] = Math.max(total[i - 1], total[i - 2] + nums[i]);
    temp[i] = Math.max(temp[i - 1], temp[i - 2] + nums2[i]);
  }

  if (total[len - 1] === total[len - 3] + nums[len - 1]) {
    console.log('~~~~~~~')
    total[len - 1] = Math.max(total[len - 2], total[len - 3]);
  }

  console.log(total)
  console.log(temp)
  return Math.max(total[len - 1], temp[len - 1]);
};

var rob2 = function (nums) {
  let len = nums.length;
  let total = [];

  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length <= 2) return Math.max(...nums);

  //  保证第一个房间不被偷
  total[0] = 0;
  total[1] = nums[1];
  for (let i = 2; i < len; i++) {
    total[i] = Math.max(total[i - 1], total[i - 2] + nums[i])
  }

  //  保证最后一个房间不背偷
  let total2 = [];
  total2[0] = nums[0];
  total2[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < len - 1; i++) {
    total2[i] = Math.max(total2[i - 1], total2[i - 2] + nums[i])
  }

  console.log(total)
  console.log(total2)
  return Math.max(total[len - 1], total2[len - 2])
};

// console.log(rob([1, 2, 3, 1]))
console.log(rob([1, 1, 2, 1]))
// console.log(rob2([2, 1, 1, 2]))
// console.log(rob([2, 1, 1, 2, 1, 2]))
// console.log(rob2([ 1, 1, 2, 1, 2, 2]))
// console.log(rob([1, 1, 1, 2, 1, 2]))
// console.log(rob2([]))