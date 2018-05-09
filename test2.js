var board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

let roundFinished = false;
let hasModified = false;
let nums = 0
let i = 0;
let j = 0;
//  找出所有唯一解的格子
while (true) {
  if (i === 0 && j === 0) {
    nums = 0;
    roundFinished = false;
    hasModified = false;
    console.log('-------a new round--------')
  }
  if (i === 8 && j === 8) {
    roundFinished = true;
    console.log('-------round finished--------')
  }

  if (board[i][j] === '.') {
    let temp = getPossibleValue(board, i, j);
    if (temp.length === 1) {
      board[i][j] = temp[0];
      console.log('(', i, j, ')', temp[0])
      hasModified = true;
    }
  } else {
    nums++;
  }

  if (roundFinished && !hasModified) {
    console.log(board)
    // uniqueCell = false;
    break;
  }

  j === 8 ? (i += 1, j = 0) : j += 1;
  i = i > 8 ? 0 : i;
}

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