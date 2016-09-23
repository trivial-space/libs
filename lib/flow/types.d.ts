export declare type Meta = {
    [m: string]: any;
};
export interface Entity {
    id?: string;
    value?: any;
    json?: string;
    isEvent?: boolean;
    meta?: Meta;
}
export declare type PortType = "HOT" | "COLD" | "ACCUMULATOR";
export declare type Ports = {
    [portId: string]: PortType;
};
export declare type Procedure = (ports: {
    [portId: string]: any;
}, send?: (val: any) => void) => () => void | void;
export interface Process {
    id?: string;
    ports?: Ports;
    procedure?: Procedure;
    code?: string;
    autostart?: boolean;
    async?: boolean;
    meta?: Meta;
}
export interface Arc {
    id?: string;
    entity: string;
    process: string;
    port?: string;
    meta?: Meta;
}
export interface Graph {
    entities: Entity[];
    processes: Process[];
    arcs: Arc[];
}
