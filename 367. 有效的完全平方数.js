/**
 * Created by admin on 2018/5/13.
 */
/**给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。
 * 注意：不要使用任何内置的库函数，如  sqrt。
 *
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let min = 0;
  let max = num;

  while (min <= max) {
    let mid = (max + min) / 2;

    if ((~~mid) * (~~mid) <= num && (~~mid + 1) * (~~mid + 1) > num) {
      min =  ~~mid;
      break;
    }

    mid * mid < num ? min = mid + 1 : max = mid - 1;
  }

  min =  ~~min;
  return min*min === num
};


for (let i = 0;i<50;i++) {
  if (isPerfectSquare(i)) console.log(i);
}