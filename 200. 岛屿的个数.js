/**
 * Created by admin on 2018/12/10.
 */

/**给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，
 * 并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。
 *
 * 输入:
 * 11000
 * 11000
 * 00100
 * 00011
 * 输出: 3
 */

/**1.获取全部的岛屿坐标
 * 2.选一个点，获取包含该点的岛屿的坐标，对访问过的点标记
 * 3.重复2，直到所有岛屿坐标都被访问过
 *
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let res = [];
    let visited = new Set();

    const _getIland = (point = []) => {
        let iland = [point];
        let current = [point];
        let next = [];

        while (current.length) {
            for (let p of current) {
                let [x, y] = p;
                x = ~~x;
                y = ~~y;

                if (x - 1 >= 0 && grid[x - 1][y] === '1' && !visited.has([x - 1, y].join(','))) {
                    iland.push([x - 1, y]);
                    next.push([x - 1, y]);
                    visited.add([x - 1, y].join(','));
                }
                if (y - 1 >= 0 && grid[x][y - 1] === '1' && !visited.has([x, y - 1].join(','))) {
                    iland.push([x, y - 1]);
                    next.push([x, y - 1]);
                    visited.add([x, y - 1].join(','));
                }
                if (y + 1 < grid[0].length && grid[x][y + 1] === '1' && !visited.has([x, y + 1].join(','))) {
                    iland.push([x, y + 1]);
                    next.push([x, y + 1]);
                    visited.add([x, y + 1].join(','));
                }

                if (x + 1 < grid.length && grid[x + 1][y] === '1' && !visited.has([x + 1, y].join(','))) {
                    iland.push([x + 1, y]);
                    next.push([x + 1, y]);
                    visited.add([x + 1, y].join(','));
                }
            }
            current = next;
            next = [];
        }
        return iland
    };

    grid.forEach((row, x) => {
        row.forEach((column, y) => {
            if (grid[x][y] === '1' && !visited.has([x, y].join(','))) {
                res.push(_getIland([x, y]));
            }
        })
    });

    return res.length;
};

let grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
];
console.log(numIslands(grid));

/**非常巧妙的方法
 * 从头开始遍历，如果碰到为'1'的点，则将岛屿全部缩小到这个点，岛屿数+1
 * 碰到'0'则跳过
 * 这样遍历完，1的数量就是岛屿的数量，而1的数量在开始就记录了
 *
 * @param grid
 * @returns {number}
 */
numIslands = function (grid) {
    let res = 0;

    const _shrinkIland = (grid, x, y) => {
        if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) return;
        if (grid[x][y] === '0') return;

        grid[x][y] = '0';
        _shrinkIland(grid, x- 1, y);
        _shrinkIland(grid, x, y - 1);
        _shrinkIland(grid, x, y + 1);
        _shrinkIland(grid, x + 1, y);
    };

    grid.forEach((row, x) => {
        row.forEach((column, y) => {
            if (grid[x][y] === '1') {
                _shrinkIland(grid, x, y);
                res++;
            }
        })
    });

    return res;
};
