/**
 * Created by Administrator on 2018/4/26.
 */
/**递归思想
 * 数组分2半，对left和right分别取出第一个数进行比较，小的放入新数组，直至数组中的数取完
 * 递归完成数组排序
 *
 * @param arr
 * @return {*}
 */
function mergeSort(arr) {
  let n = arr.length;
  if (n < 2) return arr;
  let middle = Math.floor(n /2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));

  function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
      left[0] <= right[0] ? result.push(left.shift()) : result.push(right.shift());
    }

    result = result.concat(left).concat(right)
    console.log(result)
    return result;
  }
}

let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
mergeSort(arr)
console.log(mergeSort(arr))