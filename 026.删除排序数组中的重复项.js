/**
 * Created by Administrator on 2018/4/27.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = true;
    } else {
      nums.splice(i, 1);
      i--;
      console.log(nums);
    }
  }

  return nums;
};

let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates([1,1,2])

// judge()
//  对数器
function judge() {
  let correct = true;
  for (let i = 0; i < 500000; i++) {
    let arr = generateArr();
    let arr1 = absoluteRight(arr);
    let arr2 = removeDuplicates(arr);

    if (arr1)
    if (arr1.length !== arr2.length) return false;
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] !== arr2[j]) {
        console.log('wrong: ', arr);
        correct = false;
        break;
      }
    }
  }
  if (correct){
    console.log('All correct!')
  }

  //  绝对正确的方法
  function absoluteRight(nums) {
    let map = {};
    let arr1 = [];

    for (let i = 0; i < nums.length; i++) {
      if (!map[nums[i]]) {
        map[nums[i]] = true;
        arr1.push(nums[i])
      }
    }
    return arr1;
  }

}

//  数组生成器
function generateArr() {
  let arr = [];
  let len = Math.floor(Math.random() * 20);
  for (let i = 0; i < len; i++) {
    arr.push(Math.floor(Math.random() * 10))
  }

  return arr;
}