/**
 * Created by doit on 2020/3/10.
 */

/**给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。
 * 这条路径可能穿过根结点。
 *
 * 示例 :
 * 给定二叉树
 *
 *   1
 *  / \
 * 2   3
 *   / \
 *  4   5
 * 返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。
 * 注意：两结点之间的路径长度是以它们之间边的数目表示。
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**对于最简单的树来说的话，最大深度就是
 * 左子树的最大深度 + 右子树的最大深度 - 1
 * 遍历树的时候，更新全局最大值即可
 *
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let diameter = 0;

    function getMaxDep(node) {
        if (node === null) return 0;

        let leftDep = node.left ? getMaxDep(node.left) + 1 : 0;
        let rightDep = node.right ? getMaxDep(node.right) + 1 : 0;

        diameter = Math.max(diameter, leftDep + rightDep);
        return Math.max(leftDep, rightDep);
    }

    getMaxDep(root);
    return diameter;
    // console.log(diameter);
};

let node = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: {
                val: 6,
                left: null,
                right: null
            },
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
        left:  {
            val: 6,
            left: null,
            right: null
        },
        right: null
    }
}

diameterOfBinaryTree(node);