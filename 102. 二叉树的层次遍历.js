/**
 * Created by admin on 2018/10/14.
 */
/**给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
 * 例如:
 * 给定二叉树: [3,9,20,null,null,15,7],
 *       3
 *      / \
 *     9  20
 *       /  \
 *      15   7
 * 返回其层次遍历结果：
 * [
 *  [3],
 *  [9,20],
 *  [15,7]
 * ]
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**非常朴素的想法
 * 用一个数组stack存放当前层数
 * 每次取其左右节点放入一个level数组中，
 * 当stack为空的时候，level就是当前层的，
 * 然后stack = level， level = []
 * 如此便得到了解答
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
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

    return res;
};

const node = require('./base/nodeTree').tree1;

levelOrder(node);