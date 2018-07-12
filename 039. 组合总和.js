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
    let sum = 0;

    candidates.sort( (a, b) => a - b);
    while (start < n) {
        let i = start;
        while (i < n) {
            if (sum < target) {
                arr.push(candidates[i]);
                sum += candidates[i];
            }

            if (sum === target) {
                result.push(arr);
                sum -= arr.pop();
                i++;
            }

            if (sum > target) {
                if (arr.indexOf(candidates[start]) !== -1) {
                    sum -= candidates[start];
                }
                i++;
            }
        }

    }


    return result;
};

var candidates = [2, 3, 5], target = 8;
// combinationSum(candidates, target)


var arr = [1,2,3,4,5];
var a = arr.reduce( (accumulator, currentValue) => accumulator + currentValue )
console.log(a)