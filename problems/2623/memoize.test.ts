import { describe, expect, it, vi } from 'vitest'
import { memoize } from './memoize'

describe('2623. Memoize', () => {
  const sum = (a: number, b: number) => a + b

  it('sum fn sould be [call, call, getCallCount, call, getCallCount]', () => {
    const mockSum = vi.fn(sum)
    const memoizedSum = memoize(mockSum)
    expect(memoizedSum(1, 2)).toBe(3)
    expect(memoizedSum(1, 2)).toBe(3)
    expect(mockSum.mock.calls.length).toBe(1)
    expect(memoizedSum(3, 4)).toBe(7)
    expect(mockSum.mock.calls.length).toBe(2)
  })
})
