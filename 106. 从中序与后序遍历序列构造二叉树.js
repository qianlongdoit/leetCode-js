/**
 * Created by admin on 2018/10/17.
 */

/**根据一棵树的中序遍历与后序遍历构造二叉树。
 * 注意:
 * 你可以假设树中没有重复的元素。
 * 例如，给出
 * 中序遍历 inorder = [9,3,15,20,7]
 * 后序遍历 postorder = [9,15,7,20,3]
 * 返回如下的二叉树：
 * 3
 * / \
 * 9  20
 * /  \
 * 15   7
 *
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (!inorder.length || !postorder.length) return null;

    let root = postorder[postorder.length - 1];
    let node = new TreeNode(root);

    let i = inorder.indexOf(node.val);

    let inorderL = inorder.slice(0, i);
    let inorderR = inorder.slice(i + 1);
    let postorderL = postorder.slice(0, i);
    let postorderR = postorder.slice(i);
    postorderR.pop();

    node.left = buildTree(inorderL, postorderL);
    node.right = buildTree(inorderR, postorderR);

    return node;
};

// console.log(buildTree([8, 4, 9, 2, 10, 5, 11, 1, 12, 6, 13, 3, 14, 7, 15], [8, 9, 4, 10, 11, 5, 2, 12, 13, 6, 14, 15, 7, 3, 1]));
console.log(buildTree([4, 2, 5, 1, 6, 3, 7], [4, 5, 2, 6, 7, 3, 1]));