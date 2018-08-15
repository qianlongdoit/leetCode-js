/**
 * Created by ww on 2018/8/13.
 */
/**给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 说明：解集不能包含重复的子集。
 * 示例:
 * 输入: [1,2,2]
 * 输出:
 * [
 *  [2],
 *  [1],
 *  [1,2,2],
 *  [2,2],
 *  [1,2],
 *  []
 * ]
 */


/**思路同077
 * 分别列出对于给定nums，包含0、1、2...nums.length个数的子集
 * 集合以上即是所求
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b);
    var allGroup = [[]];

    for (var i = 0; i < nums.length; i++) {
        combine(nums, i + 1, allGroup);
    }

    function combine(nums, k, res) {
        var temp = [];
        for (let i = 0; temp.length < k; i++) {
            temp.push(nums[i]);
        }
        res.push(temp.slice(0));

        var last = nums[nums.length - 1];
        while (temp.length) {
            //  从temp尾部开始判断
            if (temp[temp.length - 1] === last) {
                for (var i = temp.length - 1; i >= 0; i--) {
                    let next = getNext(temp[i], nums);
                    //  判断最早可以回溯的点
                    if (k -i <= nums.length - next) {   //需要回溯的长度<=nums剩余可放入的长度
                        while (i < k) {
                            temp[i] = nums[next];
                            i++;
                            next++
                        }
                        res.push(temp.slice(0));
                        break;
                    }
                }
                //  for循环结束后，如果没有可以回溯的点，则整个遍历过程结束
                if (i <= 0) return res;
            } else {
                temp[temp.length - 1] = nums[getNext(temp[temp.length - 1], nums)];
                res.push(temp.slice());
            }
        }

        function getNext(num, nums) {
            for (let i = nums.indexOf(num); i < nums.length; i++) {
                if (nums[i] !== num) {
                    return i;
                }
            }
        }

        return res;
    }
    return allGroup;
};


console.log(subsetsWithDup([1, 2, 2]));
// console.log(combine([1, 1, 2], 2, []));
// console.log(combine([1, 1, 4, 4, 5, 5, 5], 2, []))
// console.log(combine([1, 2, 2, 2, 2, 2, 2, 2], 3, []))