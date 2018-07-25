/**
 * Created by admin on 2018/7/22.
 */
/**给定一个字符串 (s) 和一个字符模式 (p)。实现支持 '.' 和 '*' 的正则表达式匹配。
 * '.' 匹配任意单个字符。
 * '*' 匹配零个或多个前面的元素。
 * 匹配应该覆盖整个字符串 (s) ，而不是部分字符串。
 *
 * 说明:
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
 *
 * 示例 1:
 * s = "aa"
 * p = "a"
 * 输出: false
 * 解释: "a" 无法匹配 "aa" 整个字符串。
 *
 * 示例 2:
 * s = "aa"
 * p = "a*"
 * 输出: true
 * 解释: '*' 代表可匹配零个或多个前面的元素, 即可以匹配 'a' 。因此, 重复 'a' 一次, 字符串可变为 "aa"。
 *
 * 示例 3:
 * s = "ab"
 * p = ".*"
 * 输出: true
 * 解释: ".*" 表示可匹配零个或多个('*')任意字符('.')。
 *
 * 示例 4:
 * s = "aab"
 * p = "c*a*b"
 * 输出: true
 * 解释: 'c' 可以不被重复, 'a' 可以被重复一次。因此可以匹配字符串 "aab"。
 *
 * 示例 5:
 * s = "mississippi"
 * p = "mis*is*p*."
 * 输出: false
 */

/**题目基本同044，思路一致采用回溯法解决
 * 回溯法需要考虑的情况太过繁杂，总会有为考虑的case出现，转尝试dp解法
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
/*var isMatch = function (s, p) {
    if (s === p) return true;

    var i = 0, m = s.length;
    var j = 0, n = p.length;
    var lastStar, lastStarI;
    var str = []

    while (i < m) {
        console.log(i, j, s[i], p[j], '----', str.join(''), lastStarI)
        if (s[i] === p[j] || p[j] === '.') {
            str.push(s[i])
            i++, j++;
            continue;
        }

        if (p[j] === '*') {
            while (p[j + 1] === '*') {  //  多个 * 视为1个 *
                j++;
            }
            lastStar = j;

            if (p[j - 1] === '.' && j + 1 === n) return true;   //  以 .* 结尾，可以匹配任意字符串

            if (s[i] === p[j + 1]) {    // * 匹配1个p[j - 1]
                lastStarI = i;
                j++;
                continue;
            }

            if (s[i] === p[j - 1] || p[j + 1] === '.') {    //  * 匹配1个以上p[i - 1]
                str.push(s[i])
                lastStarI = i;
                i++;

                if (p[j + 1] === '.' || i === m) j++;
                continue;
            }

            //  . * 混合的情况
            if (p[j - 1] === '.') {
                lastStarI = i;
                if (s[i] !== p[j + 1]) {
                    str.push(s[i])
                    i++;
                } else {
                    i++;
                    j++;
                }
                continue;
            }

        }

        if (s[i] !== p[j] && p[j + 1] === '*') {    // '*'表示p[j]字符为0个
            lastStar = j + 1;
            j += 2;
            continue;
        }

        if (typeof lastStar !== 'undefined') {  //  以上全部不匹配，而且出现过*，则需要回溯
            //  回溯的情况
            if (s[i] !== p[j] && p[lastStar - 1] === '.') {
                str[lastStarI] = s[lastStarI];
                j = lastStar;

                if (s[lastStarI - 1] === p[j + 1]) {    //  . * 中 * 匹配 0 个 .
                    i = lastStarI - 1;
                    j++;
                    str.length = i;
                }
            } else {
                if (j < n) return false;
                if (typeof lastStarI !== 'undefined') {
                    i = lastStarI;
                    j = lastStar;
                    str[i] = p[j - 1];
                    str.length = ++i;
                }
            }
        }

        if (j >= n) break;
    }

    console.log(i, j, s[i], p[j], '++++', str.join(''), lastStarI)
    return s === str.join('') && j === n;
};*/
var isMatch = function(s, p) {
    var m = s.length;
    var n = p.length;

    var dp = [];
    for (var i = 0; i < m + 1; i++) {
        dp.push(new Array(n + 1));
    }
    //  空字符串p匹配空s，结果为true
    dp[0][0] = true;

    //  空字符串p匹配非空s，结果必为false
    for (var i = 0; i < m; i++) {
        dp[i + 1][0] = false;
    }

    //  非空p匹配空s
    for (var j = 0; j < n; j++) {
        //  如果j === 0，p长度为1，单字符串和单*是无法匹配 空字符串s的
        //  空s要和非空p匹配成功，则p[0...j-2]与空匹配成功，无论p[j-1]是什么p[j]必须为*
        dp[0][j + 1] = j > 0 && p[j] === '*' && dp[0][j - 1];
    }

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (p[j] !== '*') {
                //  if p[j] !== *，则s[0...i - 1]与 p[0...j - 1]匹配 且s[i] === p[j] || p[j] === '.'
                dp[i + 1][j + 1] = dp[i][j] && (p[j] === '.' || s[i] === p[j]);
            } else {
                //  if p[j] === *, *的含义分3种情况
                //  1. *匹配 0 次，取决于dp[i + 1][j - 1]
                //  2. *匹配 1 次，取决于dp[i + 1][j]
                //  3. *匹配 2 次及以上，if s[0...i-1]与p[0...j]匹配(即dp[i][j + 1]的值)，则判断s[i] === p[j - 1]即可
                dp[i + 1][j + 1] = dp[i + 1][j - 1] && j > 0 || dp[i + 1][j]
                    || (dp[i][j + 1] && j > 0 && (s[i] === p[j - 1] || p[j - 1] === '.'));
            }
        }
    }

    // console.log(dp)
    return dp[m][n];
};

// console.log(isMatch('aaa', 'a'), 'x')
// console.log(isMatch('aaa', 'a*'))
// console.log(isMatch('aaaa', 'a*aa'))
// console.log(isMatch('abcd', 'd*'), 'x')
// console.log(isMatch('aaaab', 'aa*b'))
// console.log(isMatch('aab', '.*'))
// console.log(isMatch('aab', 'c*a*b'))
// console.log(isMatch('ab', '.*c'), 'x')
// console.log(isMatch('aab', '.*b'))
// console.log(isMatch('aabaab', '.*b'))   //需要回溯的例子
// console.log(isMatch('aab', '.*aab'))    //需要回溯的情况
console.log(isMatch('aaa', 'ab*a*c*a'))    //需要回溯的情况
// console.log(isMatch('mississippi', 'mis*is*p*.'), 'x')
// console.log(isMatch('mississippi', 'mis*is*ip*.'))