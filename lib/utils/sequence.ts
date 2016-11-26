import {randInt} from '../math/core'


export function pick<T>(arr: T[]): T {
  return arr[randInt(arr.length)]
}


export function doTimes(
  count: number,
  fn: (i: number) => void
): void {
  for (let j = 0; j < count; j++) { fn(j) }
}


export function yieldTimes<T>(
  count: number,
  fn: (i: number) => T
): T[] {
  const arr: T[] = []
  doTimes(count, i => arr.push(fn(i)))
  return arr
}
