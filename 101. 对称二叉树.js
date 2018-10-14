/**
 * Created by admin on 2018/10/13.
 */

/**给定一个二叉树，检查它是否是镜像对称的。
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 *     1
 *    / \
 *   2   2
 *  / \ / \
 * 3  4 4  3
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 *     1
 *    / \
 *   2   2
 *    \   \
 *    3    3
 * 说明:
 * 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**递归版
 * 对左右子树进行对比即可
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root === null) return true;
    let same = true;

    isSame(root.left, root.right);
    function isSame(l, r) {
        if (!same) return;
        if (l === null || r === null) {
            if (l !== r) {
                same = false
            }
            return
        }
        if (l.val !== r.val) return same = false;
        isSame(l.left, r.right);
        isSame(l.right, r.left);
    }

    return same;
};

/**非递归版
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root === null) return true;
    let s1 = [];
    let s2 = [];
    let l = root;
    let r = root;

    while (s1.length || l !== null) {

        if (l !== null) {
            if (r === null) return false;
            s1.push(l);
            s2.push(r);

            l = l.left;
            r = r.right;
        } else {
            l = s1.pop();
            r = s2.pop();
            if (l.val !== r.val) return false;

            l = l.right;
            r = r.left

        }
    }

    return true;
};

const node = require('./base/nodeTree').tree4;

console.log(isSymmetric(node));