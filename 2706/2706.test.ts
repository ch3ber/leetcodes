import { describe, expect, it, test } from 'vitest'
import { buyChoco } from './2706'

describe('Leetcode 2706', () => {
  const data = [
    {
      prices: [1, 2, 2],
      money: 3,
      expected: 0,
    },
    {
      prices: [3, 2, 3],
      money: 3,
      expected: 3,
    },
    {
      prices: [69, 91, 78, 19, 40, 13],
      money: 94,
      expected: 62,
    },
  ]

  it('should return a number', () => {
    const value = buyChoco(data[0].prices, data[0].money)
    expect(typeof value).toBe('number')
  })

  it('should return a 0 money if you buy exactly chocos', () => {
    const value = buyChoco(data[0].prices, data[0].money)
    expect(value).toBe(data[0].expected)
  })

  it('should return your debit if you buy two chocos', () => {
    const value = buyChoco(data[1].prices, data[1].money)
    expect(value).toBe(data[1].expected)
  })

  it('should return the correct remaining money', () => {
    data.forEach(({ prices, money, expected }) => {
      const result = buyChoco(prices, money)
      expect(result).toBe(expected)
    })
  })
})
