/**
 * Created by admin on 2018/7/31.
 */
/**给出一个区间的集合，请合并所有重叠的区间。
 *
 * 示例 1:
 * 输入: [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 *
 * 示例 2:
 * 输入: [[1,4],[4,5]]
 * 输出: [[1,5]]
 * 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 */

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
    if (!intervals.length) return intervals;
    var result = [];

    intervals.sort((a, b) => a[0] - b[0]);

    // result.push([].concat(intervals[0]))
    result.push(intervals[0])
    for (var i = 1, len = intervals.length; i < len; i++) {
        var last = result[result.length - 1];

        if (intervals[i][0] >= last[0] && intervals[i][0] <= last[1]) {

            last[1] = Math.max(intervals[i][1], last[1]);

        }else if (intervals[i][0] > last[1]) {
            result.push([].concat(intervals[i]));
        }
    }

    console.log(result)
    console.log(JSON.stringify())
    return result;
};

var intervals = [[1,3],[2,6],[8,10],[15,18]];
// var intervals = [[1,4],[4,5]];

merge(intervals)