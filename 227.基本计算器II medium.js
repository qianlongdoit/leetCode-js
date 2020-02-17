/**
 * Created by doit on 2020/2/17.
 */


/**实现一个基本的计算器来计算一个简单的字符串表达式的值。
 *
 * 字符串表达式仅包含非负整数，+， - ，*，/ 四种运算符和空格  。 整数除法仅保留整数部分。
 *
 * 示例 1:
 *
 * 输入: "3+2*2"
 * 输出: 7
 * 示例 2:
 *
 * 输入: " 3/2 "
 * 输出: 1
 * 示例 3:
 *
 * 输入: " 3+5 / 2 "
 * 输出: 5
 * 说明：
 *
 * 你可以假设所给定的表达式都是有效的。
 * 请不要使用内置的库函数 eval。
 */


/**因为是简单的表达式，没有括号
 * 所以考虑先计算高优先级的运算，再计算低优先级的运算即可，即分2次出结果
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    if (!s.length) return 0;
    let res;
    let stack = [];
    let express = s.replace(/\s/g, '').split(/\b/);

    for (let i = 0; i < express.length; i++) {
        let cur = express[i];
        if (['*', '/'].includes(cur)) {
            const a = stack.pop();
            const b = express[++i];
            let temp;

            if (cur === '*') temp = +a * +b;
            if (cur === '/') temp = parseInt(+a / +b);

            stack.push(temp);
            continue;
        }

        stack.push(cur);
    }
    console.log(stack);
    res = stack[0];
    for (let i = 0; i < stack.length; i++) {
        let cur = stack[i];

        if (cur === '+') {
            res = +res + +stack[++i];
        }
        if (cur === '-') {
            res = +res - +stack[++i];
        }
        console.log(res, '---');
    }

    console.log(res);
    return res;
};


// var token = '1+4 / 21 +3 -1';
// var token = '3+5 / 2';
var token = '1-1+1';
calculate(token)
