/**
 * Created by Administrator on 2018/4/25.
 */
/**遍历找到最小的置于第一位，剩余数组中找到最小的置于第二位，
 * 以此类推
 * @param arr
 */
function selectSort(arr) {
  let len = arr.length;
  let minIndex, temp;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp
  }
  return arr;
}

let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
selectSort(arr)
console.log(arr)