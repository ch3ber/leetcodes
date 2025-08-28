export function buyChoco(prices: number[], money: number): number {
  prices.sort((a, b) => a - b)
  const firstTwoChocos = prices[0] + prices[1]
  return firstTwoChocos <= money ? money - firstTwoChocos : money
}
