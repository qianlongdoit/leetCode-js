/**
 * Created by admin on 2018/10/7.
 */

/**给定一个非空二叉树，返回其最大路径和。
 * 本题中，路径被定义为一条从树中任意节点出发，达到任意节点的序列。该路径至少包含一个节点，且不一定经过根节点。
 * 输入: [-10,9,20,null,null,15,7]
 *    -10
 *    / \
 *   9  20
 *  /  \
 * 15   7
 * 输出: 42
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**理解错了，一开始以为是以任意节点开始到叶子节点的和最大值；
 * 题目是任意路径和的最大值；
 *
 * 解题思路是这样的：https://www.jianshu.com/p/86d6f0932484
 *
 * 自然思维是这样的：
 * 从左右子树中获取最大的路径和的值，返回给left,right，然后从left,right,left+right+val,val中取最大值
 * 但这样的问题是，如果值都是负数的时，左右子树会返回0，然后最大值会0，而不是负数
 *
 * 修正后的思路应该是：
 * 在递归函数中，如果当前结点不存在，那么直接返回0。否则就分别对其左右子节点调用递归函数，由于路径和有可能为负数，
 * 而我们当然不希望加上负的路径和，所以我们和0相比，取较大的那个，就是要么不加，加就要加正数。
 * 然后我们来更新全局最大值结果res，就是以左子结点为终点的最大path之和加上以右子结点为终点的最大path之和，
 * 还要加上当前结点值，这样就组成了一个条完整的路径。
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = Number.NEGATIVE_INFINITY;
    
    function path(root) {
        if (root === null)  return 0;

        let left = Math.max(path(root.left), 0);
        let right = Math.max(path(root.right), 0);

        max = Math.max(max, left + right + root.val);
        return root.val + Math.max(left, right);
    }

    function maxSum(root) {
        if (root === null) return 0;

        path(root);
        return max;
    }

    maxSum(root);

    return max;
};

var root = {
    val: -10,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
};

console.log(maxPathSum(root));