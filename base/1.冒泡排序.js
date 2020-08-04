/**
 * Created by Administrator on 2018/4/25.
 */

/**相邻元素进行比较，然后交换
 * 第一次外层循环，把最大的数冒泡到了数组尾部，确定了最大的数
 * 外层时间复杂度是 O(n)
 * 内层时间复杂度是 O(n)
 * 合计时间复杂度   O(n^2)
 *
 * @param arr
 * @return {*}
 */
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}


let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
bubbleSort(arr)
console.log(arr)