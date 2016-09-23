import {Entity, Graph, Process, Procedure, Meta, Ports, PortType} from "./types"


// ===== types =====

export interface EntitySpec {
  value?: any
  stream?: ProcessSpec
  json?: string
  isEvent?: boolean
  meta?: Meta
}


export interface ProcessSpec {
  do: Procedure
  vals?: {[portId: string]: string}
  autostart?: boolean
  async?: boolean
  meta?: Meta
}


export type Spec = { [id: string]: EntitySpec }


// ===== Api =====

const processNameSuffix = "-stream"

const portTypeMap = {
  H: "HOT",
  C: "COLD",
  A: "ACCUMULATOR"
}


function parseValsString(str: string) {
  const [type, eid] = str.split(' ')

  const portType: PortType = portTypeMap[type] as PortType

  return { type: portType, eid }
}


function mergePath(id: string, path: string) {
  return path + '.' + id
}


export function processProcessSpec (
  eid: string,
  spec: ProcessSpec,
  path?: string
): Graph {

  if (path) eid = mergePath(eid, path)

  const pid = eid + processNameSuffix

  const process: Process = {
    id: pid,
    procedure: spec.do
  }

  const graph: Graph = {
    entities: [] as Entity[],
    processes: [process],
    arcs: [{
      process: pid,
      entity: eid
    }]
  }

  if (spec.autostart) {
    process.autostart = spec.autostart
  }

  if (spec.async) {
    process.async = spec.async
  }

  if (spec.meta) {
    process.meta = spec.meta
  }

  if (spec.vals) {
    process.ports = {} as Ports

    for (let portId in spec.vals) {
      const port = parseValsString(spec.vals[portId])
      process.ports[portId] = port.type
      if (port.eid) {

        if (path && port.eid.indexOf('#') === 0 ) {
          port.eid = mergePath(port.eid.substr(1), path)
        }

        graph.arcs.push({
          entity: port.eid,
          process: pid,
          port: portId
        })
      }
    }
  }

  return graph
}


function newGraph(): Graph {
  return {
    entities: [],
    processes: [],
    arcs: []
  }
}


function mergeGraphs(g1: Graph, g2: Graph): Graph {
  return {
    entities: g1.entities.concat(g2.entities),
    processes: g1.processes.concat(g2.processes),
    arcs: g1.arcs.concat(g2.arcs)
  }
}


export function processEntitySpec (
  eid: string,
  spec: EntitySpec,
  path?: string
): Graph {

  let graph = newGraph()

  const id = path ? mergePath(eid, path): eid

  const entity: Entity = { id }

  if (spec.value) {
    entity.value = spec.value
  }

  if (spec.json) {
    entity.json = spec.json
  }

  if (spec.isEvent) {
    entity.isEvent = spec.isEvent
  }

  if (spec.meta) {
    entity.meta = spec.meta
  }

  if (spec.stream) {
    graph = mergeGraphs(graph, processProcessSpec(eid, spec.stream, path))
  }

  graph.entities.push(entity)

  return graph
}


export function toGraph (spec: Spec, path?: string): Graph {
  return Object.keys(spec)
    .map(id => processEntitySpec(id, spec[id], path))
    .reduce(mergeGraphs, newGraph())
}