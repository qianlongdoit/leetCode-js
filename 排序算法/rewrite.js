/**
 * Created by Administrator on 2018/5/2.
 */
function quickSort(arr) {
  if (arr === null || arr.length < 2) return;
  sort(arr, 0, arr.length - 1);
  return arr;
}

function partition(arr, left, right) {
  let pivot = left + ~~(Math.random() * (right - left + 1));
  let less = left;
  // console.log(pivot, arr[pivot])
  swap(arr, pivot, right);
  for (let i = left; i < right; i++) {
    if (arr[i] < arr[right]) {
      console.log(arr[i], arr[right],'---------',less)
      swap(arr, less, i);
      less++;
    }
  }
  // console.log(less)
  swap(arr, less, right);
  return less;
}

function sort(arr, left, right) {
  if (left < right) {
    let pivot = partition(arr, left, right);
    console.log('+++++++++',pivot,'+++++++++')
    console.log(arr)
    sort(arr, left, pivot - 1);
    sort(arr, pivot + 1, right);
  }
}

function swap(arr, m, n) {
  let temp = arr[m];
  arr[m] = arr[n];
  arr[n] = temp;
}

let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
// partition(arr, 0, arr.length - 1)
// console.log(partition(arr, 0, arr.length - 1))
// console.log(arr)
sort(arr, 0, arr.length-1)
// console.log(arr)
// quickSort(arr)
// console.log(arr)