/**
 * Created by admin on 2018/6/2.
 */
/**给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 示例 1:
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 示例 2:
 * 输入: "race a car"
 * 输出: false
 *
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    //  跳过不是字母的部分
    if (!/\w/.test(s[left])) {
      left++;
    } else if (!/\w/.test(s[right])) {
      right--;
    } else {
      //  回文比较
      if (s[left].toLowerCase() !== s[right].toLowerCase()) {
        return false;
      } else {
        left++;
        right--;
      }
    }
  }

  return true;
};

console.log(isPalindrome("0p"))