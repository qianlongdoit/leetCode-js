/**
 * Created by doit on 2020/5/13.
 */


/**我们把符合下列属性的数组 A 称作山脉：
 *
 * A.length >= 3
 * 存在 0 < i < A.length - 1 使得A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
 * 给定一个确定为山脉的数组，返回任何满足 A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1] 的 i 的值。
 *
 * 示例 1：
 *
 * 输入：[0,1,0]
 * 输出：1
 * 示例 2：
 *
 * 输入：[0,2,1,0]
 * 输出：1
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    let start = 0;
    let end = A.length - 1;
    let peak = (start + end) / 2 | 0;

    while (start <= end) {
        if (A[peak - 1] < A[peak] && A[peak] > A[peak + 1]) return peak;

        if (A[peak - 1] < A[peak] && A[peak] < A[peak + 1]) {
            start = peak;
            peak = (peak + end) / 2 | 0;
        } else {
            end = peak;
            peak = (peak + start) / 2 | 0;
        }
    }
};
