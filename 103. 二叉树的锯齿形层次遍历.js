/**
 * Created by admin on 2018/10/14.
 */

/**给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 *       3
 *      / \
 *     9  20
 *       /  \
 *      15   7
 * 返回锯齿形层次遍历如下：
 * [
 *  [3],
 *  [20,9],
 *  [15,7]
 * ]
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (root === null) return [];
    let res = [[root.val]];
    let stack = [root];
    let level = [];
    let head = null;
    let reverse = true;

    while (stack.length) {
        head = stack.shift();

        if (head.left !== null) {
            level.push(head.left)
        }
        if (head.right !== null) {
            level.push(head.right)
        }

        if (!stack.length && level.length) {
            let temp = level.map(node => node.val);
            temp =  reverse ? temp.reverse() : temp;
            reverse = !reverse;
            res.push(temp);
            stack = level.slice();
            level.length = 0;
        }
    }

    return res;
};

const node = require('./base/nodeTree').tree4;

console.log(zigzagLevelOrder(node));