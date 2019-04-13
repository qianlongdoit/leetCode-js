/**
 * Created by doit on 2019/4/12.
 */

/**给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 *
 * 示例 1:
 *
 * 输入: 1->1->2
 * 输出: 1->2
 * 示例 2:
 *
 * 输入: 1->1->2->3->3
 * 输出: 1->2->3
 *
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**没有意识到这是一个排序的链表。。。
 * 算了不改了，就这样吧
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head === null) return head;
    let arr = [];

    let current = head;
    let pre = head;
    while (current !== null) {
        if (!arr.includes(current.val)) {
            arr.push(current.val);
            pre = current;
            current = current.next;
        } else {
            pre.next = current.next ? current.next : null;
            current = current.next;
        }
    }

    return head;
};

deleteDuplicates = function(head) {
    if (head === null) return head;
    let arr = [];

    let current = head;
    arr.push(head.val);
    while (current.next !== null) {
        if (!arr.includes(current.next.val)) {
            arr.push(current.next.val);
            current = current.next;
        } else {
            current.next = current.next.next;
        }
    }

    return head;
};

let l1 = {
    val: 2,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 2,
                next: {
                    val: 1,
                    next: null
                }
            }
        }
    }
};

deleteDuplicates(l1);
