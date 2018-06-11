/**
 * Created by admin on 2018/6/11.
 */
/**给定一个非负整数组成的非空数组，在该数的基础上加一，返回一个新的数组。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 *
 * 示例 1:
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 *
 * 示例 2:
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 */


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let n = digits.length;
  if  (digits[n - 1] < 9) {
    digits[n - 1]++;
  } else {
    while (digits[n - 1] === 9 && n > 1) {
      digits[n - 1] = 0;
      n--;
    }
    if  (n === 1 && digits[0] === 9) {
      digits[n - 1] = 0;
      digits.unshift(1);
    } else {
      digits[n - 1]++;
    }
  }

  return digits;
};