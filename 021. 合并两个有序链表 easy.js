/**
 * Created by doit on 2019/3/22.
 */

/**将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 * 示例：
 *
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 *
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**不知道如何复制一个链表结构
 * 暂时先这么提交吧
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null && l2 === null) return null;
    let c1 = l1;
    let c2 = l2;
    let res = [];

    while (c1 !== null || c2 !== null) {
        if (c1 !== null && c2 !== null) {
            if (c1.val < c2.val) {
                res.push(c1.val);
                c1 = c1.next;
            } else {
                res.push(c2.val);
                c2 = c2.next;
            }
        } else {
            if (c1 === null) {
                res.push(c2.val);
                c2 = c2.next;
            } else if (c2 === null) {
                res.push(c1.val);
                c1 = c1.next;
            }
        }
    }
    return res.reduceRight((accumulator, current, index) => {
        return accumulator = {
            val: current,
            next: index === res.length - 1 ? null : accumulator
        };
    }, {});
};

mergeTwoLists = (l1, l2) => {
    let nodeList = new ListNode(null);
    let temp = nodeList;
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            temp.next = l1;
            l1 = l1.next;
        } else {
            temp.next = l2;
            l2 = l2.next;
        }
        temp = temp.next;
    }

    temp.next = l1 || l2;

    return nodeList.next;
}

let l1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    }
};

let l2 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null
        }
    }
};

console.log(mergeTwoLists(l1, l2));
