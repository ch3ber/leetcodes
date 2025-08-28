/**
 * Write code test that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

You may assume the array is the output of JSON.parse.


Example 1:

Input: nums = [null, {}, 3]
Output: 3
Explanation: Calling nums.last() should return the last element: 3.
Example 2:

Input: nums = []
Output: -1
Explanation: Because there are no elements, return -1.
 

Constraints:

arr is a valid JSON array
0 <= arr.length <= 1000
 */

import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'

describe('2619', () => {
  beforeAll(async () => {
    // Aseguramos un entorno limpio por si alguna otra prueba lo añadió
    // (no es estrictamente necesario, pero es buena práctica en suites grandes)
    if ('last' in Array.prototype) {
      delete (Array.prototype as any).last
    }
    // @ts-expect-error
    await import('./main') // carga el polyfill (efecto secundario)
  })

  afterAll(() => {
    // Limpieza: evitar fugas a otras pruebas
    // @ts-expect-error: propiedad dinámica
    delete Array.prototype.last
    vi.resetModules()
  })

  it('should return a -1 if no are elements in the array', () => {
    const arr = []
    expect(arr.last()).toBe(-1)
  })

  it('should return the number 3 because is the last element', () => {
    const arr = [null, {}, 3]
    expect(arr.last()).toBe(3)
  })
})
