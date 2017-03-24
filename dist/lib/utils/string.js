export var generateUUID = (function () {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = new Array(36);
    var rnd = 0, r = 0;
    return function () {
        var i = 0;
        while (i < 36) {
            if (i === 8 || i === 13 || i === 18 || i === 23) {
                uuid[i] = '-';
            }
            else if (i === 14) {
                uuid[i] = '4';
            }
            else {
                if (rnd <= 0x02) {
                    rnd = 0x2000000 + (Math.random() * 0x1000000) | 0;
                }
                r = rnd & 0xf;
                rnd = rnd >> 4;
                uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
            }
            i += 1;
        }
        return uuid.join('');
    };
})();
//# sourceMappingURL=string.js.map