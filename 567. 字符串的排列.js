/**
 * Created by admin on 2018/6/16.
 */
/**给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
 * 换句话说，第一个字符串的排列之一是第二个字符串的子串。
 *
 * 示例1:
 * 输入: s1 = "ab" s2 = "eidbaooo"
 * 输出: True
 * 解释: s2 包含 s1 的排列之一 ("ba").
 *
 * 示例2:
 * 输入: s1= "ab" s2 = "eidboaoo"
 * 输出: False
 *
 * 注意：
 * 输入的字符串只包含小写字母
 * 两个字符串的长度都在 [1, 10,000] 之间
 */

/**建立一个哈希表，用来检测遍历到s2中的字符是否包含在s1中
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let standard = {};
  let slow = 0;
  let map = {};

  for (let i = 0, len = s1.length; i < len; i++) {
    !standard[s1[i]] ? standard[s1[i]] = 1 : standard[s1[i]]++;
  }

  for (let i = 0, len = s2.length; i < len; i++) {
    let current = s2[i];
    //  跳过不是s1中的元素
    if (!standard[current]) {
      slow = i + 1;
      map = {};
      continue;
    }

    //  i移动的时候，字典中字符数量增加
    !map[current] ? map[current] = 1 : map[current]++;

    //  如果移动后数量超过了，则移动slow指针
    while (map[current] > standard[current]) {
      map[s2[slow++]]--;
    }

    if (i - slow + 1 === s1.length) {
      return true;
    }
  }
  return false;
};

var s1 = "abcde";
var s2 = "cabababcabcde";

console.log(checkInclusion(s1, s2))