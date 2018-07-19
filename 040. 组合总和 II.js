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
var combinationSum2 = function (candidates, target) {
    var result = [];
    var arr = [];

    candidates.sort((a, b) => a - b);

    arr.push(candidates[0]);

    var sum = candidates[0];
    while (arr.length) {
        // console.log(arr, sum, result.length);
        var current = candidates.indexOf(arr[arr.length - 1]);
        if (sum < target) {
            if (arr[arr.length - 1] === candidates[current]) {
                //  当candidates中有重复元素的时候，每个重复的元素之能取一次，arr.indexOf只能取到首次出现的索引
                //  如果改成对象存储数组的话就不需要计算这个重复的长度了
                var start = arr.indexOf(arr[arr.length - 1]);
                current += arr.length - start;
            }

            if (current >= candidates.length) {
                //  当取到candidates字典中最大的数的时候，sum还比target小的话，arr只能取下一个可能的排列了
                arr = nextNum(arr, candidates);
                if (arr.length === 0) break;
                sum = arr.reduce((accum, cur) => accum + cur);
            } else {
                //  当不是字典中最大的数的时候，直接累加即可
                arr.push(candidates[current]);
                sum += candidates[current];
            }
        }

        if (sum === target) {
            result.push(arr.concat([]));
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


    function nextNum(arr, base) {
        for (var i = 0, n = arr.length; i < n; i++) {
            var index = base.indexOf(arr[n - 1 - i]);

            while (index < base.length - 1) {
                if (base[index + 1] && base[index] === base[index + 1]) {
                    index++;
                } else {
                    break;
                }
            }

            arr.length = n - i;
            if (index + 1 < base.length) {
                arr[n - 1 - i] = base[index + 1];
                return arr;
            }
        }

        if (arr[0] === base[base.length - 1]) return [];

        return arr;
    }

    return result;
};

// console.log(combinationSum2([10,1,2,7,6,1,5], 8))
// console.log(combinationSum2([1], 2))
console.log(combinationSum2([1,1,1,3,3,5], 8))
