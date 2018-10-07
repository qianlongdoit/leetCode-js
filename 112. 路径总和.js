/**
 * Created by admin on 2018/9/26.
 */

/**给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
 * 说明: 叶子节点是指没有子节点的节点。
 * 示例:
 * 给定如下二叉树，以及目标和 sum = 22，
 *        5
 *      /  \
 *     4    8
 *    /    / \
 *   11   13  4
 *  /  \      \
 * 7    2      1
 * 返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**不使用递归的方式遍历二叉树，自己做一个栈 stack [] 来模拟递归的过程
 * 如果单纯的递归则栈里面放值就够了，但是为了计算路径和，不仅要拿到值还要拿到二叉树的深度
 * 所以这个stack [] 里面存 {val: val, height: height}
 *
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    if (root === null) return false;

    let total = [];
    let stack = [];
    let height = 1;

    stack.push({node: root, height: height});

    let head = root;

    while (stack.length) {

        let current = stack.pop();
        head = current.node;

        //  当前二叉树深度为current的深度
        //  累加和的数组也重置
        height = current.height;
        total.length = height - 1;
        total.push(head.val);
        height++;

        if (head.right !== null) {
            stack.push({node: head.right, height: height})
        }

        if (head.left !== null) {
            stack.push({node: head.left, height: height})
        }

        //  当前节点为叶子节点时
        if (head.left === null && head.right === null) {
            let accumulate = total.reduce((accu, cur) => accu + cur, 0);

            //  每次到叶子节点的时候检查是否满足要求
            if (accumulate === sum) {
                return true;
            }
        }

    }
    return false;
};

