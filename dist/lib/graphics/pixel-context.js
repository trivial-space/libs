import { mixColors } from './colors';
export function repeatedPosition(_a, imgData) {
    var x = _a[0], y = _a[1];
    var w = imgData.width;
    var h = imgData.height;
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
export function closedPosition(_a, imgData) {
    var x = _a[0], y = _a[1];
    var w = imgData.width;
    var h = imgData.height;
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
        var _a = adjustPos(pos, imgData), x = _a[0], y = _a[1];
        return (y * imgData.height + x) * 4;
    }
    function getColorAt(imgData, pos) {
        var i = getPixelIndex(imgData, pos);
        return [
            imgData.data[i],
            imgData.data[i + 1],
            imgData.data[i + 2],
            imgData.data[i + 3]
        ];
    }
    function setColorAt(imgData, pos, color) {
        var i = getPixelIndex(imgData, pos);
        imgData.data[i] = color[0];
        imgData.data[i + 1] = color[1];
        imgData.data[i + 2] = color[2];
        imgData.data[i + 3] = color[3];
    }
    function increaseAllBy(imgData, _a) {
        var r = _a[0], g = _a[1], b = _a[2], a = _a[3];
        var d = imgData.data;
        for (var i = 0; i < d.length; i += 4) {
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
    function decreaseAllBy(imgData, _a) {
        var r = _a[0], g = _a[1], b = _a[2], a = _a[3];
        var d = imgData.data;
        for (var i = 0; i <= d.length; i += 4) {
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
        for (var x = 0; x < imgData.width; x++) {
            for (var y = 0; x < imgData.height; y++) {
                setColorAt(imgData, [x, y], mixColors(getColorAt(imgData, [x, y]), color));
            }
        }
    }
    function replaceWithImageDataAt(imgData, imgData2, _a) {
        var x = _a[0], y = _a[1];
        var w = imgData2.width - 1;
        var h = imgData2.height - 1;
        for (var j = 0; j < h; j++) {
            for (var i = 0; i < w; i++) {
                setColorAt(imgData, [x + i, y + j], getColorAt(imgData2, [i, j]));
            }
        }
    }
    function drawImageAt(imgData, imgData2, _a) {
        var x = _a[0], y = _a[1];
        var w = imgData2.width - 1;
        var h = imgData2.height - 1;
        for (var j = 0; j < h; j++) {
            for (var i = 0; i < w; i++) {
                setColorAt(imgData, [x + i, y + j], mixColors(getColorAt(imgData, [x + i, y + j]), getColorAt(imgData2, [i, j])));
            }
        }
    }
    return {
        getPixelIndex: getPixelIndex,
        getColorAt: getColorAt,
        setColorAt: setColorAt,
        increaseAllBy: increaseAllBy,
        decreaseAllBy: decreaseAllBy,
        mixinColor: mixinColor,
        replaceWithImageDataAt: replaceWithImageDataAt,
        drawImageAt: drawImageAt
    };
}
export function createImgDataFromImage(img) {
    var c = document.createElement('canvas');
    c.width = img.width;
    c.height = img.height;
    var ctx = c.getContext('2d');
    if (ctx) {
        ctx.drawImage(img, 0, 0, img.width, img.height);
        return ctx.getImageData(0, 0, img.width, img.height);
    }
}
//# sourceMappingURL=pixel-context.js.map