/**
 * Created by Administrator on 2018/4/26.
 */
/**选择一个增量δ，在[δ, 2δ, ...],[δ+1, 2δ+1, ....]...中每个数组中进行插入排序
 * 排序完成后 δ = Math.floor(δ/2),再进行第一步的排序，
 * 当δ===0时，整个排序完成
 *
 * @param arr
 * @return {*}
 */
function shellSort(arr) {
  let n = arr.length;
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      for (let j = i - gap; j >= 0; j -= gap) {
        let temp = arr[j];
        if (temp > arr[j + gap]) {
          arr[j] = arr[j + gap];
          arr[j + gap] = temp;
        }
      }
    }
  }

  return arr;
}

// let arr = [3, 48, 38, 5, 47, 15];
let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
shellSort(arr)
console.log(arr)