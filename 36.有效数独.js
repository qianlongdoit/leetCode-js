/**
 * Created by Administrator on 2018/5/4.
 */
/**
 * @param {arr[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  let valid = true;

  for (let i = 0, len = board.length; i < len; i++) {
    //  检查row
    if (!isRepeated(board[i])){
      return false;
    }
    // console.log('row is right!')

    //检查col
    let arrCol = [];
    for (let j = 0; j < len; j++) {
      arrCol.push(board[j][i]);
    }
    if (!isRepeated(arrCol)){
      return false;
    }
    // console.log('col is right!')

    //检查cell
    let arrCell = [];
    let x = i % 3;
    let y = ~~(i / 3);
    for (let m = 0; m < 3; m++) {
      for (let n = 0; n < 3; n++) {
        arrCell.push(board[x + m][y + n]);
      }
    }
    if (!isRepeated(arrCell)){
      console.log(arrCell)
      return false;
    }
    // console.log('cell is right!')

  }

  function isRepeated(arr) {
    let map = {};
    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === '.') continue;
      // console.log(arr[i], '_________')
      if (!map[arr[i]]) {
        map[arr[i]] = 1
        // console.log(map)
      } else if (map[arr[i]] === 1) {
        // console.log(arr[i], '+++++++++')
        // console.log(map)
        return false;
      }
    }

    return true
  }

  return true;
}

var board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

console.log(isValidSudoku(board));
