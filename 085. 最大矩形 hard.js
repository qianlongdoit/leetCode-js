/**
 * Created by doit on 2019/3/31.
 */

/**给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。
 *
 * 示例:
 *
 * 输入:
 * [
 * ["1","0","1","0","0"],
 * ["1","0","1","1","1"],
 * ["1","1","1","1","1"],
 * ["1","0","0","1","0"]
 * ]
 * 输出: 6
 *
 */

/**同084一样
 * 此时的变换点就是将高度累加起来即可
 * 每次取当前行为底的时候最大矩形面积，记录一个全局的最大矩形面积
 * 然后这个累加的时候，碰到0高度就归0，否则累加
 *
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let max = 0;
    let current = [];

    const largestArea = (arr) => {
        let stack = [];
        let i = 0;
        let maxArea = 0;

        while (i <= arr.length) {
            if (!stack.length || arr[stack[stack.length - 1]] <= arr[i]) {
                stack.push(i);
                i++
            } else {
                let height = arr[stack.pop()];
                let width = !stack.length ? i : i - stack[stack.length - 1] - 1;
                maxArea = Math.max(maxArea, height * width);
            }
        }

        return maxArea;
    };

    for (let i = 0; i < matrix.length; i++) {
        if (i > 0) {
            for (let j = 0; j < current.length; j++) {
                if (matrix[i][j] === "1") {
                    current[j] = ~~current[j] + ~~matrix[i][j];
                } else {
                    current[j] = 0;
                }
            }
        } else {
            current = matrix[i];
        }
        // console.log(current, largestArea(current));
        max = Math.max(max, largestArea(current));
    }
    return max;
};

let matirx = [
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
];


console.log(maximalRectangle(matirx));
