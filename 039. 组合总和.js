/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = [];
    let start = 0;
    let arr= [];
    let n = candidates.length;
    let addLen = true;
    let sum = 0;

    candidates.sort( (a, b) => a - b);
    while (start < n) {
        if (sum < target) {
            sum += candidates[0];
            arr.push(candidates[0]);
        }

        if (sum === target) {
            result.push(arr);
            arr.pop();
            arr = nextNum(arr, candidates);
            sum = arr.reduce((accu, cur) => accu + cur);
        }

        if (sum > target) {
            arr.pop();
            arr = nextNum(arr, candidates);
            sum = arr.reduce((accu, cur) => accu + cur);
        }

    }


    return result;
};

var candidates = [2, 3, 5], target = 8;
// combinationSum(candidates, target)

function nextNum(arr, base) {

    return arr;
}


var arr = [1,2,3,4,5];
var a = arr.reduce( (accumulator, currentValue) => accumulator + currentValue )
console.log(a)