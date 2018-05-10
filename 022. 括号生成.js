/**
 * Created by Administrator on 2018/5/9.
 */
/**给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 * 例如，给出 n = 3，生成结果为：
 * [
 *  "((()))",
 *  "(()())",
 *  "(())()",
 *  "()(())",
 *  "()()()"
 *  ]
 */

/**这题想到了递归，但是不知道如何递归把全部可能性列出来，上网搜了一下，第一眼还没看明白，
 * 自己动手写了一下递归的过程才明白了怎么回事。
 *
 * 终止条件明确，每个位置有2种可能，通过使用参数和判断条件过滤一下即可
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = []

  gene(n, n, '');

  function gene(left, right, str) {

    if (left === 0 && right === 0) {
      return result.push(str)
    }

    if (left > 0) {
      gene(left - 1, right, str + '(')
    }

    if (right > 0 && right > left) {
      gene(left, right - 1, str + ')')
    }
  }

  return result;
};

console.log(generateParenthesis(4))
