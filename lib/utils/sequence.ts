import {randInt} from '../math/core'


export function pickRandom<T>(arr: T[]): T {
  return arr[randInt(arr.length)]
}


export function doTimes(
  count: number,
  fn: (i: number) => void
): void {
  for (let i = 0; i < count; i++) { fn(i) }
}


export function yieldTimes<T>(
  count: number,
  fn: (i: number) => T
): T[] {
  const arr: T[] = []
  doTimes(count, i => arr.push(fn(i)))
  return arr
}
