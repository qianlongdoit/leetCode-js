/**
 * Created by Administrator on 2018/5/8.
 */
/**简单的讲就是如何简单的提炼出'abc','bac','cab'属于同一个集合的特征
 * @param {string[]} arr
 * @return {string[][]}
 */
var groupAnagrams = function (arr) {
  let map = {};
  let prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103]
  let result = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    let total = 1;  //特征数

    for (let j = 0, length = arr[i].length; j < length; j++) {
      total *= prime[arr[i].charCodeAt(j) - 97];
    }

    map[total] ? map[total].push(arr[i]): map[total] = [arr[i]];
  }
  for (let key in map) {
    result.push(map[key])
  }

  return result
};

// var arr = ["eat", "tea", "tan", "ate", "nat", "bat"]
var arr = ["duh", "ill"]
console.log(groupAnagrams(arr))