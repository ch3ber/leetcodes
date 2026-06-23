import { ListNode } from './types'

export const data = [
  {
    l1: new ListNode(7, new ListNode(2, new ListNode(4, new ListNode(3)))),
    l2: new ListNode(5, new ListNode(6, new ListNode(4))),
    expected: new ListNode(7, new ListNode(8, new ListNode(0, new ListNode(7)))),
  },
  {
    l1: new ListNode(2, new ListNode(4, new ListNode(3))),
    l2: new ListNode(5, new ListNode(6, new ListNode(4))),
    expected: new ListNode(8, new ListNode(0, new ListNode(7))),
  },
  {
    l1: new ListNode(0),
    l2: new ListNode(0),
    expected: new ListNode(0),
  },
  {
    l1: new ListNode(1),
    l2: new ListNode(9, new ListNode(9, new ListNode(9))),
    expected: new ListNode(1, new ListNode(0, new ListNode(0, new ListNode(0)))),
  },
]
