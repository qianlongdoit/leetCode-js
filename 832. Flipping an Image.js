/**
 * Created by admin on 2018/5/13.
 */
/**Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.
 * To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0]
 * horizontally results in [0, 1, 1].
 * To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1]
 * results in [1, 0, 0].
 *
 * Input: [[1,1,0],[1,0,1],[0,0,0]]
 * Output: [[1,0,0],[0,1,0],[1,1,1]]
 *
 * Input: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
 * Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
 */

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  for (let i = 0, len = A.length; i < len; i++) {
    for (let j = 0; j < len / 2; j++) {
      swap(A[i], j, len - j - 1);
    }
  }

  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = (arr[j] + 1) % 2;
    arr[j] = (temp + 1) % 2;
  }

  return A;
};

var arr = [
  [1, 1, 0, 0],
  [1, 0, 0, 1],
  [0, 1, 1, 1],
  [1, 0, 1, 0]
]

console.log(flipAndInvertImage(arr))