/**
 * Created by doit on 2019/3/24.
 */

/**给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 *
 * 示例：
 *
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 *
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 * 说明：
 *
 * 给定的 n 保证是有效的。
 *
 * 进阶：
 *
 * 你能尝试使用一趟扫描实现吗？
 */


 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

/**看提示一眼就明白了。。。。
 * 双指针
 * 倒数n，那么2个指针就相隔距离为n
 * 快指针为null时，慢指针就是要删除的点
 *
 * 然后就是如何复制一个链表结构的数据
 *
 * 看了评论发现，如果可以在原链表上修改的话，可以这么写 slow.next = slow.next.next;
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let fast = head;
    let slow = head;
    let d = 0;
    let res = new ListNode(null);
    let temp = res;

    while (fast !== null) {
        fast = fast.next;

        if (d < n) {
            d++;
        } else {
            temp.next = slow;
            temp = temp.next;
            slow = slow.next;
        }
    }
    temp.next = slow.next;

    return res.next;
};

let node = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
};
removeNthFromEnd(node, 2)