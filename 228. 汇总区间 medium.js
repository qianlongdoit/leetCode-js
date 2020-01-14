/**
 * Created by doit on 2020/1/14.
 */


/**给定一个无重复元素的有序整数数组，返回数组区间范围的汇总。
 *
 * 示例 1:
 *
 * 输入: [0,1,2,4,5,7]
 * 输出: ["0->2","4->5","7"]
 * 解释: 0,1,2 可组成一个连续的区间; 4,5 可组成一个连续的区间。
 * 示例 2:
 *
 * 输入: [0,2,3,4,6,8,9]
 * 输出: ["0","2->4","6","8->9"]
 * 解释: 2,3,4 可组成一个连续的区间; 8,9 可组成一个连续的区间。
 *
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if (!nums.length) return [];
    let res = [];
    let start = {
        value: null,
        index: 0,
    };
    let end = {
        value: null,
        index: 0,
    };
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        if (start.value === null) {
            start = {
                value: current,
                index: i,
            };
            continue;
        }

        //没有end时
        if (end.value === null) {
            //和start是否连续
            if (current - start.value !== 1) {
                res.push(`${start.value}`);
                start = {
                    value: current,
                    index: i,
                }
            } else {
                end = {
                    value: current,
                    index: i
                }
            }
        } else {    //有end的时候
            //current和end连续
            if (current - end.value === 1) {
                //移动end
                end = {
                    value: current,
                    index: i
                };
            } else {
                //current和end不连续
                res.push(`${start.value}->${end.value}`);
                start = {
                    value: current,
                    index: i,
                };
                end = {
                    value: null,
                    index: i,
                };

            }
        }
    }

    //循环结束时
    if (end.value === null || start.value === end.value) {
        res.push(`${start.value}`);
    } else {
        res.push(`${start.value}->${end.value}`);
    }

    console.log(res);
    return res;
};

// var arr = [0,1,2,4,5,7];
var arr = [0,2,3,4,6,8,9];

var test = [
    [0,1,2,4,5,7],
    [0,2,3,4,6,8,9],
    [0],
];
test.forEach(t => console.log(summaryRanges(t)));
