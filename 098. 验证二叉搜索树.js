/**
 * Created by admin on 2018/10/18.
 */

/**给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 * 假设一个二叉搜索树具有如下特征：
 * 节点的左子树只包含小于当前节点的数。
 * 节点的右子树只包含大于当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
 * 输入:
 *       5
 *      / \
 *     1   4
 *        / \
 *       3   6
 * 输出: false
 * 解释: 输入为: [5,1,4,null,null,3,6]。
 * 根节点的值为 5 ，但是其右子节点值为 4 。
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**进行中序遍历就可以验证是否为搜索二叉树
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    if (root === null) return true;
    let isSearchTree = true;
    let cur = Number.NEGATIVE_INFINITY;

    traversal(root)
    function traversal(root) {
        if (root === null || !isSearchTree) return;

        traversal(root.left);
        console.log(cur, root.val);
        if (cur >= root.val) {
            isSearchTree = false
        }
        cur = root.val;
        traversal(root.right);
    }

    return isSearchTree;
};

const tree = require('./base/nodeTree').searchTree;

isValidBST(tree)
