/**
 * Created by admin on 2018/5/22.
 */
/**
 * 一条包含字母 A-Z 的消息通过以下方式进行了编码：
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 *
 * 输入: "12"
 * 输出: 2
 * 解释: 它可以解码为 "AB"（1 2）或者 "L"（12）。
 */

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s[0] === '0') return 0;

  let dp = [];
  dp[0] = 1;

  if (s.length === 2) return (~~s > 26 || s[1] === '0') ? 1 : 2;

  dp[1] = s[1] === '0' ? 1 : 2;

  console.log(dp)
  for (let i = 2, n = s.length; i < n; i++) {
    if (s[i] === '0') dp[i] = dp[i - 2];
    // let first = s.slice(i - 1, i + 1);
    let second = s.slice(i - 1, i + 1);

    // console.log(`s = ${s}`,second, '--------second-------', dp)
    if (~~second <= 26) {
      dp[i] = dp[i - 2] + dp[i - 1];
      // console.log(dp[i - 2], dp[i - 1], dp[i], '~~i~~', i)
    } else {
      dp[i] = dp[i - 1]
    }
  }

  console.log(dp)
  return dp[s.length - 1];
};

console.log(numDecodings('27'))