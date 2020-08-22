/**
 * Created by Administrator on 2018/4/20.
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let num = x.toString().split('').reverse().join('')
    if (x < 0) {
        num = '-' + num.slice(0, num.length - 1)
    }
    if (Number(num) > Math.pow(2, 31) - 1 || Number(num) < Math.pow(-2, 31)) {
        return 0
    }
    return Number(num)
};

// reverse(-123)
// reverse(120)
reverse(1534236469)

function reverse(x) {
    let sign = x < 0;

    let str = x + '';
    let temp = '';

    for (let i = str.length - 1; i >= 0; i--) {
        if (!i && str[i] === '-') break;
        temp +=str[i]
    }
    let num = sign ? -temp : temp;

    if (Number(num) > Math.pow(2, 31) - 1 || Number(num) < Math.pow(-2, 31)) {
        return 0
    }

    return num;
}