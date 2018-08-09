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
            console.log(head);

            if (head.right !== null) {
                stack.push(head.right)
            }
            if (head.left !== null) {
                stack.push(head.left)
            }
        }
    }
}


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

throwCoin(4);