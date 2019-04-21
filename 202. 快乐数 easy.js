/**
 * Created by doit on 2019/4/21.
 */

/**编写一个算法来判断一个数是不是“快乐数”。
 *
 * 一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。
 *
 * 示例:
 *
 * 输入: 19
 * 输出: true
 * 解释:
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 *
 */

/**好像，只要出现sum === 4必定不快乐。。。
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let num = [...(n + '')].map(a => +a);
    let arrs = [];

    while (!(num.length === 1 && num[0] === 1)) {
        let sum = 0;

        num.forEach(i => {
            sum += Math.pow(i, 2);
        });
        num = [...(sum + '')].map(a => +a);

        if (arrs.includes(JSON.stringify(num))) {
            return false;
        }
        arrs.push(JSON.stringify(num));
        console.log(num);
    }

    return true;
};

console.log(isHappy(4));