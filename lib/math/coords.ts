import {length, Vec} from './vectors';


export function cartesianToPolar2D(v: Vec): Vec {
  return [ length(v), Math.atan2(v[1], v[0])]
}


export function polarToCartesian2D([r, phi]: Vec): Vec {
  return [r * Math.cos(phi), r * Math.sin(phi)]
}
