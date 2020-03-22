/**
 * Created by doit on 2020/3/22.
 */

/**递归乘法。 写一个递归函数，不使用 * 运算符， 实现两个正整数的相乘。可以使用加号、减号、位移，
 * 但要吝啬一些。
 *
 * 示例1:
 * 输入：A = 1, B = 10
 * 输出：10
 * 示例2:
 *
 * 输入：A = 3, B = 4
 * 输出：12
 * 提示:
 *
 * 保证乘法范围不会溢出
 */

/**乘法的实质就是加法，正整数 a * b 就是 a 个 b 相加
 *
 *
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var multiply = function(A, B) {
    let [a, b] = A < B ? [A, B] : [B, A];

    return a === 0 ? 0 : b + multiply(a - 1, b);
};

console.log(multiply(3, 40));