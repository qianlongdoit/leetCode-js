/**
 * Created by admin on 2018/12/9.
 */

/**在给定的二维二进制数组 A 中，存在两座岛。（岛是由四面相连的 1 形成的一个最大组。）
 * 现在，我们可以将 0 变为 1，以使两座岛连接起来，变成一座岛。
 * 返回必须翻转的 0 的最小数目。（可以保证答案至少是 1。）
 *
 * 输入：[[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
 * 输出：1
 */


/**将2个岛找出来，记为A、B
 * A中每个点到B的最短距离为数组arr
 * arr中最小值，即为题目所求最小数目
 *
 * @param {number[][]} A
 * @return {number}
 */
var shortestBridge = function (A) {
    let ilandA = [];
    let ilandB = [];
    let visited = null;
    let point = null;
    let step = Number.POSITIVE_INFINITY;

    /**输入岛屿某一个点，返回包含该点的岛屿的全部点
     *
     * @param point
     * @returns {Array[]}
     * @private
     */
    const _getAllIlandPoint = (point = []) => {
        let iland = [point];
        let current = [point];
        let next = [];

        while (current.length) {
            for (let p of current) {
                const [x, y] = p;

                if (x - 1 >= 0 && A[x - 1][y] === 1 && !visited.has([x - 1, y].join(','))) {
                    iland.push([x - 1, y]);
                    next.push([x - 1, y]);
                    visited.add([x - 1, y].join(','))
                }
                if (y - 1 >= 0 && A[x][y - 1] === 1 && !visited.has([x, y - 1].join(','))) {
                    iland.push([x, y - 1]);
                    next.push([x, y - 1]);
                    visited.add([x, y - 1].join(','));
                }
                if (y + 1 < A[0].length && A[x][y + 1] === 1 && !visited.has([x, y + 1].join(','))) {
                    iland.push([x, y + 1]);
                    next.push([x, y + 1]);
                    visited.add([x, y + 1].join(','));
                }

                if (x + 1 < A.length && A[x + 1][y] === 1 && !visited.has([x + 1, y].join(','))) {
                    iland.push([x + 1, y]);
                    next.push([x + 1, y]);
                    visited.add([x + 1, y].join(','));
                }
            }
            current = next;
            next = [];
        }
        return iland;
    };

    for (let x in A) {
        if (point) break;
        for (let y in A[x]) {
            if (A[x][y] === 1) {
                point = [~~x, ~~y];
                break;
            }
        }
    }
    visited = new Set([point.join(',')]);
    ilandA = _getAllIlandPoint(point);

    for (let x in A) {
        for (let y in A[x]) {
            if (A[x][y] === 1 && !visited.has([~~x, ~~y].join(','))) ilandB.push([~~x, ~~y])
        }
    }

    for (let point of ilandA) {
        const [x1, y1] = point;
        for (let target of ilandB) {
            const [x2, y2] = target;
            let distance = Math.abs(x2 - x1) + Math.abs(y1 - y2) - 1;
            distance = distance < 0 ? 0 : distance;

            step = Math.min(step, distance);
        }
    }
    return step
};

let board = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1]
];

// console.log(shortestBridge([[0,1],[1,0]]));
console.log(shortestBridge(board));