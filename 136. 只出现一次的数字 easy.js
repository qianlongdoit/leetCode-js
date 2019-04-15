/**
 * Created by doit on 2019/4/15.
 */

/**给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 *
 * 说明：
 *
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 *
 * 示例 1:
 *
 * 输入: [2,2,1]
 * 输出: 1
 * 示例 2:
 *
 * 输入: [4,1,2,1,2]
 * 输出: 4
 */

/**很典型的一个异或运算的场景
 *  a ^ a = 0;
 *  0 ^ any = any;
 *  所以全部异或运算后，最后的数字就是出现一次的数字
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let answer;

    nums.forEach(n => answer ^= n);
    return answer;
};

console.log(singleNumber([4, 2, 3, 3, 2]));