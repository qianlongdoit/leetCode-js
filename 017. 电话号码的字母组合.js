/**
 * Created by admin on 2018/5/8.
 */
/**给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 */

/**一个全排列
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };
  const len = digits.length;

  let result = [];
  let str = '';
  let move = digits.length - 1;

  while (move !== -1) {
    //  如果str长度不够，则补齐
    if (str.length < digits.length) {
      for (let i = str.length; i < len; i++) {
        str += map[digits[i]][0];
      }
      result.push(str);
    }

    //  从后向前检查，如果此位置还有其他可能值则替换，然后跳出循环
    for (let i = str.length - 1; i >= 0; i--) {
      let char = str[i];
      let arr = map[digits[i]];
      let index = arr.indexOf(char);

      if (arr[index + 1]) {
        str = str.substring(0, i) + arr[++index];
        if (str.length === len) {
          result.push(str)
        }
        break;
      } else if (i === move) {
        str = str.substring(0, move--)
      }
    }

  }

  return result;
};

console.log(letterCombinations('23452'));