/**
 * Created by doit on 2019/5/9.
 */

/**给定一个Excel表格中的列名称，返回其相应的列序号。
 * 例如，
 * 
 * A -> 1
 * B -> 2
 * C -> 3
 * ...
 * Z -> 26
 * AA -> 27
 * AB -> 28
 * ...
 *
 * 输入: "AB"
 * 输出: 28
 *
 * 输入: "ZY"
 * 输出: 701
 */

/** 'a'.charCodeAt(0) -> 97
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let len = s.length;
    let sum = 0;
    for (let i = len - 1; i >= 0; i--) {
        let num = (s.charCodeAt(i) - 64) * Math.pow(26, (len - i - 1));
        sum += num;
    }

    return sum;
};

console.log(titleToNumber('ZY'));