//     uuid.js
//
//     Copyright (c) 2010-2012 Robert Kieffer
//     MIT License - http://opensource.org/licenses/mit-license.php
const _rnds = new Array(16);
function _rng() {
    for (let i = 0, r; i < 16; i++) {
        if ((i & 0x03) === 0) {
            r = Math.random() * 0x100000000;
            _rnds[i] = (r >>> ((i & 0x03) << 3)) & 0xff;
        }
    }
    return _rnds;
}
// Maps for number <-> hex string conversion
const _byteToHex = [];
const _hexToByte = {};
for (let i = 0; i < 256; i++) {
    _byteToHex[i] = (i + 0x100).toString(16).substr(1);
    _hexToByte[_byteToHex[i]] = i;
}
// **`unparse()` - Convert UUID byte array (ala parse()) into a string**
function unparse(buf) {
    const bth = _byteToHex;
    let i = 0;
    return (bth[buf[i++]] +
        bth[buf[i++]] +
        bth[buf[i++]] +
        bth[buf[i++]] +
        '-' +
        bth[buf[i++]] +
        bth[buf[i++]] +
        '-' +
        bth[buf[i++]] +
        bth[buf[i++]] +
        '-' +
        bth[buf[i++]] +
        bth[buf[i++]] +
        '-' +
        bth[buf[i++]] +
        bth[buf[i++]] +
        bth[buf[i++]] +
        bth[buf[i++]] +
        bth[buf[i++]] +
        bth[buf[i++]]);
}
// **`v4()` - Generate random UUID**
export function v4() {
    // Deprecated - 'format' argument, as supported in v1.2
    const rnds = _rng();
    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;
    return unparse(rnds);
}
//# sourceMappingURL=uuid.js.map