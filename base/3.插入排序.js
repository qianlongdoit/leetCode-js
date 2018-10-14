/**
 * Created by Administrator on 2018/4/25.
 */
/**[0, ...., j, ..., i]
 * 类似玩扑克牌时的排序
 * (j+1)-i中遍历元素，与0-j中比较，然后插入合适位置
 * @param arr
 * @return {*}
 */
function insertSort(arr) {
  let n = arr.length;
  let current, temp;
  for (let i = 1; i < n; i++) {
    current = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (current < arr[j]) {
        temp = arr[j];
        arr[j + 1] = temp;
        arr[j] = current;
      }else {
        console.log(temp)
        break;
      }
    }
  }

  return arr
}

let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
insertSort(arr)
console.log(arr)