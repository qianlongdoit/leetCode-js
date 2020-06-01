/**
 * Created by doit on 2020/6/1.
 */

/**给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums
 *  中除 nums[i] 之外其余各元素的乘积。
 *  
 * 示例:
 * 输入: [1,2,3,4]
 * 输出: [24,12,8,6]
 *  
 * 提示：题目数据保证数组之中任意元素的全部前缀元素和后缀（甚至是整个数组）的乘积都在 32 位整数范围内。
 * 说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。
 * 进阶：
 * 你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）
 *
 */


/**O(n)意味着有限次数的遍历完成答案
 * 此类型的题目都可以分解这样完成
 * 第一次遍历获取一种信息
 * 第二次遍历再获取另外一种信息，
 * 第三次遍历，再获取信息，
 *
 * 在有限次数的遍历内，结合每次获得信息，是否可以推导出最终答案？
 * 即问题的分解
 *
 * 在这个问题中， ans = arr[iL] * arr[iR]
 * 即位置i处的值，为此处左侧的值乘积的和 * 此处右侧乘积的和
 *
 * 如此，我们第一次遍历就获取其i位置左侧的乘积，第二次遍历获取其右侧的乘积和
 * 此时，我们使用了O(n)的时间复杂度、O(n)的空间复杂度
 *
 * 如果输出数组不算额外空间，那么另外一个数组直接在获取信息的时候计算就可以了，不必额外存储
 * 这样就完成了常数的额外空间复杂度
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let res = [1];

    for (let i = 1; i < nums.length; i++) {
        res[i] = nums[i - 1] * res[i - 1];
    }
    // console.log(res);
    let accu = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] = accu * res[i];
        accu *= nums[i];
    }

    // console.log(res);
    return res;
};


// var nums = [1,2,3,4]
var nums = [3, 5, 7, 9]

productExceptSelf(nums)







