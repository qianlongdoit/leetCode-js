/**
 * Created by doit on 2019/4/24.
 */

/**实现 pow(x, n) ，即计算 x 的 n 次幂函数。
 *
 * 输入: 2.00000, 10
 * 输出: 1024.00000
 *
 * 输入: 2.00000, -2
 * 输出: 0.25000
 * 解释: 2^-2 = (1/2)^2 = 1/4 = 0.2
 * -100.0 < x < 100.0
 * n 是 32 位有符号整数，其数值范围是 [−2^31, 2^31 − 1] 。
 */

/**此题的关键点在于n的值非常大，容易超时，所以要做加速处理
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1.0;
    if (n === 1) return x;
    if (n < 0) {
        return 1/myPow(x, -n);
    }

    let sub = myPow(x, ~~(n / 2));
    return sub * sub * myPow(x, n % 2);
};

console.log(myPow(2.000, 10000));