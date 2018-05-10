/**
 * Created by admin on 2018/4/20.
 */
/**将矩阵先对角线再以垂直线翻转即可得到90°旋转的要求
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  let n = matrix.length;
  //  对角线翻转
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let temp = matrix[j][i];
      matrix[j][i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
  //  垂直线翻转
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - j -1];
      matrix[i][n - j -1] = temp;
    }
  }

};

// let matrix1 = [
//   [5, 1, 9, 11],
//   [2, 4, 8, 10],
//   [13, 3, 6, 7],
//   [15, 14, 12, 16]
// ];
let matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

rotate(matrix2);
console.log(matrix2);