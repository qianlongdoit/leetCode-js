/**
 * Created by admin on 2018/12/16.
 */

/**给定一个二叉树（具有根结点 root）， 一个目标结点 target ，和一个整数值 K 。
 * 返回到目标结点 target 距离为 K 的所有结点的值的列表。 答案可以以任何顺序返回。
 *
 * 输入：root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, K = 2
 * 输出：[7,4,1]
 * 解释：
 * 所求结点为与目标结点（值为 5）距离为 2 的结点，
 * 值分别为 7，4，以及 1
 *
 * 提示：
 * 给定的树是非空的，且最多有 K 个结点。
 * 树上的每个结点都具有唯一的值 0 <= node.val <= 500 。
 * 目标结点 target 是树上的结点。
 * 0 <= K <= 1000.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**（感觉和题目542很像，都是扩散）
 * 可以从目标节点开始扩散,扩散K次，则为目标所求节点集合
 * 由于节点具有唯一的值，所以可以用节点的值来判断是否访问过该节点
 *
 * 扩散的时候需要注意的问题是，定义节点的时候并没有定义指向父节点的指针
 * 所以对于子->父向上查找无法查找
 * 解决方案是将二叉树进行遍历一次，添加一个指向父节点的指针，这样就可以通过子向父节点查找了
 * 但是！！！！！！！！！
 * 如果遍历一次二叉树，给每个节点标记他们的父节点，如果直接在原参数上修改，会修改原参数，不够优雅
 * 如果复制一份进行修改，使用空间会增多，也不算好
 *
 * 所以改进的方法就是，从root出发，找到target，沿途标记到target的距离
 * 这一系列的节点就是其需要的父节点，所有能找到target 的父节点必定在这里面
 *
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
    let path = {};
    const findTarget = (node, target) => {
        if (node === null) return -1;
        if (node === target) {
            path[node.val] = 0;
            return 0;
        }

        let left = findTarget(node.left, target);
        let right = findTarget(node.right, target);

        if (left !== -1) {
            path[node.val] = left + 1;
            return left + 1;
        }
        if (right !== -1) {
            path[node.val] = right + 1;
            return right + 1;
        }
        return - 1;
    }
    findTarget(root, target);

    let res = [];
    const find = (node, distance) => {
        if (node === null) return;
        if (path[node.val] !== undefined) {
            distance = path[node.val];
        }
        // console.log(distance);
        if (distance === K) {
            res.push(node.val)
        }
        find(node.left, distance + 1);
        find(node.right, distance + 1);
    }

    find(root, K, path[root.val]);
    console.log(res);
    return res;
};

let {searchTree} = require('./base/nodeTree');
// console.log(searchTree);
// console.log(distanceK(searchTree, searchTree.right.left, 1));
// console.log(path);

//  递归版寻路
const findPath = (root, target, path) => {
    if (root === target) {
        console.log(path)
        return
    }
    if (root.left !== null) {
        findPath(root.left, target, [...path, root.left])
    }
    if (root.right !== null) {
        findPath(root.right, target, [...path, root.right])
    }
}

// findPath(searchTree, searchTree.right.left, [searchTree]);

//  非递归版寻路
//  当回到此节点2次的时候删除此节点，这样就可以保存搜索的路径了
const getPath = (root, target) => {
    let stack = [];
    let head = root;

    while (head !== null || stack.length) {
        if (head !== null) {
            stack.push({node: head, n : 0});
            head = head.left;
        } else {
            let last = stack[stack.length - 1];
            head = last.node;
            if (head === target) {
                console.log(stack);
                return stack;
            }
            last.n += 1;
            if (last.n === 2) stack.pop();
            head = head.right;
        }
    }
}

getPath(searchTree, searchTree.right.left);