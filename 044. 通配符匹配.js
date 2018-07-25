/**
 * Created by admin on 2018/7/21.
 */
/**给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。
 *
 * '?' 可以匹配任何单个字符。
 * '*' 可以匹配任意字符串（包括空字符串）。
 * 两个字符串完全匹配才算匹配成功。
 *
 * 说明:
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母，以及字符 ? 和 *。
 *
 * 输入:
 * s = "aa"
 * p = "a"
 * 输出: false
 *
 * 输入:
 * s = "aa"
 * p = "*"
 * 输出: true
 *
 * 输入:
 * s = "adceb"
 * p = "*a*b"
 * 输出: true
 *
 * 输入:
 * s = "acdcb"
 * p = "a*c?b"
 * 输入: false
 */


/**与题010 类似，采用回溯法解决
 *
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
/*var isMatch = function (s, p) {
    if (s === p) return true;

    var i = 0, n = s.length;
    var j = 0, m = p.length;
    var str = new Array(n); //  作为调试的数组，可以不需要
    var lastStar, lastStarI;

    while (i !== n || j !== m) {
        // console.log(str.join(''), '-------', lastStar, i, j, p[j])

        if (s[i] === p[j] || (s[i] && p[j] === '?')) {
            //  当匹配或者 遇到'?'且s[i]存在时
            str[i++] = p[j++];
            continue;
        }

        if (p[j] === '*') {

            while (p[j + 1] === '*') {  //多个'*'视为一个*
                j++;
            }
            lastStar = j;

            if (!p[j + 1]) return true; //  '*'为尾字符则必定匹配

            if (!s[i]) {    //  当 s 中字符匹配结束，p中仍有字符剩余时
                while (p[j]) {  //  只要后面不是'*'则结果肯定不匹配
                    if (p[j] !== '*') return false;
                    j++;
                }
            }

            if (s[i] === p[j + 1] || p[j + 1] === '?') {    // '*'当做空字符串
                str[i] = p[j + 1];
                j += 2;
                lastStarI = i;
                i++;
                continue;
            }

            //  根据上面的判断，排除了 '*'匹配空字符的情况
            //  * 后面的字符匹配时
            if (s[i + 1] === p[j + 1]) {
                lastStarI = i;
                str[i] = p[j];
                i++;
                j++;
            } else {
                lastStarI = i;
                str[i] = p[j];
                i++;
            }

            continue;
        }

        if (typeof lastStar !== 'undefined') {
            //  需要回溯的情况
            //  在j前面有 *  匹配到i未结束，j结束时，前面的 * 匹配的字符无法匹配整个s
            //  在j前面有 *  匹配到j未结束、但当前i ≠ j 且 j ≠ '*' && j ≠ '?'
            if (j === m || s[i] !== p[j]) {
                j = lastStar;   //j退回到上次 * 的位置
                str[lastStarI] = '*';
                i = lastStarI + 1;
                // console.log(i, s[i], p[j])
            }
        } else {
            if (!p[j] || s[i] !== p[j]) return false;
        }

    }

    // console.log(str.join(''), '-------', lastStar)
    return n === str.length;
};*/

/**尝试更为简洁的dp方法
 *
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    var m = s.length;
    var n = p.length;
    var dp = [];

    for (var i = 0; i < m + 1; i++) {
        dp.push(new Array(n + 1));
    }

    //  空s匹配空p
    dp[0][0] = true;

    //  空字符串p匹配非空字符串s 为false
    for (var i = 0; i < m; i++) {
        dp[i + 1][0] = false;
    }

    //  非空p匹配空s
    for (var j = 0; j < n; j++) {
        //  如果要匹配成功则必须满足p[0...j-1]匹配 '' 且p[j] === '*'
        dp[0][j + 1] = p[j] === '*' && dp[0][j];
    }

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (p[j] !== '*') {
                //  p[k] !== '*'的时候必须s[0...i-1]与p[0...j-1]匹配，且最后项也匹配
                dp[i + 1][j + 1] = dp[i][j] && (s[i] === p[j] || p[j] === '?');
            } else {
                //  p[j] === '*'时
                //  * 匹配空字符串时 只需要s[0...i]与p[0...j-1]匹配
                //  * 匹配任意非空字符串时 s[0...i-1]与p[0...j]匹配(即 * 使用过一次)
                dp[i + 1][j + 1] = dp[i + 1][j] || dp[i][j + 1];
            }
        }
    }

    return dp[m][n];
};

console.log(isMatch('abcde', 'a*e'))
console.log(isMatch('abcdeabcde', '*abcde'))
console.log(isMatch('abcdeabcde', 'a*'))
console.log(isMatch('abcabcabce', '*ce'))
console.log(isMatch('abcabceabcabceabcfabcf', '*ce*cf'))
console.log(isMatch('abcabceabcabceabcfabcf', '*ce*cg'), 'x')
console.log(isMatch('abcabceabcabceabcfabcf', '*ce*c?'))
console.log(isMatch('aa', 'a'), 'x')
console.log(isMatch('a', 'a*'))
console.log(isMatch('a', 'a*c'), 'x')
console.log(isMatch('aa', '*'))
console.log(isMatch('cb', '?a'), 'x')
console.log(isMatch('adceb', '*a*b'))
console.log(isMatch('', '*'))
console.log(isMatch('a', '?'))
console.log(isMatch('c', '*?*'))
console.log(isMatch("mississippi","m*issip*"))