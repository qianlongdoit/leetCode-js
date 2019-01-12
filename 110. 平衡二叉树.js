/**
 * Created by admin on 2019/1/12.
 */

/**给定一个二叉树，判断它是否是高度平衡的二叉树。
 * 本题中，一棵高度平衡二叉树定义为：
 * 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**按层次遍历，
 * 得到最大满二叉树的深度为h
 * 得到二叉树的最大深度H
 * 两者差绝对值不大于1即为平衡二叉树
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let balance = true;

    const getH = (node) =>{
        if (node === null) return 0;
        let L = getH(node.left) + 1;
        let R = getH(node.right) + 1;
        if (Math.abs(R - L) > 1) {
            balance = false;
        }
        return Math.max(L, R);
    };

    getH(root);

    return balance;
};

let tree = require('./base/nodeTree').tree4;
let  balanceTree = require('./base/nodeTree').balanceTree;

console.log(isBalanced(balanceTree));