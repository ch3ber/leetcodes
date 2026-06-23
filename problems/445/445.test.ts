import { describe, expect, it } from 'vitest'
import { addTwoNumbers } from './445'
import { ListNode } from './types'
import { data } from './mocs'

describe('Leetcode 445', () => {
  it('should return a ListNode', () => {
    const ans = addTwoNumbers(data[0].l1, data[0].l2)
    expect(ans).toBeInstanceOf(ListNode)
  })

  it.skip('should return a ListNode with null values', () => {
    const value = addTwoNumbers(null, null)
    expect(value).toBeInstanceOf(ListNode)
  })

  it('should return ans [7,8,0,7]', () => {
    let ans = addTwoNumbers(data[0].l1, data[0].l2)
    let expectedValues: ListNode = data[0].expected

    while (ans !== null) {
      expect(ans?.val).toBe(expectedValues?.val)
      ans = ans.next
      expectedValues = expectedValues.next
    }
  })
})
