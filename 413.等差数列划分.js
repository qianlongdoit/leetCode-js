/**
 * Created by admin on 2018/9/11.
 */

/**数组 A 包含 N 个数，且索引从0开始。数组 A 的一个子数组划分为数组 (P, Q)，P 与 Q 是整数且满足 0<=P<Q<N 。
 * 如果满足以下条件，则称子数组(P, Q)为等差数组：
 * 元素 A[P], A[p + 1], ..., A[Q - 1], A[Q] 是等差的。并且 P + 1 < Q 。
 * 函数要返回数组 A 中所有为等差数组的子数组个数。
 *
 * 示例:
 * A = [1, 2, 3, 4]
 * 返回: 3, A 中有三个子等差数组: [1, 2, 3], [2, 3, 4] 以及自身 [1, 2, 3, 4]。
 */


/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function (A) {
    let isGrade = [false, false];
    let dp = [0, 0];

    let increase = 1;
    for (let i = 0, len = A.length; i < len; i++) {
        if (i < 2) continue;
        isGrade[i] = 2 * A[i - 1] === A[i - 2] + A[i];

        if (isGrade[i]) {
            dp[i] = dp[i - 1] + increase++;
        } else {
            increase = 1;
            dp[i] = dp[i - 1];
        }
    }

    console.log(isGrade, dp)
    return dp[dp.length - 1]
};

var arr = [1, 2, 3, 4, 5, 7 , 9, 8, 7, 9, 11]
numberOfArithmeticSlices(arr)