/**
 * Created by doit on 2019/5/10.
 */

/**给定一个正整数，返回它在 Excel 表中相对应的列名称。
 *
 * 例如，
 *
 * 1 -> A
 * 2 -> B
 * 3 -> C
 * ...
 * 26 -> Z
 * 27 -> AA
 * 28 -> AB
 * ...
 *
 * 输入: 28
 * 输出: "AB"
 */

/**和171一个类型的题目
 * 'A'.charCodeAt() //65
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
    let sum = n;
    let temp = n % 26;
    temp = temp === 0 ? 26 : temp;
    let res = String.fromCharCode(temp + 64);
    sum -= temp;

    while (sum > 0) {
        sum /= 26;
        let cur = sum % 26;
        if (cur === 0) cur = 26;
        sum -= cur;
        res = String.fromCharCode(cur + 64) + res;
    }

    return res;
};

console.log(convertToTitle(704));