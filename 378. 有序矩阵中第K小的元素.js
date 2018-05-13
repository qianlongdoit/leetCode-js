/**
 * Created by admin on 2018/5/13.
 */
/**给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第k小的元素。
 * 请注意，它是排序后的第k小元素，而不是第k个元素。
 *
 * 假设 k 的值永远是有效的, 1 ≤ k ≤ n * n 。
 *
 * matrix = [
 * [ 1,  5,  9],
 * [10, 11, 13],
 * [12, 13, 15]
 * ],
 * k = 8,
 * 返回 13
 */

/**写一个方法获取(i,j)位置小于其的数的个数
 *
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  let len = matrix.length;
  let min = matrix[0][0];
  let max = matrix[len - 1][len - 1];
  if (matrix.length === 1) return matrix[0][0];

  while (min <= max) {
    let mid = (max + min) >> 1;
    let count = getCountLessThan(matrix, mid);

    count < k ? min = mid + 1 : max = mid - 1;
    console.log(min, mid, max, count, k)
  }

  return min
};

/**在题中的矩阵中找到所以比target小的数的数量
 *
 * @param matrix
 * @param target
 * @returns {number}
 */
function getCountLessThan(matrix, target) {
  let count = 0;
  let len = matrix.length;
  let x = len - 1;
  let y = 0;

  while (x >= 0 && y < len) {
    //找到当前行第一个大于target的数的index
    matrix[x][y] > target ? x-- : (count += x + 1, y++);
  }

  return count;
}


let matrix = [
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15]
];

matrix = [[2000000000]]
console.log(kthSmallest(matrix, 1))
// console.log(getCountLessThan(matrix, 14))
