/**
 * Created by admin on 2018/10/13.
 */

/**给定一个二叉树，返回它的 后序 遍历。
 * 示例:
 * 输入: [1,null,2,3]
 *    1
 *     \
 *      2
 *     /
 *    3
 * 输出: [3,2,1]
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
var postorderTraversal = function(root) {
    if (root === null) return [];
    let res = [];
    let stack = [root];
    let head = null;

    while (stack.length) {
        head = stack.pop();
        res.push(head.val);

        if (head.left !== null) {
            stack.push(head.left)
        }
        if (head.right !== null) {
            stack.push(head.right)
        }
        debugger
    }

    return res.reverse();
};

var root  = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}

console.log(postorderTraversal(root));