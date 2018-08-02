/**
 * Created by admin on 2018/8/2.
 */
/**给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。
 * 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：
 *  1."123"
 *  2."132"
 *  3."213"
 *  4."231"
 *  5."312"
 *  6."321"
 * 给定 n 和 k，返回第 k 个排列。
 * 说明：
 * 给定 n 的范围是 [1, 9]。
 * 给定 k 的范围是[1,  n!]。
 */

/**注意，此题虽然与031类似，但此题按031的解法会超时
 * 所以加速的思路是确定第K个排列是什么数字开头的
 * 比如 以1开头包含 前1~（n-1）!个排列
 * 确定k落在那个范围，慢慢确定第k个排列是什么
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    if (n === 1) return '1';

    var str = '';
    var nums = [];
    for (var i = 0; i < n; i++) {
        nums.push(i + 1);
    }

    var j = n;
    var remainder = k - 1;

    while (j >= 0) {
        var quotient = ~~(remainder / factorial(j - 1));
        remainder = remainder % factorial(j - 1);

        str += nums.splice(quotient, 1)[0];
        if (remainder === 0) return str += nums.join('');
        j--;
    }

    function factorial(n) {
        if (n < 0 || n !== ~~n) return new Error('type error');
        if (n === 1 || n === 0) return 1;

        return n * factorial(n - 1);
    }

    return str;
};

// console.log(getPermutation(4, 5))
for (var i = 1; i < 25; i++) {
    console.log(getPermutation(4, i))
}