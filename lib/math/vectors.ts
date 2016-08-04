export type Vec = number[]


export function add (vec1: Vec, vec2: Vec): Vec {
  const results = []
  for (let i in vec1) {
    results.push(vec1[i] + vec2[i])
  }
  return results
}


export function addScalar (vec: Vec, scalar: number): Vec {
  const results = []
  for (let i in vec) {
    results.push(vec[i] + scalar)
  }
  return results
}


export function sub (vec1: Vec, vec2: Vec): Vec {
  const results = []
  for (let i in vec1) {
    results.push(vec1[i] - vec2[i])
  }
  return results
}


export function subScalar (vec: Vec, scalar: number): Vec {
  const results = []
  for (let i in vec) {
    results.push(vec[i] - scalar)
  }
  return results
}


export function mul (vec: Vec, scalar: number): Vec {
  const results = []
  for (let i in vec) {
    results.push(vec[i] * scalar)
  }
  return results
}


export function div (vec: Vec, scalar: number): Vec {
  if (scalar) {
    const results = []
    for (let i in vec) {
      results.push(vec[i] / scalar)
    }
    return results
  }
}


export function length (vec: Vec): number {
  let sum = 0
  for (let i in vec) {
    const val = vec[i]
    sum += val * val
  }
  return Math.sqrt(sum)
}


export function normalize (vec: Vec): Vec {
  return div(vec, length(vec))
}


export function limit (vec: Vec, maxLenght: number): Vec {
  if (maxLenght < length(vec)) {
    return mul(normalize(vec), maxLenght)
  } else {
    return vec
  }
}


export function isEqual (vec1: Vec, vec2: Vec): boolean {
  if (vec1.length != vec2.length) return false
  for (let i in vec1){
    if (vec1[i] !== vec2[i]) {
      return false
    }
  }
  return true
}
