import { ListNode } from './types'

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let carry = 0
  const dummyHead = new ListNode()
  let pointer = dummyHead

  while (l1 !== null || l2 !== null || carry !== 0) {
    const val1 = l1?.val ?? 0
    const val2 = l2?.val ?? 0
    const sum = val1 + val2 + carry
    carry = Math.floor(sum / 10)
    pointer.next = new ListNode(sum % 10)
    pointer = pointer.next
    l1 = l1?.next ?? null
    l2 = l2?.next ?? null
  }

  return dummyHead.next
}
