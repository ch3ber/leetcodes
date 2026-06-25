export function lengthOfLongestSubstring(s: string): number {
  let charIndexs = new Map<string, number>()
  let maxLen: number = 0
  let left: number = 0
  let right: number = 0
  let char: string

  for (let i = 0; i < s.length; i++) {
    char = s[i]

    if (charIndexs.has(char) && charIndexs.get(char) >= left) {
      left = charIndexs.get(char) + 1
    }

    right = i
    charIndexs.set(char, right)

    if (maxLen < (right - left + 1)) {
      maxLen = right - left + 1
    }
  }

  return maxLen
}
