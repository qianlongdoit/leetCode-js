/**
 * Created by admin on 2018/8/13.
 */
/**找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
 * 说明：
 * 所有数字都是正整数。
 * 解集不能包含重复的组合。
 * 示例 1:
 * 输入: k = 3, n = 7
 * 输出: [[1,2,4]]
 */

/**比较容易想的回溯法
 * 遍历全部可能，对每种情况进行分析即可
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let result = [];

    let temp = [];
    let sum = 0;

    temp.push(1);
    sum += 1;

    while (temp.length) {
        // console.log(temp, sum)
        if (sum === n) {
            // console.log(temp, sum,'-----')
            temp.length === k && result.push(temp.slice(0));
            sum -= temp.pop();
            // console.log(temp, sum)
            temp[temp.length - 1] += 1;
            sum++;
        }

        if (sum < n) {
            let last = temp[temp.length - 1];
            if (temp.length < k) {
                if (last < 9) {
                    temp.push(last + 1);
                    sum += last + 1;
                } else {
                    sum -= temp.pop();
                    temp[temp.length - 1] += 1;
                    sum++;
                }
            } else {
                if (last < 9) {
                    temp[temp.length - 1] += 1;
                    sum++;
                } else {
                    sum -= temp.pop();
                    temp[temp.length - 1] += 1;
                    sum++;
                }
            }
        }

        if (sum > n) {
            sum -= temp.pop();
            temp[temp.length - 1] += 1;
            sum++;
        }
    }

    // console.log(result)
    return result;
};


console.log(combinationSum3(4, 20))