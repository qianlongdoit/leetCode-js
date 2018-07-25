/**
 * Created by admin on 2018/6/19.
 */
/**实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 * 必须原地修改，只允许使用额外常数空间。
 *
 * 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 */

/**通过写全排列可以发现获取下个更大的排列就是从尾部开始遍历
 * 找到它后面第一个比它大的数字然后2个数字交换，剩余的数字从小到大排列
 * 如果遍历完了都没有比它大的数，那么整个数组就是降序排列，改为升序排列即可
 *
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {

  for (let n = nums.length, i = n - 1; i > 0; i--) {
    let target = i - 1;  //从倒数第二个数字开始
    let cur = n - 1;

    while (cur > target) {
      if (nums[target] >= nums[cur]) {
        cur--;
      } else {
        [nums[target], nums[cur]] = [nums[cur], nums[target]];
        //  对target后面的进行从小到大的排序
        bubbleSort(target + 1, nums);
        return;
      }
    }
  }

  nums.reverse();

  function bubbleSort(start, arr) {
    for (let i = start, n = arr.length; i < n - 1; i++) {
      for (let j = start; j < n - 1 - (i - start); j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }

};

var test = [1, 2, 3, 4, 5]

var duplicate = test.concat([]);
nextPermutation(test);
while (duplicate.join('') !== test.join('')) {
    console.log(test)
    nextPermutation(test);
}
// for (let i = 0; i < 15; i++){
//   console.log(test)
//   nextPermutation(test);
// }


// function bubbleSort(start, arr) {
//   for (let i = start, n = arr.length; i < n - 1; i++) {
//     for (let j = start; j < n - 1 - (i - start); j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//
//   console.log(arr)
// }
// let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
// let arr = [1, 2, 4, 5, 3];
//
// bubbleSort(3, arr);