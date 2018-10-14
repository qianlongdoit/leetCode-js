/**
 * Created by admin on 2018/10/14.
 */

/**给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 *          3
 *        / \
 *       9  20
 *         /  \
 *        15   7
 * 返回其自底向上的层次遍历为：
 * [
 *  [15,7],
 *  [9,20],
 *  [3]
 * ]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**解法同102，将102的结果逆序即可
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (root === null) return [];
    let res = [[root.val]];
    let stack = [root];
    let level = [];
    let head = null;

    while (stack.length) {
        head = stack.shift();

        if (head.left !== null) {
            level.push(head.left)
        }
        if (head.right !== null) {
            level.push(head.right)
        }

        if (!stack.length && level.length) {
            res.push(level.map(node => node.val));
            stack = level.slice();
            level.length = 0;
        }
    }

    return res.reverse();
};