/**
 * Created by admin on 2018/6/3.
 */
/**给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。
 *
 * 输入：S = "ab##", T = "c#d#"
 * 输出：true
 * 解释：S 和 T 都会变成 “”。
 *
 * 输入：S = "a#c", T = "b"
 * 输出：false
 * 解释：S 会变成 “c”，但 T 仍然是 “b”。
 */

/**这么明显用栈解决的问题，第一时间居然开始没想到！！！
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  var stack1 = [];
  var stack2 = [];

  for (let i = 0, len = S.length; i < len; i++) {
    S[i] === '#' && stack1 ? stack1.pop() : stack1.push(S[i]);
  }
  for (let i = 0, len = T.length; i < len; i++) {
    T[i] === '#' && stack2 ? stack2.pop() : stack2.push(T[i]);
  }

  for (let i = 0, len = stack1.length; i < len; i++) {
    if (stack1[i] !== stack2[i]) return false;
  }

  return true;
};
var str1 = "bxj##tw";
var str2 = "bxo#j##tw"

console.log(backspaceCompare(str1, str2));