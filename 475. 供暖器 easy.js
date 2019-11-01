/**
 * Created by doit on 2019/9/21.
 */

/**冬季已经来临。 你的任务是设计一个有固定加热半径的供暖器向所有房屋供暖。
 * 现在，给出位于一条水平线上的房屋和供暖器的位置，找到可以覆盖所有房屋的最小加热半径。
 * 所以，你的输入将会是房屋和供暖器的位置。你将输出供暖器的最小加热半径。
 * 说明:
 *
 * 1.给出的房屋和供暖器的数目是非负数且不会超过 25000。
 * 2.给出的房屋和供暖器的位置均是非负数且不会超过10^9。
 * 3.只要房屋位于供暖器的半径内(包括在边缘上)，它就可以得到供暖。
 * 4.所有供暖器都遵循你的半径标准，加热的半径也一样。
 * 示例 1:
 *
 * 输入: [1,2,3],[2]
 * 输出: 1
 * 解释: 仅在位置2上有一个供暖器。如果我们将加热半径设为1，那么所有房屋就都能得到供暖。
 * 示例 2:
 *
 * 输入: [1,2,3,4],[1,4]
 * 输出: 1
 * 解释: 在位置1, 4上有两个供暖器。我们需要将加热半径设为1，这样所有房屋就都能得到供暖。\
 *
 *
 */

/**拿到题想不出来怎么用二分解题
 * 能想到的解题思路就是遍历找到heater之间的最小间隔，此为直径
 *
 * 需要注意的是houses、heaters可能都是没有排序的
 *
 * 1.对于每一个房子来说，要么用前面的暖气，要么用后面的暖气，取二者中较小者
 * 2.对于所有的距离来说，取其中的较大者，则为所求距离；
 *
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
    heaters = heaters.sort((a, b) => a - b);
    let maxRadius = 0;

    for (let i = 0; i < houses.length; i++) {
        let current = houses[i];
        let [pre, next] = _binarySearch(heaters, current);
        let distance = Math.min(pre, next);

        maxRadius = Math.max(distance, maxRadius);
    }

    //  找出target的前后供暖设备距离
    function _binarySearch(arr, target) {
        let s = 0;
        let e = arr.length - 1;
        let mid = Math.ceil(arr.length / 2);

        if (target <= arr[s]) return [arr[s] - target, arr[s] - target];
        if (target >= arr[e]) return [target - arr[e], target - arr[e]];

        while (s + 1 < e) {
            if (arr[mid] < target) {
                s = mid;
                mid = Math.ceil((s + e) / 2);
            } else if (arr[mid] > target) {
                e = mid;
                mid = Math.ceil((s + e) / 2);
            } else {
                return [0, 0];
            }
        }

        return [target - arr[s], arr[e] - target];
    }

    return maxRadius;
};


let houses = [1,2,3,4,5,6,7,8,9,10];
let heaters = [1,4];  //6
// let houses = [1,2,3,4,5];
// let heaters = [1,5]; //2
// let houses = [1,5];
// let heaters = [2];  //3
// let houses = [1];
// let heaters = [1,2,3,4];    //0
// let houses = [1,2,3,4];
// let heaters = [1,2,3,4];     //0
// let houses = [1, 15];
// let heaters = [2, 30];      //13

console.log(findRadius(houses, heaters));