/**
 * Created by doit on 2019/4/7.
 */

/**给出一个链表，每 k 个节点一组进行翻转，并返回翻转后的链表。
 *
 * k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，
 * 那么将最后剩余节点保持原有顺序。
 *
 * 示例 :
 *
 * 给定这个链表：1->2->3->4->5
 *
 * 当 k = 2 时，应当返回: 2->1->4->3->5
 *
 * 当 k = 3 时，应当返回: 3->2->1->4->5
 *
 * 说明 :
 *
 * 你的算法只能使用常数的额外空间。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 *
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**题目有限制，其一为常数空间
 * 其二是要真正的交换节点，而不是单纯的改编值， 024貌似我就没按要求来
 * 难怪觉得为何如此简单
 *
 * 逃了的课终究还是得补回来
 * 不会的点在于如何修改链表，使其next指针指向其父节点
 *
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let count = 0;
    let pre = null;
    let post = null;
    let cur = head;

    while (cur !== null && count < k) {
        cur = cur.next;
        count++;
    }

    if (count !== k) {
        return head;
    }

    cur = head;

    //  将链表的指针修改为指向其父节点
    while (cur !== null && count > 0) {
        post = cur.next;
        cur.next = pre;
        pre = cur;
        cur = post;
        count--;
    }

    if (post !== null) {
        head.next = reverseKGroup(post, k);
    }

    return pre;
};

