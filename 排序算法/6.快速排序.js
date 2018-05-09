/**
 * Created by Administrator on 2018/4/26.
 */
const check = require('./testSample');

/**取一个基准pivot,数组分为left， pivot， right
 * left放比pivot小的数，right放比pivot大的数
 *
 * 递归对left和right进行操作，直至left和right都不存在
 */
//  out-place
function quickSort_outPlace(arr) {
  if (arr.length < 2) return arr;

  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  let left = [],
    right = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  return quickSort(left).concat([pivot]).concat(quickSort(right))
}

//  in-place
function quickSort(arr) {
  if (arr === null || arr.length < 2) return;
  sort(arr, 0, arr.length - 1);

  function sort(arr, left, right) {
    if (left < right) {
      let pivot = partition(arr, left, right);
      sort(arr, left, pivot - 1);
      sort(arr, pivot + 1, right);
    }
  }

  function partition(arr, left, right) {
    let pivot = left + ~~(Math.random() * (right - left + 1));
    let lessIndex = left;
    swap(arr, pivot, right);
    for (let i = left; i < right; i++) {
      if (arr[i] < arr[right]) {
        swap(arr, lessIndex, i);
        lessIndex++;
      }
    }
    swap(arr, lessIndex, right);
    return lessIndex;
  }

  function swap(arr, m, n) {
    let temp = arr[m];
    arr[m] = arr[n];
    arr[n] = temp;
  }

  return arr;
}
let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
// quickSort(arr)
// console.log(quickSort(arr))
var s = new Date();
check.compare(quickSort)
console.log(new Date() - s);