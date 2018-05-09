/**
 * Created by Administrator on 2018/4/20.
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let finalArr =[];
  let temp = [];
  if (numRows >= s.length || numRows === 1) return s;
  for (let i = 0; i < s.length; i++) {
    let j = i % (2 * numRows - 2);
    if (!temp[i % numRows]) temp.push([]);
    if (j >= numRows) {
      temp[numRows - (j + 1) % numRows - 1].push(s[i])
    } else {
      temp[j % numRows].push(s[i])
    }
  }
  for (let i=0;i<temp.length;i++){
    finalArr = finalArr.concat(temp[i])
  }
  console.log(finalArr)
  return finalArr.join('')
};

// convert('123456789abcd', 4)
console.log(convert('123', 2))