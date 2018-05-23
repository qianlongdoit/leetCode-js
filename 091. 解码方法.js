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

/**dp[i]与dp[i-1]、dp[i-2]的值相关
 * 如果s[i]不为0，
 *    如果s[i-1]也不为0，s[i]与s[i-1]构成的值不大于26，则dp[i] = dp[i-2] + dp[i-1]
 *    如果s[i-1]为0，dp[i] = dp[i-1]
 * 如果s[i]为0，
 *    s[i]与s[i-1]构成的值为 10 || 20，dp[i] = dp[i-2]
 *    否则dp[i] = 0
 *
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s[0] === '0') return 0;

  let dp = [];
  dp[0] = 1;

  if (s[1] === '0') {
    dp[1] = ~~s[0] > 2 ? 0 : 1;
  } else {
    dp[1] = ~~s.slice(0, 2) > 26 ? 1 : 2;
  }

  for (let i = 2, n = s.length; i < n; i++) {
    if (s[i] === '0') {
      dp[i] = (s[i - 1] === '1' || s[i - 1] === '2') ? dp[i - 2] : 0;
      continue;
    }

    let second = s.slice(i - 1, i + 1);

    if (~~second <= 26 && s[i - 1] !== '0') {
      dp[i] = dp[i - 2] + dp[i - 1];

    } else {
      dp[i] = dp[i - 1]
    }
  }

  console.log(dp)
  return dp[s.length - 1];
};

//  220001
//  301
console.log(numDecodings('10'))