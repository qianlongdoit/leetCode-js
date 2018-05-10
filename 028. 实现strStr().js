/**
 * Created by Administrator on 2018/5/8.
 */
/**使用一个map，遍历haystack中每个字符的出现的index
 * 如 {a:[1,2,5,7], b:[0,3,8]...}
 * 假设 map[needle[0]][i]值为 5，map[needle[1]]中有6，一直到needle遍历完，map中都有对应的键，
 * 而且能找到和上一个的连续的值，则说明有子字符串，返回5即可
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  //  最简单的使用js内置方法
  // return haystack.indexOf(needle);

  //此方法在测试用例特别长的时候会超出时间限制
  if (!needle) return 0;
  if (haystack.length < needle.length || haystack.indexOf(needle[0]) === -1) return -1;
  let map = {};

  for (let i = 0, len = haystack.length; i < len; i++) {
    map[haystack[i]] ? map[haystack[i]].push(i) : map[haystack[i]] = [i];
  }

  console.log(map)
  let index = 0;
  let firstChar = map[needle[0]];
  let len = firstChar.length;
  while (index < len) {
    let startIndex = firstChar[index];
    let findIt = true;
    for (let i = 0; i < needle.length; i++) {
      console.log('startIndex: ',startIndex,'------------', '现在找的字符是',needle,needle[i], map[needle[i]])
      console.log('next', startIndex + i)

      if (!map[needle[i]] || map[needle[i]].indexOf(startIndex + i) === -1) {

        console.log(needle[i], map[needle[i]].indexOf(startIndex + i))

        findIt = false;
        break;
      }
    }
    if (findIt) {
      return firstChar[index]
    }
    index++;
  }

  return -1;
};

// console.log(strStr('ababababc', 'abc'))
console.log(strStr('mississippi', 'issip'))