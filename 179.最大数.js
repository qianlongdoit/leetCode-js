/**
 * Created by Administrator on 2018/4/25.
 */
/**总体的思路就是，比较a、b组合中的较大者，然后按较大者排序在前面的规则来
 * 这样获得就是最大的数
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    let result = '';
    nums.sort((a, b)=>{
        a +='';
        b +='';
        return (b + a) - (a + b);
    });
    result = nums.join('');
    if (result[0] === '0' && result.length !== 1) return '0';
    return result;
};

var arr = [3, 30, 34, 5, 9, 2];
// var arr = [300001, 342, 35, 34, 3, 31]

console.log(largestNumber(arr))