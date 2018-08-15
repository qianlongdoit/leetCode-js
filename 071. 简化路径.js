/**
 * Created by ww on 2018/8/15.
 */
/**给定一个文档 (Unix-style) 的完全路径，请进行路径简化。
 *
 * 例如，
 * path = "/home/", => "/home"
 * path = "/a/./b/../../c/", => "/c"
 * 边界情况:
 * 你是否考虑了 路径 = "/../" 的情况？
 * 在这种情况下，你需返回 "/" 。
 * 此外，路径中也可能包含多个斜杠 '/' ，如 "/home//foo/" 。
 * 在这种情况下，你可忽略多余的斜杠，返回 "/home/foo" 。
 */

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var folders = path.split('/');
    var stack = [];

    for (let i = 0, len = folders.length; i < len; i++) {
        if (folders[i] === '..') {
            stack.pop();
            continue;
        }
        if (folders[i] && folders[i] !== '.') {
            stack.push(folders[i]);
        }
    }

    // console.log('/' + stack.join('/'))
    return '/' + stack.join('/');
};

// var path = "/a/./b/../../c//";
// var path = "/home/";
var path = "/../";
console.log(simplifyPath(path));