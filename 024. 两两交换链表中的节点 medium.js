/**
 * Created by doit on 2019/4/6.
 */

/**给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 *
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 *
 * 示例:
 *
 * 给定 1->2->3->4, 你应该返回 2->1->4->3.
 *
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**就这么简单一次就accept了？
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (head === null) return null;
    let current = head;

    while (current !== null) {
        // console.log(current.val);
        let next = current.next;
        if (next !== null) {
            [current.val, next.val] = [next.val, current.val];
            current = current.next;
        }
        // console.log(current);
        current = current.next;
    }

    // console.log(JSON.stringify(head), '-----');
    return head;
};


let l1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
};

swapPairs(l1)