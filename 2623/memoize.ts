type Fn = (...params: number[]) => number

export function memoize(fn: Fn): Fn {
  const cache = new Map()

  return function (...args) {
    const argsString = JSON.stringify(args)
    if (cache.has(argsString)) return cache.get(argsString)

    const result = fn(...args)
    cache.set(argsString, result)
    return result
  }
}
