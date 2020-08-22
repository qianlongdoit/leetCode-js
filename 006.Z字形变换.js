/**
 * Created by Administrator on 2018/4/20.
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let finalArr = [];
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
    for (let i = 0; i < temp.length; i++) {
        finalArr = finalArr.concat(temp[i])
    }

    return finalArr.join('')
};

// convert('123456789abcd', 4)
console.log(convert('123', 2))

/** 把数排列一下
 *  0   4   8     12    16
 *  1 3 5 7 9  11 13 15
 *  2   6   10    14
 *
 *  我们得到下面规律 0 1 2 3 一个循环
 *  取数的的规律也出来了
 */


var convert = function (s, numRows) {
    let len = s.length;
    if (numRows >= s.length || numRows === 1) return s;
    let arr = [];
    let step = 2 * numRows - 2; //周期

    for (let i = 0; i < len; i++) {
        let j = i % step;
        if (!arr[i % numRows]) {
            arr[j] = [];
        }

        let temp = i % step;

        if (temp < numRows) {
            arr[j].push(s[i]);
        } else {
            let distance = step - temp;
            arr[distance].push(s[i])
        }
    }

    return arr.reduce((pre, cur) => {
        return pre + cur.join('')
    }, '');
};

let test = [
    ['LEETCODEISHIRING', 3, 'LCIRETOESIIGEDHN'],
    ['LEETCODEISHIRING', 4, 'LDREOEIIECIHNTSG'],
    ["PAYPALISHIRING", 3, "PAHNAPLSIIGYIR"],
    ["A", 1, "A"],
];

test.forEach(t => {
    if(convert(t[0], t[1]) !== t[2]) {
        console.log('wrong: ', convert(t[0], t[1]));
    }
})