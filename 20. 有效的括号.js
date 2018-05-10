/**
 * Created by admin on 2018/5/9.
 */
/**给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：
 * 1.左括号必须用相同类型的右括号闭合。
 * 2.左括号必须以正确的顺序闭合。
 * 输入: "()"
 * 输出: true
 *
 * 输入: "([)]"
 * 输出: false
 *
 * 输入: "{[]}"
 * 输出: true
 */

/**扫描这个字符串，先跟栈内的最后一个字符匹配，如果匹配上了，就弹出，
 * 如果没匹配上，就压入，当然如果栈内的字符多于剩余的字符，就可以直接判负了
 *
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s) return true;
  let stack = [];

  for (let i = 0, len = s.length; i < len; i++) {
    if (!stack.length) stack.push(s[i++]);
    let last = stack[stack.length - 1];
    if ((s[i] === ')' && last === '(') || (s[i] === ']' && last === '[') || (s[i] === '}' && last === '{')) {
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }

  return !stack.length;
};

let test = [
  '([()])',
  '([)(])',
  '(()())'
]
console.log(isValid(test[2]))