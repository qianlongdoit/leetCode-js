/**
 * Created by Administrator on 2018/4/20.
 */
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  if (!s) return 0;
  const map = {};
  let max = 1;
  for (let i = 0, j = 0; j < s.length; j++) {
    if (s.indexOf(s[j]) !== j) {
      console.log(i, j)
      i = i <= map[s[j]] ? map[s[j]] + 1 : i;
    }
    max = Math.max(max, j - i + 1)
    // console.log(s, i, j)
    map[s[j]] = j;

  }
  console.log(max)
  return max;
};

lengthOfLongestSubstring('wcibxubumenmeyatdrmydiajxloghiqfmzhlvihjouvsuyoypayulyeimuotehzriicfskpggkbbipzzrzucxamludfyk')
// lengthOfLongestSubstring('abcbadbb123')
// lengthOfLongestSubstring("pwwkew")
// lengthOfLongestSubstring("dvdf")

// console.log(notRepeated('abc123'))