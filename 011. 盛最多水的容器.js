/**
 * Created by admin on 2018/5/30.
 */
/**给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。画 n 条垂直线，使得垂直线 i 的两个
 * 端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 *
 * 你不能倾斜容器，n 至少是2。
 */

/**双指针问题，从头和尾开始，
 * 谁小谁向中间挪动,
 * 记录过程中盛水的最大值
 *
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let result = 0;

  let i = 0;
  let j = height.length - 1;

  while (i !== j) {
    let left = height[i];
    let right = height[j];
    let h = Math.min(left, right);

    result = Math.max(result, h * (j - i));

    left >= right ? j-- : i++;
  }

  console.log(result);
  return result;
};

// var arr = [1,2,3,2,1];
var arr = [5,2,5,2,1];
maxArea(arr);