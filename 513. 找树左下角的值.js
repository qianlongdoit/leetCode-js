/**
 * Created by admin on 2018/12/8.
 */

/**给定一个二叉树，在树的最后一行找到最左边的值。
 * 输入:
 *      1
 *     / \
 *    2   3
 *   /   / \
 *  4   5   6
 *     /
 *    7
 * 输出:
 * 7
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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    let current = [root];
    let next = [];

    while (current.length) {

        for (let i = 0, len = current.length; i < len; i++) {
            let node = current[i];
            if (node.left) {
                next.push(node.left);
            }
            if (node.right) {
                next.push(node.right);
            }
        }

        if (!next.length) {
            return current[0].val;
        }

        current = next;
        next = [];
    }
};