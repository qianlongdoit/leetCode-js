/**
 * Created by doit on 2019/4/13.
 */

/**给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。
 *
 * 示例 1:
 *
 * 输入: 1->2->3->3->4->4->5
 * 输出: 1->2->5
 * 示例 2:
 *
 * 输入: 1->1->1->2->3
 * 输出: 2->3
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**删除重复数字的节点，意思是，只要这个数字重复了
 * 那么所有包含这个数字的节点都不要了
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (head === null) return head;

    let cur = head;

    //  当头节点的值与next节点的值重复的时候，比如 1->1->2->2->3->3的情况
    while (cur !== null && cur.next !== null && cur.val === cur.next.val) {
        let next = cur.next;
        while (next !== null && cur.val === next.val) {
            next = next.next;
        }
        cur = next;
    }
    head = cur;

    //  排除所有头结点与next节点值重复的情况，然后就只剩下当前节点与next节点的值不相等的情况了
    while (cur && cur.next !== null) {
        let next = cur.next;
        if (next.next) {
            if (cur.next.val !== next.next.val) {
                cur = cur.next;
            } else {
                while (next.next && cur.next.val === next.next.val) {
                    next = next.next;
                }
                cur.next = next.next;
            }
        } else {
            cur = cur.next;
        }
        // console.log('cur: ', JSON.stringify(cur));
        // console.log('head: ', JSON.stringify(head));
    }
    console.log(JSON.stringify(head));
    return head;
};

let l1 = {
    val: 2,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 3,
                next: {
                    val: 4,
                    next: {
                        val: 4,
                        next: {
                            val: 5,
                            next: null
                        }
                    }
                }
            }
        }
    }
};
let l2 = {
    val: 2,
    next: {
        val: 2,
        next: null
    }
};

deleteDuplicates(l1)