/**
 * Created by doit on 2019/3/23.
 */

/**给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 *
 * 示例 1：
 *
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 示例 2：
 *
 * 输入: "cbbd"
 * 输出: "bb"
 *
 */

/**提示信息里面提到了动态规划
 * 那么能想到的就是，以index位置结尾的最长回文串，但是没发现有什么能用到前一次的计算信息的地方
 *
 * 最后查阅发现是Manacher算法，经典的算法原型
 * 下面记录一下核心思想
 * 1.解决奇偶回文问题，因此插入了特殊字符串，如 '_a_b_c_b_a_'
 * 2.遍历过程中记录这些东西，最右回文边界R以及最早达到最右回文边界时候的回文中心的位置C
 * 在以上概念的基础下，开始我们的解题思路
 *
 * 在遍历的时候，对于i位置来说，每次更新最右回文边界R
 * [L    I   C   i    R]
 * 对于i的位置分2类：
 *      1.在R的右侧，常规暴力扩i位置的回文半径，并更新R；
 *      2.在C~R之间(取i的对称点I，I的回文半径位置分3类)；
 *          2-1.在L右边：那么i的回文半径就是I的回文半径；
 *          2-2.在L的左边：那么i的回文半径为R-I的回文半径；
 *          2-3：正好与L重合：那么i的回文半径至少为I的回文半径，有可能更大，继续暴力扩
 *
 * 基于manacher算法的变形题目：
 * 对于给定字符串s。至少需要在s后面添加多少个字符，使之成为回文字符串
 * 例如 'dabab'，需要在后面添加 'ad' => 'dababab'成为了回文字符串
 *
 * 此题的解法：在manacher基础算法的上，当回文边界第一次扩到字符串尾端的时候
 * 对于0 ~ L位置的字符的逆序，就是需要添加的字符串
 *
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s) return '';
    let ms = '#' + s.split('').join('#') + '#';
    let dp = []; //记录每个位置的最大回文半径
    let R = -1; //记录最大回文右边界
    let C = -1; //记录中心位置
    let temp = [0, 0];  //记录位置

    for (let i = 0; i < ms.length; i++) {
        //i在R内侧
        if (i < R) {
            //2-1, 2-2的情况
            dp[i] = Math.min(R - i, dp[2 * C - i]);
        } else {
            dp[i] = 1;
        }
        //暴力扩回文半径 1, 2-3的情况
        while (i - dp[i] >= 0 && i + dp[i] < ms.length) {
            if (ms[i - dp[i]] === ms[i + dp[i]]) {
                dp[i]++;
            } else {
                break;
            }
        }

        //每次回文右边界R以及中心位置C
        if (i + dp[i] > R) {
            R = i + dp[i];
            C = i;
        }

        //每次更新结果
        if (dp[i] > temp[1]) {
            temp = [i, dp[i]];
        }
    }

    let res = '';
    for (let i = temp[0] - temp[1] + 1; i < temp[0] + temp[1]; i++) {
        if (ms[i] === '#') continue;
        res += ms[i];
    }

    return res;
};

// console.log(longestPalindrome('babad'));
// console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('abc1234321ab'));
