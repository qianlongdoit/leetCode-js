/**
 * Created by Administrator on 2018/5/31.
 */
/**给定一个m x n的矩阵，其中的值均为正整数，代表二维高度图每个单元的高度，请计算图中形状最多能接多少体积的雨水。
 * m 和 n 都是小于110的整数。每一个单位的高度都大于0 且小于 20000。
 *
 * 给出如下 3x6 的高度图:
 * [
 *  [1,4,3,1,3,2],
 *  [3,2,1,3,2,4],
 *  [2,3,3,2,3,1]
 * ]
 * 返回 4。
 */


/**解答错误。。。。暂无好思路
 *
 *
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function (heightMap) {
  if (heightMap.length < 2 || heightMap[0] < 2) return 0;
  const len = heightMap.length;
  let drop = 0;
  let leftMax = [];
  let rightMax = [];
  let topMAx = [];
  let downMax = [];

  //  扫描左边最大值
  for (let i = 0; i < len; i++) {
    let temp = [0];
    for (let j = 1, n = heightMap[0].length; j < n; j++) {
      temp[j] = Math.max(heightMap[i][j - 1], temp[j - 1]);
    }
    leftMax.push(temp);
  }

  //  扫描右边最大值
  for (let i = 0; i < len; i++) {
    let temp = [];
    for (let j = heightMap[0].length - 1; j >= 0; j--) {
      j === heightMap[0].length - 1
        ? temp[j] = 0
        : temp[j] = Math.max(heightMap[i][j + 1], temp[j + 1]);
    }
    rightMax.push(temp);
  }

  //  扫描上边最大值
  for (let i = 0; i < len; i++) {
    topMAx[i] = [];
    for (let j = 0, n = heightMap[0].length; j < n; j++) {
      i === 0
        ? topMAx[i][j] = 0
        : topMAx[i][j] = Math.max(topMAx[i - 1][j], heightMap[i - 1][j]);
    }
  }

  //  扫描下边最大值
  for (let i = len - 1; i >= 0; i--) {
    downMax[i] = [];
    for (let j = 0, n = heightMap[0].length; j < n; j++) {
      i === len - 1
        ? downMax[i][j] = 0
        : downMax[i][j] = Math.max(downMax[i + 1][j], heightMap[i + 1][j])
    }
  }

  //  计算累加和
  for (let i = 1; i < len; i++) {
    for (let j = 1, n = heightMap[0].length; j < n; j++) {
      let height = Math.min(leftMax[i][j], rightMax[i][j], topMAx[i][j], downMax[i][j]);
      if (height > heightMap[i][j]) {
        console.log(`i=${i},j=${j},${height},---${heightMap[i][j]}`)
      }
      drop += height > heightMap[i][j] ? height - heightMap[i][j] : 0;
    }
  }

  // console.log(leftMax)
  console.log(rightMax)
  // console.log(topMAx)
  // console.log(downMax)
  return drop;
};

// let map = [
//   [1, 4, 3, 1, 3, 2],
//   [3, 2, 1, 3, 2, 4],
//   [2, 3, 3, 2, 3, 1]
// ];
let map = [
  [12, 13, 1, 12],
  [13, 4, 13, 12],
  [13, 8, 10, 12],
  [12, 13, 12, 12],
  [13, 13, 13, 13]];
console.log(trapRainWater(map))