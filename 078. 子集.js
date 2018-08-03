/**
 * Created by admin on 2018/8/3.
 */
/**给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 说明：解集不能包含重复的子集。
 *
 * 示例:
 * 输入: nums = [1,2,3]
 * 输出:
 * [
 *  [3],
 *  [1],
 *  [2],
 *  [1,2,3],
 *  [1,3],
 *  [2,3],
 *  [1,2],
 *  []
 * ]
 */


/**很显然是077的变种，思路同077
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    nums.sort((a, b) => a - b);
    var allGroup = [];
    allGroup.push([]);

    function combine(nums, k) {
        var temp = [];
        for (var i = 0; i < k; i++) {
            temp.push(nums[i]);
        }
        allGroup.push(temp.concat([]));

        var last = nums[nums.length - 1];
        while (true) {
            //  对尾数递增
            while (temp[k - 1] < last) {
                temp[k - 1] = nums[nums.indexOf(temp[k - 1]) + 1];
                allGroup.push(temp.slice(0));
            }

            for (var i = k - 1; i >= 0; i--) {
                var num = temp[i];
                if (num < nums[nums.length - (k - i)]) {
                    var index = nums.indexOf(temp[i]);
                    for (var j = i;j < k; j++) {
                        temp[j] = nums[++index];
                    }
                    allGroup.push(temp.slice(0));

                    break;
                }
            }
            if (i <= 0 && temp[0] === nums[nums.length - k]) return allGroup;
        }
    }

    for (var i = 0; i < nums.length; i++) {
        combine(nums, i + 1);
    }

    return allGroup;
};

console.log(subsets([0, 1, 4]))
