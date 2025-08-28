export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

export function recoverFromPreorder(
  traversal: string,
  depth: number = 0,
  tree: TreeNode = new TreeNode(),
): TreeNode | null {
  if (traversal === '') return null

  if (depth === 0) {
    tree.val = Number(traversal[depth])
    depth += 1
    return recoverFromPreorder(traversal, depth, tree)
  }

  if (traversal[depth] === '-'.repeat(depth)) {
    depth += 1
    return recoverFromPreorder(traversal, depth, tree)
  }

  if (traversal[depth] !== '-') {
    tree.val = Number(traversal[depth])
    tree.left = new TreeNode()
    tree.right = new TreeNode()
    depth = 0
    return recoverFromPreorder(traversal, depth, tree)
  }

  return tree
}
