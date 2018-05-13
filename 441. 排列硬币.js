/**
 * Created by admin on 2018/5/13.
 */
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let result =  ~~Math.sqrt(2 * n);
  return (result - 1) * result < 2 * n && (result + 1) * result > 2 * n? result - 1: result;
};

for (let i = 0;i<56;i++) {
  console.log(i, '-------',arrangeCoins(i))
}