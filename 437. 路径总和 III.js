/**
 * Created by admin on 2018/10/7.
 */

/**给定一个二叉树，它的每个结点都存放着一个整数值。
 * 找出路径和等于给定数值的路径总数。
 * 路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
 * 二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。
 * 示例：
 * root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8
 *         10
 *       /  \
 *      5   -3
 *    / \    \
 *   3   2   11
 *  / \   \
 * 3  -2   1
 * 返回 3。和等于 8 的路径有:
 * 1.  5 -> 3
 * 2.  5 -> 2 -> 1
 * 3.  -3 -> 11
 *
 */

/**同112，不过为任意节点开始都可以，也不必叶子节点结尾
 * 采用递归的方式完成
 * 总和为左子树满足要求的数量加右子数满足要求的数量
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**结果分三部分：以root为起点 以roo.left为起点  以root.right为起点 这三部分所有和为sum的数量之和
 *
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    if (root === null) return 0;

    var traversal = function (root, sum) {
        let count = 0;
        if (root === null) return count;

        if (root.val === sum) {
            count++;
        }

        count += traversal(root.left, sum - root.val);
        count += traversal(root.right, sum - root.val);

        return count;
    }

    return traversal(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
};
