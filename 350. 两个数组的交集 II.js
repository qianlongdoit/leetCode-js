/**
 * Created by Administrator on 2018/5/10.
 */
/**给定两个数组，写一个方法来计算它们的交集。
 * 给定 nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2, 2]
 * 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
 * 我们可以不考虑输出结果的顺序。
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let A = nums1.concat([]);
  let B = nums2.concat([]);
  let result = [];

  for (let i = 0, len = B.length; i < len; i++) {
    if (A.indexOf(B[i]) !== -1) {
      result.push(B[i]);
      A.splice(A.indexOf(B[i]), 1);
      B.splice(i, 1);
      i--;
    }
  }

  return (nums1.some(v => isNaN(v)) && nums2.some(v => isNaN(v))) ? result.concat([NaN]) : result;
};


// let arr1 = [1, 2, 2, 4, 5, 7, NaN];
// let arr2 = [1, 2, '4', 5, 234, 5];
let arr1 = [1, 2, 2, 5, 7, NaN];
let arr2 = [2, 5, 5];
console.log(intersect(arr1, arr2))
