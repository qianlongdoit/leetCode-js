/**
 * Created by doit on 2019/3/11.
 */

/**在上次打劫完一条街道之后和一圈房屋后，小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，
 * 我们称之为“根”。 除了“根”之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，
 * 聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。
 * 如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。
 *
 *计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。
 *
 *示例 1:
 *
 *输入: [3,2,3,null,3,null,1]
 *
 *     3
 *    / \
 *   2   3
 *    \   \
 *     3   1
 *
 *输出: 7
 *解释: 小偷一晚能够盗取的最高金额 = 3 + 3 + 1 = 7.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**递归思路
 * 退出条件：节点为空的时候
 * 最高金额 = Math.max(
 *              抢劫root + root的左节点的左右孩子树 + root的右节点的左右孩子树,
 *              root左子树 + roo右子树
 *          )
 * 即抢劫root和不抢劫root的时候
 *
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    if (root === null) return 0;
    let val = 0;
    if (root.left !== null) val += rob(root.left.left) + rob(root.left.right);
    if (root.right !== null) val += rob(root.right.left) + rob(root.right.right);

    return Math.max(rob(root.left) + rob(root.right), val + root.val);
};


/**动态规划版
 * 用一个数组来记录每次抢劫与不抢劫该节点时的最大值
 * 然后每次只需要知道当前层的值
 */
rob = function(root) {

    let dfs = (node) => {
        if (node === null) return [0, 0];

        let left = dfs(node.left);
        let right = dfs(node.right);
        let res = [];

        //res[抢劫当前节点的最大值, 不抢劫该节点的最大值]
        //抢劫该节点的最大值
        res[0] = node.val + left[1] + right[1];
        //不抢劫改节点的最大值
        res[1] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        return res;
    };

    let res = dfs(root);
    return Math.max(res[0], res[1]);
};

let tree = require('./base/nodeTree').tree;

console.log(rob(tree));