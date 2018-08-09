/**
 * Created by Administrator on 2018/5/4.
 */
//  排序的比较器
function getRandomArray(maxSize, maxValue) {
  const arr = [];
  for (let i = 0; i < ~~(Math.random() * maxSize); i++) {
    arr.push(~~(Math.random() * maxValue));
  }
  return arr;
}

function copyArray(arr) {
  return [...arr];
}

function isEqualArray(arr1, arr2) {
  if ((arr1 === null && arr2 !== null) || arr1 !== null && arr2 === null) return false;
  if (arr1 === null && arr2 === null) return true;
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log('i=',i ,arr1[i])
      return false;
    }
  }

  return true;
}

function compare(fn) {
  let testTime = 500000;
  let maxSize = 100;
  let maxValue = 100;
  let succeed = true;

  for (let i = 0; i < testTime; i++) {
    let arr1 = getRandomArray(maxSize, maxValue);
    let arr2 = copyArray(arr1);
    fn(arr1);
    arr2.sort((a, b) => {
      return a - b
    });

    if (!isEqualArray(arr1, arr2)) {
      succeed = false;
      console.log(arr1)
      console.log(arr2)
      break;
    }
  }

  succeed ? console.log('Nice') : console.log('oh shit!');
}
// let arr = getRandomArray(10, 20);
// let arr2 = copyArray(arr);
// arr2[0] = 0;
// console.log(arr)
// console.log(arr2)
// console.log(getRandomArray(10,20))

module.exports = {
  getRandomArray,
  compare
}