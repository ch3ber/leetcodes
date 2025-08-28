export function buyChoco(prices: number[], money: number): number {
  let sum = 0
  prices.sort((a, b) => a - b)
  if (prices[0] > money) return money

  let chocos = 0
  for (let i = 0; i < prices.length; i++) {
    if (i > 2) break

    const item = prices[i]
    if (item < money && sum + item <= money) {
      sum += item
      chocos += 1
    }
  }

  if (chocos < 2) return money
  return money - sum
}
