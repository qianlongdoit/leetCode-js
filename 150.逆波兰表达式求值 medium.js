/**
 * Created by doit on 2019/8/22.
 */

/**根据逆波兰表示法，求表达式的值。
 *
 *有效的运算符包括 +, -, *, / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
 *
 *说明：
 *
 *整数除法只保留整数部分。
 *给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
 *
 * 输入: ["2", "1", "+", "3", "*"]
 * 输出: 9
 * 解释: ((2 + 1) * 3) = 9
 *
 * 输入: ["4", "13", "5", "/", "+"]
 * 输出: 6
 * 解释: (4 + (13 / 5)) = 6
 */

/**逆波兰式求值比较简单，
 * 碰见数字则压入栈
 * 碰见操作符，则取出数字进行运算，得到的结果压入栈
 * 最后得到结果
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    const operation = ['+', '-', '*', '/'];
    while (tokens.length) {
        const cur = tokens.shift();
        if (operation.includes(cur)) {
            const b = stack.pop();
            const a = stack.pop();
            let res;
            switch (cur) {
                case '+': {
                    res = a + b;
                    break;
                }
                case '-': {
                    res = a - b;
                    break;
                }
                case '*': {
                    res = a * b;
                    break;
                }
                case '/': {
                    res = ~~(a / b);
                    break;
                }
                default: {
                    return res;
                }
            }
            stack.push(+res);
        } else {
            stack.push(+cur);
        }
    }

    return stack.pop();
};

// let RPN = ["2", "1", "+", "3", "*"];
// let RPN = ["4", "13", "5", "/", "+"];
let RPN = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
console.log(evalRPN(RPN));


/**中缀表达式转逆波兰表达式
 * @param {string[]} tokens
 * @return {array[]}
 */
var getRPN = function (tokens) {
    let res = [];
    let stack = [];
    const operation = ['+', '-', '*', '/'];
    const priority = {
        '(': 0,
        ')': 0,
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
    };

    for (let i = 0; i < tokens.length; i++) {
        let cur = tokens[i];
        //  如果是操作数
        if (!operation.includes(cur) && cur !== '(' && cur !== ')') {
            res.push(cur);
            continue;
        }

        if (cur === '(') {
            stack.push(cur);
            continue;
        }

        if (cur === ')') {
            let s = stack.pop();
            while (s !== '(' && stack.length) {
                res.push(s);
                s = stack.pop();
            }
            continue;
        }


        if (operation.includes(cur)) {
            let last = stack[stack.length - 1];
            while (stack.length && priority[cur] < priority[last]) {
                res.push(last);
                stack.pop();
                last = stack[stack.length - 1];
            }
            stack.push(cur);
        }
    }

    while (stack.length) {
        res.push(stack.pop())
    }
    console.log(res);
}

// let token = '(a+b)*c-(a+b)/e';  //  a b + c * a b + e / -
let token = '((a+b)*c-(a+b))/e';  //


getRPN(token);
