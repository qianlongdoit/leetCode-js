/**
 * Created by Administrator on 2018/5/8.
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function (s) {
  if (s.length <2) return s;
  let result = [];
  for (let i = s.length - 1; i >= 0; i--) {
    result.push(s[i])
  }
  return result.join('')
};

console.log(reverseString('reverseString'))
console.log(reverseString('hello'))