/**
 * Created by admin on 2018/10/12.
 */

/**给定两个二叉树，编写一个函数来检验它们是否相同。
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 *
 * 输入:       1         1
 * / \       / \
 * 2   3     2   3
 * [1,2,3],   [1,2,3]
 * 输出: true
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    let isSame = true;
    traversal(p, q);

    function traversal(p, q) {
        if (!isSame) return isSame;
        if (p === null || q === null) {
            if (p !== q) {
                isSame = false;
            }
            return
        }

        if (p.val !== q.val) return isSame = false;
        traversal(p.left, q.left);
        traversal(p.right, q.right)
    }
    return isSame
};



var p = {
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

var q = {
    val: -10,
    left: {
        val: 9,
        left: {
            val: 5,
            left: null,
            right: null
        },
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
            right: {
                val: 0,
                left: null,
                right: null
            }
        }
    }
};

let test = [
    {p, q},
    {
        p: null,
        q: null
    },
    {
        p: {
            val: 0,
            left: null,
            right: null
        },
        q: {
            val: 1,
            left: null,
            right: null
        }
    }
];

test.forEach((sample, i) => {
    let result = isSameTree(sample.p, sample.q);
    if (!result) console.log(`not same is ${i}`);
});

