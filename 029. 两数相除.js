/**
 * Created by Administrator on 2018/5/7.
 */
/**给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
 * 返回被除数 dividend 除以除数 divisor 得到的商。
 * 除数不为 0。
 *
 * 输入: dividend = 7, divisor = -3
 * 输出: -2
 */

/**
 * @param {number} dividend
 * @param {number} divisor
 */
var divide = function (dividend, divisor) {
  if (divisor === 0) return;

  let minus = false;
  if ((divisor > 0 && dividend < 0) || (divisor < 0 && dividend > 0)) {
    minus = true;
  }

  divisor = Math.abs(divisor);
  dividend = Math.abs(dividend);

  let remain = dividend;
  let _divisor = divisor;
  let count = 0;
  let result = 0;

  while (remain >= _divisor) {

    while (remain >= _divisor) {
      if (_divisor + _divisor > remain) {
        count = count === 0 ? 1 : count + count;
        // console.log('++++++++++', count)
        break;
      }
      _divisor += _divisor;
      count = count === 0 ? 1 : count + count;
      // console.log('--------', remain, _divisor, count, '-------')
    }
    remain = remain - _divisor;
    _divisor = divisor;
    result += count;
    count = 0;

    // console.log(remain, '---', _divisor, result)
  }
  return minus ? (0 - result) : result;
};

// console.log(divide(-2, 1))

//对数器
function checkout() {
  let pass = true;
  let time = new Date();
  for (let i = 0; i < 500000; i++) {
    let dividend = ~~(Math.random() * (Math.pow(2, 31) - 1) - Math.random() * (Math.pow(2, 31) - 1));
    let divisor = ~~(Math.random() * 50 - Math.random() * 50);

    if (divisor === 0) continue;
    let spec = ~~(dividend / divisor);
    let quotient = divide(dividend, divisor);

    if(quotient !== spec) {
      pass = false;
      console.log('出错了！',dividend, divisor)
      break;
    }
  }

  if (pass) console.log('all test passed, used', new Date() - time,'ms')
}

checkout()

// console.log(divide(1098218332, 1))

// console.log(1314890434 > Math.pow(2,31))