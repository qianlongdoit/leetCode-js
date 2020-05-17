/**
 * Created by doit on 2020/5/17.
 */

/**给定一个字符串 s1，我们可以把它递归地分割成两个非空子字符串，从而将其表示为二叉树。
 * 下图是字符串 s1 = "great" 的一种可能的表示形式。
 *        great
 *       /    \
 *     gr    eat
 *    / \    /  \
 *   g   r  e   at
 *             / \
 *            a   t
 *
 * 在扰乱这个字符串的过程中，我们可以挑选任何一个非叶节点，然后交换它的两个子节点。
 * 例如，如果我们挑选非叶节点 "gr" ，交换它的两个子节点，将会产生扰乱字符串 "rgeat" 。
 *      rgeat
 *      /    \
 *     rg    eat
 *    / \    /  \
 *   r   g  e   at
 *              / \
 *             a   t
 *
 * 我们将 "rgeat” 称作 "great" 的一个扰乱字符串。
 * 同样地，如果我们继续交换节点 "eat" 和 "at" 的子节点，将会产生另一个新的扰乱字符串 "rgtae" 。
 *      rgtae
 *     /    \
 *    rg    tae
 *   / \    /  \
 *  r   g  ta  e
 *        / \
 *       t   a
 * 我们将 "rgtae” 称作 "great" 的一个扰乱字符串。
 * 给出两个长度相等的字符串 s1 和 s2，判断 s2 是否是 s1 的扰乱字符串。
 *
 * 示例 1:
 * 输入: s1 = "great", s2 = "rgeat"
 * 输出: true
 *
 * 示例 2:
 * 输入: s1 = "abcde", s2 = "caebd"
 * 输出: false
 */


/**对于两个字符串T和S，如何判断T是S扰动变换来的？
 * 假定T是由S变换而来的，
 * 那么对于S分割成的2个字符串S1 S2，以及T分割成的2个字符串T1 T2，
 * 一定有S1~T1 S2~T2 或者S1~T2 S2~T1（如果B可以由A扰动得到，那么我们记做A~B）
 * 那么我们就得到了基本的递归模型
 *
 * 题目归为动态规划，那么说明动态规划大幅度提高效率
 *
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
    //递归版本
    //最基本的情况
    if (s1.length !== s2.length) return false;
    if (s1 === s2) return true;
    let len = s1.length;
    for (let i = 1; i < s1.length; i++) {
        if (
            (isScramble(s1.slice(0, i), s2.slice(0, i)) && isScramble(s1.slice(i), s2.slice(i))) ||
            (isScramble(s1.slice(0, i), s2.slice(len - i)) && isScramble(s1.slice(i), s2.slice(0, len - i)))
        ) {
            return true;
        }
    }

    return false;
};

/**递归版本里面有许多重复计算，如果去掉这些重复计算，可以提高效率
 * 其中的状态过程可以这样表示
 * dp[i][j][m][n]表示T[m~n]是否能由S[i~j]扰动得到
 * 显然T[m~n]和S[i~j]的长度必须是相等的
 * 即：n - n = j - i
 * 上述表达式可以简化为长度l相关
 * dp[i][j][k] 表示 S中从i开始长度为k的字符串，是否可以扰动得到T从j开始长度为k的字符串
 * 即：
 * dp[i][j][k] = (dp[i][j][w] && dp[i + w][j + w][k - w]) ||
 *               (dp[i + w][j - w + k][w] && dp[i + w][j + w][k - w])
 *
 *
 */
isScramble = function (s1, s2) {
    //动态规划版本
    let len = s1.length;
    let dp = [];
    for (let i = 0; i < len; i++) {
        let arr = [];
        for (let j = 0; j < len; j++) {
            arr.push([true])
        }
        dp.push(arr);
    }
    //初始情况，长度为1的字符串开始
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            dp[i][j][1] = s1[i] === s2[j];
        }
    }

    //动态规划推导的情况
    //字符串的长度从2开始，1开始的情况是初始情况
    for (let l = 2; l <= len; l++) {
        for (let i = 0; i <= len - l; i++) {
            for (let j = 0; j <= len - l; j++) {
                //此处开始递归寻找子串是否可以由扰动得到
                for (let k = 1; k < l; k++) {
                    //顺序一样的时候
                    if (dp[i][j][k] && dp[i + k][j + k][l - k]) {
                        dp[i][j][l] = true;
                        break;
                    }

                    //S的前半段和T的后半段是扰动字符串
                    if (dp[i][j + l - k][k] && dp[i + k][j][l - k]) {
                        dp[i][j][l] = true;
                        break;
                    }
                }
            }
        }
    }

    return !!dp[0][0][len];
};


let testCase = [
    ['great', 'rgeat'],
    ['address', 'dressad'],
    ['address', 'essdrda'],
    ["abcde", "caebd"]
];

testCase.forEach(t => {
    console.log(isScramble(t[0], t[1]));
});















