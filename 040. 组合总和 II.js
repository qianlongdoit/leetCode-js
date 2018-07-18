/**给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * candidates 中的每个数字在每个组合中只能使用一次。
 * 说明：
 * 所有数字（包括目标数）都是正整数。
 * 解集不能包含重复的组合。
 *
 * 示例 1:
 * 输入: candidates = [10,1,2,7,6,1,5], target = 8,
 * 所求解集为:
 * [
 *  [1, 7],
 *  [1, 2, 5],
 *  [2, 6],
 *  [1, 1, 6]
 * ]
 *
 * 示例 2:
 * 输入: candidates = [2,5,2,1,2], target = 5,
 * 所求解集为:
 * [
 *  [1,2,2],
 *  [5]
 * ]
 *
 */

/**和39一样，不同点在于不可取重复值
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var result = [];
    var arr = [];

    candidates.sort( (a, b) => a - b);

    arr.push(candidates[0]);

    var sum = candidates[0];
    var current = 0;
    while (arr.length) {
        if (sum < target) {
            arr.push(candidates[current])
        }

        if (sum === target) {
            result.push(arr);
            arr.pop();
            arr = nextNum(arr, candidates);

            if (arr.length === 0) break;
            sum = arr.reduce((accum, cur) => accum + cur);
        }

        if (sum > target) {
            arr.pop();
            arr = nextNum(arr, candidates);

            if (arr.length === 0) break;
            sum = arr.reduce((accum, cur) => accum + cur);
        }

    }
    console.log(result);
    return result;
};

combinationSum2([10,1,2,7,6,1,5], 8)

function nextNum(arr, base) {
        var index = base.indexOf(arr[arr.length - 1]);

        if (index + 1 < base.length) {
            arr[arr.length - 1] = base[index + 1];
        } else {
            arr = [];
        }

    console.log(arr)
    return arr;
}

// nextNum([10], [1,1,2,5,6,7,10])