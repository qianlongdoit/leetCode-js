/**
 * Created by Administrator on 2018/4/26.
 */
function heapSort(arr) {
  getHeap(arr);
  console.log(arr)
  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i)
    heapify(arr, i)
  }
  console.log(arr)
  return arr;

}
//  建立大根堆
function getHeap(arr) {
  for (let i = 0; i < arr.length; i++) {
    let parentIndex = Math.floor((i - 1) / 2);
    while (arr[i] > arr[parentIndex]) {
      swap(arr, i, parentIndex);
      i = parentIndex;
      parentIndex = Math.floor((i - 1) / 2);
    }
  }
  return arr;
}

function swap(arr, m, n) {
  if (m === n) return;
  let temp = arr[m];
  arr[m] = arr[n];
  arr[n] = temp
}

function heapify(arr, size) {
  let i = 0;
  let left = 2 * i + 1;
  while (left < size) {
    console.log(i)
    let max = arr[left + 1] > arr[left] && left + 1 < size ? left + 1 : left;
    max = arr[max] > arr[i] ? max : i;
    if (max === i) {
      console.log(i, max)
      break;
    }
    swap(arr, i, max);
    i = max;
    left = 2 * i + 1;
  }
}

let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
// getHeap(arr)
// console.log(getHeap(arr))
heapSort(arr)
// var arr1 = [46, 48, 27, 44, 19, 47, 3, 26, 2, 5, 4, 15, 36, 38, 50]
// heapify(arr1, 15)
// console.log(arr1)