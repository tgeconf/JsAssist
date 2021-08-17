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
        const color = [];
        const rgb = [];
        hex = hex.replace(/#/, "");
        if (hex.length === 3) {
            const tmp = [];
            for (let i = 0; i < 3; i++) {
                tmp.push(hex.charAt(i) + hex.charAt(i));
            }
            hex = tmp.join("");
        }
        for (let i = 0; i < 3; i++) {
            color[i] = "0x" + hex.substr(i * 2, 2);
            rgb.push(parseInt(`${Number(color[i])}`, 10));
        }
        return rgb;
    },
    /**
     * rgb to hex
     * @param rgb {String} // rgb(r, g, b)
     * @return {String}
     */
    rgbToHex: (rgb) => {
        const color = rgb.toString().match(/\d+/g);
        let hex = "#";
        for (let i = 0; i < 3; i++) {
            hex += ("0" + Number(color[i]).toString(16)).slice(-2);
        }
        return hex;
    }
};
