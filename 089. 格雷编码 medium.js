/**
 * Created by doit on 2019/5/6.
 */

/**格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异。
 *
 * 给定一个代表编码总位数的非负整数 n，打印其格雷编码序列。格雷编码序列必须以 0 开头。
 * 示例 1:
 *
 * 输入: 2
 * 输出: [0,1,3,2]
 * 解释:
 * 00 - 0
 * 01 - 1
 * 11 - 3
 * 10 - 2
 *
 * 对于给定的 n，其格雷编码序列并不唯一。
 * 例如，[0,2,3,1] 也是一个有效的格雷编码序列。
 *
 * 00 - 0
 * 10 - 2
 * 11 - 3
 * 01 - 1
 */

/**格雷编码的性质有以下结论
 *  G(i) = i ^ (i/2);
 * 如 n = 3:
 * G(0) = 000,
 * G(1) = 1 ^ 0 = 001 ^ 000 = 001
 * G(2) = 2 ^ 1 = 010 ^ 001 = 011
 * G(3) = 3 ^ 1 = 011 ^ 001 = 010
 * G(4) = 4 ^ 2 = 100 ^ 010 = 110
 * G(5) = 5 ^ 2 = 101 ^ 010 = 111
 * G(6) = 6 ^ 3 = 110 ^ 011 = 101
 * G(7) = 7 ^ 3 = 111 ^ 011 = 100
 * 但是这样并没有带来coding能力的提升
 *
 *
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    if (n === 0) return [0];
    
    if (n === 1) return [0, 1];

    let pre = grayCode(n - 1);
    let res = [];
    for (let i = 0; i < pre.length; i++) {
        let cur = pre[i].toString(2);
        let first = cur + ((i % 2) ? '1' : '0');
        let last = cur + ((i % 2) ? '0' : '1');
        res.push(Number.parseInt(first, 2));
        res.push(Number.parseInt(last, 2));
    }

    return res;
};

console.log(grayCode(3));