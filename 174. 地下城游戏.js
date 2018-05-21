/**
 * Created by Administrator on 2018/5/21.
 */
/**一些恶魔抓住了公主（P）并将她关在了地下城的右下角。地下城是由 M x N 个房间组成的二维网格。我们英勇的骑士（K）
 * 最初被安置在左上角的房间里，他必须穿过地下城并通过对抗恶魔来拯救公主。
 * 骑士的初始健康点数为一个正整数。如果他的健康点数在某一时刻降至 0 或以下，他会立即死亡。
 * 有些房间由恶魔守卫，因此骑士在进入这些房间时会失去健康点数（若房间里的值为负整数，则表示骑士将损失健康点数）；
 * 其他房间要么是空的（房间里的值为 0），要么包含增加骑士健康点数的魔法球（若房间里的值为正整数，则表示骑士将增加健康点数）。
 * 为了尽快到达公主，骑士决定每次只向右或向下移动一步。
 * -2 (K)  -3    3
 * -5     -10   1
 * 10     30  -5 (P)
 *
 * 骑士的健康点数没有上限。
 * 任何房间都可能对骑士的健康点数造成威胁，也可能增加骑士的健康点数，包括骑士进入的左上角房间以及公主被监禁的右下角房间。
 *
 * 编写一个函数来计算确保骑士能够拯救到公主所需的最低初始健康点数。
 */

/**和62 63 64 同样的思路
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  if (dungeon.length === 0) return 1;
  let map = [];
  let i = dungeon.length - 1;
  let j = dungeon[0].length - 1;

  for (let m = 0; m <= i; m++) {
    map[m] = [];
  }

  while (i >= 0 && j >= 0) {
    if (i === dungeon.length - 1 && j === dungeon[0].length - 1) {

      map[i][j] = 1 - dungeon[i][j] <= 0 ? 1 : 1 - dungeon[i][j];

    } else if (i === dungeon.length - 1) {

      map[i][j] = map[i][j + 1] - dungeon[i][j] <= 0 ? 1 : map[i][j + 1] - dungeon[i][j];

    } else if (j === dungeon[0].length - 1) {

      map[i][j] = map[i + 1][j] - dungeon[i][j] <= 0 ? 1 : map[i + 1][j] - dungeon[i][j];

    } else {
      let hp = Math.min(map[i][j + 1], map[i + 1][j]) - dungeon[i][j];
      map[i][j] = hp <= 0 ? 1 : hp;
    }

    j === 0 ? (j = dungeon[0].length - 1, i--) : j--;
  }

  console.log(map)
  return map[0][0];
};

// let dungeon = [
//   [-2, -3, 3],
//   [-5, -10, 1],
//   [10, 30, -5],
// ];
let dungeon = [
  [-1, 1, 1]
];

console.log(calculateMinimumHP(dungeon));