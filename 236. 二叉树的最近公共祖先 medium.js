/**
 * Created by doit on 2020/8/25.
 */

/**给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，
 * 满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 * 例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]
 *              3
 *            /   \
 *           5     1
 *          / \   / \
 *         6  2  0   8
 *           / \
 *          7   4
 *
 * *输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * 输出: 3
 * 解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
 *
 * 示例 2:
 * 输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
 * 输出: 5
 * 解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**思路1：
 * 遍历tree，找到从根节点到 p q 的两条路径
 * 遍历这两条路径，找到最近公共祖先就行了
 *
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let [pathA, pathB] = getPath(root, [p, q]);

    for (let i = pathA.length - 1; i >= 0; i--) {
        if (pathB.includes(pathA[i])) {
            return pathA[i];
        }
    }
};

const {completeTree} = require('./base/nodeTree');

/**getPath 这个方法递归、循环都可以，为了改成循环了
 *
 * @param node
 * @param targets
 * @return {Array}
 */
function getPath(node, targets = []) {
    let res = [];
    let path = [];
    let stack = [node];

    while (stack.length) {
        let cur = stack.pop();
        path.push(cur);
        if (targets.includes(cur)) {
            let index = targets.indexOf(cur);
            targets.splice(index, 1);
            res.push([...path]);
            if (!targets.length) {
                return res;
            }
        }

        if (cur.right) {
            stack.push(cur.right)
        }
        if (cur.left) {
            stack.push(cur.left)
        }
        if (!cur.left && !cur.right) {
            path.pop();
            let temp = cur;
            let parent = path[path.length - 1];
            //  注意此处，由于遍历的顺序是中 左 右，所以对于路径里面判断该层遍历是否结束需要有限看是否是右节点
            //  可能出现单左节点的情况
            let child = parent.right || parent.left;
            while (child === temp) {
                // 当不是父子节点的时候，说明该层的节点已经遍历结束
                temp = path.pop();

                parent = path[path.length - 1];
                child = parent.right || parent.left;
            }
        }
    }
}

let target = [
    completeTree.left.left.right,
    completeTree.left.left.left
];

// console.log(getPath(completeTree, target).map(n => n.map(m => m.val)));

let test2 = {
    val: -1,
    right: {
        val: 3,
        left: null,
        right: null
    },
    left: {
        val: 0,
        left: {
            val: -2,
            left: {
                val: 8,
                left: null,
                right: null
            }
        },
        right: {
            val: 4,
            left: null,
            right: null
        }
    }
};

let p = test2.right;
let q = test2.left.left.left;


// console.log(lowestCommonAncestor(completeTree, target[0], target[1]));
console.log(lowestCommonAncestor(test2, p, q));
