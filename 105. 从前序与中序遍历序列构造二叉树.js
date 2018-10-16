/**
 * Created by admin on 2018/10/14.
 */

/**根据一棵树的前序遍历与中序遍历构造二叉树。
 * 注意:
 * 你可以假设树中没有重复的元素。
 * 例如，给出
 * 前序遍历 preorder = [3,9,20,15,7]
 * 中序遍历 inorder = [9,3,15,20,7]
 * 返回如下的二叉树：
 *        3
 *       / \
 *      9  20
 *        /  \
 *       15   7
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**充分利用数组中无重复元素的条件
 * 先序：中 - 左 - 右
 * 中序：左 - 中 - 右
 *
 * 由于元素不重复，先序遍历第一个元素即为根节点，
 * 所以我们能找到中序遍历中根节点的位置，其左边为根的左节点，右边为根的右节点
 * 遍历下去，当前元素没有左右节点的时候，说明已经遍历结束
 *
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // let root = restoreTree(preorder, inorder);

    function restoreTree(preorder, inorder) {
        if (!preorder.length || !inorder.length) {
            return null;
        }

        let node = new TreeNode(preorder[0]);

        let i = inorder.indexOf(node.val);
        let preorderL = preorder.slice(1, i + 1);
        let preorderR = preorder.slice(i + 1);
        let inorderL = inorder.slice(0, i);
        let inorderR = inorder.slice(i + 1);

        node.left = restoreTree(preorderL, inorderL);
        node.right = restoreTree(preorderR, inorderR, node.right);

        return node;
    }

    return restoreTree(preorder, inorder);
};

function restoreTree(preorder, inorder, root) {
    if (!preorder.length || !inorder.length) {
        root.left = null;
        return root.right = null;
    }

    root.val = preorder[0];
    let i = inorder.indexOf(root.val);
    // console.log(root)

    // debugger
    let preorderL = preorder.slice(1, i + 1);
    let preorderR = preorder.slice(i + 1);
    let inorderL = inorder.slice(0, i);
    let inorderR = inorder.slice(i + 1);
// debugger
    root.left = {};
    root.right = {};
    restoreTree(preorderL, inorderL, root.left);
    restoreTree(preorderR, inorderR, root.right);

}

// var buildTree = function(preorder, inorder) {
//     if(!preorder || !inorder) {
//         return null;
//     }
//
//     if(preorder.length !== inorder.length) {
//         return null;
//     }
//
//     return generate(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
// };


var generate = function(preorder, pl, pr, inorder, il, ir) {
    if(pl > pr || il > ir) {
        return null
    }


    var root = new TreeNode(preorder[pl]);
    var midIndex = -1;

    for(var i = 0; i < inorder.length; i++) {
        if(inorder[i] === preorder[pl]) {
            midIndex = i;
            break;
        }
    }

    if(midIndex === -1) {
        return null;
    }

    var left = generate(preorder, pl + 1, pl + (midIndex - il), inorder, il, midIndex - 1);
    var right = generate(preorder, pl + (midIndex - il) + 1, pr, inorder, midIndex + 1, ir);

    root.left = left;
    root.right = right;

    return root;
}

var root = {};
// restoreTree([1,2,4,5,3,6,7], [4,2,5,1,6,3,7], root)
console.log(buildTree([1, 2, 4, 5, 3, 6, 7], [4, 2, 5, 1, 6, 3, 7]));
console.log(root);
console.log(null);