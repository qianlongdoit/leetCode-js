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
  let map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };

  let result = [];
  let str = '';

  for (let i = 0, len = digits.length; i < len; i++) {
    str += map[digits[i]][0];
  }
  result.push(str);

  let move = digits.length - 1;
  let index = 0;
  let arr = map[digits[move]];
  //  所有可能遍历完时，start的值就是第一个数字包含字母的数量了
  while (!(move === 0 && index === arr.length)) {
    let char = str[move];
    arr = map[digits[move]];
    index = arr.indexOf(char);

    if (arr[index + 1]) {
      str = str.substring(0, move) + arr[++index];
      console.log('------------',str)
      result.push(str);
      // break;
    } else {
      move--;
      str = str.substring(0, move);
      index = 0;
      console.log('+++++++++++++', str)
    }
  }

  result.push(str);
  return result;
};

console.log(letterCombinations('234'));