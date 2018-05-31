/**
 * Created by Administrator on 2018/5/31.
 */
/**给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 *
 * 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出: 6
 */


/**双指针问题，类似于011
 * 头尾各一个指针，谁小谁向中间挪动
 * 每次挪动的时候计算当前位置能接的雨水，
 * 遍历完即可求出累积的雨水
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxL = 0;
  let maxR = 0;
  let drop = 0;

  while (left < right) {
    maxL = Math.max(maxL, height[left]);
    maxR = Math.max(maxR, height[right]);

    if (height[left] < height[right]) {
      left++;
      drop += height[left] < maxL ? maxL - height[left] : 0;

    } else {
      right--;
      drop += height[right] < maxR ? maxR - height[right] : 0;
    }
  }

  return drop;
};


/**动态规划版本
 * 遍历2次，分别从头和尾部遍历
 * 从头遍历：建立一个等长的数组，存i位置左边的最大高度值
 * 从尾部遍历，建立另外一个等长的数组。存i位置右边的最大高度值
 * 根据这2个值可以计算出i位置可以接多少雨水
 * 累加，即为全部接雨水的量
 *
 * @param {number[]} height
 * @return {number}
 */
var trap2 = function (height) {
  let len = height.length;
  let leftMax = [0];
  let rightMax = [];
  let rainDrop = 0;

  //  扫描i左边的最大值
  for (let i = 1; i < len; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i - 1]);
  }

  //  扫描i右边的最大值
  for (let i = len - 1; i >= 0; i--) {
    if (i === len - 1) {
      rightMax[i] = 0;
      continue;
    }
    rightMax[i] = Math.max(rightMax[i + 1], height[i + 1]);
  }

  //  计算所有雨水累积
  for (let i = 0; i < len; i++) {
    if (height[i] < leftMax[i] && height[i] < rightMax[i]) {
      rainDrop += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
  }

  return rainDrop;
};

// let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let height = [1, 7, 1, 2, 1, 8, 3, 1, 8, 3, 5];

console.log(trap(height));