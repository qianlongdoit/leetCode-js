/**
 * Created by doit on 2019/7/14.
 */

/**给定一个大小为 n 的数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。
 *
 * 说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1)。
 *
 * 示例 1:
 *
 * 输入: [3,2,3]
 * 输出: [3]
 * 示例 2:
 *
 * 输入: [1,1,1,3,3,2,2,2]
 * 输出: [1,2]
 */

/**要求空间复杂度为 O(1)就排除了很多方法
 *
 * 回忆前面的一句话是消消乐，找到2个不同的数就消掉，最后剩下的是就是众数
 *
 * 那么在这里就是三消乐，找到3个不同的数，就消掉，最后剩下的数就是众数
 *
 * 需要注意的地方是，此时的众数可能有0~2个
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    let res = [],
        a = nums[0],
        b,
        countA = 0,
        countB = 0;

    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        if ((countA === 0 || cur === a) && cur !== b) {
            a = cur;
            countA++;
        } else if (countB === 0 || cur === b) {
            b = cur;
            countB++;
        } else {
            countA--;
            countB--;
        }
    }

    //验证当前数是否是众数
    let c1 = 0,
        c2 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === a) {
            c1++
        } else if (nums[i] === b) {
            c2++;
        }
    }
    if (c1 > nums.length / 3) {
        res.push(a);
    }
    if (c2 > nums.length / 3) {
        res.push(b);
    }

    return res;
};

// let arr = [1,1,1,3,3,2,2,2];
let arr = [3,2,3];
console.log(majorityElement(arr));