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

    nums.sort((a, b) => a - b);
    result.push(nums.concat([]));
    var originQueue = nums.join('');

    nextPermutation(nums);
    while (originQueue !== nums.join('')) {
        result.push(nums.concat([]))
        nextPermutation(nums);
    }

    function nextPermutation(nums) {
        for (var len = nums.length, i = len - 1; i >= 0; i--) {
            var target = i - 1;
            var cur = len - 1;

            while (cur > target) {
                if (nums[cur] > nums[target]) {
                    [nums[cur], nums[target]] = [nums[target], nums[cur]];
                    bubbleSort(nums, target + 1);
                    return;
                } else {
                    cur--;
                }
            }
        }

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

        //  如果nums是降序排列，则下一个排列就是反过来
        nums.reverse()
    }


    console.log(result);
    return result;
};

permuteUnique([1, 1, 2, 2, 3, 3])

