/**
 * Created by admin on 2018/7/30.
 */
/**给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
 * 示例 1:
 * 输入:
 * [
 *  [ 1, 2, 3 ],
 *  [ 4, 5, 6 ],
 *  [ 7, 8, 9 ]
 * ]
 * 输出: [1,2,3,6,9,8,7,4,5]
 * 示例 2:
 * 输入:
 * [
 *  [1, 2, 3, 4],
 *  [5, 6, 7, 8],
 *  [9,10,11,12]
 * ]
 * 输出: [1,2,3,4,8,12,11,10,9,5,6,7]
 */


/**用一个boolean矩阵来记录使用过的位置然后来判断是否越界
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix.length) return [];
    var m = matrix.length;
    var n = matrix[0].length;

    var i = 0, j = 0;
    var result = [];

    var standard = [];
    for (var x = 0; x < m; x++) {
        standard.push(new Array(n).fill(true))
    }

    while (i < m || j < n) {

        result.push(matrix[i][j]);
        standard[i][j] = false;
        var right = j + 1 < n && standard[i][j + 1];
        var down = i + 1 < m && standard[i + 1][j];
        var left = j > 0 && standard[i][j - 1];
        var up = i > 0 && standard[i - 1][j];

        console.log(i, j, right, down, left, up)
        if (right) {
            if (down || (!down && !left && !up)) { //在top
                console.log('top', i, j)
                j++;
            } else {    //在left
                console.log('left', i, j)
                i--
            }
            continue;
        }
        if (!right && down && !left && !up) {
            i++;
            continue;
        }

        if (left) {
            if (up || (!down && !right && !up)) {   //在down
                console.log('down', i, j)
                j--;
            } else {    //在right
                console.log('right', i, j)
                i++;
            }
            continue;
        }

        if (!right && !down && !left && up) {
            i--;
            continue;
        }
        break;
    }


    console.log(result)
    return result;
};

// var matrix = new Array(3).fill(new Array(3))
var matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
]
spiralOrder([[1],[2],[3]]);