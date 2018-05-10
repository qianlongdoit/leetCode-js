/**
 * Created by admin on 2018/5/4.
 */
/**解数独的整个思路都整理在这里了 https://blog.csdn.net/q1325545052/article/details/80221242
 * @param {arr[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  let result = [];  //存放数独的所有可能解

  fillCertainCell(board);
  search(board, 0, 0);

  function search(board, x, y) {
    let temp;

    //  主体遍历数独
    while (x !== 9 || y !== 0) {

      if (board[x][y] !== '.') {     //跳过不需要填数字的部分
        y === 8 ? (x += 1, y = 0) : y += 1;

      } else {
        //  决策需要填的数字
        temp = getPossibleValue(board, x, y);
        if (!temp.length) {
          //  没有可以填的数字了 ->> 需要回溯
          console.log(x, y, 'temp.length === 0，开始回滚')
          let coordinate = rollBack(board, x, y);
          x = coordinate[0];
          y = coordinate[1];

          //  全部搜索完的情况
          if (x === -1 && y === 8) {
            return printResult();
          }

        } else {
          console.log(x, y, '++++++继续遍历', temp, '，填入数值', temp[0])
          board[x][y] = temp[0];
          y === 8 ? (x += 1, y = 0) : y += 1;
        }

      }
    }

    if (x === 9 && y === 0) {
      result.push(deepCopy(board));
      console.log('------数独已完成第' + result.length + '个解------');
      let coordinate = rollBack(board, 8, 8)
      search(board, coordinate[0], coordinate[1])
    }

  }

  function printResult() {
    if (!result.length) {
      console.log('数独无解！')
    } else if (result.length === 1) {
      console.log(`-------搜索完毕，数独有唯一解---------`);
      console.log(result[0]);
    } else {
      console.log(`-------搜索完毕，数独有${result.length}个解---------`);
      for (let i = 0; i < result.length; i++) {
        console.log(`第${i + 1}个解：`);
        console.log(result[i]);
      }
    }
  }

};

/**给定数独，找出所有唯一确定值的格子
 * 并进行原地修改
 * @param board
 */
function fillCertainCell(board) {
  let roundFinished = false;
  let hasModified = false;
  let nums = 0;
  let i = 0;
  let j = 0;
//  找出所有唯一解的格子
  while (true) {
    if (i === 0 && j === 0) {
      nums = 0;
      roundFinished = false;
      hasModified = false;
    }
    if (i === 8 && j === 8) {
      roundFinished = true;
    }

    if (board[i][j] === '.') {
      let temp = getPossibleValue(board, i, j);
      if (temp.length === 1) {
        board[i][j] = temp[0] + '';
        hasModified = true;
      }
    } else {
      nums++;
    }

    if (roundFinished && !hasModified) {
      break;
    }

    j === 8 ? (i += 1, j = 0) : j += 1;
    i = i > 8 ? 0 : i;
  }

  if (nums === 81) {
    console.log('数独已完成！有唯一解：');
    console.log(board);
  }
}

//  数独搜索回溯
function rollBack(board, x, y) {
  while (x !== -1 || y !== 8) {
    if (typeof board[x][y] !== 'number') {      //跳过不是数字的部分
      y === 0 ? (x -= 1, y = 8) : y -= 1;

    } else {
      let num = board[x][y];   //记录此处使用的数字
      board[x][y] = '.';  //先还原当前位置的数独的值,再获取当前位置的可能值
      let temp = getPossibleValue(board, x, y);
      let index = temp.indexOf(num);

      if (temp[index + 1]) {
        //  决策需要填进去的数字
        console.log(x, y, '++++++可以修改', temp, '，填入数值', temp[index + 1]);
        board[x][y] = temp[index + 1];
        break;
      } else {
        console.log(x, y, '此处没有可以修改的值了，数值还原成 "."', temp, index)
        y === 0 ? (x -= 1, y = 8) : y -= 1;
      }

    }
  }

  return [x, y];
}

/**获取给定坐标的可能值的集合
 *
 * @param board 目标数独
 * @param x row
 * @param y col
 * @returns {Array}
 */
function getPossibleValue(board, x, y) {
  const len = board.length;
  let existNums = [];
  let restNum = [];
  let m = ~~(x / 3);
  let n = ~~(y / 3);

  for (let i = 0; i < len; i++) {
    let cell = board[m * 3 + ~~(i / 3)][n * 3 + i % 3];
    if (board[x][i] !== '.') existNums.push(board[x][i]);
    if (board[i][y] !== '.') existNums.push(board[i][y]);
    if (cell !== '.') existNums.push(cell)
  }
  let map = {};
  for (let i = 0, len = existNums.length; i < len; i++) {
    if (!map[existNums[i]]) map[existNums[i]] = true;
  }
  for (let i = 1; i <= len; i++) {
    if (!map[i]) restNum.push(i);
  }
  return restNum;
}

/**深拷贝多维数组
 *
 * @param arr
 * @return {*}
 */
function deepCopy(arr) {
  let copyArray = [];
  if (Object.prototype.toString.call(arr) !== '[object Array]') return arr;
  for (let i = 0; i < arr.length; i++) {
    copyArray.push(deepCopy(arr[i]));
  }
  return copyArray;
}

// var board = [
//   [".", ".", "9", "7", "4", "8", ".", ".", "."],
//   ["7", ".", ".", ".", ".", ".", ".", ".", "."],
//   [".", "2", ".", "1", ".", "9", ".", ".", "."],
//   [".", ".", "7", ".", ".", ".", "2", "4", "."],
//   [".", "6", "4", ".", "1", ".", "5", "9", "."],
//   [".", "9", "8", ".", ".", ".", "3", ".", "."],
//   [".", ".", ".", "8", ".", "3", ".", "2", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "6"],
//   [".", ".", ".", "2", "7", "5", "9", ".", "."]
// ];
var board = [
  [".", ".", "9", "7", "4", "8", ".", ".", "."],
  ["7", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", "2", ".", "1", ".", "9", ".", ".", "."],
  [".", ".", "7", ".", ".", ".", "2", "4", "."],
  [".", "6", "4", ".", "1", ".", "5", "9", "."],
  [".", "9", "8", ".", ".", ".", "3", ".", "."],
  [".", ".", ".", "8", ".", "3", ".", "2", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "6"],
  [".", ".", ".", "2", "7", "5", "9", ".", "."]
];

// console.log(getPossibleValue(board, 0, 2));

solveSudoku(board);
// console.log(board)