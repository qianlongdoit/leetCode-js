/**
 * Created by admin on 2018/10/17.
 */

/**给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 * 示例:
 * 输入: [1,2,3,null,5,null,4]
 * 输出: [1, 3, 4]
 * 解释:
 *         1            <---
 *       /   \
 *      2     3         <---
 *       \     \
 *        5     4       <---
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**思路很简单，按二叉树的层次遍历，每次最右边的就是右视图
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (root === null) return [];

    let res = [root.val];
    let row = [];
    let stack = [root];
    let head = null;
    while (stack.length) {
        head = stack.shift();
        
        if (head.left !== null) {
            row.push(head.left)
        } 
        if (head.right !== null) {
            row.push(head.right)
        }

        //  当栈空的时候，说明此层遍历完了，如果row里面有东西
        if (!stack.length && row.length) {
            res.push(row[row.length - 1].val);
            stack = row.slice();
            row.length = []
        }
    }

    console.log(res);
    return res;
};

const node = require('./base/nodeTree').tree2;

console.log(rightSideView(node));