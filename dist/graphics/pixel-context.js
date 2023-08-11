import { mixColors } from './colors.js';
export function repeatedPosition([x, y], imgData) {
    const w = imgData.width;
    const h = imgData.height;
    if (x >= w) {
        x -= w;
    }
    if (y >= h) {
        y -= h;
    }
    if (x < 0) {
        x += w;
    }
    if (y < 0) {
        y += h;
    }
    return [x, y];
}
export function closedPosition([x, y], imgData) {
    const w = imgData.width;
    const h = imgData.height;
    if (x < 0) {
        x = 0;
    }
    if (y < 0) {
        y = 0;
    }
    if (x >= w) {
        x = w;
    }
    if (y >= h) {
        y = h;
    }
    return [x, y];
}
export function createPixelContext(adjustPos) {
    adjustPos = adjustPos || closedPosition;
    function getPixelIndex(imgData, pos) {
        const [x, y] = adjustPos(pos, imgData);
        return (y * imgData.height + x) * 4;
    }
    function getColorAt(imgData, pos) {
        const i = getPixelIndex(imgData, pos);
        return [
            imgData.data[i],
            imgData.data[i + 1],
            imgData.data[i + 2],
            imgData.data[i + 3],
        ];
    }
    function setColorAt(imgData, pos, color) {
        const i = getPixelIndex(imgData, pos);
        imgData.data[i] = color[0];
        imgData.data[i + 1] = color[1];
        imgData.data[i + 2] = color[2];
        imgData.data[i + 3] = color[3];
    }
    function increaseAllBy(imgData, [r, g, b, a]) {
        const d = imgData.data;
        for (let i = 0; i < d.length; i += 4) {
            if (d[i] + r < 256) {
                d[i] += r;
            }
            if (d[i + 1] + g < 256) {
                d[i + 1] += g;
            }
            if (d[i + 2] + b < 256) {
                d[i + 2] += b;
            }
            if (d[i + 3] + a < 256) {
                d[i + 3] += a;
            }
        }
    }
    function decreaseAllBy(imgData, [r, g, b, a]) {
        const d = imgData.data;
        for (let i = 0; i <= d.length; i += 4) {
            if (r <= d[i]) {
                d[i] -= r;
            }
            if (g <= d[i + 1]) {
                d[i + 1] -= g;
            }
            if (b <= d[i + 2]) {
                d[i + 2] -= b;
            }
            if (a <= d[i + 3]) {
                d[i + 3] -= a;
            }
        }
    }
    function mixinColor(imgData, color) {
        for (let x = 0; x < imgData.width; x++) {
            for (let y = 0; x < imgData.height; y++) {
                setColorAt(imgData, [x, y], mixColors(getColorAt(imgData, [x, y]), color));
            }
        }
    }
    function replaceWithImageDataAt(imgData, imgData2, [x, y]) {
        const w = imgData2.width - 1;
        const h = imgData2.height - 1;
        for (let j = 0; j < h; j++) {
            for (let i = 0; i < w; i++) {
                setColorAt(imgData, [x + i, y + j], getColorAt(imgData2, [i, j]));
            }
        }
    }
    function drawImageAt(imgData, imgData2, [x, y]) {
        const w = imgData2.width - 1;
        const h = imgData2.height - 1;
        for (let j = 0; j < h; j++) {
            for (let i = 0; i < w; i++) {
                setColorAt(imgData, [x + i, y + j], mixColors(getColorAt(imgData, [x + i, y + j]), getColorAt(imgData2, [i, j])));
            }
        }
    }
    return {
        getPixelIndex,
        getColorAt,
        setColorAt,
        increaseAllBy,
        decreaseAllBy,
        mixinColor,
        replaceWithImageDataAt,
        drawImageAt,
    };
}
export function createImgDataFromImage(img) {
    const c = document.createElement('canvas');
    c.width = img.width;
    c.height = img.height;
    const ctx = c.getContext('2d');
    if (ctx) {
        ctx.drawImage(img, 0, 0, img.width, img.height);
        return ctx.getImageData(0, 0, img.width, img.height);
    }
}
//# sourceMappingURL=pixel-context.js.map