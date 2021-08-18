"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorUtils = void 0;
exports.colorUtils = {
    /**
     * hex to rgb
     * @param hex {String}
     * @return {Array}
     */
    hexToRgb: (hex) => {
        return [
            parseInt('0x' + hex.substring(1, 3), 10),
            parseInt('0x' + hex.substring(3, 5), 10),
            parseInt('0x' + hex.substring(5, 7), 10),
        ];
    },
    /**
     * rgb to hex
     * @param rgb {String} // rgb(r, g, b)
     * @return {String}
     */
    rgbToHex: (rgb) => {
        const color = rgb.toString().match(/\d+/g);
        let hex = '#';
        for (let i = 0; i < 3; i++) {
            hex += ('0' + Number(color[i]).toString(16)).slice(-2);
        }
        return hex;
    },
};
