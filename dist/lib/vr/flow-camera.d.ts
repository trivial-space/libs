import { EntityRef } from 'tvs-flow/dist/lib/utils/entity-reference';
export declare function makePerspective(canvasSize: EntityRef<{
    width: number;
    height: number;
}>): {
    fovy: any;
    aspect: any;
    near: any;
    far: any;
    perspective: any;
};
export declare function makeFirstPersonView(): {
    position: any;
    yaw: any;
    pitch: any;
    yawQuat: any;
    pitchQuat: any;
    rotationQuat: any;
    view: any;
};
