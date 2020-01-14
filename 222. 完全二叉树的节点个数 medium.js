/**
 * Created by doit on 2020/1/13.
 */

/**给出一个完全二叉树，求出该树的节点个数。
 * 说明：
 * 完全二叉树的定义如下：在完全二叉树中，除了最底层节点可能没填满外，
 * 其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。
 * 若最底层为第 h 层，则该层包含 1~ 2^h 个节点。
 *
 * 示例:
 * 输入:
 *     1
 *    / \
 *   2   3
 *  / \  /
 * 4  5 6
 * 输出: 6
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**求出全部的节点很简单，但是用二分法就需要多一点思考
 * 节点个数 = 2^（层数-1） - 1 + 最后一层的个数
 * 层数很容易计算出来，所以关键点就在于得到最后一层的个数了。
 * 最后一层的个数在 1 ~ 2^(h-1)的范围内
 *
 * 最后一层的中间节点为 root.right然后一直向左走就行了
 * 对于高度为h的最后一层节点（假设为满节点） arr = [1,2,3,4,5,...,2^(h-1)];
 * root到这一层节点i的访问方法如下：
 * 记当前节点向left移动一次为0，
 * 记当前节点向right移动一次为1，
 * 那么有如下表示
 * arr[0] => [0, 0, 0, 0, ...., 0]
 * arr[2^(h-1) - 1] => [1, 1, 1, 1, ...., 1]
 * arr[1] => [0, 0, 0, 0, ...., 1]
 * arr[2] => [0, 0, 0, ...., 1, 0]
 * arr[i] => []i的二进制展开数组
 * 有如上关系后，就可以像数组的二分查找一样的进行二分了
 *
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
    function getH(node) {
        let h = 0;
        let current = node;
        while (current) {
            current = current.left;
            h++;
        }
        return h;
    }

    //检查root中是否有此节点
    function checkExist(n) {
        let copy = root;

        let arr = n.toString(2).split('');
        arr = Array(Math.max(h - 1 - arr.length, 0)).fill('0').concat(arr);

        for (let i = 0; i < arr.length; i++) {
            copy = arr[i] === '0' ? copy.left : copy.right;
        }
        return !!copy;
    }

    if (!root) return 0;
    const h = getH(root);
    const length = Math.pow(2, h - 1);

    let start = 0;
    let end = length - 1;

    while (start < end - 1) {
        let mid = ~~((start + end) / 2);
        if (checkExist(mid)) {
            start = mid;
        } else {
            end = mid;
        }
    }

    const lastRowCount = (checkExist(end) ? end : start) + 1;

    return length - 1 + lastRowCount;
    // console.log(checkExist(3));
};


const node = require('./base/nodeTree').completeTree;
const tree = {
    val: null,
    left: null,
    right: null
}
const fullTree = {
    val: 1,
    left: null,
    right: null
}
console.log(countNodes(fullTree));