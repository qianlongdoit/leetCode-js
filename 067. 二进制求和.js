/**
 * Created by admin on 2018/8/3.
 */
/**给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 输入为非空字符串且只包含数字 1 和 0。
 *
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 */


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    var m = a.length;
    var n = b.length;
    var len = Math.max(m, n);
    var result = [];

    for (var i = 0; i < len; i++) {
        var x = a[a.length - 1 - i] || 0;
        var y = b[b.length - 1 - i] || 0;
        result.unshift((~~x + ~~y));
    }

    i--;
    while (i >= 0) {
        if (result[i] > 1) {
            result[i] -= 2;

            i - 1 >= 0 ? result[i - 1]++ : result.unshift(1);
        }
        i--;
    }

    return result.join('');
};

console.log(addBinary('000', '01'))