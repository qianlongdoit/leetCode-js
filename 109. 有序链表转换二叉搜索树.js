/**
 * Created by admin on 2019/1/12.
 */

/**给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**和108一模一样，只不过把数组改成了有序链表
 * js没有链表的概念，所以
 * 将链表转为数组就可以了。。。
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let nums = [];

    while (head !== null) {
        nums.push(head.val);
        head = head.next;
    }

    const buildTree = (arr) => {
        if (!arr.length) return null;
        let mid = arr.length >> 1;
        let left = arr.slice(0, mid);
        let right = arr.slice(mid + 1);

        let node = new TreeNode(arr[mid]);
        node.left = buildTree(left);
        node.right = buildTree(right);
        return node;
    };

    let node = buildTree([-10,-3,0,5,9]);
    return buildTree(nums)
};
