/**
 * Created by Administrator on 2018/5/17.
 */
/**假设你正在爬楼梯。需要 n 步你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 注意：给定 n 是一个正整数。
 *
 */

/**递归版本
 * 列出每次的可能性，像树一样展开
 * @param {number} n
 * @return {string[]}
 */
var climbStairs_recurve = function (n) {
  let result = [];

  solution(n, '');

  function solution(n, str) {
    if (n === 0) return result.push(str);

    if (n >= 1) {
      solution(n - 1, str + '1')
    }

    if (n >= 2) {
      solution(n - 2, str + '2')
    }
  }


  return result;
};
/**非递归版本
 * 分析可知有这样的递推关系，到n个台阶的方法为 到n-1的方法与 到n-2的方法 之和
 *
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let currentClimb = 0;
  let c1 = 1;
  let c2 = 2;

  if (n === 1) return c1;
  if (n === 2) return c2;

  for (let i = 3; i <= n; i++) {
    currentClimb = c1 + c2;
    c1 = c2;
    c2 = currentClimb;
  }

  return currentClimb;
};

console.log(climbStairs_recurve(10), '------', climbStairs_recurve(10).length);

console.log(climbStairs(10))
