/**
 * Created by admin on 2019/1/19.
 */
/**删除最小数量的无效括号，使得输入的字符串有效，返回所有可能的结果。
 * 说明: 输入可能包含了除 ( 和 ) 以外的字符。
 * 示例 1:
 * 输入: "()())()"
 * 输出: ["()()()", "(())()"]
 * 示例 2:
 * 输入: "(a)())()"
 * 输出: ["(a)()()", "(a())()"]
 * 示例 3:
 * 输入: ")("
 * 输出: [""]
 */

/**之前有做过一题叫判断括号的有效性，
 * 具体的思路就是用一个栈来存放括号，
 * 遍历整个字符串：`(`入栈，`)`出栈，
 * 遍历结束后，如果栈为空，则是有效的括号。
 *
 * 借此可以找出哪些括号是无效的。
 * 当得到了多余的左右括号数量，剩下的就是如何删除括号时获取的结果不是重复的了
 *
 * 经思考发现这类生成全部可能的问题，最好的解决方式就是使用递归，思考相对容易一点，
 * 如果手动完成整个生成的过程，判断条件多，容易出错
 *
 * 如果使用递归，则思路如下：
 * 从头开始遍历，遇到`(`count++，遇到`)`count--,
 * 如果过程中count < 0，则说明多了一个`)`,我们需要删除一个`)`,
 * 需要删除哪一个？，前面所有的`)`都有可能，但可能会造成重复的结果，
 * 哪些会造成重复的结果？连续的`)`。
 * 所以我们只删除第一个，这样就不会重复
 *
 * 对于错误的`(`，我们给出的处理方法就是将原来的字符串reverse一下再利用原来的函数进行处理
 * 这样就得到了没有错误的()的字符串了
 *
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    if (!s) return [''];
    let res = [];

    const removeStr = (str, start, pre_delete, mark) => {
        let count = 0;
        for (let i = start, len = str.length; i < len; i++) {

            if (str[i] === mark[0]) {
                count++;
            } else if (str[i] === mark[1]) {
                count--;
            }

            if (count < 0) {
                for (let j = pre_delete; j <= i; j++) {
                    if ((str[j] === mark[1] && j === 0) || (str[j] === mark[1] && str[j - 1] !== mark[1])) {
                        let s = deleteStr(str, j);
                        removeStr(s, i, j, mark);
                    }
                }
                return;
            }
        }

        if (mark[0] === '(') {
            removeStr(str.split('').reverse().join(''), 0, 0, [')', '(']);
            return;
        }

        res.push(str.split('').reverse().join(''));
    };

    function deleteStr(s, pos) {
        return s.substring(0, pos) + s.substring(pos + 1);
    }

    removeStr(s, 0, 0, ['(', ')']);
    console.log(res);
    return res;
};

// var str = '(a)())()'
var str = ')('
removeInvalidParentheses(str)