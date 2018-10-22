/**
 * Created by admin on 2018/10/19.
 */

/**二叉搜索树中的两个节点被错误地交换。
 * 请在不改变其结构的情况下，恢复这棵树。
 * 输入: [3,1,4,null,null,2]
 *      3
 *     / \
 *    1   4
 *       /
 *      2
 * 输出: [2,1,4,null,null,3]
 *      2
 *     / \
 *    1   4
 *       /
 *      3
 * 进阶:
 * 使用 O(n) 空间复杂度的解法很容易实现。
 * 你能想出一个只使用常数空间的解决方案吗？
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**对二叉树进行左中右遍历即可得搜索树的升序排列
 * 如果一个升序数组有2个数进行了交换
 * 那么观察可知，一定有2次降序的地方
 * 那么被交换的数一定是第一次降序的第一个数，和第二次降序的第二个数
 *
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    let pre = null;
    let s1 = null;
    let s2 = null;


    function _traversal(root) {
        if (root === null) return;
        _traversal(root.left);

        if (pre !== null && pre.val > root.val) {
            if (s1 === null) {
                s1 = pre;
            }
            s2 = root;
        }
        pre = root;
        _traversal(root.right);
    }

    _traversal(root);

    if (s1 != null && s2 != null) {
        var temp = s1.val;
        s1.val = s2.val;
        s2.val = temp;
    }
};

recoverTree = function (root) {
    if (root === null) return;

    let stack = [];
    let head = root;
    let pre = null;
    let s1 = null;
    let s2 = null;

    while (stack.length || head !== null) {
        if (head !== null) {
            stack.push(head)
            head = head.left;
        } else {
            head = stack.pop();

            if (pre !== null && pre.val > head.val) {
                if (s1 === null) {
                    s1 = pre;
                }
                s2 = head;
            }

            pre = head;
            head = head.right;
        }

    }
    if (s1 != null && s2 != null) {
        var temp = s1.val;
        s1.val = s2.val;
        s2.val = temp;
    }

    // console.log(root);
};

const node = require('./base/nodeTree').searchTree;

recoverTree(node)