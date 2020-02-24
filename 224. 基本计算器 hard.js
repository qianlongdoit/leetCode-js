/**
 * Created by doit on 2020/2/22.
 */


/**实现一个基本的计算器来计算一个简单的字符串表达式的值。
 * 字符串表达式可以包含左括号 ( ，右括号 )，加号 + ，减号 -，非负整数和空格  。
 *
 * 示例 1:
 * 输入: "1 + 1"
 * 输出: 2
 * 示例 2:
 *
 * 输入: " 2-1 + 2 "
 * 输出: 3
 * 示例 3:
 *
 * 输入: "(1+(4+5+2)-3)+(6+8)"
 * 输出: 23
 * 说明：
 *
 * 你可以假设所给定的表达式都是有效的。
 * 请不要使用内置的库函数 eval。
 */

/**和150题差不多的思路
 * 一个栈放数字和操作符、括号
 * 如果不是 '(' 则压入栈
 * 如果是 '(' 则开始计算此括号内的值，然后再压入栈
 *
 * 以 '2-(5-6)' 为例
 * [2, -, (, 5, -, 6]时碰到了闭合括号，计算式子的值，再将值压入栈
 * 得到 [2, -, -1]
 *
 * 因为得到值是从右向左的，如果是减法，则符号要变化
 * 就比如'4-(1)+8-10',得到 [4, -, 1, +, 8, -, 10]
 * [4, -, 1, +, -2]
 * [4, -, -1] 得到错误的值，
 * 所以在74行会有一个判断前一个运算符是否为减法，是减法的话
 * 则第一个运算数需要取相反数，做负数加法，过程变成了
 * [4, +, -1, + -2],
 * 这样就得到了正确的结果了
 *
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let res = 0;
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let cur = s[i];

        if (cur === ' ') continue;

        // 数字的时候
        while (parseInt(cur) === +cur && parseInt(s[i + 1]) === +s[i + 1]) {
            cur = cur + s[++i];
        }

        if (cur !== ')') {
            stack.push(cur);
        }
        if (cur === ')') {
            let tail = +stack.pop();
            let sum = tail;
            while (tail !== '(' && stack.length) {
                let operation = stack.pop();
                if (operation === "(") {
                    sum = tail;
                    tail = operation;
                }
                if (['+', '-'].includes(operation)) {
                    //看前一位是否有减法
                    let b = +stack.pop();
                    if (stack[stack.length - 1] === '-') {
                        stack[stack.length - 1] = '+';
                        b = -b;
                    }

                    if (operation === '+') {
                        sum = b + sum;
                    } else {
                        sum = b - sum;
                    }
                    tail = sum;
                }
            }
            if (stack[stack.length - 1] === '-') {
                stack.pop();
                stack = stack.concat(['+', -sum]);
            } else {
                stack.push(sum);
            }
        }
    }
    while (stack.length) {
        let cur = stack.shift();
        if (cur === '+') {
            res = res + +stack.shift();
            continue;
        }
        if (cur === '-') {
            res = res - +stack.shift();
            continue;
        }
        res = +cur;
    }
    return res;
};

let test = [
    '132 + 1',
    ' 2-1 + 2 ',
    '(1+(4+5+2)-3)+(6+8)',
    '1-(5)',
    '2-(5-6)',
    '4-(1)+8-10',
    "2-4-(8+2-6+(8+4-(1)+8-10))"
];

test.forEach(t => calculate(t))
