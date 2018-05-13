/**
 * Created by admin on 2018/5/13.
 */
/**实现 int sqrt(int x) 函数。
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 *
 * 输入: 4
 * 输出: 2
 *
 * 输入: 8
 * 输出: 2
 * 说明: 8 的平方根是 2.82842...,由于返回类型是整数，小数部分将被舍去。
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let min = 0;
  let max = x;

  while (min <= max) {
    let mid = (max + min) / 2;

    if ((~~mid) * (~~mid) <= x && (~~mid + 1) * (~~mid + 1) > x) {
      return ~~mid
    }

    mid * mid < x ? min = mid + 1 : max = mid - 1;
  }

  return ~~min;
};

for (let i = 0;i<50;i++) {
  console.log(i, '-------',mySqrt(i))
}