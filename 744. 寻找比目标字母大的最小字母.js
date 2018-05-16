/**
 * Created by Administrator on 2018/5/16.
 */
/**给定一个只包含小写字母的有序数组letters 和一个目标字母 target，寻找有序数组里面比目标字母大的最小字母。
 * 数组里字母的顺序是循环的。举个例子，如果目标字母target = 'z' 并且有序数组为 letters = ['a', 'b']，则答案返回 'a'。
 *
 * letters长度范围在[2, 10000]区间内。
 * letters 仅由小写字母组成，最少包含两个不同的字母。
 * 目标字母target 是一个小写字母。
 *
 * 输入:
 * letters = ["c", "f", "j"]
 * target = "a"
 * 输出: "c"
 *
 * 输入:
 * letters = ["c", "f", "j"]
 * target = "g"
 * 输出: "j"
 */

/**
 * @param {string[]} letters
 * @param {string} target
 * @return {string}
 */
var nextGreatestLetter = function (letters, target) {
  let left = 0;
  let right = letters.length - 1;
  if (letters[right] <= target) return letters[0];

  while (left <= right) {
    let mid = (left + right) >> 1;
    letters[mid] <= target ? left = mid + 1 : right = mid - 1;

  }

  return letters[left] === target ? letters[(left + 1) % letters.length] : letters[left];
};

// let letters = ["e","e","e","e","e","e","n","n","n","n"];
let letters = ["c", "f", "f", "f", "f", "f", "f"];

console.log(nextGreatestLetter(letters, 'f'));