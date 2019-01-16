/**
 * Created by admin on 2019/1/14.
 */

/**给定一个二叉树
 * struct TreeLinkNode {
 *  TreeLinkNode *left;
 *  TreeLinkNode *right;
 *  TreeLinkNode *next;
 * }
 *
 * 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
 * 初始状态下，所有 next 指针都被设置为 NULL。
 * 说明:
 * 你只能使用额外常数空间。
 * 使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。
 * 你可以假设它是一个完美二叉树（即所有叶子节点都在同一层，每个父节点都有两个子节点）。
 * 给定完美二叉树，
 *      1
 *    /  \
 *   2    3
 *  / \    \
 * 4  5     7
 * 调用你的函数后，该完美二叉树变为：
 *       1 -> NULL
 *     /  \
 *    2 -> 3 -> NULL
 *  / \     \
 * 4->5  ->  7 -> NULL
 */

/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */
/**和116一样，差别在于不是满二叉树
 * 原以为挺简单的，做了一会，发现事实并不像想的那么简单
 * 总体思路和116一样，使用递归可以满足常数空间复杂度
 * 递归的过程为先遍历每一层，然后再进入下一层
 *
 * 注意递归的调用顺序为先递归右节点，再左节点，如果顺序反了
 * 会造成递归判断的时候，root.right.next还没有标记完毕，而next = next.next调用的时候需要使用这个指针
 * 才能找到下个节点，这时候循环会提前退出，没法得到正确的结果
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if (root === null) return;

    if (root.left) {
        if (root.right) {
            root.left.next = root.right;
        } else {
            let head = root.next;
            while (head) {
                if (head.left) {
                    root.left.next = head.left;
                    break;
                } else if (head.right) {
                    root.left.next = head.right;
                    break;
                }
                head = head.next
            }
        }
    }

    if (root.right) {
        let next = root.next;
        while (next) {
            if (next.left) {
                root.right.next = next.left;
                break;
            } else if (next.right) {
                root.right.next = next.right;
                break;
            }
            next = next.next;
        }
    }
    connect(root.right);
    connect(root.left);
};

let tree = {
    val: 2,
    left: {
        val: 1,
        left: {
            val: 0,
            left: {
                val: 2,
                left: null,
                right: null
            },
            right: null
        },
        right: {
            val: 7,
            left: {
                val: 1,
                left: null,
                right: null
            },
            right: {
                val: 0,
                left: null,
                right: {
                    val: 7,
                    left: null,
                    right: null
                }
            }
        }
    },
    right: {
        val: 3,
        left: {
            val: 9,
            left: null,
            right: null
        },
        right: {
            val: 1,
            left: {
                val: 8,
                left: null,
                right: null
            },
            right: {
                val: 8,
                left: null,
                right: null
            }
        }
    }
}

connect(tree);
// console.log(tree);
console.log(tree.left.right.right);