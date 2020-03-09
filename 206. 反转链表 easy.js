/**
 * Created by doit on 2020/3/9.
 */

/***反转一个单链表。
 * 示例:
 *
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head === null) return head;

    let next = null;
    let res = head;

    while (head !== null) {
        let temp = head;

        res = temp;
        head = head.next;

        temp.next = next;
        next = res;
    }
    console.log(JSON.stringify(res));
    return res;
};

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: null
                }
            }
        }
    }
}

reverseList(list);