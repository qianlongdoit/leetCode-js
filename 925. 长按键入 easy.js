/**
 * Created by doit on 2020/1/1.
 */

/**你的朋友正在使用键盘输入他的名字 name。偶尔，在键入字符 c 时，按键可能会被长按，而字符可能被输入 1 次或多次。
 * 你将会检查键盘输入的字符 typed。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 True。
 *  
 * 示例 1：
 * 输入：name = "alex", typed = "aaleex"
 * 输出：true
 * 解释：'alex' 中的 'a' 和 'e' 被长按。
 * 示例 2：
 * 输入：name = "saeed", typed = "ssaaedd"
 * 输出：false
 * 解释：'e' 一定需要被键入两次，但在 typed 的输出中不是这样。
 * 示例 3：
 * 输入：name = "leelee", typed = "lleeelee"
 * 输出：true
 *
 * 提示：
 * name.length <= 1000
 * typed.length <= 1000
 * name 和 typed 的字符都是小写字母。
 */

/**双指针题目
 *
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let l = 0;
    let r = 0;

    for (let i = 0; i < typed.length; i++) {
        if (name[l] !== typed[r]) return false;

        if (name[l + 1] === typed[r + 1]) {
            l++;
            r++;
        } else if (name[l] === typed[r + 1]) {
            r++;
        } else {
            return false
        }
    }

    while (r < typed.length) {
        if (name[l] === typed[r + 1]) r++;
    }

    return r === typed.length;
};

let name, type;

let test = [
  ['alex', 'aaleex', true],
  ['saeed', 'ssaaedd', false],
  ['leelee', 'lleeelee', true],
  ['laiden', 'laiden', true],
  ['pyplrz', 'ppyypllr', false],
];

test.forEach(t => {
    const [name, type, result] = t;
    let res = isLongPressedName(name, type);
    if (res !== result) {
        console.log(name, type, result, res);
    }
});

















