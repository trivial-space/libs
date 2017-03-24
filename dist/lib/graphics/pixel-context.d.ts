export declare type Position = [number, number];
export declare function repeatedPosition([x, y]: Position, imgData: ImageData): Position;
export declare function closedPosition([x, y]: Position, imgData: ImageData): Position;
export declare function createPixelContext(adjustPos: (pos: Position, imgData: ImageData) => Position): {
    getPixelIndex: (imgData: ImageData, pos: [number, number]) => number;
    getColorAt: (imgData: ImageData, pos: [number, number]) => [number, number, number, number];
    setColorAt: (imgData: ImageData, pos: [number, number], color: [number, number, number, number]) => void;
    increaseAllBy: (imgData: ImageData, [r, g, b, a]: [number, number, number, number]) => void;
    decreaseAllBy: (imgData: ImageData, [r, g, b, a]: [number, number, number, number]) => void;
    mixinColor: (imgData: ImageData, color: [number, number, number, number]) => void;
    replaceWithImageDataAt: (imgData: ImageData, imgData2: ImageData, [x, y]: [number, number]) => void;
    drawImageAt: (imgData: ImageData, imgData2: ImageData, [x, y]: [number, number]) => void;
};
export declare function createImgDataFromImage(img: HTMLImageElement): ImageData | undefined;
