/**
 * Created by admin on 2018/10/7.
 */

/**给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。
 * 说明: 叶子节点是指没有子节点的节点。
 * 示例:
 * 给定如下二叉树，以及目标和 sum = 22，
 *        5
 *       / \
 *      4   8
 *    /   / \
 *   11  13  4
 *  /  \    / \
 * 7    2  5   1
 * 返回:
 * [
 * [5,4,11,2],
 * [5,8,4,5]
 * ]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**同112，略做修改
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if (root === null) return [];

    let stack = [];
    let total = [];
    let res = [];
    let height = 1;

    let head = root;
    stack.push({node: head, height});

    while (stack.length) {
        let current = stack.pop();
        head = current.node;

        height = current.height;
        total.length = height - 1;
        total.push(head.val);
        height++;

        if (head.right !== null) {
            stack.push({node: head.right, height})
        }
        if (head.left !== null) {
            stack.push({node: head.left, height})
        }

        if (head.right === null && head.left === null) {
            let accumulate = total.reduce((accu, cur) => accu + cur, 0);

            if (accumulate === sum) {
                res.push(total.slice())
            }
        }
    }

    return res;
};
