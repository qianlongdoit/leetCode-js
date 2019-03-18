/**
 * Created by doit on 2019/3/18.
 */

/**罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。
 *
 * 字符          数值
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。
 *
 * 27 写做  XXVII, 即为 XX + V + II 。
 *
 * 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，
 * 而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。
 * 同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
 *
 * I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
 * X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
 * C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 * 给定一个整数，将其转为罗马数字。输入确保在 1 到 3999 的范围内。
 */

/**似乎很简单，睡觉前来一题
 * 目前只知道穷举的办法
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    // let map = {
    //     1: 'I',
    //     5: 'V',
    //     10: 'X',
    //     50: 'L',
    //     100: 'C',
    //     500: 'D',
    //     1000: 'M',
    // };
    let map = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    let res = [];
    let numStr = num + '';
    let len = numStr.length;

    for (let i = 0; i < len ; i++) {
        let cur = numStr[len - i - 1];
        let rate = [map[2 * i], map[Math.min(2 * i + 1, map.length)], map[Math.min(2 * i + 2, map.length)]];

        if (~~cur <= 3) {
            res = Array(~~cur).fill(rate[0]).concat(res);
            continue;
        }

        if (~~cur <= 4) {
            res.unshift(rate[1]);
            res.unshift(rate[0]);
            continue;
        }

        if (cur === '5') {
            res.unshift(rate[1]);
            continue;
        }

        if (~~cur <= 8) {
            res = Array(~~cur - 5).fill(rate[0]).concat(res);
            res.unshift(rate[1]);
            continue;
        }

        if (cur === '9') {
            res.unshift(rate[2]);
            res.unshift(rate[0]);
        }
    }

    return res.join('');
};

console.log(intToRoman(1234));
