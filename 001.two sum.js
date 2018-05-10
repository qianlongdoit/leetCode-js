/**
 * Created by admin on 2018/4/19.
 */
let twoSum = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    let findNum = target - nums[i];
    if (map[findNum] !== undefined){
      return [i, map[findNum]]
    }
    map[nums[i]] = i;
  }

  return []
};