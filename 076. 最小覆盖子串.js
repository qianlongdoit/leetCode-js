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
 * 拓展： 如果t中有重复字符怎么办？ => 重复几次则数量多于几
 * 思路：
 *    两个指针slow、fast从0开始移动；
 *    用一个map存slow-fast之间包含t中字符的次数；
 *    开始fast先动，每次遇到t中字符则对应数量++，如果slow-fast包含t，保存此时的字符及长度；
 *    fast继续移动，再次碰到t中字符时；
 *    slow开始移动，slow每次碰到t中字符则对应数量--；
 *    异动前判断，如果对应数量大于0，则可以移动，否则fast移动；
 *
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let count = 0;  //用于判断slow-fast是否已经包含t了
  let slow = 0;
  let fast = 0;
  let map = {};
  let result = '';

  for (let i = 0, len = s.length; i < len; i++) {
    //  s[i]在t中
    if (t.indexOf(s[i]) !== -1) {
      !map[s[i]] ? map[s[i]] = 0 : map[s[i]]++;
    }
  }
  let standard = Object.assign({}, map); //复制一份作为标准

  while (slow <= fast) {
    //  开始slow移动到包含在t中的字符串的位置
    while (map[s[slow]] === 'undefined') {
      slow++;
    }
    while (map[s[fast]] === 'undefined') {
      fast++;
    }

    //  fast需要移动的时候
    if (count < t.length || map[s[slow]] + 1 < standard[s[slow]]) {

      fast++;
    }

    //  每次碰到t中字符时判断
    if (map[s[fast]] !== 'undefined') {
      //  记录slow-fast中有效t中字符的数量
      if (map[s[fast]] <= standard[s[fast]]) {
        count++;
      } else if (count === t.length) {  //  如果slow-fast包含t中全部在字符
        //  如果slow指针移动到包含t中字符处，而且该字符数量大于1，就开始移动slow指针
        if (map[s[slow]] !== 'undefined' && map[s[slow]] > 1) {
          slow++;
          map[s[slow]]--;
        }

      }

      //  如果当前slow-fast是否包含t
      if (count === t.length) {
        let temp =  s.slice(slow, fast + 1);
        result = result.length <  temp.length ? temp : result;
      }
      map[s[fast]]++;

    }
  }

};


