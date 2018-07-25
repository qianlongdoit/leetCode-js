/**给定一个可包含重复数字的序列，返回所有不重复的全排列。
 * 示例:
 * 输入: [1,1,2]
 * 输出:
 * [
 *  [1,1,2],
 *  [1,2,1],
 *  [2,1,1]
 * ]
 */


/**思路类似于 031
 * 即制定一个规则，找到下一个排列，这样就可以把全排列的情况可以罗列出来了
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    var result = [];
    var len = nums.length;

    nums.sort((a, b) => a - b);
    result.push(nums.concat([]));

    var max = len - 1;
    while (max >= 0) {
        for (var i = len - 2; i >= 0; i--) {
            if (nums[max] > nums[i]) {
                [nums[max], nums[i]] = [nums[i], nums[max]];
                bubbleSort(nums, i + 1);
                result.push(nums.concat([]));
                break;
            }
        }


    }


    // for (var i = len - 1; i >= 0; i--) {
    //     var index = i - 1;
    //     var cur = len - 1;
    //     var target = cur - 1;
    //
    //     while (index <= target) {
    //         console.log(target, index, nums, result)
    //         while (target < cur) {
    //             if (nums[cur] > nums[target]) {
    //                 [nums[cur], nums[target]] = [nums[target], nums[cur]];
    //                 bubbleSort(nums, target + 1);
    //                 result.push(nums.concat([]));
    //                 target++;
    //                 cur = len - 1;
    //             } else {
    //                 cur--;
    //             }
    //         }
    //         target--;
    //     }
    // }


    function bubbleSort(arr, start) {
        if (start === arr.length - 1) return;
        for (var i = start, len = arr.length; i < len; i++) {
            for (var j = start; j < len - (i - start); j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                }
            }
        }
    }

    console.log(result);
    return result;
};

// permuteUnique([1, 1, 2, 2])

var nextPermutation = function (nums) {

    for (let n = nums.length, i = n - 1; i > 0; i--) {
        let target = i - 1;  //从倒数第二个数字开始
        let cur = n - 1;

        while (cur > target) {
            if (nums[target] >= nums[cur]) {
                cur--;
            } else {
                [nums[target], nums[cur]] = [nums[cur], nums[target]];
                //  对target后面的进行从小到大的排序
                bubbleSort(target + 1, nums);
                return;
            }
        }
    }

    nums.reverse();

    function bubbleSort(start, arr) {
        for (let i = start, n = arr.length; i < n - 1; i++) {
            for (let j = start; j < n - 1 - (i - start); j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

};

var test = [1, 1, 2, 2]

var duplicate = test.concat([]);
nextPermutation(test);
while (duplicate.join('') !== test.join('')) {
    console.log(test)
    nextPermutation(test);
}
