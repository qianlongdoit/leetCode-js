/**
 * Created by admin on 2018/8/16.
 */
/**给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 * 输入: 3
 * 输出: [1,3,3,1]
 */


/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1];

    let prevRow = [1];

    for (let i = 0; i <= rowIndex; i++) {
        let temp = [];
        for (let j = 0; j <= i; j++) {
            if (j ===0 || j === i) {
                temp.push(1)
            } else {
                temp.push(prevRow[j - 1] + prevRow[j])
            }
        }
        prevRow = temp;
    }
    return prevRow;
};
