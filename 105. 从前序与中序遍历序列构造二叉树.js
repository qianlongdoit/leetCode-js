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
    if (!preorder.length || !inorder.length) {
        return null;
    }

    let node = new TreeNode(preorder[0]);

    let i = inorder.indexOf(node.val);
    let preorderL = preorder.slice(1, i + 1);
    let preorderR = preorder.slice(i + 1);
    let inorderL = inorder.slice(0, i);
    let inorderR = inorder.slice(i + 1);

    node.left = buildTree(preorderL, inorderL);
    node.right = buildTree(preorderR, inorderR);

    return node;
};

console.log(buildTree([1, 2, 4, 5, 3, 6, 7], [4, 2, 5, 1, 6, 3, 7]));