/**
 * Created by doit on 2019/4/25.
 */

/**给出一个无重叠的 ，按照区间起始端点排序的区间列表。
 *
 * 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
 *
 * 示例 1:
 *
 * 输入: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * 输出: [[1,5],[6,9]]
 * 示例 2:
 *
 * 输入: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * 输出: [[1,2],[3,10],[12,16]]
 * 解释: 这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
 *
 */

/**很朴实的解法
 * 找到需要合并的区间
 * 分类讨论
 * 然后注意边界条件
 * 如此就可以了
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (!intervals.length) return [newInterval];

    if (newInterval[1] < intervals[0][0]) {
        return [newInterval, ...intervals];
    }
    if (newInterval[0] > intervals[intervals.length - 1][1]) {
        return [...intervals, newInterval];
    }

    const [a, b] = newInterval;
    let aIndex = 0;
    let bIndex = 0;

    let i = 0;
    while (i / 2 < intervals.length) {
        if ((i + 1) / 2 < intervals.length) {
            let cur = intervals[~~(i / 2)][(i) % 2];
            let next = intervals[~~((i + 1) / 2)][(i + 1) % 2];
            if (cur < a && a <= next) {
                aIndex = i % 2 ? i + 1 : i;
            }
            if (cur <= b && b < next) {
                bIndex = i % 2 ? i : i + 1;
            }
        }

        i++;
    }
    if (bIndex === 0) bIndex = i;
    console.log(aIndex, bIndex);

    let arr = [];

    arr.push(Math.min(newInterval[0], intervals[aIndex / 2][0]));
    arr.push(Math.max(newInterval[1], intervals[~~((bIndex - 1) / 2)][1]));

    console.log(arr);
    intervals.splice(aIndex / 2, Math.ceil((bIndex - aIndex) / 2), arr);
    console.log(intervals);

    return intervals;
};

// console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [16, 17]));
console.log(insert([[1, 5]], [2, 7]));