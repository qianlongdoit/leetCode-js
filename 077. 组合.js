/**
 * Created by admin on 2018/8/3.
 */
/**给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 *
 * 示例:
 * 输入: n = 4, k = 2
 * 输出:
 * [
 *  [2,4],
 *  [3,4],
 *  [2,3],
 *  [1,2],
 *  [1,3],
 *  [1,4],
 * ]
 */

/**制定排列规则，如果全部是从小到大排列，每次从尾部开始更新值，
 * 排在后面的值一定比前面的大，则必定没有重复的组合且能获得全部组合
 * 如果更新时发现temp[k - i - 1] !== n - 1, 则将temp[k - i - 1]++;
 * 遍历完则全部组合遍历完
 *
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if (n < k) return [];

    var allGroup = [];

    var temp = [];
    for (var i = 0; i < k; i++) {
        temp.push(i + 1);
    }
    allGroup.push(temp.concat([]));

    while (true) {
        //  对尾数递增
        while (temp[k - 1] < n) {
            temp[k - 1]++;
            allGroup.push(temp.slice(0));
        }

        for (var i = k - 1; i >= 0; i--) {
            var num = temp[i];
            if (num < n - (k - i) + 1) {

                for (var j = i;j < k; j++) {
                    temp[j] = ++num;
                }
                allGroup.push(temp.slice(0));

                break;
            }
        }
        // console.log(i, temp[0], n - k + 1)
        if (i <= 0 && temp[0] === n - k + 1) return allGroup;
    }

};

console.log(combine(1, 1))






