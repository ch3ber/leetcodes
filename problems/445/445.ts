import { ListNode } from './types'

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const l1Values: number[] = []
  const l2Values: number[] = []

  while (l1) {
    l1Values.push(l1.val)
    l1 = l1.next
  }

  while (l2) {
    l2Values.push(l2.val)
    l2 = l2.next
  }

  let carry: number = 0

  let i: number = l1Values.length - 1
  let j: number = l2Values.length - 1

  const ans: number[] = []

  while (i >= 0 || j >= 0 || carry !== 0) {
    const val1 = l1Values[i] ?? 0
    const val2 = l2Values[j] ?? 0
    const sum = val1 + val2 + carry
    carry = Math.floor(sum / 10)
    ans.push(sum % 10)
    i--
    j--
  }

  let head: ListNode | null = null
  for (const el of ans) {
    head = new ListNode(el, head)   
  }

  return head
}
