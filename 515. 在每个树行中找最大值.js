/**
 * Created by admin on 2018/12/8.
 */

/**您需要在二叉树的每一行中找到最大的值。
 * 示例：
 * 输入:
 *       1
 *      / \
 *     3   2
 *    / \   \
 *   5   3   9
 * 输出: [1, 3, 9]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
    if (!root) return [];
    let current = [root];
    let next = [];
    let res = [];

    while (current.length) {
        let max = Number.NEGATIVE_INFINITY;
        for (let i = 0, len = current.length; i < len; i++) {
            max = Math.max(max, current[i].val);
            if (current[i].left) {
                next.push(current[i].left)
            }
            if (current[i].right) {
                next.push(current[i].right)
            }
        }

        res.push(max);
        current = next;
        next = [];
    }
    return res;
};