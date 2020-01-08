/**
 * Created by doit on 2020/1/8.
 */

/**给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。
 *
 * 示例:
 *
 * 输入: 38
 * 输出: 2
 * 解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于 2 是一位数，所以返回 2。
 * 进阶:
 * 你可以不使用循环或者递归，且在 O(1) 时间复杂度内解决这个问题吗？
 */

/**只想到了常规解法
 *
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num < 10) return num;

    while (num > 9) {
        let str = num + '';
        let sum = 0;

        for (let i = 0; i < str.length; i++) {
            sum += ~~str[i];
        }

        num = sum;
    }

    return num;

    //非循环、递归写法
    /*if (num < 10) return num;
    let temp = num % 9;
    if (temp === 0) return 9;
    return temp;*/
};


console.log(addDigits(18));