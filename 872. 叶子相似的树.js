/**
 * Created by admin on 2019/1/6.
 */

/**请考虑一颗二叉树上所有的叶子，这些叶子的值按从左到右的顺序排列形成一个 叶值序列 。
 *
 *         3
 *      /   \
 *     5     1
 *    / \   / \
 *   6  2  9  8
 *     / \
 *    7  4
 * 举个例子，如上图所示，给定一颗叶值序列为 (6, 7, 4, 9, 8) 的树。
 * 如果有两颗二叉树的叶值序列是相同，那么我们就认为它们是 叶相似 的。
 * 如果给定的两个头结点分别为 root1 和 root2 的树是叶相似的，则返回 true；否则返回 false 。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let leaf1 = bfs(root1);
    let leaf2 = bfs(root2);

    for (let i = 0, len = leaf1.length; i < len; i++) {
        if (!leaf2[i] || leaf1[i] !== leaf2[i]) return false;
    }
    console.log(leaf1);
    console.log(leaf2);
    return true;

    function bfs(root) {
        if (!root) return [];
        let res = [];
        let head = null;
        let s1 = [root];

        while (s1.length) {
            head = s1.pop();
            // s2.push(head);

            if (head.left !== null) {
                s1.push(head.left)
            }
            if (head.right !== null) {
                s1.push(head.right)
            }
            if (head.left === null && head.right === null) {
                res.push(head.val)
            }
        }

        return res;
    }
};