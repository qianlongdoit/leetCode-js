/**
 * Created by doit on 2019/3/12.
 */

/**给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 *
 *如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 *
 *您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 *示例：
 *
 *输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 *输出：7 -> 0 -> 8
 *原因：342 + 465 = 807
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
   this.val = val;
   this.next = null;
}

/**直观思维：字符串拼接 -> 转数字 -> 相加 -> 转链表 ->返回
 * 需要注意的点是，过大的值会溢出
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    let getNum = (listNode) => {
        if (listNode === null) return '';
        let cur = listNode;
        let num = [];

        while (cur) {
            num.push(cur.val);
            cur = cur.next;
        }
        return num;
    };

    let num1 = getNum(l1);
    let num2 = getNum(l2);

    let len = Math.max(num1.length, num2.length);
    let sum = Array(len).fill(0);
    for (let i = 0; i < len; i++) {
        let a = i < num1.length ? num1[i] : 0;
        let b = i < num2.length ? num2[i] : 0;
        sum[i] = a + b + sum[i];

        if (sum[i] >= 10) {
            sum[i] = sum[i] % 10;
            sum[i + 1] = 1;
        }
    }

    let res;
    for (let i = sum.length - 1; i >= 0 ; i--) {
        if (res === undefined) {
            res = {
                val: sum[i],
                next: null
            };
        } else {
            res = {
                val: sum[i],
                next: res
            };
        }
    }

    return res;
};

let l1 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
            next: null
        }
    }
};
let l2 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
            next: null
        }
    }
};

console.log(JSON.stringify(addTwoNumbers(l1, l2)));