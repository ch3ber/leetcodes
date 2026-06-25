import { describe, it, expect } from 'vitest'
import { lengthOfLongestSubstring } from './3'

describe('Leetcode 3', () => {
  it('should return 3 for "abcabcbb"', () => {
    const result = lengthOfLongestSubstring('abcabcbb')
    expect(result).toBe(3)
  })

  it('should return 1 for "bbbbb"', () => {
    const result = lengthOfLongestSubstring('bbbbb')
    expect(result).toBe(1)
  })

  it('should return 3 for "pwwkew"', () => {
    const result = lengthOfLongestSubstring('pwwkew')
    expect(result).toBe(3)
  })
})
