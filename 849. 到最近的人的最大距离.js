/**
 * Created by admin on 2018/6/10.
 */
/**在一排座位（ seats）中，1 代表有人坐在座位上，0 代表座位上是空的。
 * 至少有一个空座位，且至少有一人坐在座位上。
 * 亚历克斯希望坐在一个能够使他与离他最近的人之间的距离达到最大化的座位上。
 * 返回他到离他最近的人的最大距离。
 *
 * 示例 1：
 * 输入：[1,0,0,0,1,0,1]
 * 输出：2
 *
 * 解释：
 * 如果亚历克斯坐在第二个空位（seats[2]）上，他到离他最近的人的距离为 2 。
 * 如果亚历克斯坐在其它任何一个空位上，他到离他最近的人的距离为 1 。
 * 因此，他到离他最近的人的最大距离是 2
 */

/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
  let temp = [];

  for (let i = 0, len = seats.length; i < len; i++) {
    if (seats[i] === 1) temp.push(i);
  }

  let max = 0;
  for (let i = 0, len = temp.length; i < len; i++) {
    if (temp[i + 1]) {
      max = Math.max(~~((temp[i + 1] - temp[i]) / 2), max)
    }
  }

  if (temp[0] !== 0 && max < temp[0]) {
    max = temp[0];
  }

  if (temp[temp.length - 1] !== seats.length - 1 && max < seats.length - 1 - temp[temp.length - 1]) {
    max = seats.length - 1 - temp[temp.length - 1]
  }

  // console.log(max)
  return max;
};

// var arr = [0,0,1,0,1,0,1];
var arr = [0, 0, 0, 0, 0, 1];
// var arr = [1,1,0,0,0,1,1,0,0,1,0];

maxDistToClosest(arr)