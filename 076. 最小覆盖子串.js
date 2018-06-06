/**
 * Created by Administrator on 2018/6/4.
 */
/**给定一个字符串 S 和一个字符串 T，请在 S 中找出包含 T 所有字母的最小子串。
 * 示例：
 * 输入: S = "ADOBECODEBANC", T = "ABC"
 * 输出: "BANC"
 * 说明：
 * 如果 S 中不存这样的子串，则返回空字符串 ""。
 * 如果 S 中存在这样的子串，我们保证它是唯一的答案。
 *
 */

/**此题归类到哈希表和双指针问题，
 * 拓展： 如果t中有重复字符怎么办？ => 设定一个标准记录应该出现的次数
 * 思路：
 *    两个指针slow、fast从0开始移动；
 *    用一个map存slow-fast之间包含t中字符的次数；
 *    开始fast先动，每次遇到t中字符则对应数量++，如果slow-fast包含t，保存此时的字符及长度；
 *    判断此时slow是否可以移动：
 *    如果slow位置为t中字符，且数量大于标准数量，则可以移动，否则fast移动；
 *
 * 策略想出来了，但是写出来花了好长时间。。。
 *
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let count = 0;  //用于判断slow-fast是否已经包含t了
  let slow = 0;
  let fast = 0;
  let map = {};
  let standard = {};
  let result = s;

  for (let i = 0, len = s.length; i < len; i++) {
    //  s[i]在t中
    if (t.indexOf(s[i]) !== -1) {
      if (map[s[i]] === undefined) map[s[i]] = 0;
    }
  }
  for (let i = 0, len = t.length; i < len; i++) {
    standard[t[i]] === undefined ? standard[t[i]] = 1 : standard[t[i]]++;
  }

  //  初始化slow fast的位置
  while (map[s[fast]] === undefined && fast < s.length) {
    fast++;
  }
  if (fast < s.length) {
    slow = fast;
    map[s[fast]] = 1;
    count = 1;
  } else {
    return '';
  }

  while (slow <= fast && fast < s.length) {
    //  如果结果比上次长度小，记录此次的结果
    if (count === t.length && fast - slow + 1 < result.length) {
      result = s.slice(slow, fast + 1);
    }

    //  slow需要移动的情况
    if (map[s[slow]] === undefined) {
      slow++;
    } else if (count === t.length && map[s[slow]] > standard[s[slow]]) {
      map[s[slow++]]--;
    } else {
      //  此时才是fast需要移动的时候
      fast++;

      if (map[s[fast]] !== undefined) {
        if (map[s[fast]] < standard[s[fast]]) {
          count++
        }
        map[s[fast]]++;
      }
    }

    // console.log(count, '---------', slow, fast, '----------', map[s[slow]], standard[s[slow]], s.slice(slow, fast + 1))
    //  终止条件: fast无法移动 且 slow无法移动
    if (fast >= s.length && (slow >= s.length || map[s[slow]] <= standard[s[slow]])) {
      break;
    }
  }

  return count !== t.length ? '' : result;
};

// console.log(minWindow("ADOBECODEBANC", "ABC"))
console.log(minWindow("abcccc", "bc"))
// console.log(minWindow("bba", "ab"))
// console.log(minWindow("dcabefgecdaecf", "cae"))
