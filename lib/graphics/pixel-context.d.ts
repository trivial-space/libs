export declare type Position = [number, number];
export declare function repeatedPosition([x, y]: Position, imgData: ImageData): Position;
export declare function closedPosition([x, y]: Position, imgData: ImageData): Position;
export declare function createImgDataFromImage(img: HTMLImageElement): ImageData;
