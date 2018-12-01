/**
 * Created by admin on 2018/12/1.
 */

/**给定一个二叉树，找出其最小深度。
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 说明: 叶子节点是指没有子节点的节点。
 * 示例:
 * 给定二叉树 [3,9,20,null,null,15,7],
 *      3
 *     / \
 *    9  20
 *      /  \
 *    15   7
 * 返回它的最小深度  2.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**BFS广度优先搜索，遍历每一层，如果这一层有一个节点，它的左右节点都是null，那么
 * 这个节点就是最小深度
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (root === null) return 0;
    let depth = 1;
    let current = [root];
    let next = [];

    while (current.length) {
        for (let i = 0, len = current.length; i < len; i++) {
            if (current[i].left) {
                next.push(current[i].left)
            }
            if (current[i].right) {
                next.push(current[i].right)
            }

            if (current[i].left === null && current[i].right === null) {
                return depth;
            }

        }

        depth++;
        current = next;
        next = [];
    }
};

let tree4 = {
    val: 1,
    left: {
        val: 2,
        left:  {
            val: 4,
            left:null,
            right: null
        },
        right:  {
            val: 5,
            left:null,
            right: null
        }
    },
    right: {
        val: 3,
        left:null,
        right: null
    }
};

console.log(minDepth(tree4));