/**
 * Created by doit on 2019/3/7.
 */

/**给定一个 N 叉树，找到其最大深度。
 * 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。
 * 例如，给定一个 3叉树 :
 *          1
 *      /  |  \
 *     3   2   4
 *    / \
 *   5   6
 */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**说的是深度优先的题目，其实个人感觉求深度的题目都可以用广度搜索解决
 * 没什么好说的，层次遍历，结束时最大深度就是N叉树的最大深度了
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) return 0;

    let deep = 0;
    let current = [root];
    let next = [];

    while (current.length) {
        for (let i = 0; i < current.length; i++) {
            let node = current[i];
            if (node.children && node.children.length) {
                next = next.concat(node.children);
            }
        }
        deep++;
        current = next;
        next = [];
    }

    return deep;
};

maxDepth = function (root) {
    if (!root) return 0;
    let deep = 0;

    for (let i = 0; i < root.children.length; i++) {
        deep = Math.max(maxDepth(root.children[i]), deep)
    }

    return deep + 1;
};

let tree4 = {
    "$id":"1",
    "children":[
        {
            "$id":"2",
            "children":[
                {"$id":"5","children":[],"val":5},
                {"$id":"6","children":[],"val":6}
                ],
            "val":3
        },
        {
            "$id":"3","children":[],
            "val":2
        },
        {
            "$id":"4", "children":[],
            "val":4
        }
    ],
    "val":1
};

console.log(maxDepth(tree4));