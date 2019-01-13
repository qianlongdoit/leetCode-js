/**
 * Created by admin on 2019/1/13.
 */
/**给定一个二叉树，原地将它展开为链表。
 * 例如，给定二叉树
 *      1
 *     / \
 *    2   5
 *   / \   \
 *  3   4   6
 * 将其展开为：
 *    1
 *     \
 *      2
 *       \
 *        3
 *         \
 *          4
 *           \
 *            5
 *             \
 *              6
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**粗暴的方法，按题目要求遍历一次，然后再修改tree
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let stack = [];
    let head = root;
    let res = [];

    while (stack.length || head !== null) {
        if (head !== null) {
            res.push(head.val);
            stack.push(head);
            head = head.left;
        } else {
            head = stack.pop();
            head = head.right;
        }
    }

    let current = root;
    res.forEach(value => {
        current.left = null;
        current.val = value;
        if (!current.right) {
            current.right = {val: undefined, left: null, right: null};
        }
        current = current.right;
    });
    console.log(root);
};

let tree = require('./base/nodeTree').balanceTree;
// flatten(tree);

/**递归版完成
 * 对于任意一个节点node来说，整个的流程为
 * 对右子树进行展开，展开后的右子树放置于左子树的最右边
 * 对左子树进行展开，展开后的左子树放在右子树的位置
 *
 */
flatten = function (root) {
    if (root === null) return root;

    const {left, right} = root;
    let flattenL = flatten(left);
    let flattenR = flatten(right);
    root.left = null;

    if (flattenL === null) {
        root.right = flattenR;
    } else {
        let tail = flattenL;
        //  找到左子树的最右边
        while (tail.right) {
            tail = tail.right;
        }
        tail.right = flattenR;
        root.right = flattenL
    }

    return root;
};
