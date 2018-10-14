/**
 * Created by admin on 2018/8/9.
 */

//  先序遍历
function binaryTree(head) {
    if (head !== null) {
        var stack = [];
        stack.push(head);

        while (stack.length) {
            head = stack.pop();
            console.log(head.val);

            if (head.right !== null) {
                stack.push(head.right)
            }
            if (head.left !== null) {
                stack.push(head.left)
            }
        }
    }
}


/**二叉树中序遍历 左-根-右
 * 遍历逻辑
 * 如果当前节点不为空，则把当前节点放入栈
 * 入栈的时候，节点向左移动
 * 出栈的时候，节点向右移动
 * 打印行为在出栈的时候进行
 * @param root
 */
function inorderTraversal(root) {
    if (root === null) return;

    let stack = [];
    let head = root;

    while (stack.length || head !== null) {
        if (head !== null) {
            stack.push(head);
            head = head.left;
        } else {
            head = stack.pop();
            console.log(head.val);
            head = head.right;
        }
    }
}

/**二叉树的后序遍历  左-右-根
 * 先序遍历是中左右，改进方法如下
 * 可以实现中右左，将递归中先序遍历，先将左压入栈，再将右压入栈
 * 中右左的逆序就是左右中，即后序遍历
 * 如此可以知道只要将打印的时候存起来，
 * 遍历完成后打印，就是后序遍历了
 * @param root
 */
function posOrderTraversal(root) {
    if (root === null) return;

    let s1 = [root];
    let s2 = [];
    let head = root;

    while (s1.length) {
        head = s1.pop();

        s2.push(head);

        if (head.left !== null) {
            s1.push(head.left)
        }
        if (head.right !== null) {
            s1.push(head.right)
        }
    }

    while (s2.length) {
        console.log(s2.pop().val)
    }
}

let nodeTree = {
    val: -10,
    left: {
        val: 9,
        left: {
            val: 5,
            left: null,
            right: null
        },
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: {
                val: 0,
                left: null,
                right: null
            }
        }
    }
};
// nodeTree = {
//         val: 1,
//         left: {
//             val: 2,
//             left: {
//                 val: 4,
//                 left: null,
//                 right: null
//             },
//             right: {
//                 val: 5,
//                 left: null,
//                 right: null
//             }
//         },
//         right: {
//             val: 3,
//             left: {
//                 val: 6,
//                 left: null,
//                 right: null
//             },
//             right: {
//                 val: 7,
//                 left: null,
//                 right: null
//             }
//         }
//     }

// posOrderTraversal(nodeTree)

// const node = require('./nodeTree').tree2;
// binaryTree(node)

/**打印出抛10次硬币的全部可能
 * 0为反面，1为正面
 *
 * 使用DFS方式完成
 */

function throwCoin(n) {
    var result = [];
    var temp = [];

    for (var i = 0; i < 2; i++) {
        var stack = [];
        stack.push(i);

        while (stack.length) {
            if (temp.length === n) {
                result.push(temp.join(''));
                while (temp.length) {
                    if (temp[temp.length - 1] === 0) {
                        temp.pop();
                        break;
                    } else {
                        temp.pop();
                    }
                }
            }

            var head = stack.pop();
            temp.push(head);

            if (temp.length < n) {
                stack.push(1)
            }
            if (temp.length < n) {
                stack.push(0)
            }
        }
    }

    result.push(temp.join(''));
    console.log(result);
    return result;
}

// throwCoin(4);