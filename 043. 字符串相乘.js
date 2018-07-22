/**
 * Created by admin on 2018/7/21.
 */
/**给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 *
 * 示例 1:
 * 输入: num1 = "2", num2 = "3"
 * 输出: "6"
 *
 * 示例 2:
 * 输入: num1 = "123", num2 = "456"
 * 输出: "56088"
 *
 * 说明：
 *  num1 和 num2 的长度小于110。
 *  num1 和 num2 只包含数字 0-9。
 *  num1 和 num2 均不以零开头，除非是数字 0 本身。
 *  不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
 *
 */


/**模拟手动计算的过程
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    var m = num1.length, n = num2.length;
    var arr = Array(m + n).fill(0);

    for (var i = m - 1; i >= 0; i--) {
        for (var j = n - 1; j >= 0; j--) {
            var tempMultiply = (~~num1[i]) * (~~num2[j]);

            tempMultiply += arr[i + j + 1];

            arr[i + j] += ~~(tempMultiply / 10);    //如果此时结果是2位数也不影响最终结果的正确性，下次计算时会进位
            arr[i + j + 1] = tempMultiply % 10;
        }
    }

    return arr.join('').replace(/^0+/g, '') || '0'
};

console.log(multiply('9', '99'))