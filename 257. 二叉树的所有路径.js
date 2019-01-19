/**
 * Created by admin on 2019/1/19.
 */

/**给定一个二叉树，返回所有从根节点到叶子节点的路径。
 * 说明: 叶子节点是指没有子节点的节点。
 * 示例:
 * 输入:
 *    1
 *  /   \
 * 2     3
 * \
 *  5
 * 输出: ["1->2->5", "1->3"]
 * 解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**没什么好说的，递归处理，这样可以得到所有的结果
 * 题目类似于生产所有括号之类的
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (root === null) return [];
    let result = [];

    const getPath = (node, path) => {
        if (!node.left && !node.right) return result.push(path);
        if (node.left) {
            getPath(node.left, `${path}->${node.left.val}`);
        }
        if (node.right) {
            getPath(node.right, `${path}->${node.right.val}`);
        }

    };
    getPath(root, `${root.val}`);
    return result;
};