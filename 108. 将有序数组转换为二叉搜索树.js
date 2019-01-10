/**
 * Created by admin on 2019/1/9.
 */

/**将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 * 示例:
 * 给定有序数组: [-10,-3,0,5,9],
 * 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
 *       0
 *      / \
 *    -3   9
 *   /   /
 * -10  5
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**二叉搜索树：对于任意一个节点，各节点的值为左< 中< 右
 * 所以构建整颗搜索树的流程就是
 * 1.找到中间值作为根节点
 * 2.较小的部分构建左子树，较大部分构建右子树
 * 3.在构建左右子树的过程中就是重复以上步骤1、2
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

    const buildTree = (arr) => {
        let node = new TreeNode();

        if (!arr.length) return null;
        let len = arr.length;
        let mid = Math.floor(len / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid + 1);
        node.val = arr[mid];
        if (left.length) {
            node.left = buildTree(left);
        }
        if (right.length) {
            node.right = buildTree(right);
        }
        return node;
    };

    let tree = buildTree(nums);

    console.log(tree);
    return tree;
};

    var nums = [-10,-3,0,5,9];
sortedArrayToBST(nums)