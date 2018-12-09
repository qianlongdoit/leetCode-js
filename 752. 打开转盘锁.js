/**
 * Created by admin on 2018/12/9.
 */

/**你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' 。
 * 每个拨轮可以自由旋转：例如把 '9' 变为  '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。
 * 锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。
 * 列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。
 * 字符串 target 代表可以解锁的数字，你需要给出最小的旋转次数，如果无论如何不能解锁，返回 -1。
 *
 * 输入：deadends = ["0201","0101","0102","1212","2002"], target = "0202"
 * 输出：6
 * 解释：
 * 可能的移动序列为 "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202"。
 * 注意 "0000" -> "0001" -> "0002" -> "0102" -> "0202" 这样的序列是不能解锁的，
 * 因为当拨动到 "0102" 时这个锁就会被锁定。
 */

/**采取穷举的办法就是由target -> `0000`,每次转动有8个分支。
 * 如果8个分支都是deadends，那么就无法解锁，
 * 8个分支递归的走下去，最短的就是题目所求答案
 * 要注意的是，过滤其中已经走过的分支
 * 即求8叉树的最小深度
 *
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
//  非递归版本
var openLock = function (deadends, target) {
    let current = [target];
    let next = [];
    let visited = new Set(deadends);
    let step = 0;

    while (current.length) {
        for (let num of current) {
            if (num === '0000') return step;

            num = [...num];
            num.forEach((n, index) => {
                let arr1 = num.slice();
                let arr2 = num.slice();
                arr1[index] = (~~n + 1) % 10 + '';
                arr2[index] = (~~n + 9) % 10 + '';
                let t1 = arr1.join('');
                let t2 = arr2.join('');
                if (!visited.has(t1)) {
                    next.push(t1);
                    visited.add(t1)
                }
                if (!visited.has(t2)) {
                    next.push(t2);
                    visited.add(t2)
                }
            })
        }

        step++;
        current = next;
        next = [];
    }
    return -1;
};

let deadends = ["0201", "0101", "0102", "1212", "2002"], target = "0202";
console.log(openLock(deadends, target));