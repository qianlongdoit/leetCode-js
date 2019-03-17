/**
 * Created by doit on 2019/3/17.
 */

/**给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。
 *
 *如果不存在最后一个单词，请返回 0 。
 *
 *说明：一个单词是指由字母组成，但不包含任何空格的字符串。
 *
 *示例:
 *
 *输入: "Hello World"
 *输出: 5
 *
 */

/**没什么好说的，已解决又增加一题而已
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let end = s.length - 1;
    let length = 0;

    while (s[end] === ' ' && end >= 0) {
        end--;
    }
    if (s[end] === '') return 0;

    while (s[end] !== ' ' && end >= 0) {
        length++;
        end--;
    }

    return length;
};

lengthOfLastWord = (s) => {
    if (!s) return 0;
    s = s.replace(/\s+/g, ' ').split(' ');
    let last = s.pop();
    if (last === '') last = s.pop();

    return last.length;
};

let s = 'a c d    ';
console.log(lengthOfLastWord(s));