const _rnds = new Array(16);
function _rng() {
    for (let i = 0, r; i < 16; i++) {
        if ((i & 0x03) === 0) {
            r = Math.random() * 0x100000000;
            _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
        }
    }
    return _rnds;
}
const _byteToHex = [];
const _hexToByte = {};
for (let i = 0; i < 256; i++) {
    _byteToHex[i] = (i + 0x100).toString(16).substr(1);
    _hexToByte[_byteToHex[i]] = i;
}
function unparse(buf) {
    const bth = _byteToHex;
    let i = 0;
    return bth[buf[i++]] + bth[buf[i++]] +
        bth[buf[i++]] + bth[buf[i++]] + '-' +
        bth[buf[i++]] + bth[buf[i++]] + '-' +
        bth[buf[i++]] + bth[buf[i++]] + '-' +
        bth[buf[i++]] + bth[buf[i++]] + '-' +
        bth[buf[i++]] + bth[buf[i++]] +
        bth[buf[i++]] + bth[buf[i++]] +
        bth[buf[i++]] + bth[buf[i++]];
}
export function v4() {
    const rnds = _rng();
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;
    return unparse(rnds);
}
//# sourceMappingURL=uuid.js.map