export const DEG_TO_RAD_FACTOR = Math.PI / 180


export function sign(num: number): number {
  if (num > 0) {
    return 1
  } else if (num < 0) {
    return -1
  } else {
    return 0
  }
}


export function lerp(start: number, end: number, step: number): number {
  return start + step * (end - start)
}


export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(value, max))
}


export function randInt(int: number): number {
  return Math.floor(Math.random() * int)
}


export function randIntInRange(from: number, to: number): number {
  return randInt(to - from) + from
}


export function normalRand(): number {
  return (Math.random() * 2 - 1) +
         (Math.random() * 2 - 1) +
         (Math.random() * 2 - 1)
}

export function degToRad (degrees: number): number {
  return degrees * DEG_TO_RAD_FACTOR
}
