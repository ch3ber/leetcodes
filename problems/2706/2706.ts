export function buyChoco(prices: number[], money: number): number {
  let bought = 0
  prices.sort((a, b) => a - b)

  let chocos = 0
  const MAX_CHOCOS = 2
  for (let i = 0; i < prices.length; i++) {
    if (chocos === MAX_CHOCOS) break

    const price = prices[i]
    if (price < money && bought + price <= money) {
      bought += price
      chocos += 1
    }
  }

  if (chocos < MAX_CHOCOS) return money
  return money - bought
}
