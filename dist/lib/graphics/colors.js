var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { lerp, clamp } from '../math/core';
export var BLACK = [0, 0, 0, 255];
export var WHITE = [255, 255, 255, 255];
export function mixColors(_a, _b) {
    var r1 = _a[0], g1 = _a[1], b1 = _a[2], a1 = _a[3];
    var r2 = _b[0], g2 = _b[1], b2 = _b[2], a2 = _b[3];
    var step = a2 / 255;
    var r = Math.floor(lerp(step, r1, r2));
    var g = Math.floor(lerp(step, g1, g2));
    var b = Math.floor(lerp(step, b1, b2));
    return [r, g, b, a1];
}
export function grey(scale, alpha) {
    if (alpha == null) {
        alpha = 255;
    }
    return [scale, scale, scale, alpha];
}
export function colorRgbaToCSS(_a) {
    var r = _a[0], g = _a[1], b = _a[2], a = _a[3];
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + (a / 255) + ')';
}
export function intToFloat(color) {
    return color.map(function (v) { return v / 255; });
}
export function floatToInt(color) {
    return color.map(function (v) { return Math.floor(v * 255); });
}
export function hexToRgb(hex) {
    hex = Math.floor(hex);
    var r = (hex >> 16 & 255), g = (hex >> 8 & 255), b = (hex & 255);
    return [r, g, b];
}
export function rgbToHexString(_a) {
    var r = _a[0], g = _a[1], b = _a[2];
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
export function hexStringToRgb(s) {
    s = s.replace(/^\s*#|\s*$/g, '');
    if (s.length === 3) {
        s = s.replace(/(.)/g, '$1$1');
    }
    return hexToRgb(parseInt(s, 16));
}
export function rgbToHSL(_a) {
    var r = _a[0], g = _a[1], b = _a[2];
    var cMax = Math.max(r, g, b);
    var cMin = Math.min(r, g, b);
    var delta = cMax - cMin;
    var l = (cMax + cMin) / 2;
    var h = 0, s = 0;
    if (delta === 0) {
        h = 0;
    }
    else if (cMax === r) {
        h = (((g - b) / delta) % 6) / 6;
    }
    else if (cMax === g) {
        h = (((b - r) / delta) + 2) / 6;
    }
    else {
        h = (((r - g) / delta) + 4) / 6;
    }
    if (delta === 0) {
        s = 0;
    }
    else {
        s = (delta / (1 - Math.abs(2 * l - 1)));
    }
    return {
        h: adjustHue(h),
        s: s,
        l: l
    };
}
export function hslToRGB(_a) {
    var h = _a.h, s = _a.s, l = _a.l;
    var c = (1 - Math.abs(2 * l - 1)) * s;
    var x = c * (1 - Math.abs((h * 6) % 2 - 1));
    var m = l - c / 2;
    var r, g, b;
    if (h < 1 / 6) {
        r = c;
        g = x;
        b = 0;
    }
    else if (h < 2 / 6) {
        r = x;
        g = c;
        b = 0;
    }
    else if (h < 0.5) {
        r = 0;
        g = c;
        b = x;
    }
    else if (h < 4 / 6) {
        r = 0;
        g = x;
        b = c;
    }
    else if (h < 5 / 6) {
        r = x;
        g = 0;
        b = c;
    }
    else {
        r = c;
        g = 0;
        b = x;
    }
    r = clamp(0, 1, r + m);
    g = clamp(0, 1, g + m);
    b = clamp(0, 1, b + m);
    return [r, g, b];
}
export function adjustHue(hue) {
    if (hue >= 1) {
        return hue - 1;
    }
    if (hue < 0) {
        return hue + 1;
    }
    return hue;
}
export function updateHue(hsl, degree) {
    return __assign({}, hsl, { h: adjustHue(hsl.h + degree) });
}
export function updateSaturation(hsl, delta) {
    return __assign({}, hsl, { s: clamp(0, 1, hsl.s + delta) });
}
export function updateLightness(hsl, delta) {
    return __assign({}, hsl, { l: clamp(0, 1, hsl.l + delta) });
}
//# sourceMappingURL=colors.js.map