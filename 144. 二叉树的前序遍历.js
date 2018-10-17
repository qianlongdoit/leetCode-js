/**
 * Created by admin on 2018/10/17.
 */

/**给定一个二叉树，返回它的 前序 遍历。
 * 示例:
 * 输入: [1,null,2,3]
 *      1
 *       \
 *       2
 *      /
 *     3
 * 输出: [1,2,3]
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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
var preorderTraversal = function(root) {
    if (root === null) return [];

    let res = [];
    let stack = [root];
    let head = null;

    while (stack.length) {
        head = stack.pop();
        res.push(head.val);

        if (head.right !== null) {
            stack.push(head.right)
        }
        if (head.left !== null) {
            stack.push(head.left)
        }
    }

    return res;
};

const node = require('./base/nodeTree').tree4;

console.log(preorderTraversal(node));