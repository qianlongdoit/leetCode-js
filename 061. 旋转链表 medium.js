/**
 * Created by doit on 2019/4/13.
 */

/**给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
 *
 * 示例 1:
 *
 * 输入: 1->2->3->4->5->NULL, k = 2
 * 输出: 4->5->1->2->3->NULL
 * 解释:
 * 向右旋转 1 步: 5->1->2->3->4->NULL
 * 向右旋转 2 步: 4->5->1->2->3->NULL
 * 示例 2:
 *
 * 输入: 0->1->2->NULL, k = 4
 * 输出: 2->0->1->NULL
 * 解释:
 * 向右旋转 1 步: 2->0->1->NULL
 * 向右旋转 2 步: 1->2->0->NULL
 * 向右旋转 3 步: 0->1->2->NULL
 * 向右旋转 4 步: 2->0->1->NULL
 *
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**如果k小于链表的长度，那么就是倒数k个元素挪到链表头部
 * 如果k大于链表长度，那么就是  k = k % len
 * 然后和上面一样
 *
 * 注意当k为len的整数倍的时候的特殊情况
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head === null || !k) return head;
    let fast = head;
    let slow = head;
    let len = 1;
    let distance = 0;

    while (fast.next !== null || distance !== k) {
        if (fast.next !== null) {
            if (k > len) {
                len++;
            }
        } else {
            if (k > len) {
                k = k % len;
                distance = 0;
                if (k === 0) return head;
            }
            if (k === len) return head;
            fast = head;
            slow = head;
        }

        fast = fast.next;
        if (distance === k) {
            slow = slow.next;
        } else {
            distance++;
        }
    }

    let temp = slow.next;
    slow.next = null;
    fast.next = head;

    // console.log(JSON.stringify(temp));
    return temp;
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
                    next: {
                        val: 6,
                        next: {
                            val: 7,
                            next: null
                        }
                    }
                }
            }
        }
    }
};

// l1 = {
//     val: 1,
//     next: null
// }

rotateRight(l1, 2)

