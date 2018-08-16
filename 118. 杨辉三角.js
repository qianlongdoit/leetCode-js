/**
 * Created by admin on 2018/8/16.
 */
/**给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 输入: 5
 * 输出:
 * [
 *      [1],
 *     [1,1],
 *    [1,2,1],
 *   [1,3,3,1],
 *  [1,4,6,4,1]
 * ]
 */


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];

    for (let i = 0; i < numRows; i++) {
        let temp = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                temp.push(1);
            } else {
                temp.push(result[i - 1][j - 1] + result[i - 1][j]);
            }
        }
        result.push(temp)
    }

    return result;
};

generate(5)
