/**堆排序原理
 * 1. 建立一个大根堆；
 * 2. 将堆首与堆尾的元素进行交换，这样最大值就到了堆尾部；
 * 2. 将剩余的 (n -1)个元素继续建立大根堆，然后堆首与尾交换；
 * 3. 如此反复就得到了一个升序排列的有序数组了
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

/**建立大根堆
 * 大根堆：对于每个节点而言父节点的值大于等于子节点的值
 * 对每个节点进行遍历，如果子节点值大于父节点的值，则交换位置
 *
 * @param arr
 * @returns {*}
 */
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

/**堆的调整
 * 堆的调整是基于大根堆已经建立的情况下的
 * 如果堆中的某个元素已经被破坏了大根堆的性质
 * 则需要找到这个元素，对其进行上浮或者下沉
 *
 * @param arr
 * @param size
 */
function heapify(arr, size) {
  let i = 0;
  let left = 2 * i + 1;
  while (left < size) {
    console.log(i)
    //取节点i的左右节点中的较大者
    let max = arr[left + 1] > arr[left] && left + 1 < size ? left + 1 : left;
    //取节点i 和 上面max中的较大者
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
// var arr1 = [38, 46, 48, 27, 44, 19, 47, 3, 26, 2, 5, 4, 15, 36, 50]
// heapify(arr1, 14)
// console.log(arr1)