/**给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * candidates 中的数字可以无限制重复被选取。
 * 说明：
 *
 * 所有数字（包括 target）都是正整数。
 * 解集不能包含重复的组合。
 *
 * 示例 1:
 * 输入: candidates = [2,3,6,7], target = 7,
 * 所求解集为:
 * [
 *  [7],
 *  [2,2,3]
 * ]
 *
 * 示例 2:
 * 输入: candidates = [2,3,5], target = 8,
 * 所求解集为:
 * [
 *  [2,2,2,2],
 *  [2,3,3],
 *  [3,5]
 * ]
 */



/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = [];
    let arr= [];

    candidates.sort( (a, b) => a - b);
    arr[0] = candidates[0];

    let sum = candidates[0];
    while (arr.length) {
        if (sum < target) { //按此方法，arr必为升序数组，sum < target 时arr放最后一个数即可
            sum += arr[arr.length - 1];
            arr.push(arr[arr.length - 1]);
        }

        if (sum === target) {
            // console.log(arr)
            result.push(arr.concat([]));
            arr.pop();
            arr = nextNum(arr, candidates);
            if (arr.length === 0) break;
            sum = arr.reduce((accu, cur) => accu + cur);
        }

        if (sum > target) {
            arr.pop();
            arr = nextNum(arr, candidates);
            if (arr.length === 0) break;
            sum = arr.reduce((accu, cur) => accu + cur);
        }
        // console.log(arr)

    }

    // console.log(result)
    return result;


    function nextNum(arr, base) {
        for (let i = 0, n = arr.length; i < n; i++ ) {
            let index = base.indexOf(arr[n - 1 - i]);
            arr.length = n - i;
            if (index + 1 < base.length) {
                arr[n - 1 - i] = base[index + 1];
                return arr;
            }
        }
        if (arr.length === 1 && arr[0] === base[base.length - 1]) arr = [];
        return arr;
    }
};

// var candidates = [2, 3, 5, 6], target = 8;
var candidates = [2, 3, 6, 7], target = 7;
combinationSum(candidates, target)

function nextNum(arr, base) {
    for (let i = 0, n = arr.length; i < n; i++ ) {
        let index = base.indexOf(arr[n - 1 - i]);
        arr.length = n - i;
        if (index + 1 < base.length) {
            arr[n - 1 - i] = base[index + 1];
            return arr;
        }
    }
    if (arr.length === 1 && arr[0] === base[base.length - 1]) arr = [];
    return arr;
}


// var arr = [1,2,3,4,5];
// var a = arr.reduce( (accumulator, currentValue) => accumulator + currentValue )
// console.log(a)

// nextNum([6,6], [2,3,5,6])
// console.log(nextNum([6], [2,3,6,7]))
