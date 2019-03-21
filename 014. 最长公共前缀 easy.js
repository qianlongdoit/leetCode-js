/**
 * Created by doit on 2019/3/21.
 */

/**编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 * 示例 1:
 *
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 示例 2:
 *
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 *
 */

/**果然是简单题，没什么好说的逐个比较就行了
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';
    let minLen = Number.MAX_SAFE_INTEGER;
    let prefix = '';

    for (let i = 0; i < minLen; i++) {
        let standard = '';
        let same = true;
        for (let j = 0; j < strs.length; j++) {
            if (!standard) standard = strs[j][i] || '';
            if (!prefix) minLen = Math.min(minLen, strs[j].length);

            if (strs[j][i] !== standard) {
                same = false;
                break;
            }
        }
        if (same) {
            prefix += standard;
        } else {
            return prefix;
        }
    }
    return prefix;
};

console.log(longestCommonPrefix(['a']));
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));




