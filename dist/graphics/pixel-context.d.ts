import { ColorRGBA } from './colors';
export declare type Position = [number, number];
export declare function repeatedPosition([x, y]: Position, imgData: ImageData): Position;
export declare function closedPosition([x, y]: Position, imgData: ImageData): Position;
export declare function createPixelContext(adjustPos: (pos: Position, imgData: ImageData) => Position): {
    getPixelIndex: (imgData: ImageData, pos: Position) => number;
    getColorAt: (imgData: ImageData, pos: Position) => ColorRGBA;
    setColorAt: (imgData: ImageData, pos: Position, color: ColorRGBA) => void;
    increaseAllBy: (imgData: ImageData, [r, g, b, a]: ColorRGBA) => void;
    decreaseAllBy: (imgData: ImageData, [r, g, b, a]: ColorRGBA) => void;
    mixinColor: (imgData: ImageData, color: ColorRGBA) => void;
    replaceWithImageDataAt: (imgData: ImageData, imgData2: ImageData, [x, y]: Position) => void;
    drawImageAt: (imgData: ImageData, imgData2: ImageData, [x, y]: Position) => void;
};
export declare function createImgDataFromImage(img: HTMLImageElement): ImageData | undefined;
