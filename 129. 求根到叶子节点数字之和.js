/**
 * Created by admin on 2018/10/7.
 */

/**给定一个二叉树，它的每个结点都存放一个 0-9 的数字，每条从根到叶子节点的路径都代表一个数字。
 * 例如，从根到叶子节点路径 1->2->3 代表数字 123。
 * 计算从根到叶子节点生成的所有数字之和。
 * 说明: 叶子节点是指没有子节点的节点。
 * 示例 1:
 * 输入: [1,2,3]
 *   1
 *  / \
 * 2   3
 * 输出: 25
 * 解释:
 * 从根到叶子节点路径 1->2 代表数字 12.
 * 从根到叶子节点路径 1->3 代表数字 13.
 * 因此，数字总和 = 12 + 13 = 25.
 *
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
 * @return {number}
 */
var sumNumbers = function(root) {
    if (root === null) return 0;

    let stack = [];
    let sum = [];
    let sumArr = [];
    let height = 1;

    stack.push({node: root, height: height});
    let head = root;

    while (stack.length) {
        let  current = stack.pop();
        head = current.node;

        height = current.height;
        sum.length = height - 1;
        sum.push(head.val);
        height++;

        if (head.right !== null) {
            stack.push({node: head.right, height})
        }

        if (head.left !== null) {
            stack.push({node: head.left, height})
        }

        if (head.left === null && head.right === null) {
            sumArr.push(+sum.join(''));
        }
    }

    return sumArr.reduce((accumulate, cur) => accumulate + cur, 0);
};