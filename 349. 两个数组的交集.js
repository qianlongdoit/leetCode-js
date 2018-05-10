/**
 * Created by Administrator on 2018/5/10.
 */
/**给定两个数组，写一个函数来计算它们的交集。
 * 给定 num1= [1, 2, 2, 1], nums2 = [2, 2], 返回 [2]
 * 每个在结果中的元素必定是唯一的。
 * 我们可以不考虑输出结果的顺序。
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let result = [];
  for (let i = 0, len = nums1.length; i< len; i++) {
    if (nums2.indexOf(nums1[i]) !== -1 && result.indexOf(nums1[i]) === -1) {
      result.push(nums1[i]);
    }
  }

  return (nums1.some(v=> isNaN(v)) && nums2.some(v=> isNaN(v))) ? result.concat([NaN]): result;
};

let arr1 = [1, 2, 3, 4, 5, 7, NaN];
let arr2 = [1, 23, '4', 5, 234, 5];
console.log(intersection(arr1, arr2))