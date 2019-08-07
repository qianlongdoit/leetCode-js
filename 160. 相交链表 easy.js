/**
 * Created by doit on 2019/8/4.
 */

/**编写一个程序，找到两个单链表相交的起始节点。
 * 如下面的两个链表：
 *
 * 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
 * 输出：Reference of the node with value = 8
 * 输入解释：相交节点的值为 8 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，
 * 链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
 *
 * 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
 * 输出：Reference of the node with value = 8
 * 输入解释：相交节点的值为 8 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A
 * 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
 *
 * 如果两个链表没有交点，返回 null.
 * 在返回结果后，两个链表仍须保持原有的结构。
 * 可假定整个链表结构中没有循环。
 * 程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**按题意，如果两个链表相交，那么可以设计如下方法
 * 链表a长度L1,链表b长度L2，两者之差为diff
 * 让长的先移动diff，然后两个开始比较是否相同，判断相交
 *
 * 需要注意的是，不能单纯的判断值相等，要判断节点是否相等。
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let L1 = 0;
    let L2 = 0;
    let c1 = headA;
    let c2 = headB;

    while (c1) {
        L1++;
        c1 = c1.next;
    }
    while (c2) {
        L2++;
        c2 = c2.next;
    }

    let diff = 0;
    let longer = L1 > L2 ? headA : headB;
    let shorter = L1 > L2 ? headB : headA;
    c1 = longer;
    c2 = shorter;
    let intersectVal = null;
    while (c1) {
        if (diff < Math.abs(L1 - L2)) {
            diff++;
            c1 = c1.next;
            continue;
        }
        if (c1 !== c2) {
            intersectVal = null;
        } else {
            if (!intersectVal) {
                intersectVal = c1;
            }
        }
        c1 = c1.next;
        c2 = c2.next;

    }

    return intersectVal;
};


let samepart = {
    val: 8,
    next: {
        val: 4,
        next: {
            val: 5,
            next: null
        }
    }
}
let linkA = {
    val: 4,
    next: {
        val: 1,
        next: samepart
    }
}
let linkB = {
    val: 5,
    next: {
        val: 0,
        next: {
            val: 1,
            next: samepart
        }
    }
}

console.log(getIntersectionNode(linkA, linkB));





















