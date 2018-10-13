/**
 * Created by admin on 2018/10/13.
 */

/**给定一个二叉树，返回它的中序 遍历。
 * 示例:
 * 输入: [1,null,2,3]
 *      1
 *       \
 *        2
 *       /
 *      3
 * 输出: [1,3,2]
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = [];

    traversal(root);

    function traversal(root) {
        if (root === null) return ;

        traversal(root.left);
        res.push(root.val)
        // console.log(root.val)
        traversal(root.right);
    }

    console.log(res);
    return res;
};

/**非递归版本
 * @param {TreeNode} root
 * @return {number[]}
 */
inorderTraversal = function(root) {
    if (root === null) return [];
    let res = [];

    let stack = [];
    let head = root;

    while (stack.length || head !== null) {
        if (head !== null) {
            stack.push(head);
            head = head.left;
        } else {
            head = stack.pop();
            res.push(head.val);
            head = head.right;
        }
    }

    console.log(res);
    return res;
};

let test = [
    {
        val: 1,
        left: {
            val: 2,
            left: {
                val: 4,
                left: null,
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
            left: {
                val: 6,
                left: null,
                right: null
            },
            right: {
                val: 7,
                left: null,
                right: null
            }
        }
    },

    // {
    //     val: 1,
    //     left: null,
    //     right: {
    //         val: 2,
    //         left: 3,
    //         right: null
    //     }
    // }

    // {
    //     val: -10,
    //     left: {
    //         val: 9,
    //         left: {
    //             val: 5,
    //             left: null,
    //             right: null
    //         },
    //         right: null
    //     },
    //     right: {
    //         val: 20,
    //         left: {
    //             val: 15,
    //             left: null,
    //             right: null
    //         },
    //         right: {
    //             val: 7,
    //             left: null,
    //             right: {
    //                 val: 0,
    //                 left: null,
    //                 right: null
    //             }
    //         }
    //     }
    // }
];

test.forEach((sample, i) => {
    inorderTraversal(sample)
});