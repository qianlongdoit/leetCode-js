/**
 * Created by Administrator on 2018/6/6.
 */
/**我们把数组 A 中符合下列属性的任意连续子数组 B 称为 “山脉”：
 * B.length >= 3
 * 存在 0 < i < B.length - 1 使得 B[0] < B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B[B.length - 1]
 * （注意：B 可以是 A 的任意子数组，包括整个数组 A。）
 * 给出一个整数数组 A，返回最长 “山脉” 的长度。
 * 如果不含有 “山脉” 则返回 0。
 *
 * 示例 1：
 * 输入：[2,1,4,7,3,2,5]
 * 输出：5
 * 解释：最长的 “山脉” 是 [1,4,7,3,2]，长度为 5。
 * 示例 2：
 *
 * 输入：[2,2,2]
 * 输出：0
 * 解释：不含 “山脉”。
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
  if (!arr.length) return 0;
  let n = arr.length;
  let left = 0;
  let right = 0;
  let result = 0;

  while (right < n - 1) {
    //  right移动到波峰开始上升的位置
    while (right + 1 < n && arr[right] >= arr[right + 1]) {
      right++;
    }

    left = right;
    //  right从波谷移动到波峰
    while (right + 1 < n && arr[right] < arr[right + 1]) {
      right++;
    }

    //  right到达波峰的位置
    //  判断是否存在山脉
    if (right + 1 === n || arr[right] === arr[right + 1]) {
      left = ++right;
      continue;
    }
    //  从波峰移动到波谷
    while (arr[right] > arr[right + 1]) {
      right++;
    }
    result = Math.max(result, right - left + 1);
  }

  console.log(result)
  return result;
};

var arr = [2,1,4,7,3,2,5]
// var arr = [2, 2, 2]
// var arr = [0, 2, 0]
longestMountain(arr);