import { describe, it, expect } from 'vitest'
import { recoverFromPreorder, TreeNode } from './main'

// Helper function to convert tree to array representation
function treeToArray(root: TreeNode | null): (number | null)[] {
  if (!root) return []

  const result: (number | null)[] = []
  const queue: (TreeNode | null)[] = [root]

  while (queue.length > 0) {
    const node = queue.shift()
    if (node) {
      result.push(node.val)
      queue.push(node.left)
      queue.push(node.right)
    } else {
      result.push(null)
    }
  }

  // Remove trailing nulls
  while (result[result.length - 1] === null) {
    result.pop()
  }

  return result
}

describe.skip('recoverFromPreorder', () => {
  it('should return null for empty string', () => {
    expect(recoverFromPreorder('')).toBeNull()
  })

  it('should handle single node', () => {
    const result = recoverFromPreorder('1')
    expect(result).not.toBeNull()
    expect(result?.val).toBe(1)
    expect(result?.left).toBeNull()
    expect(result?.right).toBeNull()
  })

  it('should handle simple tree with left child', () => {
    const result = recoverFromPreorder('1-2')
    expect(result).not.toBeNull()
    expect(result?.val).toBe(1)
    expect(result?.left?.val).toBe(2)
    expect(result?.right).toBeUndefined()
  })

  it('should handle simple tree with right child', () => {
    const result = recoverFromPreorder('1--2')
    expect(result).not.toBeNull()
    expect(result?.val).toBe(1)
    expect(result?.left).toBeNull()
    expect(result?.right?.val).toBe(2)
  })

  it('should handle complex tree with multiple levels', () => {
    const result = recoverFromPreorder('1-2--3--4-5--6--7')
    expect(result).not.toBeNull()
    expect(treeToArray(result)).toEqual([1, 2, 5, 3, 4, 6, 7])
  })

  it('should handle tree with null nodes', () => {
    const result = recoverFromPreorder('1-2--3---4-5--6---7')
    expect(result).not.toBeNull()
    expect(treeToArray(result)).toEqual([1, 2, 5, 3, null, 6, null, 4, null, 7])
  })

  it('should handle tree with larger numbers', () => {
    const result = recoverFromPreorder('1-401--349---90--88')
    expect(result).not.toBeNull()
    expect(treeToArray(result)).toEqual([1, 401, null, 349, 88, 90])
  })

  it('should create a specific tree structure', () => {
    const result = recoverFromPreorder('1-2--3--4-5--6--7')
    const expectedTree = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(5, new TreeNode(6), new TreeNode(7)),
    )
    expect(treeToArray(result)).toEqual(treeToArray(expectedTree))
  })
})
