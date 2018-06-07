/**
 * Created by Administrator on 2018/6/7.
 */
/**编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
 * 示例 1：
 * 给定 s = "hello", 返回 "holle".
 * 示例 2：
 * 给定 s = "leetcode", 返回 "leotcede".
 * 注意:
 * 元音字母不包括 "y".
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let vowels = ['a', 'o', 'e', 'i', 'u'];
  let arr = s.split('');
  let n = s.length;
  let l = 0;
  let r = n - 1;

  while (l < r) {
    while (vowels.indexOf(arr[l].toLowerCase()) === -1 && l < r) {
      l++;
    }

    while (vowels.indexOf(arr[r].toLowerCase()) === -1 && l < r) {
      r--;
    }

    //  交换位置
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++;
    r--;
  }
  return arr.join('');
};

var s = 'leetcOde';

console.log(reverseVowels(s))