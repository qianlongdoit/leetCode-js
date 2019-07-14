/**
 * Created by doit on 2019/7/14.
 */

/**给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 *
 *你可以假设数组是非空的，并且给定的数组总是存在众数。
 *
 *示例 1:
 *
 *输入: [3,2,3]
 *输出: 3
 *示例 2:
 *
 *输入: [2,2,1,1,1,2,2]
 *输出: 2
 */

/**常规空间换时间的解法，记住每个数字出现的次数，然后比较数字出现的次数
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let len = nums.length;
    let map = {};

    for (let i = 0; i < len; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++;
            if (map[nums[i]] > len / 2) return nums[i];
        } else {
            map[nums[i]] = 1;
        }
    }

    for (let attr in map) {
        if (map[attr] > len / 2) return +attr;
    }
};

/**看到评论的一句话，顿时觉得精炼简单
 *
 * 开心消消乐，不一样的两个数相互抵消掉，剩下最后一个(或n)个数就是众数
 *
 * 其实这个仔细看来，就是Boyer Moore投票法（Boyer Moore投票法）的另一种表述
 *
 * 方法如下：
 *
 * 假设当前第一个数为众数，遍历数组 当前元素 === 假设的众数，count++。否则count--；
 *
 * 当count === 0时，说明假设的众数为已遍历元素的一半；在这种情况下，剩余数组中的众数，仍等于原数组的
 * 众数（因为最坏的情况就是，已遍历的数组中一半是数组的众数，另一半是非众数）。
 *
 * 因此当count === 0时，记录当前数字为众数，遍历完整个数组的时候，留下的res一定为整个数组的众数
 * （最坏的情况是在最后一个元素才找到众数，前面的count全部抵消）
 */

majorityElement = function(nums) {
    let res = nums[0];
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (res === nums[i]) {
            count++;
        } else {
            count--;

            if (count === 0) {
                res = nums[i];
                count = 1;
            }
        }
    }

    return res;
};




// let test = [3,2,3];
let test = [2,2,1,1,1,2,2];
console.log(majorityElement(test));