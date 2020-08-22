/**
 * Created by Administrator on 2018/4/20.
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (!s) return 0;
    const map = {};
    let max = 1;
    for (let i = 0, j = 0; j < s.length; j++) {
        if (s.indexOf(s[j]) !== j) {
            //  能进入到这里说明s[j]已经不是第一次遍历到了
            //  所以i直接取上次记录的最远位置+1就可以了
            i = i <= map[s[j]] ? map[s[j]] + 1 : i;
        }
        //  更新全局最大值
        max = Math.max(max, j - i + 1);
        //  记录每次遍历的时候元素在这个里面的最远位置
        map[s[j]] = j;
    }

    return max;
};


/**双指针（滑动窗口的最大值）
 * 指针i j，置于字符串的开始位置
 * j先移动，如果碰到重复的了，记录此时的最大值，i移动
 * 循环往复
 * 如果i到到末尾了，返回全局最大
 */
var lengthOfLongestSubstring = function (s) {
    let res = 0;
    let len = s.length;
    if (len < 2) return len;

    let i = 0;
    let j = 0;

    let map = {};
    while (j < len) {
        let end = s[j];

        if (map[end] === undefined) {
            map[end] = j;
        } else {
            let max = j - i;
            res = Math.max(max, res);

            //  其实我们已经知道目标位置了，因为先前存了这个数的位置
            //  这里只需要讲前面的窗口恢复即可
            while (i <= map[end]) {
                map[s[i]] = undefined;
                i++;
            }

            map[end] = j;
        }

        j++;
        //  最后一次结束的时候看一下最大值
        if (j === len) {
            res = Math.max(j - i, res);
        }
    }

    return res;
};

let test = [
    ['aab', 2],
    ['abcabcbb', 3],
    ['bbbbb', 1],
    ['pwwkew', 3],
    ['abcbadbb123', 4],
    ['wcibxubumenmeyatdrmydiajxloghiqfmzhlvihjouvsuyoypayulyeimuotehzriicfskpggkbbipzzrzucxamludfyk', 12],
];

test.forEach(t => {
    if (lengthOfLongestSubstring(t[0]) !== t[1]) {
        console.log(t[0], lengthOfLongestSubstring(t[0]));
    }
})