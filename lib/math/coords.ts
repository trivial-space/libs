import {length, Vec} from './vectors';


export function cartesianToPolar2D(v: Vec): number[] {
  return [length(v), Math.atan2(v[1], v[0])]
}


export function polarToCartesian2D(coords: Vec): number[] {
  let r = coords[0], phi = coords[1]
  return [r * Math.cos(phi), r * Math.sin(phi)]
}
