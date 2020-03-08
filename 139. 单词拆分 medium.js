/**
 * Created by doit on 2020/3/8.
 */

/**给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个
 * 在字典中出现的单词。
 *
 * 说明：
 * 拆分时可以重复使用字典中的单词。
 * 你可以假设字典中没有重复的单词。
 *
 * 示例 1：
 * 输入: s = "leetcode", wordDict = ["leet", "code"]
 * 输出: true
 * 解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
 *
 * 示例 2：
 * 输入: s = "applepenapple", wordDict = ["apple", "pen"]
 * 输出: true
 * 解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
 *      注意你可以重复使用字典中的单词。
 *
 * 示例 3：
 * 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
 * 输出: false
 */

/**标签是动态规划类
 * 动态规划的核心就是可以利用上一次的推导信息
 *
 * 以示例2来说
 * 从s[0]开始看，'a' 不能被 wordDict 拆分，记为 0
 * 从s[0] 到 s[4]我们可以得到 dp = [0, 0, 0, 0, 1];
 * 到s[5]的时候我们知道 里面可以被拆分的只有 i = 4的时候，那么只需要看 0-5， 4-5的字符串能否被 wordDict 拆分即可
 * 由此我们可以得到dp = [0, 0, 0, 0, 1, 0, 0, 1], 此时到了'applepen'
 * 再从此往后看，其实只需要看两个可以拆分的位置dp[4], d[7]以及开始的dp[0]
 * 如果这三个位置 s.substring(0, i + 1) s.substring(4, i + 1), s.substring(7, i + 1)有一个能被 wordDict 拆分
 * 那么dp[i] = 1
 * 至此就得出了解题的过程
 *
 * 以上的过程我们可以简化一下：
 * dp用来只存储可以被拆分的index
 *
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let dp = [0];

    for (let i = 0; i < s.length; i++) {

        for (let j = 0; j < dp.length; j++) {
            let start = dp[j];
            let end = i + 1;
            let target = s.substring(start, end);

            let canBreak = wordDict.includes(target);
            if (canBreak) {
                dp.push(end);
                break;
            }
        }
    }

    // console.log(dp);
    return dp[dp.length - 1] === s.length;
};

// wordBreak('leetcode', ["leet", "code"]);
// wordBreak('applepenapple', ["apple", "pen"]);
// wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat"]);
wordBreak('aaaaaaa', ["aaaa","aaa"]);